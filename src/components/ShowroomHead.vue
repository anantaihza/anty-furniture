<template>
  <div class="container" id="head-category">
    <table class="table table-borderless">
      <tbody>
        <tr>
          <td>
            <img src="@/assets/showroom/living-room.png" alt />
          </td>
          <td class>
            <h1>Living Room</h1>
            <div class="row category text-center">
              <a class="btn btn-light col-lg-1 col-md-4 col-sm-4 col-4" href>Sofa</a>
              <a class="btn btn-light col-lg-1 col-md-4 col-sm-4 col-4" href>Lamp</a>
              <a class="btn btn-light col-lg-1 col-md-4 col-sm-4 col-4" href>Carpet</a>
              <a class="btn btn-light col-lg-1 col-md-4 col-sm-4 col-4" href>Chair</a>
              <a class="btn btn-light col-lg-1 col-md-4 col-sm-4 col-4" href>Table</a>
              <a class="btn btn-light col-lg-2 col-md-4 col-sm-4 col-5" href>Decoration</a>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "showroom-head"
};
</script>

<style scoped>
#head-category {
    margin-top: 50px;
}
.category a {
    margin-right: 20px;
    background-color: #ffffff;
    box-shadow: 1px 1px 5px rgb(204, 204, 204);
    border-radius: 18px;
    padding: 3px 10px;
}
</style>