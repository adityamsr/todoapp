import React from 'react'

const Todos = ({todos, deleteTodo}) => {

    const todoList = todos.length ? (
        // returning true statement
        todos.map(todo => {
            return(
                <div className="collection-item" key={todo.id}>
                  <span onClick={() => {deleteTodo(todo.id)}}> {todo.content} </span> 
                </div>
            )
        })

    ) : (

        // returning false statement
        <p className="center"> You have no todos left </p>
    )
    return(
        <div className=" todos collection ">
          {todoList}
        </div>
    )
}

export default Todos
