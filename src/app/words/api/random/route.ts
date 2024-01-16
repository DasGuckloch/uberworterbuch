import { getRandomWord } from "../../../../utils/words";

export async function GET() {
    const { slug } = await getRandomWord();
    return Response.json({ slug });
}
