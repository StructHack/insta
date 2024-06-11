import { Route, Routes } from "react-router-dom"
import { Login } from "./components/login/Login"
import { NotFound } from "./components/notfound/NotFound"
import { SignUp } from "./components/signup/SignUp"
import { AuthProvider } from "./components/auth/Auth"

function App() {

  return (
  <AuthProvider>
      <div className="App">
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />


            <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
  </AuthProvider>
  )
}

export default App
