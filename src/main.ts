import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import dkfdsvue3 from 'dkfds-vue3';
import dkfdsvue3Extra from 'dkfds-vue3/extra';

import './assets/main.css'

const app = createApp(App)

app.use(router)
    .use(dkfdsvue3 as any)
    .use(dkfdsvue3Extra as any)

app.mount('#app')
