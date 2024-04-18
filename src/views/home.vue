<template>
  <div class="z-0">
    <div class="">
      <input
        type="checkbox"
        id="my_modal_6"
        class="modal-toggle"
        v-model="nameModal"
      />
      <div class="modal" role="dialog">
        <div class="modal-box">
          <h3 class="font-bold text-lg">Please enter your name :</h3>
          <input
            type="text"
            placeholder="Name"
            class="input input-bordered input-accent mt-4"
            v-model="userName"
            @input="saveUsername"
          />
          <div class="modal-action">
            <label for="my_modal_6" class="btn btn-success text-white">save</label>
          </div>
        </div>
      </div>
    </div>
    <the-hero></the-hero>
  </div>
</template>

<script setup>
import TheHero from "../components/TheHero.vue";
import { useProfileStore } from "../store";

const store = useProfileStore();

const nameModal = ref(false);
const userName = ref(store.name);

const saveUsername = () => {
  store.setUserName(userName.value);
};

onMounted(() => {
  if (store.name == "") {
    nameModal.value = true;
  }
});
</script>

<style lang="scss" scoped></style>
