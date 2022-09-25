<script setup>
    const { todos } = useTodos();
</script>

<template>

  <div class="container">

    <main class="app">
      <!-- Greeting -->
      <section class="greeting">
        <h2 class="title">
          Welcome !
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
