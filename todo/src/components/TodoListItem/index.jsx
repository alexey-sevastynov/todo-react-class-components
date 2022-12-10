import React from "react";
import './todoListItem.css';

class TodoListItem extends React.Component {
    state = {
        done: false,
        important: false,
    }


    onLabelClick = () => {
        this.setState((state) => {
            return {
                done: !state.done
            };
        });
    };

    onMarkImportamt = () => {
        this.setState((state) => {
            return {
                important: !state.important
            }
        })
    }




    render() {
        const { label, onDeleted } = this.props;
        const { done, important } = this.state;

        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done';
        }


        if (important) {
            classNames += ' important';
        }

        return (
            <span className={classNames} >
                <span className="todo-list-item-label"
                    onClick={this.onLabelClick}>
                    {label}
                </span>

                <div>
                    <button type="button"
                        className="btn btn-outline-danger btn-sm float-right"
                        onClick={onDeleted}>
                        <i className="bi bi-trash" />
                    </button>
                    <button type="button"
                        className="btn btn-outline-success btn-sm float-right"
                        onClick={this.onMarkImportamt}>
                        <i className="bi bi-exclamation-lg"></i>
                    </button>
                </div>
            </span>
        )
    }
}



export default TodoListItem;