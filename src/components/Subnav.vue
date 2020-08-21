<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light nav-sub">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span id="categories">Categories</span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav subnav">
          <router-link class="nav-item btn btn-light" to="/living-room">Living Room</router-link>
          <button class="nav-item btn btn-light">Dining Room</button>
          <button class="nav-item btn btn-light">Kitchen</button>
          <router-link class="nav-item btn btn-light" to="/bedroom">Bedroom</router-link>
          <button class="nav-item btn btn-light">Bathroom</button>
          <button class="nav-item btn btn-light">Outdoor</button>
        </div>
        <div class="information">
          <a href="#">Service Information</a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "subnav"
};
</script>

<style scoped>

.nav-sub {
  background-color: #ffffff;
  box-shadow: 0 1px 10px 0 grey;
}
.subnav .btn {
  padding: 2px 8px;
  text-align: center;
  font-size: 15px;
  font-weight: 500;
  margin-right: 20px;
  border-radius: 20px;
  background-color: #ffffff;
  box-shadow: 1px 1px 5px rgb(204, 204, 204);
}
.information {
  margin-left: auto;
  font-size: 15px;
  color: #70b2ee;
}
.information a:hover {
  text-decoration: none;
}
.btnHover:hover {
  color: white;
}
</style>