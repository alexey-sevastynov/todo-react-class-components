import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = () => {

    return (
        <ul>
            <li><TodoListItem label={"Drink coffee"} /></li>
            <li><TodoListItem
                label={"Build React App"}
                impotrant /></li>
        </ul>
    )
}

export default TodoList;