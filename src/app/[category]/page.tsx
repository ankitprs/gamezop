import { GameItemType } from '@/components/cards/GameCard'
import { GamesContainer } from '@/components/GamesContainer'
import { getGames } from '@/data/remote/apiCaller'
import { categories } from '@/data/siteData/categories'
import React from 'react'


async function GamesCategory({ params }: { params: { category: string } }) {
  const data = await getGames()
  const currentRoute = categories.find(value => value.route == params.category)

  return (
    <div className="">
      {currentRoute != undefined ? <GamesContainer route={currentRoute.route} games={data?.games.filter((game: GameItemType) => game.categories.en.includes(currentRoute.text)) ?? []} Icon={currentRoute.icon} text={currentRoute.text} /> : <></>}
    </div>
  )
}

export default GamesCategory