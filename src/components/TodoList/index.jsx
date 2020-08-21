import React from 'react';

import TodoItem from '../TodoItem';

const TodoList = () => {
    return (
        <div className="todoListSyle">
            {/* <TodoItem title={'Task1'} info={'about task 1'} />
            <TodoItem title={'Task2'} />
            <TodoItem title={'Task3'} />
            <TodoItem title={'Task4'} />
            <TodoItem title={'Task5'} /> */}
            <TodoItem />
        </div>
    )
}

export default TodoList;