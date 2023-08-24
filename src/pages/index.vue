<template>
  <div>Hello world by vite-plugin-pages</div>
  <RouterLink to="/about">About</RouterLink>
  <div>{{ msg }}</div>
  <div class="p-4">hello unocss</div>
  <h1 class="text-3l font-bold underline">Hello tailwind</h1>
</template>

<script>
export default {
  setup() {
    const msg = ref('Hello World without import')
    return {
      msg
    }
  }
}
</script>

<style lang="scss" scoped></style>
