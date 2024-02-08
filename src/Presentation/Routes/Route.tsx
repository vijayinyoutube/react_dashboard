import { Route, Routes } from "react-router-dom";
import DashboardScreen from "../Screens/Dashboard/UI/Dashboard";

const RouteGenerator = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardScreen />} />
      <Route path="/dashboard" element={<DashboardScreen />} />

      {/* for any route other than specified route, redirecting them to dashboard page */}
      <Route path="/*" element={<DashboardScreen />} />
    </Routes>
  );
};

export default RouteGenerator;
