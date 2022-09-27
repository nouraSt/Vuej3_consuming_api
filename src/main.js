import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./assets/main.css";
import "./assets/css/styles.css";
import axios from 'axios';
import store from './store'


const app = createApp(App).use(store);

axios.defaults.baseURL = 'http://localhost:8000/api/';
axios.defaults.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

app.use(createPinia());
app.use(router);
app.mount("#app");
