import React from "react";
import "./PersonInfo.css";
import { Card, Button, ButtonGroup } from "react-bootstrap";
import PropType from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

function PersonInfo(props) {
  return (
    <Card.Body className = "PersonInfo">
      <Card.Title>
        {props.person.name}, {props.person.age}
      </Card.Title>
      <Card.Text>
            {props.person.description}
      </Card.Text>
      <ButtonGroup className="button-group" aria-label="Basic example">
        <Button variant="light" onClick = {props.callMeForEdit}>
            <FontAwesomeIcon className="text-info" icon={faEdit} />
        </Button>
        <Button variant="light" onClick = {props.letsDelete}>
            <FontAwesomeIcon className="text-danger" icon={faTrash} />
        </Button>
      </ButtonGroup>
    </Card.Body>
  );
}

export default PersonInfo;

PersonInfo.propTypes = {
  person: PropType.object,
  callMeForEdit: PropType.func,
  letsDelete: PropType.func
};
