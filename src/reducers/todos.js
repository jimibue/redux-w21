// our app has todos... thes are objects with name, id and complete
// {name"string",id:number, complete:boolean}

// what is a reducer?
// a reducer is just a function it takes state and an 'action' and returns
// a new state, also does not mutate original state.

const initialState = [
  { name: "initial state todo 1", id: 0, complete: true },
  { name: "initial state todo 2", id: 1, complete: false },
  { name: "initial state todo 3", id: 3, complete: false },
];

// what is an action? an action is a javascript object, that needs atleast
// the type key,
// {type:string, optionalKey...}
//{type:'SET_TODOS', todos:[{},{}]}
//{type:'ADD_TODOS', todo:{name,id,complete}}

const todos = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TODOS":
      return action.todos;
    case "ADD_TODO":
      return [...state, action.todo];
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.id);
    case "UPDATE_TODO":
      return state.map((todo) =>
        todo.id === action.todo.id ? action.todo : todo
      );
    case "TOGGLE_TODO":
        return state.map((todo) =>
          todo.id === action.id ? {...todo, complete: !todo.complete} : todo
        );  
    default:
      return state;
  }
};

export default todos;
