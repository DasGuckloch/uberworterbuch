import { NextRequest } from 'next/server';
import { OpenAI } from 'openai';

import { getYourLanguageText } from '../../../../firebase/getters';
import { setYourLanguageText } from '../../../../firebase/setters';
import { CONFIG } from '../../../../../share/config';

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;

    const language = searchParams.get('language') || '';
    const slug = searchParams.get('slug') || '';
    const title = searchParams.get('title') || '';

    const text = await getYourLanguageText(language, slug);

    if (!text) {
        const openai = new OpenAI({ apiKey: CONFIG.openai.apiKey });

        console.log(
            `Give me a ${language} analog of the German expression '${title}'. Answer in ${language}.`
        );

        const completion = await openai.chat.completions.create(
            {
                model: 'gpt-3.5-turbo-0125',
                messages: [
                    {
                        role: 'system',
                        content:
                            'You are a helpful AI assistant, with expertise in machine learning systems.',
                    },
                    {
                        role: 'user',
                        content: `Give me a ${language} analog of the German expression '${title}'. Answer in ${language}.`,
                    },
                ],
                temperature: 0,
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
