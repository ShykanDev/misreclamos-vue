<template>
  <div class="overflow-hidden m-4 mx-auto max-w-md bg-white rounded-xl border-b-4 border-l-4 border-rose-800 shadow-md md:max-w-2xl">
    <div class="p-6">
      <!-- Header: Fecha y Grupo -->
      <div class="flex justify-between items-center mb-4">
        <span class="text-sm font-medium text-gray-500">{{ fecha }}</span>
        <span class="text-sm font-semibold text-gray-700">{{ grupo }}</span>
      </div>

      <!-- Título y Tiempo -->
      <div class="flex gap-2 items-center mb-2">
        <h3 class="text-xl font-bold text-gray-800">{{ titulo }}</h3>
        <span class="px-2 py-1 text-sm font-medium text-rose-500 bg-rose-50 rounded-full">
          {{ tiempo }}
        </span>
      </div>

      <!-- Icono y Subtítulo -->
      <div class="flex gap-3 items-center mb-4">
        <div class="flex justify-center items-center w-10 h-10 bg-gray-100 rounded-full">
          <img
            v-if="icono"
            :src="icono"
            alt="Icono"
            class="object-contain w-6 h-6"
          />
          <span v-else class="font-medium text-gray-500">{{ iniciales }}</span>
        </div>
        <span class="text-lg font-semibold text-gray-700">{{ subtitulo }}</span>
      </div>

      <!-- Categoría -->
      <div class="mb-3">
        <span class="text-sm font-medium text-gray-600">{{ categoria }}</span>
      </div>

      <!-- Contenido -->
      <div class="mb-4">
        <p class="text-gray-700">{{ contenido }}</p>
      </div>

      <!-- Evidencia y Botón -->
      <div class="flex justify-between items-center pt-4 border-t border-gray-100">
        <span class="text-sm text-gray-500">{{ evidencia }}</span>
        <button
          @click="$emit('ver-comentario')"
          class="px-4 py-2 text-sm font-medium text-white bg-rose-900 rounded-lg transition-colors cursor-pointer hover:bg-rose-700 active:bg-rose-800"
        >
          Visualizar Comentario
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  fecha: {
    type: String,
    default: "2021-07-09"
  },
  grupo: {
    type: String,
    default: "Monica"
  },
  titulo: {
    type: String,
    default: "Mal servicio"
  },
  tiempo: {
    type: String,
    default: "99 MINUTOS"
  },
  icono: {
    type: String,
    default: ""
  },
  subtitulo: {
    type: String,
    default: "NO SON PUNTUALES"
  },
  categoria: {
    type: String,
    default: "Paquetería y Correos"
  },
  contenido: {
    type: String,
    default: "Solicitamos una entrega con esta paqueteria y pedimos recolección, cuando esta quedo programada de un día para el siguiente resulto que al final querían pasar después de una semana por el paquete..."
  },
  evidencia: {
    type: String,
    default: "Se ingreso un archivo de evidencia"
  }
});

const iniciales = props.grupo.slice(0, 2);
</script>
