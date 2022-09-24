<script setup lang="ts">
  // {data} is used for destructing data fromm useFetch method
  let {data} = useFetch('/api/todo');
</script>

<template>
  <div>
    {{data}}
    <NuxtWelcome />
  </div>
</template>
