import { ADDTASK,DELTASK,TASKDONE,EDITTASK} from "./Type";


export const addTask = newtask => {
  return { type: ADDTASK, payload: newtask };
};
export  const delTask = (id) => {
  return { type: DELTASK,playload:id };
};
export const taskdone = (id) => {
  return { type: TASKDONE,playload:id };
}
export const edittask =(id,tasknew) =>  {
  return {type: EDITTASK,id:id,tasknew:tasknew} ;
}