import { WORDS_PER_PAGE } from '../../share/constants/word';
import { getNWords, getNextWords } from '../../share/utils/words';
import { MoreWords } from '../components-client/MoreWords';
import { WordArticle } from '../components-server/WordArticle';

const getMoreWords = async (currentWordsAmount: number) => {
    'use server';

    const { nextWords, isEnd } = await getNextWords(currentWordsAmount);

    return {
        nextWords: nextWords.map((word, index) => {
            return WordArticle(word, index, false);
        }),
        isEnd,
    };
};

export default async function Home() {
    const nWords = await getNWords(WORDS_PER_PAGE);

    return (
        <>
            {nWords.map((word, index) => {
                return WordArticle(word, index, true);
            })}
            <MoreWords getMore={getMoreWords} />
        </>
    );
}
