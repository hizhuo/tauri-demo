<script setup>
import { ref } from 'vue'
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
    <div>
        <h1>todolist</h1>

        <ul>
            <li v-for="(item,index) in items">
                {{ parentMessage }} - {{ index }}-  {{ item.message }}   <button @click="removeItem(index)">delete</button>

            </li>
        </ul>
    </div>
    <div>
        <p>
          <label> New message:</label>
            <input v-model="message" >
        </p>
        <p>
            <button @click="addItem({message:message})">add</button>
            <button @click="message = ''">reset</button>
        </p>
    </div>
</template>
<style>
.greeting {
  color: red;
  font-weight: bold;
}
</style>