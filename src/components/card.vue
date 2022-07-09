<script setup>
</script>
<template>
  <div class="Card bg-white border">
    <div class="CardHeader">
      <slot name="header"></slot>
    </div>
    <div>
      <slot>No Content</slot>
    </div>
    <div>
      <slot name="footer"></slot>
    </div>
  </div>
</template>
