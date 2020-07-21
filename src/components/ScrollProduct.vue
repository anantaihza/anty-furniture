<template>
  <div>
    <div class="container py-4">
      <h3>Similar Items</h3>
      <div class="d-flex similar scrollbar">
        <button type="button" class="btn">
          <div class="card text-center">
            <img src="@/assets/component/scrollProduct/similar-item1.png" class="card-img-top" alt />
            <div class="card-body">
              <h5>Tripod Floor Lamp in Brass and Timber Bloomingdales</h5>
              <p>Rp. 249.000</p>
            </div>
          </div>
        </button>
        <button type="button" class="btn">
          <div class="card text-center">
            <img src="@/assets/component/scrollProduct/similar-item2.png" class="card-img-top" alt />
            <div class="card-body">
              <h5>Tall Modern Tripod Floor Lamp</h5>
              <p>Rp. 240.000</p>
            </div>
          </div>
        </button>
        <button type="button" class="btn">
          <div class="card text-center">
            <img src="@/assets/component/scrollProduct/similar-item3.png" class="card-img-top" alt />
            <div class="card-body">
              <h5>Antique Brass Metal Tripod Floor Lamp</h5>
              <p>Rp. 269.000</p>
            </div>
          </div>
        </button>
        <button type="button" class="btn">
          <div class="card text-center">
            <img src="@/assets/component/scrollProduct/similar-item1.png" class="card-img-top" alt />
            <div class="card-body">
              <h5>Tripod Floor Lamp in Brass and Timber Bloomingdales</h5>
              <p>Rp. 249.000</p>
            </div>
          </div>
        </button>
        <button type="button" class="btn">
          <div class="card text-center">
            <img src="@/assets/component/scrollProduct/similar-item1.png" class="card-img-top" alt />
            <div class="card-body">
              <h5>Tripod Floor Lamp in Brass and Timber Bloomingdales</h5>
              <p>Rp. 249.000</p>
            </div>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "scroll-product"
};
</script>

<style scoped>

.similar {
  overflow: auto;
}
.card {
  display: inline-block;
  width: 16rem;
  border: none;
  margin-bottom: 15px;
  padding: 10px 20px;
}
.card:hover {
  border-radius: 8px;
  background-color: #d8d8d8;
}
.card img {
  /* width: 40%; */
  display: block;
  margin: 20px auto;
  height: 10vw;
  object-fit: contain;
}
.scrollbar::-webkit-scrollbar {
    display: none;
}
/* Hide scrollbar for IE, Edge and Firefox */
.scrollbar {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>