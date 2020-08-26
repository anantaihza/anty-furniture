<template>
  <span>{{ this.prefix + Number(this.value) }}</span>
</template>

<script>
export default {
  props: {
    value: Number,
    prefix: {
      type: String,
      default: "Rp. "
    }
  }
};
</script>