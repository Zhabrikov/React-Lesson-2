import React from 'react';

const TodoItem = (/*{ title, info }*/) => {
    // console.log(props);
    const arrItems = ['Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5'];

    return (
        arrItems.map((item, index) => {
            return (
                <div className="blockItem">
                    <p className="item" key={index}>{item}</p>
                    <span><i className="fa fa-trash black" /></span>
                </div>

            )
        })
    )
}

export default TodoItem