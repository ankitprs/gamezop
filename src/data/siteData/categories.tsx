import { FaChessKnight, FaRunning, FaHeart } from "react-icons/fa";
import { MdOutlineSportsMartialArts } from "react-icons/md";
import { FaPuzzlePiece } from "react-icons/fa6";
import { SiApplearcade } from "react-icons/si";
import { GiBasketballBall } from "react-icons/gi";

const categories = [
  {
    route: "action",
    text: "Action",
    icon: FaRunning
  },
  {
    route: "adventure",
    text: "Adventure",
    icon: MdOutlineSportsMartialArts
  },
  {
    route: "arcade",
    text: "Arcade",
    icon: SiApplearcade
  },
  {
    route: "puzzle-n-logic",
    text: "Puzzle & Logic",
    icon: FaPuzzlePiece
  },
  {
    route: "sports-n-racing",
    text: "Sports & Racing",
    icon: GiBasketballBall
  },
  {
    route: "strategy",
    text: "Strategy",
    icon: FaChessKnight
  },
  // {
  //   route: "my-favourites",
  //   text: "My Favourites",
  //   icon: FaHeart
  // }
]

export { categories }