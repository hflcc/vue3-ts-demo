/**
 * Created by mac on 2021-03-20 22:58
 */
<template>
  <div class='home-page'>
    <div>count: {{ count }}</div>
    <div>state.age: {{ state.age }}</div>
    <button @click="add">click me</button>
    <div class='split-line'></div>
    <button @click='goAboutPage'>跳转About页</button>
    <Item v-for="item in List" :datas="item"></Item>
  </div>
</template>

<script lang="ts">
import { ref, reactive, provide, defineComponent, onUpdated, watch } from 'vue';
import { useRouter } from 'vue-router';
import { ListItem } from "@/ts/listItem";
import Item from './components/Item.vue';

export default defineComponent({
  name: "Home",
  components: {
    Item
  },
  setup(props, context) {
    const router = useRouter();
    let count = ref(0);

    const state = reactive({ age: 9 });
    const add = () => {
      state.age++;
    }

    const goAboutPage = () => {
      router.push({
        path: '/about'
      })
    }

    let List: ListItem<number>[] = [
      {
        age: 123,
        name: 'xiaoming',
        hobby: 'play',
      }
    ]

    watch(
      () => state.age,
      (newVal, oldVal) => {
        console.log(newVal, oldVal)
      }
    )


    onUpdated(() => {

    })

    provide('state', state)

    const ob = {
      count,
      state,
      add,
      List,
      goAboutPage
    }
    console.log(ob)
    return ob
  }
})
</script>

<style scoped lang="less">

</style>
