<template>
  <div class="shopping">
    <ItemList :msg="greetText"/>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue} from 'vue-property-decorator'
import ItemList from '@/components/ItemList.vue'
import Rakuten from '@/repository/rakutenRepository'

@Component({
  components: {
    ItemList,
  },
})

export default class Home extends Vue {
  public greetText: any[] = []

  public created(){
    Rakuten.getList().then((result) => this.greetText = result)
  }

}
</script>
