import { NextRequest } from 'next/server';
import { OpenAI } from 'openai';

import { getYourLanguageText } from '../../../../firebase/getters';
import { setYourLanguageText } from '../../../../firebase/setters';
import { CONFIG } from '../../../../../share/config';
import { LANGUAGES } from '../../../../../share/constants/languages';
import { getWord } from '../../../../../share/utils/words';

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;

    const language = searchParams.get('language') || '';
    const slug = searchParams.get('slug') || '';
    const title = searchParams.get('title') || '';

    if (!Object.values(LANGUAGES).some(({ name }) => name.includes(language))) {
        return new Response(null, {
            status: 400,
            statusText: 'There is no such language',
        });
    }

    await getWord(slug);

    const text = await getYourLanguageText(language, slug);

    if (!text) {
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

        return Response.json({
            text: openaiText,
        });
    }

    return Response.json({
        text,
    });
}
