export const getTitle = () => {
    const title = (process.argv[2] || '').trim();

    if (!title) {
        console.error(
            'Please provide a word. Example: npm run [TASK_NAME] "[MY_WORD]"'
        );
        process.exit(1);
    }

    return title;
};
