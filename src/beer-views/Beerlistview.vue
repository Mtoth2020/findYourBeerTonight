<template>
  <div>
    <section v-if="loading">
      <h2>loading...</h2>
    </section>
    <ul v-if="!loading">
      <Beercard
          v-for="product in this.products"
          :key="product.id"
          :product="product"
          @productClick="productClick"
      />
    </ul>
  </div>
</template>

<script>

import Beercard from '../components/Beercard'
import { mapActions, mapState } from 'vuex'

export default {
name: 'Beerlistview',
  components: {
    Beercard,
  },
  data() {
    return {
      sortedProducts: [],
      minAbv: 0,
      maxAbv: 20
    }
  },
  computed: {
    products() {
      return this.$store.state.products
    },
    ...mapState([
      'loading'
    ]),
  },
  methods: {
    ...mapActions([
      'get_products_from_api'
    ]),
    productClick(name) {
      this.$router.push({name: 'Beerdetailsview' , query: {'beer': name}})
    },
  },
  mounted() {
    this.get_products_from_api()
        .then((response) => {
          if (response.data) {
            console.log('data.arrived')
          }
        })
  }
}

</script>

<style lang="scss" scoped>
main {
  display: flex;
  justify-content: space-between;
}

ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

h2 {
  margin-bottom: 20px;
  font-size: 35px;
}

</style>
