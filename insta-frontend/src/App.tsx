import { Route, Routes } from "react-router-dom"
import { Login } from "./components/login/Login"
import { NotFound } from "./components/notfound/NotFound"
import { SignUp } from "./components/signup/SignUp"
import { AuthProvider } from "./components/auth/Auth"
import { RequireAuth } from "./components/auth/RequireAuth"
import { Home } from "./components/home/Home"
import { Search } from "./components/search/Search"
import { Post } from "./components/posts/Post"

function App() {

  return (
  <AuthProvider>
      <div className="App">
        <Routes>
            <Route path="/" element={<><Home /></>} >
            <Route path="/search" element={<Search />} />
            <Route path="/" element={<Post />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />


            <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
  </AuthProvider>
  )
}

export default App
