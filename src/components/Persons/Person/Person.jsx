import React from "react";
import "./Person.css";
import PersonInfo from "./PersonInfo";
import PersonEdit from "./PersonEdit";
import PropType from "prop-types";
import {Card, Button} from 'react-bootstrap';

function Person(props) {
  
  let number ='0334-45984598';

  return (
      <Card className="card">
          {
            props.person.isEditMode ? 
            <PersonEdit 
            person={props.person}
            callMeForCancal = {props.callMeForClose} /> : 
            <PersonInfo 
            person={props.person} 
            callMeForEdit = {props.callMeForOpen} 
            letsDelete = {props.delete} />
          }
      </Card>
  );
}

export default Person;

Person.propTypes = {
  person: PropType.object,
  callMeForOpen: PropType.func,
  callMeForClose: PropType.func,
  delete: PropType.func
};
