<template>
   <MainLayout>
    <template #main>
      <section class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div class="">
          <CategoriesComponent />
        </div>

        <div class="overflow-y-scroll relative col-span-2 h-dvh">
          <h2 class="sticky top-0 left-0 z-10 px-2 py-1 text-rose-800 bg-white">{{ (category === 'default' ? 'Comentarios Generales' : 'Comentarios de la categoría: ' + category) }}</h2>
          <div v-if="loading" class="flex flex-col justify-center items-center">
            <v-icon name="ri-loader-5-fill" class="mx-auto text-rose-600" animation="spin" scale="7.5" speed="fast"/>
            <p class="text-center text-slate-800">Cargando comentarios...</p>
          </div>
          <div v-if="complaints.length > 0">
            <CommentCard v-for="complaint in complaints" :key="complaint.createdAt" :category="complaint.category" :content="complaint.content" :createdAt="complaint.createdAt" :id="complaint.id" :image="complaint.image" :title="complaint.title" :user="complaint.userName" :userUID="complaint.userUID" :service="complaint.service" :date="complaint.createdAt" :userName="complaint.userName" />
          </div>
          <p v-else>No hay comentarios para esta categoría</p>
        </div>
      </section>
    </template>
   </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';
import CategoriesComponent from '@/components/MainCategories/CategoriesComponent.vue';
import { useRoute } from 'vue-router';
import { collection, getDoc, getDocs, getFirestore, orderBy, query, where } from 'firebase/firestore';
import type { IComplaint } from '@/Interfaces/IComplaint';
import { computed, onMounted, ref, watch } from 'vue';
import CommentCard from '@/components/CommentCard.vue';
const route  = useRoute();

const complaints = ref<IComplaint[]>([])
const loading = ref(false)

const db = getFirestore();
const complaintsCollection = collection(db, 'complaints')
const category = computed(() => route.params.category || 'default')
const qGetComplaints = query(complaintsCollection, orderBy('createdAt', 'desc'))
let qGetComplaintsCategory = query(complaintsCollection, orderBy('createdAt', 'desc'), where('category', '==', category.value))

const getComplaints = () => {
  complaints.value = [];
  const dynamicVal = category.value === 'default' ? qGetComplaints : qGetComplaintsCategory
  loading.value = true
  getDocs(dynamicVal).then((querySnapshot) => {
     querySnapshot.docs.forEach((doc) => {
      complaints.value.push(doc.data() as IComplaint)
    })
    loading.value = false
  }).catch((error) => {
    console.error('Error al obtener los comentarios:', error)
    loading.value = false
  }).finally(() => {
    loading.value = false
  })
}

watch(() => route.params.category, () => {
  if(category.value === 'default') {
    qGetComplaintsCategory = query(complaintsCollection, orderBy('createdAt', 'desc'))
  } else {
    qGetComplaintsCategory = query(complaintsCollection, orderBy('createdAt', 'desc'), where('category', '==', category.value))
  }
  complaints.value = [];
  getComplaints();
})

onMounted(() => {
  getComplaints()
})
</script>

<style scoped>

</style>
