/**
 * Created by mac on 2021-03-20 22:58
 */
<template>
  <div>{{ refObj.age }}</div>
  <button @click="add">click me</button>
  <Item v-for="item in List" :datas="item"></Item>
</template>

<script lang="ts">
import { ref, defineAsyncComponent, onUpdated } from 'vue';

declare interface ListItem {
  name: string,
  age: number
}

export default {
  name: "Home",
  components: {
    Item: defineAsyncComponent(() => import('./components/Item.vue'))
  },
  props: {
    typeList: {
      type: Array,
      default: () => []
    },
  },
  setup(props) {
    const obj = { age: 9 }
    const List: ListItem[] = [
      {
        aaa: '333',
        pick: 'ddd',
        name: 'xiaoming'
      }
    ]

    const refObj = ref(obj)
    const add = () => { refObj.value.age++; }

    onUpdated(() => {
      console.log('updated!')
    })

    return {
      refObj,
      add,
      List
    }
  }
}
</script>

<style scoped lang="less">

</style>
