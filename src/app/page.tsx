import { WORDS_PER_PAGE } from '../../share/constants/word';
import { getNWords, getNextWords } from '../../share/utils/words';
import { Word } from '../components/Word';
import { MoreWords } from '../components/ui/MoreWords';
import { IWord } from '../../share/interfaces/words';

const WordArticle = (word: IWord) => {
    return (
        <article key={word.slug} className="mb-6">
            <Word word={word} />
        </article>
    );
};

const getMoreWords = async (currentWordsAmount: number) => {
    'use server';

    const { nextWords, isEnd } = await getNextWords(currentWordsAmount);

    return {
        nextWords: nextWords.map(WordArticle),
        isEnd,
    };
};

export default async function Home() {
    const nWords = await getNWords(WORDS_PER_PAGE);

    return (
        <>
            {nWords.map(WordArticle)}
            <MoreWords getMore={getMoreWords} />
        </>
    );
}
