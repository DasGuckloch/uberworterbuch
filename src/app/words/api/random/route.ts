import { getRandomWord } from "../../../../utils/words";

export const dynamic = "force-dynamic";

export async function GET() {
    const { slug } = await getRandomWord();
    return Response.json({ slug });
}
