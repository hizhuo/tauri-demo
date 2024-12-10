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
    <div class="bg-blue-300">
        <h1 class="text-3xl text-center">todolist</h1>

        <h1 class="text-3xl font-bold underline color-blue   ">
            Hello world!
        </h1>




        <ul>
            <li v-for="(item, index) in items">
                {{ parentMessage }} - {{ index }}- {{ item.message }} <button @click="removeItem(index)">delete</button>

            </li>
        </ul>
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