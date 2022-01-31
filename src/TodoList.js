import React from 'react';
import {connect} from 'react-redux'
import Todo from './Todo';

const TodoList = (props) => {
  return (
    <div>
        list
        <p>TODOS:</p>
        {props.todos.map( t=> <Todo key={t.id} {...t}/>)}
    </div>
  )
}

const mapStateToProps = (state) =>{
    return {todos: state.todos}
}

export default connect(mapStateToProps)(TodoList)