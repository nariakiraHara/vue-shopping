<template>
  <div v-if="items != null">
    <p class="company-name">{{companyName}}</p>
    <section class="card shopping-items" v-for="(item, index) in displayLimit" :key="index">
      <a class="card-link" v-bind:href="item.productUrl" target="_blank">
        <img class="card-img" v-bind:src="item.productImageUrl" alt="">
        <div class="card-content">
          <p class="card-text">{{`${item.productName.substring(0,25)}...`}}</p>
          {{item.productPrice}}円
        </div>
      </a>
    </section>
    <a class="lnk-more" href="javascript:void(0)" @click.prevent.stop="lnkMore">もっとみる>></a>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ItemList extends Vue {
  @Prop() public items?: any = null;
  @Prop() public companyName?: string = undefined;
  private isExpand = false;

  get displayLimit() {
    return this.isExpand ? this.items.items : this.items.items.slice(0,5)
  }

  private lnkMore() {
    this.isExpand = !this.isExpand
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
.shopping-items {
  display: inline-flex;
}
.card {
  width: 300px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px #ccc;
}
.card-img {
  border-radius: 5px 5px 0 0;
  max-width: 100%;
  height: auto;
}
.card-content {
  padding: 20px;
}
.card-title {
  font-size: 20px;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
}
.card-text {
  color: #777;
  font-size: 14px;
  line-height: 1.5;
}
.card-link {
  text-align: center;
  border-top: 1px solid #eee;
  padding: 20px;
}
.card-link a {
  text-decoration: none;
  color: #0bd;
  margin: 0 10px;
}
.card-link a:hover {
  color: #0090aa;
}
.lnk-more a {
  display: block;
}
</style>
