import { notFound } from 'next/navigation';
import OpenAI from 'openai';

import { LANGUAGES } from '../constants/languages';
import { CONFIG } from '../config';

import { getWord } from './words';
import { getYourLanguageText } from './firebase/getters';
import { setYourLanguageText } from './firebase/setters';
import { IWord } from '../interfaces/words';

export const getYourLanguageWordText = async (
    language: string,
    slug: string,
    title: string
): Promise<{ word: IWord; text: string }> => {
    if (
        !Object.values(LANGUAGES).some(
            ({ name }) => name.toLowerCase() === language
        )
    ) {
        return notFound();
    }

    const word = await getWord(slug);

    const text = await getYourLanguageText(language, slug);

    if (!!text) {
        return {
            word,
            text,
        };
    }

    const openai = new OpenAI({ apiKey: CONFIG.openai.apiKey });

    const completion = await openai.chat.completions.create(
        {
            model: 'gpt-4-turbo-preview',
            messages: [
                {
                    role: 'system',
                    content: `You are a helpful AI assistant, with expertise in ${language} proverbs and slang.`,
                },
                {
                    role: 'user',
                    content: `
You will get a german proverb or slang in German language.
Proverb or Slang: ${title}.
Try to understand its meaning in German language and answer me with the most suitable and similar proverb or slang in ${language} language. 
Add more details. 
You can speak ONLY ${language} language.
`,
                },
            ],
            temperature: 0.00000001,
        },
        { timeout: 60000 * 5, maxRetries: 5 }
    );

    const openaiText = completion.choices[0].message.content || '';

    await setYourLanguageText(language, slug, openaiText);

    return { word, text: openaiText };
};
