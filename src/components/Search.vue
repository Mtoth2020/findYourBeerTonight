<template>
  <div>
    <div class="intro">FIND YOUR BEER TONIGHT :-)
    <button class="home" @click="navigateToHome()">
      <img src="../assets/images/icons8-home.svg" alt="button home" width="80" height="80" >
    </button>
    </div>
    <form
        class="search"
        @submit.prevent="searchBeer"
    >
      <input
          type="text"
          aria-label="Search"
          autocomplete="off"
          placeholder="search"
          :maxlength="max"
          v-model="keyword"
      />
      <button class="search" name="search">
        <img alt="button search"  src="../assets/images/magnifying-glass.svg" width="40">
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Search',
  data: function () {
    return {
      max: 20,
      keyword: '',
    }
  },
  methods: {
    ...mapActions([
      'get_search_value'
    ]),
    searchBeer() {
      this.$http
          .get('https://api.punkapi.com/v2/beers?beer_name=' + this.keyword)
          .then(response => {
            this.$store.commit('set_products', response.data)
          })
          .catch(error => {
            console.log(error)
          })
      this.$router.push('/beerlistview').catch(()=>{})
    },
    navigateToHome() {
      this.$router.push('/')
      this.$router.go(0)
    }
  },
}
</script>

<style scoped lang="scss">

.intro {
  font-size: 50px;
  color: white;
  font-weight: bold;
  margin-bottom: 50px;
}
form {
  margin: 0 0 35px;
  padding: 30px;
  position: relative;
  display: flex;
}
input {
  position: relative;
  width: 100%;
  height: 57px;
  border-radius: 100px;
  font-size: 30px;
  line-height: 1.4em;
  color: #1C1C1C;
  padding: 13px 70px 16px 24px;
  background-color: #F1F1F1;
  box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
  box-sizing: border-box;
}
button {
  flex-shrink: 0;
  position: absolute;
  right: 45px;
  top: 38px;
  width: 40px;
  height: 50px;
  user-select: none;
}
.home {
  margin-top: 45px;
  margin-right: 120px;
  width: 80px;
  height: 80px;
}
</style>
