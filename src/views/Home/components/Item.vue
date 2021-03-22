/**
 * Created by mac on 2021-03-22 22:18
 */
<template>
  <div>{{ datas.name }}</div>
</template>

<script>
export default {
  name: "Item",
  props: {
    datas: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped lang="less">

</style>
