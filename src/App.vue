<template>
  <router-view v-slot="{ Component }">
    <keep-alive v-if='route.meta.cache'>
      <component :is="Component" />
    </keep-alive>
    <component v-else :is='Component'></component>
  </router-view>
</template>

<script>
import { useRoute } from 'vue-router';

export default {
  name: 'App',
  setup() {
    return {
      route: useRoute()
    }
  }
}
</script>

<style lang='less'>

</style>
