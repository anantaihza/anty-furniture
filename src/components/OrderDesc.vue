<template>
  <div>
    <div class="container">
      <h2>ORDER DESCRIPTION</h2>
      <table class="table table-hover table-borderless table-fixed">
        <thead>
          <tr>
            <th colspan="2">
              <h4 class="text-right">Total : Rp. 515.000</h4>
            </th>
          </tr>
        </thead>
        <tbody class="scrollbar">
          <tr>
            <td>
              <img src="@/assets/infoPesanan/Lamp.png" alt />
            </td>
            <td>
              <p class="font-weight-bold">Antique Brass Tripod Floor Lamp</p>
              <p>Rp. 235.000</p>
              <quantity @child-qty="qtyValue" />
            </td>
          </tr>
          <tr>
            <td>
              <img src="@/assets/infoPesanan/Chair.png" alt />
            </td>
            <td>
              <p class="font-weight-bold">Pello Chair</p>
              <p>Rp. 280.000</p>
              <quantity @child-qty="qtyValue" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Quantity from "@/components/Quantity.vue";
// import Footers from "@/components/Footers.vue";

export default {
  name: "order-desc",
  components: {
    Quantity
  },
  data() {
    return {
      qty: 1
    };
  },
  methods: {
    // Gets the checkbox information from the child component
    qtyValue: function(params) {
      this.qty = params;
    }
  }
};
</script>

<style scoped>
h2 {
  margin-bottom: 9%;
}
.table-fixed thead {
  width: 100%;
}
.table-fixed tbody {
  height: 500px;
  overflow-y: auto;
  width: 100%;
}
.table-fixed thead,
.table-fixed tbody,
.table-fixed tr,
.table-fixed th {
  display: block;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.scrollbar::-webkit-scrollbar {
  display: none;
}
/* Hide scrollbar for IE, Edge and Firefox */
.scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>