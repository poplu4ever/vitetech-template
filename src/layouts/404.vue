<template>
  <div>
    <h1>404 Not Found</h1>
    <router-view></router-view>
    <button @click="router.back()">返回</button>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()
</script>

<style lang="scss" scoped></style>
