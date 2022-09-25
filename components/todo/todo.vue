<script setup>
    // defining props
    const props = defineProps({
        todoItem: Object,
    })

    const message = ref('hello');

    // destructing function from composable
    const { deletTodoItem, editTodoItem } = useTodos();
    
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
                <button class="delete" @click="deletTodoItem(todoItem.id)">Delete</button>
            </div> 
        </div>

    </div>


</template>