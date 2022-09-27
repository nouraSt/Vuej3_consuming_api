<template>
    <div class="flex items-center justify-center h-screen">
    <div class="">
      <span v-if="validation.message" class="px-2 py-2 mb-4 text-red-600 rounded shadow">
        {{ validation.message }}
      </span>
      <form @submit.prevent="submit">
        <div>
          <label for="title">name</label>
          <input
            type="text"
            name="name"
            v-model="user.name"
            class="w-full px-4 py-2 border border-gray-300 outline-none"
          />
        </div>
        <div>
          <label for="content">email</label>
          <input
            type="email"
            name="email"
            v-model="user.email"
            class="w-full px-4 py-2 border border-gray-300 outline-none"
          />
        </div>
        <div>
            <input
            type="password"
            name="password"
            v-model="user.password"
            class="w-full px-4 py-2 border border-gray-300 outline-none"
          />
        </div>
        <button class="px-6 py-2 text-white bg-blue-600" type="submit">
          Button
        </button>
      </form>
    </div>
  </div>

</template>
<script>
   import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

export default {
  setup() {
    const user = reactive({
      name: '',
      email: '',
      password:'',
    });

    const validation = ref([]);

    const router = useRouter();

    function submit() {
      let name = user.name;
      let email = user.email;
      let password = user.password;

      axios
        .post('', {
          name: name,
          email: email,
          password: password
        })
        .then(() => {
          router.push({
            name: 'createusers',
          });
        })
        .catch((error) => {
          validation.value = error.response.data;
        });
    }

    return {
      user,
      validation,
      router,
      submit,
    };
  },
};

</script>