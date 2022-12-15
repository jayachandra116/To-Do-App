
import DUMMY_TODOS from '../dummyToDos';

const ADDTODO="ADDTODO"
const REMOVETODO="REMOVETODO"
const UPDATETODO="UPDATETODO"
const DONETODO="DONETODO"

const initState=DUMMY_TODOS;

const toDoReducer=(state=initState,action)=>{
    switch(action.type){
        case ADDTODO:{
            return state.concat({id:Math.random(),title:action.payload});
        }
        case REMOVETODO:{
            return state.filter(i=>i.id!==action.payload)
        }
        case DONETODO:{
            let todoItems=state;
            let todoId=action.payload;
            let updatabletodoIndex=todoItems.findIndex(t=>t.id===todoId);
            todoItems[updatabletodoIndex].complete=true
            return todoItems
        }
        case UPDATETODO:{
            let todoItems=state;
            let todoId=action.payload.id;
            let updatabletodoIndex=todoItems.findIndex(t=>t.id===todoId);
            todoItems[updatabletodoIndex]=action.payload
            return todoItems
        }
        default:return state;
    }
}

export default toDoReducer;