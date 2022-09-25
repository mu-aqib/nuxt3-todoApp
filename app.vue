<script setup>

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
	  </main>

    <todoForm></todoForm>

    <!-- Todo List -->
    <section class="todo-list">
      <h3>TODO LIST</h3>
        <todo v-for="todo in todos" :key="todo.id" :todoItem="todo"></todo>
    </section>
    <!-- End of Todo List -->
  </div>
</template>
