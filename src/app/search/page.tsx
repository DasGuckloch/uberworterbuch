import { Search } from '../../components-client/Search';
import { getAllWords } from '../../../share/utils/words';
import { MINIMAL_SEARCH_VALUE_LENGTH } from '../../../share/constants/search';
import { WordArticle } from '../../components-server/WordArticle';

const searchWords = async (searchValue: string) => {
    'use server';

    if (searchValue.length < MINIMAL_SEARCH_VALUE_LENGTH) {
        return { words: [] };
    }

    const words = await getAllWords();

    const searchValueLowerCase = searchValue.toLowerCase();

    const searchedWords = words.filter(
        ({ frontmatter }) =>
            frontmatter.title.toLowerCase().includes(searchValueLowerCase) ||
            frontmatter.description.toLowerCase().includes(searchValueLowerCase)
    );

    return {
        words: searchedWords.map((searchedWord, index) => {
            return WordArticle(searchedWord, index, true);
        }),
    };
};

export default async function SearchPage() {
    return <Search searchWords={searchWords} />;
}
