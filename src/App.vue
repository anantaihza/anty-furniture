<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>


export default {
  name: "app",
  data() {
    return {
      dataCustomer: []
    }
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap");

* {
  font-family: "Roboto", sans-serif;
}

</style>
