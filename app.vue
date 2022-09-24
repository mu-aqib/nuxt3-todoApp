<script setup lang="ts">
  // {data} is used for destructing data fromm useFetch method
  let {data: todos} = useFetch('/api/todo');

  function deletItem(id){
    alert(id)
  }
</script>

<template>

  <div class="container">

    <main class="app">
      <!-- Greeting -->
      <section class="greeting">
        <h2 class="title">
          What's up, <input type="text" id="name" placeholder="Name here" />
        </h2>
      </section>
      <!-- End of Greeting -->
      
      <!-- New Todo -->
      <section class="create-todo">
        <h3>CREATE A TODO</h3>
        <form id="new-todo-form">
          <h4>What's on your todo?</h4>
          <input 
            type="text" 
            placeholder="e.g. Get some milk"
            name="content"
            id="content" />
          
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

      <!-- Todo List -->
      <section class="todo-list">
        <h3>TODO LIST</h3>
        <div class="list" id="todo-list">
          <div class="todo-item">
            <label>
              <input type="checkbox">
              <span class="bubble business"></span>
            </label>
            <div class="todo-content">
              <input type="text" value="sfldslf" readonly>
            </div>
            <div class="actions">
              <button class="edit">Edit</button>
              <button class="delete">Delete</button>
            </div>
          </div>
        </div>
      </section>
      <!-- End of Todo List -->

	  </main>
    <!-- <NuxtWelcome /> -->
  </div>
</template>
