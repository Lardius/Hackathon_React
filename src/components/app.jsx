import React, { useState, useEffect } from "react";
import api from "../api";
import "bootstrap/dist/css/bootstrap.css";
import MainPage from "./mainPage";
import UsersPage from "./usersPage";
import Bookmark from "./bookmark";
import { Route, Switch } from "react-router-dom";

const App = () => {
    const [users, setUsers] = useState();
    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data));
    }, []);
    console.log(users);
    return <div>
        <Switch>
            <Route path="/" exact component={ MainPage } />
            <Route path="/Users" component={ UsersPage } />
            <Route path="/Bookmark" component={ Bookmark } />
        </Switch>
    </div>;
};

export default App;
