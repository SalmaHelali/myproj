import { ADDTASK, DELTASK, EDITTASK, TASKDONE } from "./Type";


const initialState = {
  todo: [
    {
      id: 0,
      task: " Clean the house ",
      done: false,
    },
    {
      id: 1,
      task: " Buy dog food ",
      done: false,
    },
    {
      id: 2,
      task: "Read the book",
      done: false,
    },

    {
      id: 2,
      task: "Party night",
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

