import React from 'react'
import { GameCard, GameItemType } from './cards/GameCard'
import { IconType } from 'react-icons'
import { IoIosArrowForward } from "react-icons/io";
import Link from 'next/link';


export function GamesContainer({ games, Icon, text, route, isHorizontal = false }: { Icon: IconType, text: string, route: string, isHorizontal?: boolean, games: GameItemType[] }) {
  return (
    <div className='bg-[#222341] mx-[30px] px-[30px] mt-[20px] rounded-2xl border border-[#7375b4]'>
      <div className='flex justify-between items-center'>
        <div className='flex my-[28px]  items-center'>
          <Icon width={100} height={100} className='w-[22px] h-[22px]' />
          <p className='ml-[10px] font-bold text-[22px]'>{text}</p>
        </div>
        <Link href={`/${route}`} className={`font-bold flex text-[20px] ${isHorizontal ? "block" : "hidden"}`}>
          View All
          <div className=' rounded-full bg-[#F7CC5B] h-[30px] w-[30px] items-center justify-center flex ml-[8px]'>
            <IoIosArrowForward color='black' width={30} height={30} />
          </div>
        </Link>
      </div>
      <div className={`flex pb-[10px] overflow-x-auto w-full  ${isHorizontal ? "" : "flex-wrap"}`}>
        {
          games.map(game => <div key={game.code}>
            <GameCard gameItem={game} />
          </div>)
        }
      </div>
    </div >
  )
}
