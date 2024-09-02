import AnimeList from "@/components/Home";
import { AnimeData } from "@/interfaces/animedata.i";
import Headers from "@/components/Home/Information";
import TopAnime from "@/components/Home/TopAnime";

export default async function Home() {
  "use server";
  const res = await fetch(process.env.API_ANIME + "/top/anime?limit=8");
  const topAnime: AnimeData = await res.json();
  const Information: string = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
  Tempora laborum facere, nemo beatae modi maiores sequi, 
  dolorum mollitia asperiores nobis quis aut. 
  Aliquam officia facere earum, 
  recusandae doloremque iusto quidem aperiam culpa eos voluptatem! 
  Culpa asperiores quae qui voluptas magni!`;

  return (
    <>
      <main className="transition-all">
        <section>
          <Headers title="Information" description={Information} />
        </section>
        <section>
          <TopAnime />
        </section>
        <section>
          <AnimeList api={topAnime} />
        </section>
      </main>
    </>
  );
}
