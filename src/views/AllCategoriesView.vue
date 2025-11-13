<template>
  <MainLayout>
    <template #main>
      <section class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div class="">
          <CategoriesComponent class="overflow-y-scroll max-h-dvh" />
        </div>

        <div class="overflow-y-scroll relative col-span-2 h-dvh">
          <h2 class="sticky top-0 z-10 px-2 py-1 text-rose-800 bg-white">
            {{
              category === 'default'
                ? 'Comentarios Generales'
                : 'Comentarios de la categoría: ' + category
            }}
          </h2>
          <div class="flex justify-end">
          <RouterLink v-if="category !== 'default'"
            :to="{ name: 'create-comment', params: { category: category } }"
            class="flex sticky right-5 top-6 z-10 gap-2 items-center px-2 py-1 text-white bg-rose-800 rounded-full border border-rose-400 transition-transform duration-200 ease-in-out hover:bg-rose-600 hover:-translate-y-0.5"
            ><v-icon name="md-postadd-outlined" scale="1.5" /> Crear comentario  {{ category }}</RouterLink
          >
          </div>
          <div v-if="loading" class="flex flex-col justify-center items-center">
            <v-icon
              name="ri-loader-5-fill"
              class="mx-auto text-rose-600"
              animation="spin"
              scale="7.5"
              speed="fast"
            />
            <p class="text-center text-slate-800">Cargando comentarios...</p>
          </div>
          <div v-if="complaints.length > 0">
            <CommentCard
              v-for="complaint in complaints"
              :key="complaint.id"
              @callReload="answerSent"
              @callViewer="showImageViewer"
              :category="complaint.category"
              :content="complaint.content"
              :createdAt="complaint.createdAt"
              :id="complaint.id"
              :image="complaint.image"
              :title="complaint.title"
              :user="complaint.userName"
              :userUid="complaint.userUid"
              :service="complaint.service"
              :date="complaint.createdAt"
              :userName="complaint.userName"
              :docId="complaint.id"
              :answers="complaint.answers"
            />
          </div>
          <EmptyAnimation class="flex justify-center items-center min-h-dvh" v-else />
        </div>
      </section>
    </template>
  </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue'
import CategoriesComponent from '@/components/MainCategories/CategoriesComponent.vue'
import { useRoute } from 'vue-router'
import { collection, getDocs, getFirestore, orderBy, query, where } from 'firebase/firestore'
import type { IComplaint } from '@/Interfaces/IComplaint'
import { computed, onMounted, ref, watch } from 'vue'
import CommentCard from '@/components/CommentCard.vue'
import EmptyAnimation from '@/animations/Loaders/EmptyAnimation.vue'
import { api as viewerApi } from 'v-viewer'

const route = useRoute()

const complaints = ref<IComplaint[]>([])
const loading = ref(false)

const db = getFirestore()
const complaintsCollection = collection(db, 'complaints')
const category = computed(() => route.params.category || 'default')
const qGetComplaints = query(complaintsCollection, orderBy('createdAt', 'desc'))
let qGetComplaintsCategory = query(
  complaintsCollection,
  orderBy('createdAt', 'desc'),
  where('category', '==', category.value),
)

const getComplaints = () => {
  complaints.value = []
  const dynamicVal = category.value === 'default' ? qGetComplaints : qGetComplaintsCategory
  loading.value = true
  getDocs(dynamicVal)
    .then((querySnapshot) => {
      querySnapshot.docs.forEach((doc) => {
        const complaint = doc.data() as IComplaint
        complaint.id = doc.id
        complaints.value.push(complaint)
        console.log(complaint)
      })
      loading.value = false
    })
    .catch((error) => {
      console.error('Error al obtener los comentarios:', error)
      loading.value = false
    })
    .finally(() => {
      loading.value = false
    })
}

watch(
  () => route.params.category,
  () => {
    if (category.value === 'default') {
      qGetComplaintsCategory = query(complaintsCollection, orderBy('createdAt', 'desc'))
    } else {
      qGetComplaintsCategory = query(
        complaintsCollection,
        orderBy('createdAt', 'desc'),
        where('category', '==', category.value),
      )
    }
    complaints.value = []
    getComplaints()
  },
)

//Update the imageSrc value based on emmit from CommentCard
const showImageViewer = (imgSrcParam: string): void => {
  try {
    imageSrc.value = imgSrcParam
    images.value = [imageSrc.value]
    show()
  } catch (error) {
    const e = error as Error
    console.error(e)
  }
}

const answerSent = () => {
  getComplaints()
}

const imageSrc = ref('')
//Image viewer values
const images = ref([imageSrc.value  ])
const show = () => {
  viewerApi({
    images: images.value,
  })
}
onMounted(() => {
  getComplaints()
})
</script>

<style scoped></style>
