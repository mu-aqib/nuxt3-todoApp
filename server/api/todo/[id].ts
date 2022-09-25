import { db } from '../../db/index'
export default defineEventHandler( async (e)=>{
    let request = e.req.method;
    const { id } = e.context.params;

    // put request
    if(request === "PUT"){

        // find given id item
        let Item = db.todo.find(data=>{
            return data.id === id;
        })


        // edit data with new data
        let updatedItem = {
            ...Item,
            completed: !Item.completed
        }
        console.log(updatedItem, Item)
        // push data
        // db.todo[id] = updatedItem;

        // return db.todo[id];
    }

    // delete request
} )