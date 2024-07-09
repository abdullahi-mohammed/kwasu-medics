import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import ForgotPassword from "./pages/forgotPassword/forgotPassword";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} exact element={<Home />} />
          <Route path={"/login"} exact element={<Login />} />
          <Route path={"/forgot-password"} exact element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
