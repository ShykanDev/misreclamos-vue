<template>
   <article class="mt-2 text-center text-purple-500 hover:text-purple-700">
    <div
      class="flex fixed inset-0 z-50 justify-center items-center p-4 backdrop-blur-sm bg-black/40 min-h-dvh"
    >
      <!-- Contenedor del modal -->
      <div
        class="p-8 m-4 w-full max-w-md rounded-2xl border-2 border-pink-500 border-dotted shadow-2xl backdrop-blur-lg transition-all duration-300 transform scale-95 bg-white/90 hover:scale-100"
      >
        <!-- Icono y título -->
        <div class="flex flex-col items-center mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="mb-3 w-12 h-12 text-pink-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
          <h2 class="text-2xl font-bold text-gray-800">Restablecer contraseña</h2>
          <p class="mt-1 text-sm text-gray-500">
            Ingresa tu correo para recibir el enlace de recuperación
          </p>
        </div>

        <!-- Formulario -->
        <form @submit.prevent="handleSubmit" class="space-y-5">
          <div>
            <label for="email" class="block mb-1 text-sm font-medium text-gray-700">
              Correo electrónico
            </label>
            <input
              v-model="email"
              type="email"
              id="email"
              class="px-4 py-3 w-full rounded-lg border border-gray-300 transition-all outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              placeholder="ejemplo@correo.com"
              required
            />
          </div>

          <!-- Botones -->
          <div class="flex flex-col space-y-3">
            <button
              type="submit"
              class="px-4 py-3 w-full font-medium text-white bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg transition-all hover:from-pink-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
              :disabled="isLoading"
            >
              <span v-if="!isLoading">Enviar enlace</span>
              <span v-else class="flex justify-center items-center">
                <svg
                  class="mr-2 -ml-1 w-4 h-4 text-white animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Enviando...
              </span>
            </button>
            <button
              type="button"
              @click="closeModal"
              class="px-4 py-2 w-full text-gray-700 rounded-lg border border-gray-300 transition-all cursor-pointer outline-none hover:-translate-y-1 hover:bg-gray-50"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  </article>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css'; // for React, Vue and Svelte


const notyf = new Notyf({
  position: { x: 'right', y: 'top' },
});
const email = ref('');
const emmits  = defineEmits(['callClose']);

const auth = getAuth();
const handleSubmit = async() => {
  try {
    await sendPasswordResetEmail(auth, email.value);
    notyf.success('Se ha enviado un enlace de recuperación a tu correo');
  } catch (error) {
    notyf.error('Hubo un error al enviar el enlace de recuperación');
  }
}

const closeModal = () => {
  emmits('callClose');
}

</script>

<style scoped>

</style>
