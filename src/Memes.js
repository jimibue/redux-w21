import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { SET_MEMES } from './reducers/memes'
import { INC_ID } from './reducers/nextId'


const Memes = (props)=>{
    const [memesState, setMemesState] = useState([])
    // useEffect( async()=>{
    //     try{
    //         let res = await axios.get('https://heroku-w21.herokuapp.com/api/memes')
    //         console.log(res)
    //         // redux way
    //         props.dispatch({type:SET_MEMES, memes:res.data})
    //         // useState hook way
    //         setMemesState(res.data)
    //     }catch(err){
    //         alert('err getting memes')
    //     }
    // },[])

    // useEffect( ()=>{
    //    axios.get('https://heroku-w21.herokuapp.com/api/memes')
    //    .then((res)=>{
    //       props.dispatch({type:SET_MEMES, memes:res.data})
    //       // useState hook way
    //       setMemesState(res.data)
    //    }).catch((err)=>{
    //        alert('error occured')
    //    })
    // },[])

    return (
        <div>
            <h1>Memes</h1>
            <button onClick={()=>props.dispatch({type:INC_ID})}>Increament IDs</button>
            <h1>Memes State (useState)</h1>
            <div>{JSON.stringify(memesState)}</div>
            <h1>Memes State (from redux store)</h1>
            <div>{JSON.stringify(props.memes)}</div>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return {memes:state.memes}
}

export default connect(mapStateToProps)(Memes)