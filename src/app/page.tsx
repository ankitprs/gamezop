import { GameItemType } from "@/components/cards/GameCard";
import { GamesContainer } from "@/components/GamesContainer";
import { getGames } from "@/data/remote/apiCaller";
import { categories } from "@/data/siteData/categories";


export default async function Home() {
  const data = await getGames()

  return (
    <div>
      {
        categories.map(category => <div key={category.route}>
          <GamesContainer route={category.route} games={data?.games.filter((game: GameItemType) => game.categories.en.includes(category.text)).slice(0, 10) ?? []} Icon={category.icon} text={category.text} isHorizontal={true} />
        </div>
        )
      }
    </div>
  );
}
