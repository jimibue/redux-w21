import React from 'react';
import {connect} from 'react-redux'
import filter from './reducers/filter';
import Todo from './Todo';

const TodoList = (props) => {

    const renderTodos = ()=>{
        let filteredTodos
        if(props.filter === 'complete'){
            filteredTodos = props.todos.filter(t=> t.complete)
        } else if( props.filter === 'incomplete'){
            filteredTodos =  props.todos.filter(t=> !t.complete)
        } else {
            filteredTodos = props.todos
        }
      return filteredTodos.map( t=> <Todo key={t.id} {...t}/>)
    }
  return (
    <div>
        list
        <p>tim is {props.user.age}</p>
        <p onClick={()=>props.dispatch({type:"UPDATE_USER", user:{age: props.user.age +1 }})}>have bday</p>
        <p>TODOS for {props.user.name}: (current filter is {props.filter})</p>
        {renderTodos()}
    </div>
  )
}

const mapStateToProps = (state) =>{
    return {todos: state.todos, filter: state.filter, user: state.user}
}

export default connect(mapStateToProps)(TodoList)