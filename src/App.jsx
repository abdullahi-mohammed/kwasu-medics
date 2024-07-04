import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/login/Login'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/login"} exact element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
