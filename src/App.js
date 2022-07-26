import "./scss/app.scss";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import ResetPassword from "./pages/resetPassword/ResetPassword";
import Recovery from "./pages/recovery/Recovery"
import DriverPageOrders from "./pages/driverPageOrders/DriverPageOrders";
import DriverPageDetails from "./pages/driverPageDetails/DriverPageDetails";
import DriverPageProfile from "./pages/driverPageProfile/DriverPageProfile";
import ActivityFeed from "./pages/activityFeed/ActivityFeed";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/recovery" element={<Recovery />} />
        <Route path="/profile" element={<DriverPageProfile />} />
        <Route path="/orders" element={<DriverPageOrders />} />
        <Route path="/details" element={<DriverPageDetails />} />
        <Route path="/activity-feed" element={<ActivityFeed />} />
      </Routes>
    </>
  );
}

export default App;
