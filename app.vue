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
	  </main>
    <todoForm></todoForm>
    <todo></todo>
  </div>
</template>
