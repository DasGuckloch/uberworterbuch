# Überwörterbuch

<p align="center">
  <a href="https://www.uberworterbuch.de/" target="_blank"><img src="https://github.com/DasGuckloch/uberworterbuch/blob/main/images/social_gh.png?raw=true" alt="Überwörterbuch logo" width="480" /></a>
</p>
<p align="center">
    <b>Das urbanste deutsche Wörterbuch!</b>
</p>

## Adding words

We are really appreciate your participant of making **Überwörterbuch** event better :heart:

### Automatic (recommended)

1. Run npm-script `npm run file-from-word "[YOUR_WORD]" "OPTIONAL_DESCRIPTION"`
    - it will create a file in the `words` directory and fill all four required attributes out;
    - `title` is provided word by you;
    - `description` is provided description by you or placeholder `[DESCRIPTION]` that should be changed;
    - `pubDate` is current date and time;
    - `author` is your user's name from git config
2. Consider adding *content* part of the `.mdx` file (the part after two `---`) with examples (please, use *italics*) and a long description (please, use blockquote).
3. Send a pull-request to the `main` branch of the project's repository and the word will appear on the website after merging!

### Manual

1. Create `.mdx` file in the `words` directory.
    - the file name matters; it will be part of the url (*slug*);
    - use the word title as the basis for the file name;
    - please, don't use umlauts in the file name;
    - consider using `npm run filename-from-word "[YOUR_WORD]"` script (e.g. `npm run filename-from-word "Überwörterbuch"` => `uberworterbuch`), it will result in lowercase, replace umlauts and change spaces to dashes;
2. There is metainformation (*frontmatter*) vertically between the two `---` and all four attributes (*title*, *description*, *pubDate*, *author*) are **required**.
    - `title` is a word name;
    - `description` is a short description of the main essence of the word;
    - `pubDate` is a static publication date; it should be aligned with file creation date and time; the format of the date is: `DD/MM/YYYY HH:mm`;
    - `author` is a name of the author of the word (*it's you!*);
3. Consider using *content* part of the `.mdx` file (the part after two `---`) for examples (please, use *italics*) and a long description (please, use blockquote).
4. Send a pull-request to the `main` branch of the project's repository and the word will appear on the website after merging!