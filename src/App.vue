<template>
  <keep-alive v-if='$route.meta.cache'>
    <router-view />
  </keep-alive>
  <router-view v-else></router-view>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>
