import { IWord } from '../../../share/interfaces/words';
import { Word } from '../Word';
import { Links } from '../Links';

export const WordArticle = (word: IWord, index: number, initial: boolean) => {
    const isFirst = index === 0 && initial;
    return (
        <article
            key={word.slug}
            className={`grid-cols-4 gap-6 ${isFirst ? '' : 'mb-12'}`}
        >
            <div className="col-span-3">
                <Word word={word} />
            </div>
            {isFirst && <Links />}
        </article>
    );
};
