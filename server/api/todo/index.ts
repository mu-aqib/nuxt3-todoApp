// event handler is a function which allow us to manage api. It uses H3 framework which is used to build rest apis.
import { Body } from 'nuxt/dist/head/runtime/components';
import { db } from '../../db/index'
export default defineEventHandler( async (e)=>{
    let request = e.req.method;
    // get request 
    if(request === "GET")
        return db.todo;
    // post request
    if(request === "POST"){
        let data = await useBody(e);
        if(!data) throw new Error("data has been empty")
        console.log(data)
        const newTodo = {
            id: new Date().toISOString(),
            title: data.title,
            category: data.category,
            completed: data.completed,
        }
        console.log(newTodo)

        db.todo.push(newTodo);

        return data;
    }
    // put request

    // delete request

    
} )