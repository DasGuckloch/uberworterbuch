import type { Config } from 'tailwindcss';

import { COLORS } from './share/constants/colors';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        colors: COLORS,
    },
    plugins: [],
};
export default config;
