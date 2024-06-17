import { Outlet } from "react-router-dom"
import { Nav } from "../nav/Nav"
import { Post } from "../posts/Post"

export const Home = () => {
  return (
    <div className="flex flex-row gap-2">
      <Nav />
      <Outlet /> 

    </div>
  )
}
