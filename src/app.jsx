import "bootstrap/dist/css/bootstrap.css";

import React, {
    useEffect,
    useState
} from "react";

import {
    Route,
    Switch
} from "react-router-dom";

import api from "./api";
import Bookmark from "./components/bookmark";
import NavBar from "./components/navBar";
import MainPage from "./layouts/mainPage";
import PersonPage from "./layouts/personPage";

const App = () => {
    const [persons, setPersons] = useState();
    useEffect(() => {
        api.persons.fetchAll().then((data) => setPersons(data));
    }, []);

    return (
        <div className="container mt-3">
            <NavBar />
            <Switch>
                <Route path="/" exact render={(props) => {
                    return (persons && <MainPage persons={persons} {...props} />);
                }} />
                <Route path="/person/:personId?" exact render={(props) => {
                    return (persons && <PersonPage {...props} />);
                }} />
                <Route path="/Bookmark" render={(props) => {
                    return (<Bookmark persons={persons && persons.filter((person) => person.bookmark === true)} {...props} />);
                }} />
            </Switch>
        </div>
    );
};

export default App;
