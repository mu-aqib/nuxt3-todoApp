<script setup>
    // defining props
    const props = defineProps({
        todoItem: Object,
    })


    // destructing function from composable
    const { deletTodoItem, editTodoItem } = useTodos();

    function deleteItem(id) {
        deletTodoItem(id).then( e => {
            message = e;
            console.log(message)
        });
    }
    
</script>
<template>

    <div class="list" id="todo-list">
        <div :class="[todoItem.completed ? 'done' : '', 'todo-item']">
            <label>
                <input type="checkbox" :checked="todoItem.completed" @click="editTodoItem(todoItem.id)">
                <span class="bubble" :class="[todoItem.category === 'personal' ? 'personal' : '']"></span>
            </label>
            <div class="todo-content">
                <input type="text" :value="todoItem.title" readonly>
            </div>
            <div class="actions">
                <button class="delete" @click="deleteItem(todoItem.id)">Delete</button>
            </div> 
        </div>

    </div>


</template>