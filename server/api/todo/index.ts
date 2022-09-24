// event handler is a function which allow us to manage api. It uses H3 framework which is used to build rest apis.
export default defineEventHandler( ()=>{
    let todo = [
        {
            id: 1,
            title: "Hello there 1 !",
            category: true,
            completed: false,
        },
        {
            id: 2,
            title: "Hello there 2 !",
            category: false,
            completed: false,
        },
        {
            id: 3,
            title: "Hello there 3 !",
            category: true,
            completed: true,
        },
    ];
    return todo;
} )