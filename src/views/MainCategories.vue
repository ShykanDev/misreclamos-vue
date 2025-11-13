<template>
  <MainLayout>
    <template #main>
      <!-- Home Initial -->
      <HomeInitial />

      <!--Start of the comments UI-->
      <section
        class="grid grid-cols-1 sm:grid-cols-[1fr_2fr_1fr] w-full bg-gradient-to-b from-blue-50 to-gray-100"
      >
        <!--Categories-->
        <article class="hidden overflow-y-scroll h-dvh sm:block">
          <CategoriesComponent />
        </article>

        <!--Comments-->
        <article class="overflow-y-scroll px-2 h-dvh">
          <h2 class="flex sticky top-0 z-10 gap-2 items-center p-2 text-xl font-bold text-center text-white bg-rose-800 rounded-md just"> <v-icon name="hi-solid-chat-alt-2" class="text-white" scale="2" /> Comentarios mas recientes</h2>
          <CommentsComponent />
        </article>

        <!--Ads-->
        <article class="hidden overflow-y-scroll p-6 bg-gray-100 rounded-sm h-dvh sm:block">
          <AdsComponent />
        </article>
      </section>
    </template>
  </MainLayout>
</template>

<script lang="ts" setup>
import 'animate.css'
import CategoriesComponent from '@/components/MainCategories/CategoriesComponent.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import HomeInitial from '@/components/Index/HomeInitial.vue'
import CommentsComponent from '@/components/Index/CommentsComponent.vue'
import AdsComponent from '@/components/Index/AdsComponent.vue'
import { ref } from 'vue'

//last comment date for comments section
const lastComment = ref();

const setLastComment = (date: string) => lastComment.value = date;

</script>

<style scoped></style>
