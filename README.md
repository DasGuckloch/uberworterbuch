# Überwörterbuch

<p align="center">
  <a href="https://www.uberworterbuch.de/" target="_blank"><img src="https://github.com/DasGuckloch/uberworterbuch/blob/main/images/social_gh.png?raw=true" alt="Überwörterbuch logo" width="480" /></a>
</p>
<p align="center">
    <b>Das urbanste deutsche Wörterbuch!</b>
</p>

## Word

`word` is the main entity of the project. All `words` are located in the directory `/words` and have `.mdx` extension. Every word has metainformation (_frontmatter_). Full list of attributes is [here](https://github.com/DasGuckloch/uberworterbuch/blob/main/share/interfaces/words.ts#L3).

## Adding words

We are really appreciate your participant of making **Überwörterbuch** event better :heart:

### Automatic (recommended)

1. Run npm-script `npm run file-from-word "[YOUR_WORD]" "OPTIONAL_DESCRIPTION" "OPTIONAL_AUTHOR"`
    - it will create a file in the `words` directory and fill four metainformation (_frontmatter_) attributes out;
    - `title` is provided word by you;
    - `description` is provided description by you or placeholder `[DESCRIPTION]` that should be changed;
    - `pubDate` is current date and time;
    - `author` is provided name by you or your user's name from git config
2. Consider adding other attributes (full list of attributes is [here](https://github.com/DasGuckloch/uberworterbuch/blob/main/share/interfaces/words.ts#L3)).
3. Consider adding _content_ part of the `.mdx` file (the part after two `---`) with examples (please, use _italics_) and a long description (please, use blockquote).
4. Send a pull-request to the `main` branch of the project's repository and the word will appear on the website after merging!

### Manual

1. Create `.mdx` file in the `words` directory.
    - the file name matters; it will be part of the url (_slug_);
    - use the word title as the basis for the file name;
    - please, don't use umlauts in the file name;
    - consider using `npm run filename-from-word "[YOUR_WORD]"` script (e.g. `npm run filename-from-word "Überwörterbuch"` => `uberworterbuch`), it will result in lowercase, replace umlauts and change spaces to dashes;
2. There is a metainformation (_frontmatter_) vertically between the two `---` (full list of attributes is [here](https://github.com/DasGuckloch/uberworterbuch/blob/main/share/interfaces/words.ts#L3)).
3. Consider using _content_ part of the `.mdx` file (the part after two `---`) for examples (please, use _italics_) and a long description (please, use blockquote).
4. Send a pull-request to the `main` branch of the project's repository and the word will appear on the website after merging!

## Adding video to word

There is a `video` attribute of the word which accepts a `src` attribute of the YouTube iframe video code.

Please, use [this instruction](https://support.google.com/youtube/answer/171780) to get the `src`. Please, turn on controls, start time and confidence link in the settings of the YouTube sharing. Than copy the `src` attribute from the iframe code and add it to the `video` attribute of the word.

> You can try to find a relevant video for the word in [YouGlish](https://youglish.com/german).
