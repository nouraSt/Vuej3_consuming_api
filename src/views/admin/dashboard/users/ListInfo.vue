<template>
    <main class="container flex items-center justify-center h-screen mx-auto">
        <div class="flex flex-col">
          <div class="overflow-x-auto">
            <div class="p-1.5 w-full inline-block align-middle">
              
              <div class="mt-3 overflow-hidden border rounded-lg">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead class="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        class="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
                      >
                       {{infosups.prenom}}
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
                      >
                      {{infosups.datenaissance}}
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
                      >
                      {{infosups.adresse}}
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase"
                      >
                      {{infosups.ecole}}
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase"
                      >
                      {{infosups.diplome}}
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase"
                      >
                      {{infosups.file}}
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase"
                      >
                      {{infosups.date}}
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase"
                      >
                      {{infosups.ville.id}}
                      </th>

                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200">
                    <tr v-for="user in users" :key="user.id">
                      <td
                        class="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap"
                      >
                        {{ user.id }}
                      </td>
                      <td class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        {{ user.name }}
                      </td>
                      <td class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        
                      </td>
                      <td class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        <button
                          @click.prevent="postDelete(user.id, index)"
                          class="text-red-600"
                        >
                          DELETE
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </template>
    <script>
    
    import axios from 'axios';
    import { onMounted, ref } from 'vue';
    export default {
      setup() {
        let infosups = ref([]);
        let villes = ref([]);
    
        onMounted(() => {
            let token=localStorage.getItem("token");
          // fetch api from laravel backend
          axios
            .get('http://localhost:8000/api/infosup/',{
                headers: {
                Authorization: `Bearer ${token}`,
                token: token
            }
            })
            .then((res) => {
                console.log(res);
              users.value = res.data.data;
            })
            .catch((error) => {
              console.log(error.res.data);
            });

        });
        function postDelete(id, index) {
            console.log(id);
          axios
            .delete(`http://localhost:8000/api/infosup/${id}`)
            .then(() => {
                
              users.value.splice(index, 1);
            })
            .catch((error) => {
              console.log(error.response.data);
            });
        }
        return {
          infosups,
          villes,
          postDelete,
        };
      },
    };
    </script>