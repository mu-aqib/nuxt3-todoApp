const useTodos = ()=>{

    let {data: todos, refresh} = useAsyncData('todos', ()=>{
        return $fetch('/api/todo')
    });

    async function editTodoItem(id){
        await $fetch('/api/todo/'+id, { method: "put" })
        refresh();
    }
    
    async function deletTodoItem(id){
        let response = await $fetch('/api/todo/'+id, {  method: "delete", })
        refresh()
        return response;
    }
    
    let addTodo = async (todo)=>{
        await $fetch('/api/todo', { 
            method: "post",
            body: {
                data: todo
            }
        })
        refresh();
    }

    return { todos, editTodoItem, deletTodoItem, addTodo }
}

export default useTodos