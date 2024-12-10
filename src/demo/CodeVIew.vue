<template>
    <div>
      <codemirror 
        v-model="editorValue" 
        :options="editorOptions" 
        @change="handleEditorChange"
      ></codemirror>
    </div>
  </template>
  
  <script>
  import { Codemirror } from 'vue-codemirror'; // 导入 vue-codemirror 组件
//   import 'codemirror/lib/codemirror.css';
//   import 'codemirror/mode/javascript/javascript'; // 这里用 JavaScript 作为示例
  
  export default {
    components: {
      Codemirror
    },
    data() {
      return {
        editorValue: '', // 编辑器的内容
        editorOptions: {
          mode: 'javascript', // 使用 JavaScript 模式
          theme: 'dracula',   // 设置主题
          lineNumbers: true,  // 显示行号
          tabSize: 2,         // Tab 键宽度
          indentUnit: 2       // 缩进宽度
        }
      };
    },
    methods: {
      handleEditorChange(editor, data, value) {
        console.log('Editor value:', value);
      }
    }
  };
  </script>
  
  <style scoped>
  /* 自定义样式 */
  </style>
  