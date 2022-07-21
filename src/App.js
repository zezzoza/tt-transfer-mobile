import "./scss/app.scss";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import ResetPassword from "./pages/resetPassword/ResetPassword";
import Recovery from "./pages/recovery/Recovery"
import Test from "./pages/test/Test";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/recovery" element={<Recovery />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </>
  );
}

export default App;
