<script setup>
import { ref } from 'vue'
const greeting = ref('Hello World!')
const message = ref('')

const parentMessage = ref('Parent')
const items = ref([{ message: 'Foo' }, { message: 'Bar' }])

import { Command } from '@tauri-apps/plugin-shell';

const test1 = async () => {
  //   let result =  await Command.create('sh', [
  //   '-c',
  //   'pwd'
  //   // "echo 'Hello World!'  >> ~/test.txt ",
  // ]).execute();
  // console.log(result);


  let result = await Command.create('sh', [
    '-c',
    "~/hello.sh",
  ]).execute();
  console.log(result);

}


const test2 = async () => {
  try {
    const scriptPath =  '～/hello.sh';
    
    const result = await Command.create('osascript', [
      '-e',
      // `do shell script "${scriptPath}" with administrator privileges`
      'do shell script "~/hello.sh" with administrator privileges'
    ]).execute();

    console.log('Command executed successfully:', result);
  } catch (error) {
    console.error('Error executing command:', error);
  }

}


const test3 = async () => {
  //   let result =  await Command.create('sh', [
  //   '-c',
  //   'pwd'
  //   // "echo 'Hello World!'  >> ~/test.txt ",
  // ]).execute();
  // console.log(result);
  let sys_hosts_path = '/etc/hosts';
  let sudo_pswd = '321321';
  let tmp_fn = '/tmp/hosts.txt';
  let content = `127.0.0.1  www.ccc.com`;
  let cmd = [
      `echo 1111 hello >> ${tmp_fn}`,
      `echo '${sudo_pswd}' | sudo -S chmod 777 ${sys_hosts_path}`,
      // `cat "${tmp_fn}" > ${sys_hosts_path}`,
      "echo 1111 hello >> /etc/hosts",
      // `echo '${content}' | sudo tee -a ${sys_hosts_path} `
      `echo '${sudo_pswd}' | sudo -S chmod 644 ${sys_hosts_path}`,
      // , 'rm -rf ' + tmp_fn
    ].join(' && ')


  let result = await Command.create('sh', [
    '-c',
    // "cat /etc/hosts",
    // `echo '${sudo_pswd}' | sudo -S chmod 777 ${sys_hosts_path}`,
    // "echo 1111 hello >> /etc/hosts",
    cmd
  ]).execute();
  console.log(result);

}
// const my_modal_3 = await Modal.create({
//   title: 'Hello World!',
//   body: `This is a modal`,
// });


</script>


<template>
  <div class="text-3xl">
    <h1>11122</h1>
    <button class="btn btn-primary" @click="test1">test1</button>
    <button class="btn btn-primary" @click="test2">test2</button>
    <button class="btn btn-primary" @click="test3">test3</button>
  </div>

</template>
<style>
.greeting {
  color: red;
  font-weight: bold;
}
</style>