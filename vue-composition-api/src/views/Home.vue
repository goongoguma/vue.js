<template>
  <div class="home">
    <h1>Home</h1>
    <p>{{ name }}</p>
    <input type="text" v-model="search" />
    <p>search term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>
    <button @click="handleClick">stop watching</button>
    <!-- <h2>Refs</h2>
    <p>{{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
    <button @click="updateNinjaOne">Update ninja one</button>
    <h2>Reactive</h2>
    <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }}</p>
    <button @click="updateNinjaTwo">Update ninja two</button> -->
  </div>
</template>

<script>
import { ref, reactive, computed, watch, watchEffect } from "vue";

export default {
  name: "Home",
  setup() {
    const search = ref("");
    const names = ref([
      "mario",
      "yoshi",
      "luigi",
      "toad",
      "bowser",
      "koopa",
      "peach",
    ]);

    const stopWatch = watch(search, () => {
      console.log("watch");
    });

    const stopEffect = watchEffect(() => {
      console.log("watchEffect");
    });

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });

    const handleClick = () => {
      stopWatch();
      stopEffect();
    };

    return {
      names,
      search,
      matchingNames,
      handleClick,
    };
    // const ninjaOne = ref({ name: "mario", age: 30 });
    // reactive는 primitive value 사용불가
    // const ninjaTwo = reactive({ name: "luigi", age: 35 });
    // const updateNinjaOne = () => {
    //   ninjaOne.value.age = 40;
    // };
    // const updateNinjaTwo = () => {
    //   ninjaTwo.age = 45;
    // };
    // return { ninjaOne, updateNinjaOne, ninjaTwo, updateNinjaTwo };
  },
};
</script>
