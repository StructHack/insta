import { NavLink } from "react-router-dom"
import { FaBeer, FaBell, FaCircle, FaCompass, FaFacebookMessenger, FaHome, FaPlus, FaSearch, FaVideo } from "react-icons/fa";

export const Nav = () => {
  return (
    <nav className="flex flex-col gap-3 justify-start items-start h-screen p-2 w-[300px] text-lg font-bold border-back border-2">
        <p className="text-[46px] my-10">Instagram</p>
        <NavLink to="/" className="p-3 flex flex-row gap-1 w-full leading-9"> <FaHome className="text-[30px]"/> Home</NavLink>
        <NavLink to="/"  className="p-3 flex flex-row gap-1 w-full leading-9"><FaSearch className="text-[30px]"/>Search</NavLink>
        <NavLink to="/"  className="p-3 flex flex-row gap-1 w-full leading-9"><FaCompass className="text-[30px]"/>Explore</NavLink>
        <NavLink to="/"  className="p-3 flex flex-row gap-1 w-full leading-9"><FaVideo className="text-[30px]"/>Reels</NavLink>
        <NavLink to="/"  className="p-3 flex flex-row gap-1 w-full leading-9"><FaFacebookMessenger className="text-[30px]"/>Messages</NavLink>
        <NavLink to="/"  className="p-3 flex flex-row gap-1 w-full leading-9"><FaBell className="text-[30px]"/>Notifications</NavLink>
        <NavLink to="/"  className="p-3 flex flex-row gap-1 w-full leading-9"><FaPlus className="text-[30px]"/>Create</NavLink>
        <NavLink to="/"  className="p-3 flex flex-row gap-1 w-full leading-9"><FaCircle className="text-[30px]"/>Profile</NavLink>
    </nav>
  )
}
