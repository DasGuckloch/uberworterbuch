const getDescription = () => {
    return (process.argv[3] || '').trim();
};

module.exports = { getDescription };