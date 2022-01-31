import React from "react";
import { useForm } from "react-hook-form";
import {connect} from 'react-redux'

const TodoForm = (props)=> {
  const { register, handleSubmit, watch, formState: { errors }  } = useForm();


//   console.log(watch("name")); // watch input value by passing the name of it
  
  const onSubmit = data => {
      // data is our todo
      // skip add to DB...
      
      // update UI
      let todo = {name:data.name, complete:false, id:props.nextId}
      props.dispatch({type:'ADD_TODO', todo: todo})
      props.dispatch({type:'INC_ID'})
  }
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>todo name</p>
      {errors.name && errors.name.type ==='maxLength' && <p style={{color:'red'}}>To long YO! </p>}
      {errors.name && errors.name.type === 'required' && <p style={{color:'red'}}>Required </p>}
      <input {...register("name", { required: true, maxLength: 20 })} />
      <input type="submit" />
    </form>
  );
}

const mapStateToProps = (state)=>{
    return {nextId: state.nextId}
}

export default connect(mapStateToProps)(TodoForm)
