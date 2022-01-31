const user = (state={name:'tim', age:45, email:'test@tes,com', quotes:['yo','howdy']}, action)=>{
    switch(action.type){
        case 'UPDATE_USER':
            return {...state, ...action.user}
            // return action.user
        default:
           return state    
    }
}

export default user

// dispatch({type:'UPDATE_USER', user:{age:22}})