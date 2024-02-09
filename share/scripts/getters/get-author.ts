import gitUserName from 'git-user-name';

export const getAuthor = (): string | null => {
    const author = (process.argv[4] || '').trim();

    if (!!author) {
        return author;
    }

    console.log(gitUserName());

    return gitUserName() || '[AUTHOR]';
};
