<template>
  <div class="md:w-3/4 w-1/2 xl:w-1/2">
    <section class="flex justify-between items-center">
      <h1 class="md:text-xl">{{ $t("todoList") }}</h1>
      <!-- Open the modal using ID.showModal() method -->
      <button
        class="btn btn-success text-white"
        onclick="my_modal_1.showModal()"
      >
        {{ $t("add") }}
      </button>
      <dialog id="my_modal_1" class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-lg">{{ $t("WriteYourTodo") }}</h3>
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full max-w-xs mt-3"
            v-model="newTodo"
            @keyup.enter="addTodo"
          />
          <div class="modal-action">
            <form method="dialog">
              <button class="btn btn-warning text-white px-5 text-2xl mr-2">
                {{ $t("cancel") }}
              </button>
              <button
                @click="addTodo"
                class="btn btn-success text-white px-5 text-2xl"
              >
                +
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </section>
    <hr class="w-full mt-2" />
    <section class="my-5">
      <ul class="flex flex-col gap-y-5">
        <li
          class="flex items-center gap-x-2 md:w-full md:justify-between"
          v-for="(todo, index) in todos"
          :key="index"
        >
          <span class="text-xl">{{ todo }} # {{ index }}</span>
          <div class="flex gap-x-3">
            <button
              class="btn btn-warning text-white"
              onclick="my_modal_1.showModal()"
              @click="editTodo(index)"
            >
              {{ $t("edit") }}
            </button>
            <button class="btn btn-error text-white" @click="deleteTodo(index)">
              {{ $t("delete") }}
            </button>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
const todos = ref([]);
const newTodo = ref("");
const editedTodoIndex = ref(null);

const addTodo = () => {
  if (newTodo.value.trim() !== "") {
    if (editedTodoIndex.value !== null) {
      todos.value[editedTodoIndex.value] = newTodo.value;
      editedTodoIndex.value = null;
    } else {
      todos.value.push(newTodo.value);
    }
    newTodo.value = "";
  }
};

const editTodo = (index) => {
  newTodo.value = todos.value[index];
  editedTodoIndex.value = index;
};

const deleteTodo = (index) => {
  todos.value.splice(index, 1);
};
</script>

<style lang="scss" scoped></style>
