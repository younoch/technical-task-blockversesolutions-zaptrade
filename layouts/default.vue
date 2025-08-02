<script setup>
import Header from '../components/base/Header.vue'
import Footer from '../components/base/Footer.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-[#181A20]">
    <Header />

    <!-- Page Content -->
    <main class="          ">
      <slot />
    </main>
    <Footer />
  </div>
</template>
