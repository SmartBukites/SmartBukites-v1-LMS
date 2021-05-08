import React, { useState } from "react";

import MainNavigation from "../components/MainNavigation";
import Sidebar from "../components/Sidebar";
import Backdrop from "../components/Backdrop";
import Dashboard from "./Dashboard";
import NewUser from "./NewUser";

import "./Home.css";

function Home() {
  const [drawerIsOpen, setDrawerIsOpen] = useState(true);

  const openDrawer = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawer = () => {
    setDrawerIsOpen(false);
  };

  return (
    <div className="home">
      <MainNavigation openDrawer={openDrawer} />

      <div className="d-flex">
        {drawerIsOpen && <Backdrop onClick={closeDrawer} />}
        {drawerIsOpen && <Sidebar closeDrawer={closeDrawer} />}

        <Dashboard />
      </div>

      {/* <>
        <NewUser openDrawer={openDrawer} />
      </> */}
    </div>
  );
}

export default Home;
