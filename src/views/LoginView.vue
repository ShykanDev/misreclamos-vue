<template>
  <MainLayout>
    <template #main>
      <LoginComponent />
    </template>
  </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue'
import LoginComponent from '@/components/Login/LoginComponent.vue'
</script>

<style scoped></style>
