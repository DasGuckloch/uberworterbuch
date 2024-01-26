import dayjs from 'dayjs';

export const getPubDate = (): string => {
    return dayjs(new Date()).format('DD/MM/YYYY HH:mm');
};
