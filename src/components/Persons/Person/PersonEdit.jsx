import React from 'react';
import './PersonEdit.css';
import PropType from "prop-types";
import { Card, Button, ButtonGroup } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'

function PersonEdit(props) {
  let myDummyName = "Tech Karo";

  return (
    <Card.Body>
    <Card.Title> Edit Person </Card.Title>
    <Card.Text>
          <input value={myDummyName} onChange={
            (abc) => myDummyName = abc.target.value
          }/>
          {/* <input value={props.person.name}/> */}
          <input type="number" value={props.person.age}/>
          <textarea>{props.person.description}</textarea>
    </Card.Text>
    <ButtonGroup className="button-group" aria-label="Basic example">
      <Button variant="light">
          <FontAwesomeIcon className="text-info" icon={faCheck} />
      </Button>
      <Button variant="light" onClick = {props.callMeForCancal}>
          <FontAwesomeIcon className="text-danger" icon={faTimes} />
      </Button>
    </ButtonGroup>
  </Card.Body>
  );
}

export default PersonEdit;

PersonEdit.propTypes = {
    person: PropType.object,
    callMeForCancal: PropType.func
};