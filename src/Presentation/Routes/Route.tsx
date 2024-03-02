import { Route, Routes } from "react-router-dom";
import DashboardScreen from "../Screens/Dashboard/View/Dashboard";
import Contracts from "../Screens/Contracts/Contracts";
import Clients from "../Screens/Clients/Clients";
import Settings from "../Screens/Settings/Settings";
import Profile from "../Screens/Profile/Profile";
import Reports from "../Screens/Reports/Reports";
import Projects from "../Screens/Projects/Project";

const RouteGenerator = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardScreen />} />
      <Route path="/dashboard" element={<DashboardScreen />} />
      <Route path="/contracts" element={<Contracts />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/profile" element={<Profile />} />

      {/* for any route other than specified route, redirecting them to dashboard page */}
      <Route path="/*" element={<DashboardScreen />} />
    </Routes>
  );
};

export default RouteGenerator;
