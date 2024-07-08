import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/login/Login'
import Home from './pages/home/Home'
import DoctorDashboard from './pages/dashboard/doctor/doctor'
import { useState } from 'react'

function App() {

  const [user, setUser] = useState("doctor")

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} exact element={<Home />} />
          <Route path={"/login"} exact element={<Login />} />
          {user == "doctor" ? <Route path={"/dashboard"} exact element={<DoctorDashboard />} /> : <div>studentdashboard</div>}

          {/* <Route path={"/dashboard"} exact element={<DoctorDashboard />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
