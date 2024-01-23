import { Word } from '../components/Word';
import { getNlastWords } from '../utils/words';

export default async function Home() {
    const lastWords = await getNlastWords(10);

    return (
        <>
            {lastWords.map((word) => (
                <article key={word.slug} className="mb-6">
                    <Word word={word} />
                </article>
            ))}
        </>
    );
}
