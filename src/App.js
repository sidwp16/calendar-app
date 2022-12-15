import React, { useEffect } from "react";

import GlobalStyles from "./components/GlobalStyles";
import Nav from "./components/layout/nav";
import Log from "./components/logs/Logs";
import AddLog from "./components/logs/AddLog";
import EditLog from "./components/logs/EditLog";

import { getLogs } from "./actions/logAction";

import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Redirect, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLogs());
  }, [getLogs]);

  return (
    <>
      <GlobalStyles />
      <ToastContainer />
      <Nav />
      <div className="container mt-4">
        <Switch>
          <Route path="/" exact component={Log} />
          <Route path="/add" exact component={AddLog} />
          <Route path="/edit" exact component={EditLog} />
        </Switch>
      </div>
    </>
  );
};
export default App;
