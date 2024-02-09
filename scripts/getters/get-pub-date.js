import dayjs from 'dayjs';

export const getPubDate = () => {
    return dayjs(new Date()).format('DD/MM/YYYY HH:mm');
};
