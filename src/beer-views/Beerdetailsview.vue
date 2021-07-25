<template>
  <section class="content">
    <div v-if="Object.keys(product).length === 0">No results</div>
    <div v-else class="container">
      <div class="punkt">
        <div class="name">
          <h1> {{ product.name}}</h1>
          <h3>{{ product.tagline }}</h3>
        </div>

        <div class="list">
          <p class="level">ABV: {{ product.abv }}</p>
          <p class="level">PH: {{ product.ph }}</p>
          <p class="level">Attenuation level: {{ product.attenuation_level }}</p>
        </div>
      </div>

      <div class="text">
        <img alt="big images beer" :src="product.image_url" height="250">
        <p>{{ product.description }}</p>
      </div>
    </div>
  </section>

</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: "Beerdetailsview",
  computed: {
    products() {
      return this.$store.state.products
    },
    product() {
      let result = {}
      let vm = this
      this.products.map(function (item) {
        if (item.name === vm.$route.query.beer) {
          result = item
        }
      })
      return result
    }
  },
  methods: {
    ...mapActions([
      'get_products_from_api'
    ]),
  },
  mounted() {
    this.get_products_from_api()
  }
}
</script>

<style scoped lang="scss">

.content {
  display: flex;
  justify-content: center;
  align-items: center;

}
.container {
  display: flex;
  flex-direction: column;
  background-color: #FF0051;
  font-size: 20px;
  width: 500px;
  padding-top: 20px;
  border-radius: 50px;
  margin: 20px;
  h1, h3 {
    padding: 10px;
    color: darkslateblue;
  }
  .list {
    display: flex;
    flex-direction: column;
    margin: 20px;

    p {
      color: darkslateblue;
      border-radius: 2px;
      margin-bottom: 8px;
    }
  }
  .text {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: auto;
    img {
      margin: 20px;
    }
    p {
      max-width: 300px;
      border: 2px solid darkslateblue;
      margin: 15px 15px;
      padding: 10px;
      box-sizing: border-box;
      border-radius: 22px;
      color: darkslateblue;
      font-size: 18px;
      font-weight: bold;
    }
  }
}
</style>
