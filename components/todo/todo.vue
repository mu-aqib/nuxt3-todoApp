<script setup>
    // let {data: todos} = useFetch('/api/todo');
    const props = defineProps({
        todoItem: Object,
    })
</script>
<template>

    <div class="list" id="todo-list">
        <div class="todo-item">
            <label>
                <input type="checkbox" :checked="todoItem.completed">
                <span class="bubble business"></span>
            </label>
            <div class="todo-content">
                <input type="text" :value="todoItem.title" readonly>
            </div>
            <div class="actions">
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
            </div>
        </div>
    </div>

</template>