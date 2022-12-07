import React from "react";

import { fa } from 'react-bootstrap-icons';

import './todoListItem.css';

const TodoListItem = ({ label, important = false }) => {

    const style = {
        color: important ? 'steelblue' : 'black',
        fontWeight: important ? 'bold' : 'normal'
    };

    return (
        <span className="todo-list-item" >
            <span className="todo-list-item-label"
                style={style}>
                {label}
            </span>

            <div>
                <button type="button"
                    className="btn btn-outline-danger btn-sm float-right">
                    <i className="bi bi-trash" />
                </button>
                <button type="button"
                    className="btn btn-outline-success btn-sm float-right">
                    <i className="bi bi-exclamation-lg"></i>
                </button>
            </div>



        </span>
    )
};


export default TodoListItem;