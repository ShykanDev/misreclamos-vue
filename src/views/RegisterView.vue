<template>
  <MainLayout>
    <template #main>
      <RegisterComponent @callToggle="toggleModal" />
      <SuccessfullyLoggedIn v-if="success" :user-name="name" />
    </template>
  </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue'
import RegisterComponent from '@/components/Register/RegisterComponent.vue'
import SuccessfullyLoggedIn from '@/modals/Register/SuccessfullyLoggedIn.vue'
import { ref } from 'vue'

//Function to open the success modal

const success = ref(false)
const name = ref('')

const toggleModal = (userName: string): void => {
  success.value = true
  name.value = userName
}
</script>

<style scoped>
/* Tailwind ya maneja todo el estilo, pero puedes agregar personalizaciones aquí si es necesario */
</style>
