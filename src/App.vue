<template>
  <div id="app">
    <div id="nav">
      <Search />
    </div>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import Search from '@/components/Search.vue'

export default {
  name: 'App',
  components: {
    Search
  },
}
</script>

<style lang="scss">
@import 'assets/font.css';
@import 'assets/reset.css';
#app {
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  width: 100%;
  margin: 100px auto;
  text-align: center;
  color: #ffffff;
}

#nav {
  a {
    font-weight: bold;
    color: #2c3e50;
    margin: 10px;
   /* &.router-link-exact-active {
      color: #f1f1f1;
    }*/
  }
}
</style>
