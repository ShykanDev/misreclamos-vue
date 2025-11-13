<template>
  <div class="p-4 mx-auto space-y-4 w-full border border-gray-400 bg-slate-200 rounded-4xl">
    <!-- Título -->
    <h2 class="mb-6 text-2xl font-bold text-gray-500">Publicidad</h2>

    <!-- Tarjetas de enlaces -->
    <div class="flex flex-col gap-4 w-full">
      <!-- OficioMaestro -->
      <a
        href="https://oficiomaestro.com/index.php"
        target="_blank"
        rel="noopener noreferrer"
        class="block p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-transparent bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center"
      >
        <div class="p-4 w-full rounded-lg bg-black/60">
          <p class="p-1 text-xl font-semibold text-black rounded-2xl bg-white/80">oficiomaestro.com</p>
          <p class="text-2xl text-white/90">
            Sitio para indagar o reportar a profesionistas y maestros de cualquier área
          </p>
        </div>
      </a>

      <!-- MiEmpleador -->
      <a
        href="https://miempleador.com/"
        target="_blank"
        rel="noopener noreferrer"
        class="block p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-transparent bg-[url('https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center"
      >
        <div class="p-4 w-full rounded-lg bg-black/60">
          <p class="p-1 text-xl font-semibold text-black rounded-2xl bg-white/80">miempleador.com</p>
          <p class="text-2xl text-white/90">
            Sitio para indagar a empleados y empleadores conociendo las experiencias de anteriores
            trabajadores o jefes
          </p>
        </div>
      </a>

      <!-- MiArrendatario -->
      <a
        href="https://miarrendador.com/index.php"
        target="_blank"
        rel="noopener noreferrer"
        class="block p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-transparent bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center"
      >
        <div class="p-4 rounded-lg bg-black/60">
          <p class="p-1 px-1.5 text-lg font-semibold text-black rounded-2xl bg-white/80">miarrendatario.com</p>
          <p class="text-2xl text-white/90">
            Sitio para descubrir a arrendatarios y arrendadores conociendo las experiencias de
            anteriores inquilinos o dueños
          </p>
        </div>
      </a>
    </div>

    <!-- Publicidad -->
    <div class="p-4 mt-6 bg-gray-50 rounded-xl border border-gray-200">
      <fieldset class="space-y-2">
        <legend class="px-2 text-sm font-medium text-gray-500">Publicidad</legend>
        <a href="https://miexpareja.net/" target="_blank" rel="noopener noreferrer" class="block">
          <img
            src="../../assets/img/anuncio-1.png"
            alt="Publicidad"
            class="w-full h-auto rounded-lg"
          />
        </a>
      </fieldset>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>
