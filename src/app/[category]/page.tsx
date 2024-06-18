"use client"
import { GameItemType } from '@/components/cards/GameCard'
import { GamesContainer } from '@/components/GamesContainer'
import { getGames } from '@/data/remote/apiCaller'
import { categories } from '@/data/siteData/categories'
import { REACT_QUERY_GAMES } from '@/utils/Constants'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import React from 'react'


function GamesCategory({ params }: { params: { category: string } }) {
  const router = useRouter()
  const { data } = useQuery({
    queryKey: [REACT_QUERY_GAMES],
    queryFn: getGames
  });

  const currentRoute = categories.find(value => value.route == params.category)

  if (currentRoute == undefined) {
    router.push('/')
  }

  return (
    <div className="">
      {currentRoute != undefined ? <GamesContainer route={currentRoute.route} games={data?.games.filter((game: GameItemType) => game.categories.en.includes(currentRoute.text)) ?? []} Icon={currentRoute.icon} text={currentRoute.text} /> : <></>}
    </div>
  )
}

export default GamesCategory