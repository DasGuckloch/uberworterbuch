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
            // 'thunder-italic': ['ThunderIta'],
            // 'thunder-light': ['ThunderLight'],
            // 'thunder-light-italic': ['ThunderLightIta'],
            // 'thunder-medium': ['ThunderMed'],
            // 'thunder-medium-italic': ['ThunderMedIta'],
            // 'thunder-semi-bold': ['ThunderSemBd'],
            // 'thunder-semi-bold-italic': ['ThunderSemBdIta'],
            // 'thunder-thin': ['ThunderThin'],
            // 'thunder-thin-italic': ['ThunderThinIta'],
            // 'thunder-extra-bold-italic': ['ThunderExtBdIta'],
            // 'thunder-extra-light': ['ThunderExtLt'],
            // 'thunder-extra-light-italic': ['ThunderExtLtIta'],
        },
    },
    plugins: [],
};
export default config;
