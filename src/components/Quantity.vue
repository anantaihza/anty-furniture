<template>
  <div class="btn-group btn-group-sm spinner" role="group" aria-label="spinnerNumber">
    <button type="button" class="btn">-</button>

    <div class="num-spin">
      <input type="number" class="form-control border-0" value="1" min="1" />
    </div>

    <button type="button" class="btn">+</button>
  </div>
</template>

<script>
export default {
    name:"quantity"
};
</script>

<style scoped>
.spinner button {
    background: #C4C4C4;
}
.num-spin {
    padding: 0;
    width: 40px;
    height: 25px;
}
.num-spin input {
    border-radius: 0;
    height: 31px;
    background: #DFDCDC;
}
/* Chrome, Safari, Edge, Opera */
.num-spin input::-webkit-outer-spin-button,
.num-spin input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* Firefox */
.num-spin input[type=number] {
  -moz-appearance: textfield;
}
</style>