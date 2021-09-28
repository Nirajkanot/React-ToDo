import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';


const ToDoLists = (props) => {

    
    return (
    <>
    <div className="todo_style">
    <DeleteIcon onClick={() => {
        props.onSelect(props.id);
    }}/>
    
   
    <li> {props.text} </li>
    </div>
    </>
    );
}

export default ToDoLists;