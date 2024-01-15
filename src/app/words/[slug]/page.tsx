import { IWordProps } from "./interfaces";
import { Word } from "../../../components/Word";
import { getWord } from "../../../utils/words";

export default async function IWordProps({ params }: IWordProps) {
    const word = await getWord(params.slug);

    return <Word word={word} />;
}
