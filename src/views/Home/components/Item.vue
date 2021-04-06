/**
 * Created by mac on 2021-03-22 22:18
 */
<template>
  vue3 模板里可以有多个根标签
  <div ref="childElem">{{ datas.name }}</div>
  <div>我是父组件的{{ parentState }}</div>
</template>

<script>
import { inject, ref, onMounted } from 'vue';

export default {
  name: "Item",
  props: {
    datas: {
      type: Object,
      default: () => {}
    }
  },
  setup(props, context) {
    const parentState = inject('state')
    const childElem = ref(null)

    onMounted(() => {
      console.log(childElem.value) // 获取dom元素
    })

    return {
      parentState,
      childElem
    }
  },
}
</script>

<style scoped lang="less">

</style>
