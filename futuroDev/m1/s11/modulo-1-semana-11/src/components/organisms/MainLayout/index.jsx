import { Outlet } from "react-router-dom";
import Header from "../Header";

function MainLayout() {
 return (
  <>
   <Header />
   <Outlet />
  </>
 );
}

export default MainLayout;
