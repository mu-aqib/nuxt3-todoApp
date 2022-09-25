const useTodos = ()=>{

    let {data: todos, refresh} = useAsyncData('todos', ()=>{
        return $fetch('/api/todo')
    });

    async function editTodoItem(id){
        let res = await $fetch('/api/todo/'+id, { method: "put" })
        refresh();
    }

    async function deletTodoItem(id){
        let res = await $fetch('/api/todo/'+id, { method: "delete" })
        refresh();
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