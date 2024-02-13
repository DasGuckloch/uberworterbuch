import { getAllWords } from '../utils/words';
import { dayjs } from '../utils/dayjs';
import { DATE_FORMAT_MDX } from '../constants/date';
import { sortWordsIncreasePubDate } from '../utils/sorts';

import { sendTelegramWeeklyNewWordsMessage } from './telegram';

(async () => {
    const oneWeekAgoDate = dayjs().subtract(7, 'day');

    const words = (await getAllWords())
        .filter(({ frontmatter }) =>
            dayjs(frontmatter.pubDate, DATE_FORMAT_MDX).isAfter(oneWeekAgoDate)
        )
        .sort(sortWordsIncreasePubDate);

    if (!words.length) {
        console.info('There were no new words.');
        return;
    }

    await sendTelegramWeeklyNewWordsMessage(words);
})();
