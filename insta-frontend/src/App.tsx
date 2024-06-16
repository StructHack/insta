import { Route, Routes } from "react-router-dom"
import { Login } from "./components/login/Login"
import { NotFound } from "./components/notfound/NotFound"
import { SignUp } from "./components/signup/SignUp"
import { AuthProvider } from "./components/auth/Auth"
import { RequireAuth } from "./components/auth/RequireAuth"
import { Home } from "./components/home/Home"

function App() {

  return (
  <AuthProvider>
      <div className="App max-w-[1080px] flex justify-center">
        <Routes>
            <Route path="/" element={<RequireAuth><Home /></RequireAuth>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />


            <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
  </AuthProvider>
  )
}

export default App
