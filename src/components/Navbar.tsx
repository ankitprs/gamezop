"use client"
import Image from 'next/image'
import { FaSearch } from "react-icons/fa";
import { MdClear } from "react-icons/md";
import { CategoryCard } from './cards/CategoryCard';
import React, { useState } from 'react'
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { useQuery } from '@tanstack/react-query';
import { REACT_QUERY_GAMES } from '@/utils/Constants';
import { getGames } from '@/data/remote/apiCaller';
import { GameItemType } from './cards/GameCard';
import { categories } from '@/data/siteData/categories';


export function Navbar() {
  const params = useParams()
  const [isSearching, setIsSearching] = useState(false)
  const [searchKeyword, setSearchKeyword] = useState("")

  const { data } = useQuery({
    queryKey: [REACT_QUERY_GAMES],
    queryFn: getGames
  });


  return (
    <div className='sticky top-0 w-full bg-[#25284C] flex flex-col items-center  px-[30px]'>
      <div className='flex justify-between h-[80px] w-full items-center max-w-[1300px]'>
        <Link href={"/"}>
          <Image className='w-fit h-fit' src={"/images/logo.avif"} alt='logo' width={100} height={100} />
        </Link>
        <div className={`bg-[#151823] flex-1 ml-[20px] ${isSearching ? "visible" : "invisible"}`}>
          <CommandDialog open={isSearching} onOpenChange={() => setIsSearching(e => !e)}
          >
            <div className='bg-[#191A32]  border-[0px]'>
              <CommandInput placeholder="Type a command or search..." onValueChange={value => setSearchKeyword(value)} value={searchKeyword} />
              <CommandList className=''>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                  {
                    data?.games.filter((game: GameItemType) => game.name.en.toLowerCase().includes(searchKeyword.toLowerCase())).map((game: GameItemType) => <CommandItem key={game.code} >
                      <Link href={game.url} className='flex items-center w-full h-full'>
                        <Image className='w-[50px] h-[50px] mr-[10px]' src={game.assets.thumb} alt='game icon' width={188} height={188} />
                        <div className='flex flex-col'>
                          <p className=' font-bold '>{game.name.en}</p>
                          <p className='text-[12px] tracking-tighter	'>in {game.categories.en}</p>
                        </div>
                      </Link>
                    </CommandItem>
                    )
                  }
                </CommandGroup>
              </CommandList>
            </div>
          </CommandDialog>
        </div>
        <div onClick={() => setIsSearching(e => !e)} className='bg-[#151823] rounded-full p-[8px] cursor-pointer'>
          {isSearching ? <MdClear /> : <FaSearch />}
        </div>
      </div>
      <div className='flex pb-[10px] overflow-x-auto w-full lg:w-fit'>
        {categories.map(category => <Link href={`/${category.route}`} key={category.route}>
          <CategoryCard category={category} isSelected={params?.category == category.route} />
        </Link>)
        }
      </div>
    </div>
  )
}

