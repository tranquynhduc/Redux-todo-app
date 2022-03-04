 
import { VISIBILITY_FILTER } from './../../Contants';

 export  const getTodoByVisibilityFilter =(store, visibilityFilter) =>{
     switch(visibilityFilter) {
         case VISIBILITY_FILTER.COMPLETED:
             return store.todos.filter(todo => todo.Completed)
         case VISIBILITY_FILTER.INCOMPLETED: 
             return store.todos.filter(todo => !todo.Completed)
        
        default:
            return store.todos
     } 
     
 }