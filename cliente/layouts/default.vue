<template>
  <div>
    <NavMenu/>
    <Nuxt />
  </div>
</template>

<script>
import NavMenu from '@/components/Dashboard/Navigation/NavMenu.vue'
export default {
  components:{
    NavMenu
  },
  middleware:["checkCookies",'logeado']
}
</script>

<style>

</style>
