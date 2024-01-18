import { Word } from "../../../components/Word";
import { getWord } from "../../../utils/words";

import { IWordProps } from "./interfaces";

export default async function IWordProps({ params }: IWordProps) {
    const word = await getWord(params.slug);

    return <Word word={word} />;
}
