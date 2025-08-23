import { Navigation } from "lucide-react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";

const MainLayout = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
