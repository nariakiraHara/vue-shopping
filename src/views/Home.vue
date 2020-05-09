<template>
  <div class="shopping">
    <ItemList msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ItemList from '@/components/ItemList.vue'

export default {
  name: 'Shopping',
  components: {
    ItemList
  }
}
</script>
