<script setup lang="ts">

definePageMeta({
  layout: 'default',
})

</script>

<template>
  <div>
     <ClientOnly>
      <Hero />
      <TradingToken />
     </ClientOnly>
  </div>
</template>

<style scoped>

</style>
