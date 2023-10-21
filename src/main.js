import { createApp } from 'vue';
import Main from './Main.vue';
import router from './router';
import mitt from 'mitt';
import store from './store.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

let emitter = mitt();
let app = createApp(Main);
app.config.globalProperties.emitter = emitter;

app.use(router).use(store).mount('#app');
