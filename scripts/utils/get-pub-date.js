const dayjs = require('dayjs');

const getPubDate = () => {
    return dayjs(new Date()).format('DD/MM/YYYY HH:mm');
};

module.exports = {
    getPubDate,
};
