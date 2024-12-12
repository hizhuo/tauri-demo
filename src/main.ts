import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import TodoList  from "./todo/TodoList.vue";
import HostsManager from "./components/HostsManager.vue";


createApp(HostsManager).mount("#app");
