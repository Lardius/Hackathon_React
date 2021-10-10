import React from "react";

import PropTypes from "prop-types";

import PersonCard from "../components/personCard";

const MainPage = ({ persons, ...rest }) => {
    return (
        <div style={{ display: "flex" }}>
            {persons.map(person => (
                <PersonCard person={person} key={person._id} {...rest} />
            ))}
        </div>
    );
};

MainPage.propTypes = {
    persons: PropTypes.array.isRequired
};

export default MainPage;
