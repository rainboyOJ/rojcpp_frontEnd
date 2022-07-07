<script setup>
import ButtonRepo from '@/components/ButtonRepo.vue'
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'

</script>

<template>
  <div class="bg-gray-50">
    <Nav></Nav>
    <div class="xl:w-xl mx-auto">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>
