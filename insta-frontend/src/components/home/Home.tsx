import { Outlet } from "react-router-dom"
import { Nav } from "../nav/Nav"
import { Stories } from "../stories/Stories"
import { Profile } from "../profile/Profile"

export const Home = () => {
  return (
    <div className="flex flex-row -2">
         <Nav />
      <div className="flex flex-col  flex-1 ">
          <Stories />
          <Outlet/> 
      </div>
      <Profile />
    </div>
  )
}
