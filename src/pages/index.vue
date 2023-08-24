<template>
  <div>Hello world by vite-plugin-pages</div>
  <div>{{ msg }}</div>
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
