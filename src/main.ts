import { createApp, AppConfig } from 'vue'
import App from './App.vue'
import './index.css';
import "./common/style/base.less";
import router from './router'
import store from './store'

const app = createApp(App)


// app.config.devtools = true

    app
    .use(router)
    .use(store)
    .mount('#app')
