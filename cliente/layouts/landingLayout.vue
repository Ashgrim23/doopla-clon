<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  middleware:['checkCookies', 'visita']
}
</script>
