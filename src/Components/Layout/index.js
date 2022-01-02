import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import SideDrawer from "./Navbar/Sidebar";
import BackDrop from "../BackDrop/BackDrop";

export default function Layout({ welcome }) {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen((prevState) => !prevState);
  };
  const backDropClickHandler = () => {
    setSideDrawerOpen(false);
  };

  let backDrop;

  if (sideDrawerOpen) {
    backDrop = <BackDrop click={backDropClickHandler} />;
  }
  return (
    <>
      <Navbar welcome={welcome} />
      <SideDrawer
        show={sideDrawerOpen}
        drawerClickHandler={drawerToggleClickHandler}
      />
      {backDrop}
      <Outlet />
      <Footer />
    </>
  );
}
