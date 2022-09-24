<script setup lang="ts">
    let todo = reactive({
        title: '',
        
    })
</script>

<template>
    <!-- New Todo -->
    <section class="create-todo">
        <h3>CREATE A TODO</h3>
        <form id="new-todo-form">
            <h4>What's on your todo?</h4>
            <input type="text" placeholder="e.g. Get some milk" name="content" id="" />
            <h4>Pick a category</h4>
            <div class="options">
            <label>
                <input type="radio" name="category" id="category1" value="business" /> 
                <span class="bubble business"></span>
                <div>Business</div>
            </label>
            <label>
                <input type="radio" name="category" id="category2" value="personal" />
                <span class="bubble personal"></span>
                <div>Personal</div>
            </label>
            </div>

            <input type="submit" value="Add todo" />
        </form>
    </section>
    <!-- End of New Todo -->
</template>