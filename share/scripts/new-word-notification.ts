import { sendTelegramNewWordMessage } from './telegram';
import { sendTwitterNewWordMessage } from './twitter';
import { getWord } from '../utils/words';
import { WORDS_FILE_EXTENSION, WORDS_FOLDER_NAME } from '../constants/word';

const args = process.argv;
const slugs = args
    .slice(2)
    .map(
        (newWordPath) =>
            newWordPath
                .split(`${WORDS_FOLDER_NAME}/`)[1]
                .split(`.${WORDS_FILE_EXTENSION}`)[0]
    );

(async () => {
    if (!slugs.length) {
        console.info('There are no new words.');
    }

    const words = await Promise.all(slugs.map(async (slug) => getWord(slug)));

    await sendTelegramNewWordMessage(words);
    await sendTwitterNewWordMessage(words);
})();
