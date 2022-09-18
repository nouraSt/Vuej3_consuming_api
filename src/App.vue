<script setup>
  import { RouterLink, RouterView } from 'vue-router';
  import Navbar from './views/layouts/NavBar.vue';
  
  </script>
  
  <template>
    <div>
      <Navbar />
    </div>
    <RouterView />
  </template>