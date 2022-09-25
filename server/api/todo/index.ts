// event handler is a function which allow us to manage api. It uses H3 framework which is used to build rest apis.
import { db } from '../../db/index'
export default defineEventHandler( async (e)=>{
    let request = e.req.method;
    
    // get request 
    if(request === "GET")
        return db.todo;

    // post request
    if(request === "POST"){
        let {data} = await useBody(e);
        const newTodo = {
            id: new Date().toISOString(),
            title: data.title,
            category: data.category,
            completed: false,
        }

        db.todo.push(newTodo);

        return newTodo;
    }
    
} )