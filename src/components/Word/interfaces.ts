import { IWord } from '../../../share/interfaces/words';

export interface IWordProps {
    readonly word: IWord;
    readonly language?: string;
    readonly languageText?: string;
}
