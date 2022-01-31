import React from "react";
import { connect } from "react-redux";

const Todo = ({ name, id, complete, dispatch }) => {
    const getStyle=()=>{
     return complete ? {color:'grey', textDecoration:'line-through'}:{}
    }
  return (
    <div>
      <p style={getStyle()} onClick={() => dispatch({ type: "TOGGLE_TODO", id: id })}>
        {name}
      </p>
      <button onClick={() => dispatch({ type: "DELETE_TODO", id: id })}>
        delete
      </button>
    </div>
  );
};

export default connect()(Todo);
