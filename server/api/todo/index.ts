// event handler is a function which allow us to manage api. It uses H3 framework which is used to build rest apis.
import { db } from '../../db/index'
export default defineEventHandler( (e)=>{
    let request = e.req.method;
    // get request 
    if(request === "GET")
        return db.todo;

        console.log("request ended")
    // post request
    if(request === "POST"){

    }
    // put request

    // delete request

    
} )