import { sendTelegramNewWordMessage } from './telegram/index.js';
import { sendTwitterNewWordMessage } from './twitter/index.js';
import { compileWordMarkdown, getWordMarkdown } from './utils/words.js';

const args = process.argv;
const newWordPaths = args.slice(2);

(async () => {
    const markdowns = await Promise.all(
        newWordPaths.map(async (path) => getWordMarkdown(path))
    );
    const words = await Promise.all(
        markdowns.map(async (markdown) => compileWordMarkdown(markdown))
    );

    await sendTelegramNewWordMessage(words);
    await sendTwitterNewWordMessage(words);
})();
