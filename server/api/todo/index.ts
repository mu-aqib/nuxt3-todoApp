// event handler is a function which allow us to manage api. It uses H3 framework which is used to build rest apis.
export default defineEventHandler( ()=>{
    let todo = [
        {
            id: 1,
            title: "Hello there !",
            category: '',
            completed: false,
        },
        {
            id: 2,
            name: "Hello there one !",
            completed: false,
        },
        {
            id: 3,
            name: "Hello there two !",
            completed: false,
        }
    ];
    return todo;
} )