import { Word } from "../components/Word";
import { getNlastWords } from "../utils/words";

export default async function Home() {
    const lastWords = await getNlastWords(5);

    return (
        <>
            {lastWords.map((word) => (
                <div key={word.slug} className="mb-6">
                    <Word word={word} />
                </div>
            ))}
        </>
    );
}
