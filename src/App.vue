<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
import { useStore } from 'vuex'


import Header from '@/components/Header.vue'
import UserSelection from '@/components/UserSelection.vue'
import Loader from '@/components/Loader.vue'
import UserCard from '@/components/UserCard.vue'




const loading = ref(false);
const windowHeight = ref(window.innerHeight - 109)
const store = useStore();

</script>

<template>
  <Header />
  <div class="box">
    <div class="content" :style="{ height: `${windowHeight}px` }">
      <UserSelection @loading="loading = !loading" />

      <UserCard v-if="store.state.users.selectedUser.id" />
      <p v-else>Выберите сотрудника, чтобы посмотреть его профиль</p>
    </div>
  </div>
  <Loader v-if="loading" />
  <!-- <RouterView /> -->
</template>

<style lang="scss" scoped>
.box {
  width: 100%;
  margin-top: 10px;
  padding: 0 50px;
  box-sizing: border-box;

  .content {
    box-shadow: 0px 0px 10px 0px #0000001A;
    border-radius: 10px;

    @include flex(space-between, center, $direction: false);
  }

  p {
    width: 100%;
    text-align: center;

    @include font(400, 14px, $standart-gray, 17.07px);
  }

}
</style>
