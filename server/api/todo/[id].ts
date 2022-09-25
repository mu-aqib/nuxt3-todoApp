import { db } from '../../db/index'

export default defineEventHandler( async (e)=>{
    let request = e.req.method;
    const { id } = e.context.params;

    let findTodoById = ()=>{

        let index = null;

        let Item = db.todo.find((data, i)=>{
            index = i;
            return data.id === id;
        })

        return { index, Item };
    }

    // put request
    if(request === "PUT"){

        // find given id item
        let { index, Item } = findTodoById();
        
        // edit data with new data
        Item.completed = !Item.completed;

        // update data
        db.todo[index] = Item; 

        // return db.todo[id];
        return db.todo[index]
    }

    // delete request
    if(request === "DELETE"){
        // find item
        let { index } = findTodoById();

        // pop item from array
        db.todo.splice(index, 1);

        return {
            message: "data has been deleted successfully",
        };
    }
} )