<template>
  <MainLayout>
    <template #main>
      <AnimationLoader v-if="isLoading" class="flex fixed inset-0 z-40 justify-center items-center bg-black/50" />
      <div v-else
        class="flex flex-col justify-center items-center p-6 mx-auto space-y-6 min-h-screen bg-gradient-to-br from-indigo-50 to-pink-50">
        <!-- Card principal -->
        <div
          class="p-8 space-y-6 w-full max-w-md bg-white rounded-3xl shadow-xl transition-all duration-300 hover:shadow-2xl">
          <!-- Título con estilo moderno -->
          <h1
            class="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
            Verificar correo
          </h1>

          <!-- Mensaje de éxito (con animación) -->
            <div v-if="isSuccess" class="p-4 text-center text-green-700 bg-green-50 rounded-xl animate-fade-down">
              <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto mb-2 w-8 h-8 text-green-500" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <p class="font-medium">¡Correo verificado con éxito!</p>
              <p class="mt-2 text-sm">Ahora puede iniciar sesión con su correo y contraseña.</p>
              <p>¡Bienvenido a misreclamos.com!</p>
              <RouterLink :to="{ name: 'login' }" class="inline-flex items-center px-4 py-2 mt-4 text-white bg-indigo-600 rounded-lg transition-colors duration-200 hover:bg-indigo-700">Iniciar sesión</RouterLink>
            </div>

          <!-- Mensaje de error (con animación) -->
            <div v-if="isError" class="p-4 text-center text-red-700 bg-red-50 rounded-xl animate-fade-up">
              <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto mb-2 w-8 h-8 text-red-500" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              <p class="font-medium">Error al verificar el correo, código de error: {{ errorMessage }}</p>
              <p class="mt-2 text-sm">Por favor, verifique que los parámetros del enlace sean correctos.</p>
            </div>


        </div>
      </div>
    </template>
  </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { applyActionCode, getAuth } from 'firebase/auth';
import AnimationLoader from '@/animations/Loaders/LoaderA.vue';
import LoaderA from '@/animations/Loaders/LoaderA.vue';
const isLoading = ref(false);
const route = useRoute();

const mode = route.query.mode;
const oobCode = route.query.oobCode;

const auth = getAuth();

const isSuccess = ref(false);
const isError = ref(false);
const errorMessage = ref('');
const validateEmail = async () => {
  if (mode !== 'verifyEmail') {
    isError.value = true;
    errorMessage.value = 'Invalid URL "Mode" parameter is not a valid value, does the URL have a valid "Mode" parameter?';
    throw new Error('URL has not a valid "Mode" parameter');
  }
  if (!oobCode) {
    isError.value = true;
    errorMessage.value = 'Invalid URL "OOB" parameter is not a valid value, does the URL have a valid "OOB" parameter?';
    throw new Error('URL has not a valid "OOB" parameter');
  }
  try {
    isLoading.value = true;
    await applyActionCode(auth, oobCode as string)
    isSuccess.value = true;
    isLoading.value = false;
  } catch (error) {
    const e = error as Error;
    console.log(e);
    isError.value = true;
    isLoading.value = false;
    errorMessage.value = e.code;
  }
}
onMounted(() => {
  validateEmail();
})
</script>

<style scoped></style>
