import { db } from '../../db/index'

export default defineEventHandler( async (e)=>{
    let request = e.req.method;
    const { id } = e.context.params;

    // put request
    if(request === "PUT"){

        // find given id item
        let index = null;
        let Item = db.todo.find((data, i)=>{
            index = i;
            return data.id === id;
        })
        
        // edit data with new data
        Item.completed = !Item.completed;

        // push data
        db.todo[index] = Item; 

        // return db.todo[id];
        return db.todo[index]
    }

    // delete request
} )