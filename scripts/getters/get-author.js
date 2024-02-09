import gitUserName from 'git-user-name';

export const getAuthor = () => {
    const author = (process.argv[4] || '').trim();

    if (!!author) {
        return author;
    }

    return gitUserName();
};
