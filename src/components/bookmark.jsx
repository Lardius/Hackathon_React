import React from "react";

import PropTypes from "prop-types";

import PersonCard from "./personCard";

const Bookmark = ({ persons }) => {
    return (
        <div>
            <h1>Bookmark</h1>
            {persons && persons.map(person => <PersonCard person={person} key={person._id} />)}
        </div>
    );
};
Bookmark.propTypes = {
    persons: PropTypes.array.isRequired
};
export default Bookmark;
