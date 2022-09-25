<script setup>

    // import 
    let todo = reactive({
        title: '',
        category: '',
    });

    const { addTodo } = useTodos();

</script>

<template>
    <!-- New Todo -->
    <section class="create-todo">
    
        <form id="new-todo-form">
            <h4>What's on your todo?</h4>
            <input type="text" v-model="todo.title" placeholder="e.g. Get some milk" name="content" id="" />
            <h4>Pick a category</h4>
            <div class="options">
            <label>
                <input type="radio" v-model="todo.category" name="category" id="category1" value="business" /> 
                <span class="bubble business"></span>
                <div>Business</div>
            </label>
            <label>
                <input type="radio" name="category" v-model="todo.category" id="category2" value="personal" />
                <span class="bubble personal"></span>
                <div>Personal</div>
            </label>
            </div>

            <input type="submit" @click.prevent="addTodo(todo)" value="Add todo" />
        </form>
    </section>
    <!-- End of New Todo -->
</template>