import React from "react";

import PropTypes from "prop-types";

import PersonCard from "../components/personCard";

const MainPage = (props) => {
    return (
        <div style={{ display: "flex" }}>
            {props.persons.map(person => (
                <PersonCard person={person} key={person._id} onBookmark={handleBookmark} />
            ))}
        </div>
    );
};

MainPage.propTypes = {
    persons: PropTypes.array.isRequired
};

export default MainPage;
