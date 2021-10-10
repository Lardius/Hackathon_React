import React from "react";

import PropTypes from "prop-types";

import PersonCard from "../components/personCard";

const MainPage = ({ persons, ...rest }) => {
    return (<>
        <h1>Общая информация о группе</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <hr/>
          <div style={{ display: "flex" }}>
            {persons.map(person => (
                <PersonCard person={person} key={person._id} {...rest} />
            ))}
        </div>
      </>
    );
};

MainPage.propTypes = {
    persons: PropTypes.array.isRequired
};

export default MainPage;
