<script setup>
import Header from '../components/base/Header.vue'
import Footer from '../components/base/Footer.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Header />

    <!-- Page Content -->
    <main class="flex-grow container mx-auto p-6">
      <slot />
    </main>
    <Footer />
  </div>
</template>
