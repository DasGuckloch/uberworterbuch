const env = process.env;

export const CONFIG = {
    telegram: {
        botToken: env['TELEGRAM_BOT_TOKEN'],
        channelId: env['TELEGRAM_CHANNEL_ID'],
    },
    twitter: {
        clientAppKey: env['TWITTER_CLIENT_APP_KEY'],
        clientAppSecret: env['TWITTER_CLIENT_APP_SECRET'],
        clientAccessToken: env['TWITTER_CLIENT_ACCESS_TOKEN'],
        clientAccessSecret: env['TWITTER_CLIENT_ACCESS_SECRET'],
    },
    reddit: {
        userAgent: env['REDDIT_USER_AGENT'],
        clientId: env['REDDIT_CLIENT_ID'],
        clientSecret: env['REDDIT_CLIENT_SECRET'],
        username: env['REDDIT_USERNAME'],
        password: env['REDDIT_PASSWORD'],
    },
};
