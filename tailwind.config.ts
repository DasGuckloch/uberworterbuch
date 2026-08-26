import type { Config } from 'tailwindcss';

import { COLORS } from './share/constants/colors';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components-server/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components-client/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        colors: COLORS,
        fontFamily: {
            thunder: ['Thunder'],
            'thunder-black': ['ThunderBlack'],
            'thunder-extra-bold': ['ThunderExtBd'],
        },
    },
    plugins: [],
};
export default config;
