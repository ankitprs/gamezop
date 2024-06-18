"use client"
import { GameItemType } from "@/components/cards/GameCard";
import { GamesContainer } from "@/components/GamesContainer";
import { getGames } from "@/data/remote/apiCaller";
import { categories } from "@/data/siteData/categories";
import { REACT_QUERY_GAMES } from "@/utils/Constants";
import { useQuery } from "@tanstack/react-query";


export default function Home() {
  const { data } = useQuery({
    queryKey: [REACT_QUERY_GAMES],
    queryFn: getGames
  });

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
