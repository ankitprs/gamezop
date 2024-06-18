import React from 'react'
import { IconType } from 'react-icons';


interface CategoryType {
  text: string;
  icon: IconType;
}

export function CategoryCard({ category, isSelected }: { category: CategoryType, isSelected: boolean }) {
  return (
    <div className={`px-[24px] py-[8px] flex items-center  mr-[10px] rounded-full  ${isSelected ? "bg-[#F7CC5B] text-black" : "bg-[#151823]"}`}>
      <div className='w-[18px] h-[18px] font-medium'>{<category.icon color={isSelected ? "#151823" : "#F7CC5B"} />}</div>
      <p className=' text-[14px] ml-[10px] truncate'>{category.text}</p>
    </div>
  )
}
