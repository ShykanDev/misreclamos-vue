<template>
   <MainLayout>
    <template #main>
      <section class="px-4 py-12 mx-auto max-w-6xl sm:px-6 lg:px-8">
    <div class="mb-12 text-center">
      <h2 class="mb-4 text-3xl font-bold text-secondary">Centro de Ayuda</h2>
      <p class="mx-auto max-w-2xl text-lg text-gray-600">
        Si no encuentras la solución a tu duda, puedes ponerte en contacto con nosotros aquí. Tienes un contacto directo con nosotros para cualquier duda, consejo o reclamo.
      </p>
      <a
        href="#contacto"
        class="inline-block px-6 py-3 mt-6 font-medium text-white rounded-lg transition duration-300 ease-in-out transform bg-primary hover:bg-secondary hover:scale-105"
      >
        Contactar
      </a>
    </div>

    <!-- Pestañas -->
    <div class="mb-12">
      <div class="flex justify-center mb-6 border-b border-gray-200">
        <button
          id="faq-tab"
          class="px-4 py-2 text-lg font-medium text-gray-500 hover:text-primary"
          :class="{ 'border-b-2 border-b-rose-600': activeTab === 'faq' }"
          @click="openTab('faq')"
        >
          Preguntas Frecuentes
        </button>
        <button
          id="recent-tab"
          class="px-4 py-2 text-lg font-medium text-gray-500 hover:text-primary"
          :class="{ 'border-b-2 border-b-rose-600': activeTab === 'recent' }"
          @click="openTab('recent')"
        >
          Preguntas Recientes
        </button>
      </div>

      <!-- Contenido de Pestañas -->
      <div id="faq" :class="{ hidden: activeTab !== 'faq' }" class="tab-content">
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
          <!-- Tarjeta FAQ -->
          <div class="p-6 bg-white rounded-lg border-l shadow-md transition-shadow duration-300 hover:shadow-lg border-l-rose-500">
            <h3 class="mb-4 text-xl font-semibold text-secondary">¿Son seguros los comentarios?</h3>
            <p class="text-gray-600">
              Los comentarios son responsabilidad del usuario quien los crea. No podemos afirmar o dar porcentajes de fidelidad de lo que dice cada usuario. Suponemos y creemos en la veracidad y los valores de cada individuo y en que los empleadores y empleados tienen la oportunidad de responder a un comentario para debatir o solicitar más información.
            </p>
          </div>
          <!-- Tarjeta FAQ -->
          <div class="p-6 bg-white rounded-lg border-l shadow-md transition-shadow duration-300 hover:shadow-lg border-l-rose-500">
            <h3 class="mb-4 text-xl font-semibold text-secondary">Quiero editar un comentario</h3>
            <p class="text-gray-600">
              Puedes editar el comentario solo si es tuyo. Haz clic en "Visualizar comentario" y luego en "Editar Comentario".
            </p>
          </div>
          <!-- Tarjeta FAQ -->
          <div class="p-6 bg-white rounded-lg border-l shadow-md transition-shadow duration-300 hover:shadow-lg border-l-rose-500">
            <h3 class="mb-4 text-xl font-semibold text-secondary">¿Cómo editar mi nombre de usuario?</h3>
            <p class="text-gray-600">
              Una vez iniciada la sesión, dirígete a "Mi Perfil" y podrás editar tus datos.
            </p>
          </div>
          <!-- Tarjeta FAQ -->
          <div class="p-6 bg-white rounded-lg border-l shadow-md transition-shadow duration-300 hover:shadow-lg border-l-rose-500">
            <h3 class="mb-4 text-xl font-semibold text-secondary">¿Cómo puedo cambiar mi nombre en la publicación?</h3>
            <p class="text-gray-600">
              Al llenar el formulario, el nombre de usuario aparecerá visible. Si no deseas que aparezca ese nombre, podrás editarlo desde "Perfil".
            </p>
          </div>
          <!-- Tarjeta FAQ -->
          <div class="p-6 bg-white rounded-lg border-l shadow-md transition-shadow duration-300 hover:shadow-lg border-l-rose-500">
            <h3 class="mb-4 text-xl font-semibold text-secondary">El sitio protege su información</h3>
            <p class="text-gray-600">
              El dato obligatorio es el nombre de la empresa o persona sobre el empleador o empleado. <strong>Sus datos, sus decisiones.</strong>
            </p>
          </div>
          <!-- Tarjeta FAQ -->
          <div class="p-6 bg-white rounded-lg border-l shadow-md transition-shadow duration-300 hover:shadow-lg border-l-rose-500">
            <h3 class="mb-4 text-xl font-semibold text-secondary">Quiero que se quite un comentario</h3>
            <p class="text-gray-600">
              Si eres el dueño del comentario, puedes eliminarlo desde la opción "Eliminar comentario". Si no es tuyo y crees que afecta tu imagen o la información es falsa, <a href="#contacto" class="text-primary hover:underline">contáctanos aquí</a>. Se revisará el comentario y, si no cumple nuestros Términos, se eliminará automáticamente. Al eliminar el comentario, también se eliminarán las respuestas asociadas. Si cumple los Términos, podrás responder defendiendo tu postura y pedir al autor que lo elimine.
            </p>
          </div>
          <!-- Tarjeta FAQ -->
          <div class="p-6 bg-white rounded-lg border-l shadow-md transition-shadow duration-300 hover:shadow-lg border-l-rose-500">
            <h3 class="mb-4 text-xl font-semibold text-secondary">¿Puedo comunicarme con el autor del comentario?</h3>
            <p class="text-gray-600">
              Actualmente no hay una función directa para contactar al autor, pero puedes responder a su comentario públicamente.
            </p>
          </div>
        </div>
      </div>

      <!-- Preguntas Recientes -->
      <div id="recent" :class="{ hidden: activeTab !== 'recent' }" class="tab-content">
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
          <!-- Tarjeta Recent -->
          <div class="p-6 bg-white rounded-lg border-l shadow-md transition-shadow duration-300 hover:shadow-lg border-l-rose-500">
            <h3 class="mb-4 text-xl font-semibold text-secondary">¿Es gratis?</h3>
            <p class="text-gray-600">
              El sitio es en su totalidad gratuito. Ayúdanos compartiendo para que así siga siendo accesible para todos.
            </p>
          </div>
          <!-- Tarjeta Recent -->
          <div class="p-6 bg-white rounded-lg border-l shadow-md transition-shadow duration-300 hover:shadow-lg border-l-rose-500">
            <h3 class="mb-4 text-xl font-semibold text-secondary">¿Cómo puedo buscar por nombre?</h3>
            <p class="text-gray-600">
              Tenemos habilitado un buscador en la parte superior de la barra de navegación. Para visualizar los comentarios completos, necesitas iniciar sesión.
            </p>
          </div>
          <!-- Tarjeta Recent -->
          <div class="p-6 bg-white rounded-lg border-l shadow-md transition-shadow duration-300 hover:shadow-lg border-l-rose-500">
            <h3 class="mb-4 text-xl font-semibold text-secondary">¿Por qué no responden al momento cuando les mando mensajes?</h3>
            <p class="text-gray-600">
              Las respuestas dependen de la cantidad de correos recibidos. Todos los mensajes son revisados y respondidos en orden de llegada.
            </p>
          </div>
          <!-- Tarjeta Recent -->
          <div class="p-6 bg-white rounded-lg border-l shadow-md transition-shadow duration-300 hover:shadow-lg border-l-rose-500">
            <h3 class="mb-4 text-xl font-semibold text-secondary">¿Puedo incluir imágenes y evidencia a mi comentario?</h3>
            <p class="text-gray-600">
              Sí, puedes incluir hasta 3 imágenes (cada una menor a 1MB) en formatos .JPG, .PNG, .JPEG y un archivo PDF (menor a 1MB).
            </p>
          </div>
          <!-- Tarjeta Recent -->
          <div class="p-6 bg-white rounded-lg border-l shadow-md transition-shadow duration-300 hover:shadow-lg border-l-rose-500">
            <h3 class="mb-4 text-xl font-semibold text-secondary">¿Tengo represalias al comentar?</h3>
            <p class="text-gray-600">
              En absoluto, la página no comparte tus datos personales. Tú decides qué mostrar y qué no en la página.
            </p>
          </div>
          <!-- Tarjeta Recent -->
          <div class="p-6 bg-white rounded-lg border-l shadow-md transition-shadow duration-300 hover:shadow-lg border-l-rose-500">
            <h3 class="mb-4 text-xl font-semibold text-secondary">¿Cómo sé qué datos son verdaderos y cuáles no?</h3>
            <p class="text-gray-600">
              La página no se hace responsable de ningún comentario. Los autores comparten sus experiencias directas o como testigos. La ética y honestidad son valores individuales.
            </p>
          </div>
          <!-- Tarjeta Recent -->
          <div class="p-6 bg-white rounded-lg border-l shadow-md transition-shadow duration-300 hover:shadow-lg border-l-rose-500">
            <h3 class="mb-4 text-xl font-semibold text-secondary">¿Qué son las asesorías gratuitas?</h3>
            <p class="text-gray-600">
              Próximamente ofreceremos apoyo gratuito a consumidores. Si tienes dudas legales, podrás recibir atención personalizada por videollamada con abogados especializados, sin costo alguno.
            </p>
          </div>
          <!-- Tarjeta Recent -->
          <div class="p-6 bg-white rounded-lg border-l shadow-md transition-shadow duration-300 hover:shadow-lg border-l-rose-500">
            <h3 class="mb-4 text-xl font-semibold text-secondary">No encuentro comentarios de mi búsqueda</h3>
            <p class="text-gray-600">
              Si no encuentras experiencias sobre la empresa, producto, servicio o persona, ¡sé el primero en comentar! Inicia sesión y haz clic en "Comentar" en la barra superior.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Sección de Contacto -->
    <div id="contacto" class="p-8 text-center bg-white rounded-lg shadow-md">
      <h3 class="mb-4 text-2xl font-bold text-secondary">¿Necesitas ayuda adicional?</h3>
      <p class="mb-6 text-gray-600">
        Si tu duda no está resuelta, escríbenos y te ayudaremos lo antes posible.
      </p>
      <a
        href="mailto:contacto@tusitio.com"
        class="inline-block px-6 py-3 font-medium text-white rounded-lg transition duration-300 ease-in-out transform bg-accent hover:bg-secondary hover:scale-105"
      >
        Enviar Mensaje
      </a>
    </div>
  </section>
    </template>
   </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';
import { ref } from 'vue';
const activeTab = ref('faq');

function openTab(tabName: string) {
  activeTab.value = tabName;
}

</script>

<style scoped>

</style>
