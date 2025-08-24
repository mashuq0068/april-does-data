
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Navigation from "../Navigation";

const MainLayout = () => {
  return (
    <div>
      <Navigation onGetAssessment={() => {}}/>
      <Outlet />
      <Footer onGetAssessment={() => {}}/>
    </div>
  );
};

export default MainLayout;
