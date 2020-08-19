<template>
  <div class="btn-group btn-group-sm spinner" role="group" aria-label="spinnerNumber">
    <button type="button" class="btn" @click="delQty">-</button>

    <div class="num-spin">
      <input type="number" id="qty" class="form-control border-0" min="1" v-model="qty" />
    </div>

    <button type="button" class="btn" @click="addQty">+</button>
  </div>
</template>

<script>
export default {
    name:"quantity",
    data() {
      return {
        qty: 1
      }
    },
    watch: {
      qty: function() {
        // Emit this information to the parents component
        this.$emit("child-qty", this.qty);
      }
    },
    methods: {
      addQty: function () {
        this.qty++;
      },
      delQty: function () {
        if (this.qty == 1) {
          this.qty = 1;
        } else {
          this.qty--;
        }
      }
    },
};
</script>

<style scoped>
.spinner button {
  background: #c4c4c4;
}
.num-spin {
  padding: 0;
  width: 40px;
  height: 25px;
}
.num-spin input {
  border-radius: 0;
  height: 31px;
  background: #dfdcdc;
}
/* Chrome, Safari, Edge, Opera */
.num-spin input::-webkit-outer-spin-button,
.num-spin input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* Firefox */
.num-spin input[type="number"] {
  -moz-appearance: textfield;
}
</style>