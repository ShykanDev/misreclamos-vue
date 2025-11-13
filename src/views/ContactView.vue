<template>
   <MainLayout>
    <template #main>
      <section class="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
    <div class="container px-4 mx-auto">
      <!-- Título principal -->
      <h2 class="mb-6 text-4xl font-bold text-center text-gray-800">
        ¿Necesitas ayuda o modificar tus datos?
      </h2>

      <!-- Descripción principal -->
      <p class="mx-auto mb-12 max-w-3xl text-lg text-center text-gray-600">
        Si tienes dudas, necesitas ayuda con algún tema o deseas que tus datos sean modificados,
        envíanos un correo a:
        <a
          href="mailto:informes@grupochimex.com"
          class="font-medium text-indigo-600 hover:underline"
        >
          informes@grupochimex.com
        </a>
      </p>

      <!-- Instrucciones destacadas -->
      <div class="p-8 mx-auto mb-16 max-w-4xl bg-white rounded-xl shadow-lg">
        <h3 class="mb-4 text-2xl font-semibold text-center text-gray-800">
          ¿Qué debes incluir en tu correo?
        </h3>
        <ul class="pl-6 space-y-3 list-disc text-gray-600">
          <li>
            <strong>Asunto claro:</strong>
            Ejemplo: "Solicitud de modificación de datos" o "Duda sobre [tema]".
          </li>
          <li>
            <strong>Nombre completo:</strong>
            Para identificarte fácilmente.
          </li>
          <li>
            <strong>Descripción detallada:</strong>
            Explica tu solicitud o duda de manera específica.
          </li>
          <li>
            <strong>Datos de contacto:</strong>
            Correo o teléfono por si necesitamos confirmar algo contigo.
          </li>
        </ul>
      </div>

      <!-- Cards de opciones -->
      <div class="grid grid-cols-1 gap-8 mb-16 md:grid-cols-3">
        <!-- Card 1: Modificación de Datos -->
        <div class="flex flex-col items-center p-8 text-center bg-white rounded-xl shadow-lg transition-shadow hover:shadow-xl">
          <div class="p-4 mb-6 bg-indigo-100 rounded-full">
          </div>
          <h3 class="mb-2 text-xl font-semibold text-gray-800">Modificar Datos</h3>
          <p class="text-gray-600">
            Envíanos un correo con los cambios que necesitas.
            <strong>Ejemplo:</strong> "Quiero actualizar mi dirección a [nueva dirección]", "Quiero borrar mi comentario", "Quiero modificar mi correo electrónico", "Quiero borrar mi cuenta".
          </p>
        </div>

        <!-- Card 2: Dudas Generales -->
        <div class="flex flex-col items-center p-8 text-center bg-white rounded-xl shadow-lg transition-shadow hover:shadow-xl">
          <div class="p-4 mb-6 bg-indigo-100 rounded-full">
          </div>
          <h3 class="mb-2 text-xl font-semibold text-gray-800">Dudas o Preguntas</h3>
          <p class="text-gray-600">
            ¿No entiendes algo? Escríbenos y te ayudamos.
            <strong>Ejemplo:</strong> "¿Cómo funciona el proceso de [X]?".
          </p>
        </div>

        <!-- Card 3: Soporte Técnico -->
        <div class="flex flex-col items-center p-8 text-center bg-white rounded-xl shadow-lg transition-shadow hover:shadow-xl">
          <div class="p-4 mb-6 bg-indigo-100 rounded-full">

          </div>
          <h3 class="mb-2 text-xl font-semibold text-gray-800">Soporte Técnico</h3>
          <p class="text-gray-600">
            ¿Problemas con la plataforma? Describe el error y adjunta capturas si es posible.
          </p>
        </div>
      </div>

      <!-- Botón destacado para enviar correo -->
      <div class="text-center">
        <a
          href="mailto:informes@prasadam.mx"
          class="inline-block px-8 py-4 font-semibold text-white bg-indigo-600 rounded-lg transition-colors hover:bg-indigo-700"
        >
          Enviar Correo Ahora
        </a>
      </div>
      <div class="mt-2 text-center">
        <span class="text-sm italic text-gray-600"> Será redirigido a su app de correo, o si bien lo prefiere mande manualmente un correo a informes@prasadam.mx</span>
      </div>

      <!-- Información adicional -->
      <div class="mx-auto mt-16 max-w-2xl text-center text-gray-600">
        <p class="mb-2">
          Tus datos están protegidos y solo serán usados para responder a tu solicitud.
        </p>

      </div>
    </div>
  </section>
    </template>
   </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';


</script>

<style scoped>

</style>
