<template>
    <div>
      <h1>Hosts Manager</h1>
      <div v-for="fragment in fragments" :key="fragment">
        <input type="checkbox" v-model="enabledFragments[fragment]" class="check" />
        <label>{{ fragment }}</label>
      </div>
      <button @click="applyChanges">Apply Changes2</button>
      <button @click="reread">reread</button>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from "vue";
  import { getFragments, generateHosts, writeHosts } from "../tauri/utils";
  
  export default defineComponent({
    setup() {
      const fragments = ref<string[]>([]);
      const enabledFragments = ref<Record<string, boolean>>({});
  
      onMounted(async () => {
        fragments.value = await getFragments();
        fragments.value.forEach(fragment => (enabledFragments.value[fragment] = false));
      });
      const reread = async () => {
        fragments.value = await getFragments();
        fragments.value.forEach(fragment => (enabledFragments.value[fragment] = false));
      };
  
      const applyChanges = async () => {
        const enabled = Object.keys(enabledFragments.value).filter(
          key => enabledFragments.value[key]
        );
        const newHosts = await generateHosts(enabled);
        await writeHosts(newHosts);
        alert("Hosts file updated successfully!");
      };
  
      return { fragments, enabledFragments, applyChanges,reread };
    },
  });
  </script>
  