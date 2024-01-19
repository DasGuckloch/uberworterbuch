import { ImageResponse } from 'next/og';

import { RouteEnum } from '../../../../enums/route';
import { METADATA, OG_IMAGE_LOGO_URL } from '../../../../constants/metadata';

export const runtime = 'edge';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');

    if (!slug) {
        return;
    }

    const { word } = await (
        await fetch(
            `${METADATA.domain}/${RouteEnum.WORDS}/api/word?slug=${slug}`
        )
    ).json();

    return new ImageResponse(
        (
            <div
                style={{
                    background: '#facc15',
                    lineHeight: '1',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '64',
                }}
            >
                <div
                    style={{
                        fontSize: 96,
                        borderBottom: '7px',
                        color: '#f87171',
                        marginBottom: '10',
                    }}
                >
                    {word.frontmatter.title}
                </div>
                <div
                    style={{
                        display: 'flex',
                        marginTop: 'auto',
                    }}
                >
                    <div
                        style={{
                            fontSize: 32,
                            color: '#000000',
                            paddingRight: '24px',
                            alignItems: 'flex-end',
                        }}
                    >
                        {word.frontmatter.description}
                    </div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        width="120"
                        height="120"
                        style={{ marginLeft: 'auto' }}
                        src={OG_IMAGE_LOGO_URL}
                        alt={`${METADATA.title} logo`}
                    />
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 600,
        }
    );
}
