import { dayjs } from '../utils/dayjs.js';

export const getPubDate = () => {
    return dayjs(new Date()).format('DD/MM/YYYY HH:mm');
};
