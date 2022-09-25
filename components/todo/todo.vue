<script setup>
    // let {data: todos} = useFetch('/api/todo');
    
    const props = defineProps({
        todoItem: Object,
    })

    async function editTodoItem(id){

        await $fetch('/api/todo/'+id, { 
            method: "put",
        })
    
    }

    async function deletTodoItem(id){
        await $fetch('/api/todo/'+id, { 
            method: "delet",
        })
    }
    
</script>
<template>

    <div class="list" id="todo-list">
        <div class="todo-item">
            <label>
                <input type="checkbox" :checked="todoItem.completed" @click="editTodoItem(todoItem.id)">
                <span class="bubble" :class="[todoItem.category === 'personal' ? 'personal' : '']"></span>
            </label>
            <div class="todo-content">
                <input type="text" :value="todoItem.title" readonly>
            </div>
            <div class="actions">
                <button class="edit" >Edit</button>
                <button class="delete" @click="deletTodoItem(todoItem.id)">Delete</button>
            </div> 
        </div>
    </div>

</template>