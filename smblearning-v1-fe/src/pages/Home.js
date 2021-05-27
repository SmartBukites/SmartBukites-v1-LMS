import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";
import Sidebar from "../components/Sidebar";
import Backdrop from "../components/Backdrop";
import UserProfile from "./UserProfile";

import Dashboard from "./Dashboard";
import NewUser from "./NewUser";
import Courses from "./Courses";
import Users from "./Users";

import CourseOverview from "./CourseOverview";

import "./Home.css";

function Home() {
  const [drawerIsOpen, setDrawerIsOpen] = useState(true);

  const openDrawer = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawer = () => {
    setDrawerIsOpen(false);
  };

  useEffect(() => {
    const currWinSize = window.innerWidth <= 760;
    currWinSize && setDrawerIsOpen(false);
  }, []);

  return (
    <div className="home">
      <MainNavigation openDrawer={openDrawer} />

      <div className="d-flex">
        {drawerIsOpen && <Backdrop onClick={closeDrawer} />}
        {drawerIsOpen && <Sidebar closeDrawer={closeDrawer} />}
        <>
          <Switch>
            {/* <Route path={`/`} exact>
              <Dashboard />
            </Route> */}
            <Route path={`/courses`}>
              <Courses />
            </Route>
            <Route path={`/new-user`}>
              <NewUser />
            </Route>
            <Route path={`/users`}>
              <Users />
            </Route>
            <Route path={`/user-profile`}>
              <UserProfile />
            </Route>
            <Route path={`/course-overview`}>
              <CourseOverview />
            </Route>
            <Route path={`/dashboard`}>
              <Dashboard />
            </Route>

            <Redirect from="*" to="/dashboard" />
          </Switch>
        </>
      </div>
    </div>
  );
}

export default Home;
