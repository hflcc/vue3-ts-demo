/**
 * Created by mac on 2021-03-20 22:58
 */
<template>
  <div>{{ count }}</div>
  <div>{{ reactObj.age }}</div>
  <button @click="add">click me</button>
  <Item v-for="item in List" :datas="item"></Item>
</template>

<script lang="ts">
import { ref, reactive, defineComponent, onUpdated } from 'vue';
import { ListItem } from "@/ts/listItem";
import Item from './components/Item';

export default defineComponent({
  name: "Home",
  components: {
    Item
  },
  setup(props) {
    let count = ref(0);
    const obj = { age: 9 }

    const reactObj = reactive(obj);
    const add = () => { reactObj.age++; count++;}

    let List: ListItem<number>[] = [
      {
        age: 123,
        name: 'xiaoming'
      }
    ]

    onUpdated(() => {
      console.log(obj)
    })
    console.log('count', count)
    console.log('reactObj', reactObj)
    return {
      count,
      reactObj,
      obj,
      add,
      List
    }
  }
})
</script>

<style scoped lang="less">

</style>
