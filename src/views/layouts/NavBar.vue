<template>
 <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <RouterLink to="/" class="nav-link active" aria-current="page" href="#">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/login">Login</RouterLink>
        </li>
        <li class="nav-item">
            <RouterLink to="/register" class="nav-link">Register</RouterLink>
        </li>
        <li>
            <button @click="Logout">Logout</button>
        </li>
      </ul>

    </div>
  </div>
</nav>
</template>
<script>
import { useRouter } from 'vue-router';
export default {
    setup() {
        const router = useRouter();
        const Logout = () => {
            localStorage.clear();
            router.push({ path: '/login' });
        };
        return { Logout };
    },
};
</script>