// event handler is a function which allow us to manage api. It uses H3 framework which is used to build rest apis.
import { db } from '../../db/index'
export default defineEventHandler( ()=>{
    console.log(db)
    return db.todo;
} )