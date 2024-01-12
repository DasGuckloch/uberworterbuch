import { compileMDX } from "next-mdx-remote/rsc";
import { IWordProps } from "./interfaces";
import { promises as fs } from "fs";
import path from "path";

export default async function IWordProps({ params }: IWordProps) {
    const wordPath = path.join(process.cwd(), "words", `${params.word}.mdx`);
    const markdown = await fs.readFile(wordPath, "utf8");

    const { frontmatter, content } = await compileMDX({
        source: markdown,
        options: { parseFrontmatter: true },
    });

    return content;
}
