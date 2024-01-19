const gitUserName = require('git-user-name');

const getAuthor = () => {
    const author = (process.argv[4] || '').trim();

    if (!!author) {
        return author;
    }

    return gitUserName();
};

module.exports = {
    getAuthor,
};
