<template>
  <div>
    <DashNavMenu/>
    
    <Nuxt />
  </div>
  
</template>

<script>
import DashNavMenu from '@/components/Dashboard/Navigation/DashNavMenu.vue'
export default {
  components:{
    DashNavMenu
  },
  middleware:["checkCookies",'logeado']
}
</script>

<style>

</style>
