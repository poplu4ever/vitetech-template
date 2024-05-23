<template>
  <div ref="target">home</div>
</template>

<script lang="ts">
import { registerSW } from 'virtual:pwa-register'

export default {
  setup() {
    const msg = ref('Hello World without import')
    return {
      msg
    }
  },
  onMounted() {
    registerSW({
      immediate: true,
      onNeedRefresh() {
        console.log('need refresh')
      },
      onRegisteredSW(_url, registration) {
        setInterval(() => {
          registration && registration.update()
        }, 36000)
      }
    })
  }
}
</script>

<style lang="scss" scoped></style>

<route lang="yaml">
meta:
  layout: default
</route>
