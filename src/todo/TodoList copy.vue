<script setup>
import { ref } from 'vue'
// import 'codemirror/lib/codemirror.css';  // 样式
// import 'codemirror/mode/javascript/javascript';  // 你可以根据需要导入其他模式
// import 'codemirror/theme/dracula.css'; // 可选的主题样式
import { Codemirror } from 'vue-codemirror';

// import { Codemirror } from '../demo/CodeVIew.vue';

const editorValue = ref('www')// 编辑器的内容
const editorOptions = ref({
  mode: 'javascript', // 使用 JavaScript 模式
  theme: 'dracula',   // 设置主题
  lineNumbers: true,  // 显示行号
  tabSize: 2,         // Tab 键宽度
  indentUnit: 2       // 缩进宽度
})
const handleEditorChange = (editor, data, value) => {
  console.log('Editor value:', value);
}

const greeting = ref('Hello World!')
const message = ref('')


const parentMessage = ref('Parent')
const items = ref([{ message: 'Foo' }, { message: 'Bar' }])
const addItem = (item) => {
  items.value.push(item)
}

const removeItem = (i) => {
  items.value.splice(i, 1);
}
</script>


<template>

  <div class="join w-full">
    <div class="join-item bg-gray-50 h-full">
      <ul class="menu bg-base-200 w-56 p-0 [&_li>*]:rounded-none">

        <li v-for="(item, index) in items">
          <a>{{ item.message }} <button @click="removeItem(index)">x</button></a>

        </li>

      </ul>
    </div>

    <div class="join-item w-full">
      <codemirror v-model="editorValue" :options="editorOptions" @change="handleEditorChange"></codemirror>
    </div>
  </div>





  <!-- You can open the modal using ID.showModal() method -->
  <button class="btn btn-primary" onclick="my_modal_3.showModal()">添加</button>
  <dialog id="my_modal_3" class="modal modal-bottom">
    <div class="modal-box">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>
      <h3 class="text-lg font-bold">Hello!</h3>
      <p class="py-4">Press ESC key or click on ✕ button to close</p>

      <p class="mt-5">
        <input v-model="message" class="input input-bordered w-full">
      </p>

      <p class="join w-full mt-5">
        <button @click="addItem({ message: message });" class="join-itembtn    btn w-1/2 btn-primary">add</button>
        <button @click="message = ''" class="join-item btn  btn w-1/2 ">reset</button>
      </p>
    </div>
  </dialog>
</template>
<style>
.greeting {
  color: red;
  font-weight: bold;
}

 


</style>