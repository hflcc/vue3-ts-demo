/**
 * Created by mac on 2021-03-20 22:58
 */
<template>
  <div>{{ obj.age }}</div>
  <button @click="add">click me</button>
</template>

<script lang="ts">
import { ref, refdefineComponent, computed, watchEffect } from 'vue';

export default {
  name: "Home",
  props: {
    typeList: {
      type: Array,
      default: () => []
    },
  },
  setup(props) {
    const obj = { age: 9 }
    const refVal = ref(obj)
    const add = () => {
      obj.age++;
    }

    // const cpd = computed(refVal.value.age)

    return {
      obj,
      add
    }
  }
}
</script>

<style scoped lang="less">

</style>
