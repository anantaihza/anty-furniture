<template>
    <div>
        <nav class="navbar sticky-top navbar-expand-lg">
      <a class="navbar-brand text-white font-weight-bold" href="#">Anty Furniture</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <font-awesome-icon :icon="['fas', 'bars']" class="text-white"/>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <form class="search mr-5">
              <input type="text" placeholder="Search.." name="search" class="search-box" />
              <button type="submit" class="btn">
                <font-awesome-icon :icon="['fas', 'search']" />
              </button>
            </form>
          </li>
          <li class="nav-item">
            <button type="button" class="btn mr-3">
              <font-awesome-icon :icon="['fas', 'shopping-cart']" />
              <span class="badge badge-pill badge-danger"></span>
            </button>
          </li>
          <li class="nav-item">
            <div class="dropdown">
              <button
                class="btn dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <font-awesome-icon :icon="['fas', 'user-circle']" />
              </button>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Login</a>
                <a class="dropdown-item" href="#">Register</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Logout</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <nav class="navbar navbar-expand-lg navbar-light nav-sub">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span id="categories">Categories</span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav subnav">
                        <button class="nav-item btn btn-light">Living Room</button>
                        <button class="nav-item btn btn-light">Dining Room</button>
                        <button class="nav-item btn btn-light">Kitchen</button>
                        <button class="nav-item btn btn-light">Bedroom</button>
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
    name: "navbar"
}
</script>

<style scoped>
.navbar {
    padding: 10px 20px;
  background-color: #70b2ee;
}
.navbar button {
  padding: 1px;
  font-size: 20px;
  color: rgba(32, 32, 32, 0.54);
}
.badge {
  font-size: 11px;
  position: relative;
  right: 12px;
}
.search-box {
    height: 2rem;
  border: none;
  border-radius: 4px;
}
.search button {
  position: relative;
  right: 30px;
  bottom: 1px;
}
.nav-sub {
    background-color: #ffffff;
    box-shadow: 0 1px 10px 0 grey;
}
.subnav button {
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
    color: #70B2EE;
}
.information a:hover {
    text-decoration: none;
}
</style>