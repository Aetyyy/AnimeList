import AnimeList from "@/components/Home"
import { AnimeData } from "@/interfaces/animedata.i";

export default async function Page({ params }: { params: { keywords: string } }) {
  const { keywords } = params
  const res = await fetch(`${process.env.API_ANIME}/anime?q=${keywords}`);
  const searchAnime: AnimeData = await res.json();

  return (
    <>
    <section>
      <AnimeList api={searchAnime} />
    </section>
    </>
  )
}
