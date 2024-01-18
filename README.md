# [Überwörterbuch](https://www.uberworterbuch.de/)

<p align="center">
  <a href="https://www.uberworterbuch.de/" target="_blank"><img src="https://github.com/DasGuckloch/uberworterbuch/blob/main/images/social_gh.png?raw=true" alt="Überwörterbuch logo" /></a>
</p>
<p align="center">
    <b>Das urbanste deutsche Wörterbuch!</b>
</p>

## Adding words

1. Create `.mdx` file in the `words` directory.
    - the file name matters; it will be part of the url (*slug*);
    - use the word title as the basis for the file name;
    - please, don't use umlauts in the file name;
    - consider using `npm run transform-to-file-name` script (e.g. `npm run transform-to-file-name Überwörterbuch` => `uberworterbuch`), it will result in lowercase, replace umlauts and change spaces to dashes;
2. There is metainformation (*frontmatter*) vertically between the two `---` and all four attributes (*title*, *description*, *pubDate*, *author*) are **required**.
    - `title` is a word name;
    - `description` is a short description of the main essence of the word;
    - `pubDate` is a static publication date; it should be aligned with file creation date and time; the format of the date is: `DD/MM/YYYY HH:mm`;
    - `author` is a name of the author of the word (*it's you!*);
3. Consider using *content* part of the `.mdx` file (the part after two `---`) for examples (please, use *italics*) and long description (please, use blockquote).
4. Send pull-request to the `main` branch of the project's repository and after merge the word will appear on the website!

We are really appreciate your participant of making **Überwörterbuch** event better :heart: