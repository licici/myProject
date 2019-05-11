<template>
  <div id="app">
    <!-- <keep-alive >
      <router-view/>
    </keep-alive> -->
    <template v-if="$route.meta && $route.meta.keep">
      <keep-alive >
        <router-view/>
      </keep-alive>
    </template>
    <template v-else>
      <router-view/>
    </template>
  </div>
</template>

<script>
export default {
    name: 'App',
    mounted () {
        console.log(this.$route.meta)
    }
}
</script>
