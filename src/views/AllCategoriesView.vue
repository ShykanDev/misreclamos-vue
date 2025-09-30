<template>
   <MainLayout>
    <template #main>
      <section class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div class="">
          <CategoriesComponent />
        </div>

        <div class="overflow-y-scroll col-span-2 h-dvh">
          <h2 class="">Comentarios para {{ category }}</h2>
          <div v-if="complaints.length > 0">
            <CommentCard v-for="complaint in complaints" :key="complaint.image" :category="complaint.category" :content="complaint.description" :createdAt="complaint.createdAt" :id="complaint.id" :image="complaint.image" :title="complaint.title" :user="complaint.userName" :userUID="complaint.userUID" :date="complaint.createdAt" />
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

const db = getFirestore();
const complaintsCollection = collection(db, 'complaints')
const category = route.params.category || 'default';
const qGetComplaints = query(complaintsCollection, orderBy('createdAt', 'desc'))
const qGetComplaintsCategory = query(complaintsCollection, orderBy('createdAt', 'desc'), where('category', '==', category))

const getComplaints = () => {
  const dynamicVal = category === 'default' ? qGetComplaints : qGetComplaintsCategory
  getDocs(dynamicVal).then((querySnapshot) => {
     querySnapshot.docs.forEach((doc) => {
      complaints.value.push(doc.data() as IComplaint)
    })
  })
}

watch(() => route.params.category, (oldVal, NewVal) => {
  console.log(oldVal, NewVal);
  complaints.value = [];
  getComplaints();
})

onMounted(() => {
  getComplaints()
})
</script>

<style scoped>

</style>
