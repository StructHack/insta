import { Outlet } from "react-router-dom"
import { Nav } from "../nav/Nav"
import { Stories } from "../stories/Stories"
import { Profile } from "../profile/Profile"

export const Home = () => {
  return (
    <div className="flex flex-row gap-2">
         <Nav />
      <div className="flex flex-col gap-3 flex-1 border-r-2">
          <Stories />
          <Outlet /> 
      </div>
      <Profile />
    </div>
  )
}
