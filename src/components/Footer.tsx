import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


export function Footer() {
  const footerList = [
    "Gamezop is a plug-and-play gaming platform that any app or website can integrate to bring casual gaming for its users. Gamezop also operates Quizzop, a quizzing platform, that digital products can add as a trivia section.",
    "Over 5,000 products from more than 70 countries have integrated Gamezop and Quizzop. These include Amazon, Samsung Internet, Snap, Tata Play, AccuWeather, Paytm, Gulf News, and Branch.",
    "Games and trivia increase user engagement significantly within all kinds of apps and websites, besides opening a new stream of advertising revenue. Gamezop and Quizzop take 30 minutes to integrate and can be used for free: both by the products integrating them and end users",
    <>If you wish to add games and trivia to your product, write to us on: <Link href={"mailto:partnerships@gamezop.com"} className='text-[#E4BC58]'>partnerships@gamezop.com</Link></>,
    <>For more information, please visit: <Link href={"https://business.gamezop.com/"} className='text-[#E4BC58]'>business.gamezop.com </Link></>,
    <><span className=' font-semibold'>{`© 2024 Advergame Technologies Pvt. Ltd. ("ATPL"). Gamezop ® & Quizzop ® are registered trademarks of ATPL.`}</span></>
  ]

  const links = [
    {
      text: "Terms of Use",
      link: "https://static.gamezop.com/legal/terms-of-use/"
    },
    {
      text: "Privacy Policy",
      link: "https://static.gamezop.com/legal/privacy/"
    },
    {
      text: "About",
      link: "https://business.gamezop.com/about-us"
    },
    {
      text: "Jobs",
      link: "https://wellfound.com/company/gamezop/jobs"
    },
    {
      text: "Partner With Us",
      link: "https://business.gamezop.com/"
    },
  ]

  return (
    <div className='bg-[#0C0D26] mt-[60px]'>
      <div className='px-[30px] flex flex-col'>
        <div className='my-[20px]'>
          <Image className='w-fit h-[22px]' src={"/images/logo.avif"} alt='logo' width={100} height={100} />
        </div>
        <hr className='h-px  border-0 bg-[#3F4380]' />
        <div className='flex flex-wrap my-[10px]'>
          {
            links.map((item) => <Link href={item.link} key={item.text} className=' underline mr-[10px] text-[10px]'>{item.text}</Link>)
          }
        </div>
        <div>
          {
            footerList.map((footerText, index) => <p key={index} className={`text-[#8789C3] text-[10px] my-[10px]`}>{footerText}</p>)
          }
        </div>
      </div>
      <hr className='h-px  border-0 bg-[#3F4380]' />
      <p className='text-[#8789C3] text-[10px] py-[16px] mx-[30px]'>Property ID: cfuucl7YgA</p>
    </div>
  )
}
