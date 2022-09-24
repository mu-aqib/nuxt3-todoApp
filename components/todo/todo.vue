<script setup>
    // let {data: todos} = useFetch('/api/todo');
    
    const props = defineProps({
        todoItem: Object,
    })

    function editTodoItem(id){
        alert(id)
    }

    function deletTodoItem(id){
        alert(id)
    }
    
</script>
<template>

    <div class="list" id="todo-list">
        <div class="todo-item">
            <label>
                <input type="checkbox" :checked="todoItem.completed">
                <span class="bubble" :class="[todoItem.category ? 'personal' : '']"></span>
            </label>
            <div class="todo-content">
                <input type="text" :value="todoItem.title" readonly>
            </div>
            <div class="actions">
                <button class="edit" @click="editTodoItem(todoItem.id)" >Edit</button>
                <button class="delete" @click="deletTodoItem(todoItem.id)">Delete</button>
            </div>
        </div>
    </div>

</template>