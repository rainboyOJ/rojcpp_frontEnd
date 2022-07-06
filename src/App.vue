<script setup>
import { ref } from 'vue'


let counter = ref(0)

</script>

<template>
  <div>
    <header class="bg-white shadow" v-if="$route.meta.title">
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>
