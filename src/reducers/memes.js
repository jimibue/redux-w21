
const initState =[{id:0, title:"dummy meme", img_url:'image here'}] 
export const SET_MEMES = "SET_MEMES"
export const ADD_MEMES = "ADD_MEMES"

const memes = (state = initState, action) =>{
   switch(action.type){
      case SET_MEMES:
        return action.memes
      case ADD_MEMES:
         return [...state, action.meme]
      default:
         return state     
   }
}

export default memes