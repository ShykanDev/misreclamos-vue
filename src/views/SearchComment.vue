<template>
   <MainLayout>
    <template #main>
      <h1>Buscar comentario</h1>
      <input v-model="search" class="p-2 w-full rounded border border-gray-300" type="text" placeholder="Buscar comentario" />
      <button @click="searchComment" class="p-2 rounded border border-gray-300">Buscar</button>
      {{ data }}
    </template>
   </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { ref } from 'vue';

  const data = ref([])

const search = ref('')
const db = getFirestore();
const complaintsCollection = collection(db, 'complaints');
const q = query(complaintsCollection, where('category', '==', search.value))
const searchComment = () => {
  getDocs(q).then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      data.value.push(doc.data());
    });
  });
}

</script>

<style scoped>

</style>
