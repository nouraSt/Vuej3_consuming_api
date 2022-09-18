<template>
  
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
        .post('http://localhost:8000/api/posts', {
          name: name,
          email: email,
          password: password
        })
        .then(() => {
          router.push({
            name: 'posts',
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