import { ADDTASK, DELTASK, EDITTASK, TASKDONE } from "./Type";


const initialState = {
  todo: [
    {
      id: 0,
      task: "Hello Mothafuckah !! :) ",
      done: false,
    },
    {
      id: 1,
      task: "Have a Great day  ",
      done: false,
    },
    {
      id: 2,
      task: "Good Luck",
      done: false,
    },

    {
      id: 2,
      task: " Bye Bye .. :) ",
      done: false,
    }


  ],
};
const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDTASK:
      return { ...state, todo: [...state.todo, action.payload] };
    case DELTASK:
      return {...state, todo:  state.todo.filter(el=> el.id !== action.playload)}
    case TASKDONE:
      return{...state, todo: state.todo.map(el => el.id === action.playload ? {...el, done : !el.done } :el)}
    case EDITTASK:
      return{...state, todo: state.todo.map(el => el.id === action.id ? {...el, task : action.tasknew } :el)}
  
    default:
      return state;
  }
};
export default TodoReducer;

