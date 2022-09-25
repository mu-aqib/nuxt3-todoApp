<script setup>
    let props = defineProps({
        message: String
    })
</script>

<template>
    <div class="abs-aler bg-success">
        <p> {{ message }} </p>
    </div>
</template>

<style scoped>
    .abs-aler{
        position: fixed;
        top: 50px;
        right: 50px;

        font-size: 14px;
        width: 20%;

        padding: 10px 20px;
        border-radius: 5px;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }
    .bg-success{
        background: #3fee68;
        color: #fff;
    }
</style>