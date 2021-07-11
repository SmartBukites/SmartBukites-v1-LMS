import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { useHistory } from "react-router-dom";
import { authMiddleWare } from "../utils/auth";
import { getToken } from "../utils/Common";

import axios from "../axios";

import MainNavigation from "../components/MainNavigation";
import Sidebar from "../components/Sidebar";
import Backdrop from "../components/Backdrop";
import UserProfile from "./UserProfile";

import Dashboard from "./Dashboard";
import NewUser from "./NewUser";
import Courses from "./Courses";
import Users from "./Users";
import Quiz from "./Quiz";
import CreateCourse from "./CreateCourse";
import CourseOverview from "./CourseOverview";

import "./Home.css";

function Home() {
  const [user, setUser] = useState({});

  let history = useHistory();
  authMiddleWare(history);

  useEffect(() => {
    const authToken = getToken();
    axios.defaults.headers.common = { Authorization: `Bearer ${authToken}` };

    const fetchData = async () => {
      await axios.get("/user").then((response) => {
        const data = response.data.userCredentials;
        setUser(data);
      });
    };

    fetchData();

    const fetchTodos = async () => {
      await axios.get("/todos").then((response) => {
        console.log(response);
      });
    };

    fetchTodos();
  }, []);

  console.log(user);

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
        {drawerIsOpen && <Sidebar user={user} closeDrawer={closeDrawer} />}
        
        <>
          <Switch>
            <Route path={`/quiz-exams`}>
              <Quiz />
            </Route>
            <Route path={`/courses`}>
              <Courses />
            </Route>
            <Route path={`/new-user`}>
              <NewUser />
            </Route>
            <Route path={`/create-course`}>
              <CreateCourse />
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
              <Dashboard user={user} />
            </Route>

            <Redirect from="*" to="/dashboard" />
          </Switch>
        </>
      </div>
    </div>
  );
}

export default Home;
