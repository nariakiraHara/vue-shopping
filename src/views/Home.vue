<template>
  <div class="shopping">
    <input class="search-text" v-model="searchText" />
    <button class="btn-square-pop" v-on:click="searchItem">検索</button>
    <RakutenItemList :items="rakutenItems"/>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue} from 'vue-property-decorator'
import RakutenItemList from '@/components/ItemList.vue'
import Rakuten from '@/repository/rakutenRepository'

@Component({
  components: {
    RakutenItemList,
  },
})

export default class Home extends Vue {
  public rakutenItems?: any = null
  public searchText = ''

  public searchItem() {
    if (!this.searchText) {
      return
    }
    Rakuten.getList(this.searchText).then((result) => {
      this.rakutenItems = result
    })
  }

}
</script>

<style scoped>
.search-text:focus {
    box-shadow: 0 0 5px 0 rgba(255,153,0,1);
    border: 2px solid #FFF !important;
    outline: 0;
}
.btn-square-pop {
  position: relative;
  display: inline-block;
  padding: 0.25em 0.5em;
  text-decoration: none;
  color: #FFF;
  background: #fd9535;/*背景色*/
  border-bottom: solid 2px #d27d00;/*少し濃い目の色に*/
  border-radius: 4px;/*角の丸み*/
  box-shadow: inset 0 2px 0 rgba(255,255,255,0.2), 0 2px 2px rgba(0, 0, 0, 0.19);
  font-weight: bold;
}

.btn-square-pop:active {
  border-bottom: solid 2px #fd9535;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.30);
}
</style>
