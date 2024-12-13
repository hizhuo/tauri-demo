import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import TodoList  from "./todo/TodoList.vue";
import HostsManager from "./components/HostsManager.vue";
import TestDemo from "./components/TestDemo.vue";


createApp(TestDemo).mount("#app");
