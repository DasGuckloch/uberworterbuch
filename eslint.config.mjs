import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import importPlugin from 'eslint-plugin-import';

// `eslint-config-next` already registers `eslint-plugin-import`, so the
// `import/typescript` preset is applied as settings instead of re-registering it.
const { settings: importTypescriptSettings } = importPlugin.flatConfigs.typescript;

const config = [
    {
        ignores: ['.next/**', 'node_modules/**', 'next-env.d.ts'],
    },
    ...nextCoreWebVitals,
    {
        settings: importTypescriptSettings,
        rules: {
            'import/order': [
                1,
                {
                    groups: [
                        'builtin',
                        'type',
                        'external',
                        'parent',
                        'sibling',
                        'index',
                    ],
                    'newlines-between': 'always',
                },
            ],
        },
    },
];

export default config;
