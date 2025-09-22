<template>
      <section
    class="flex fixed inset-0 z-50 justify-center items-center p-4 w-full backdrop-blur-sm bg-black/30 min-h-dvh"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <!-- Contenedor de la tarjeta -->
    <div
      class="w-full max-w-md mx-4 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-[1.01] p-8 text-center animate__animated animate__flipInX"
    >
      <!-- Icono de éxito (opcional) -->
      <div class="flex justify-center mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-16 h-16 text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>

      <!-- Título -->
      <h2
        id="modal-title"
        class="mb-3 text-2xl font-bold text-gray-800"
      >
        ¡Cuenta creada con éxito, {{ userName || 'user' }}!
      </h2>

      <!-- Mensaje principal -->
      <p class="mb-6 leading-relaxed text-gray-600">
        Ahora puede comentar y compartir sus denuncias o reclamos sobre empresas injustas.
        <span class="font-semibold text-gray-800">Su voz puede hacer la diferencia.</span>
      </p>

      <!-- Botón de acción -->
      <router-link
        to="/"
        class="inline-block px-6 py-3 w-full font-medium text-white bg-gradient-to-r from-green-600 to-green-600 rounded-xl shadow-lg transition-all duration-200 transform hover:from-green-700 hover:to-green-700 hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
      >
        Ir a Iniciar Sesión
      </router-link>
    </div>
  </section>
</template>

<script lang="ts" setup>

const props = defineProps<{ userName: string }>();
</script>

<style scoped>

</style>
