import React from 'react'
import {connect} from 'react-redux'

const Todo = ({name, id, complete, dispatch}) =>{
    return (
        <div>
            <p>{name}</p>
            <button onClick={()=> dispatch({type:'DELETE_TODO', id:id})}>delete</button>
        </div>
    )
}

export default connect()(Todo)