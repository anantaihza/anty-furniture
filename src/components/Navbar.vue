<template>
  <div>
    <nav class="navbar sticky-top navbar-expand-lg">
        <div v-if="navHome">
          <router-link type="button" to="/" class="btn btnIcon">
          <font-awesome-icon :icon="['fas', 'arrow-left']" />
          </router-link>
        </div>
        <div v-else-if="navInfoPesanan">
          <router-link type="button" to="/cart" class="btn btnIcon">
          <font-awesome-icon :icon="['fas', 'arrow-left']" />
          </router-link>
        </div>
        <div v-else-if="navReviewPesanan">
          <router-link type="button" to="/infoPesanan" class="btn btnIcon">
          <font-awesome-icon :icon="['fas', 'arrow-left']" />
          </router-link>
        </div>
        <div v-else-if="navPayment">
          <router-link type="button" to="/reviewPesanan" class="btn btnIcon">
          <font-awesome-icon :icon="['fas', 'arrow-left']" />
          </router-link>
        </div>
        <div v-else>
          <a class="navbar-brand text-white font-weight-bold" href="#">Anty Furniture</a>
        </div>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <font-awesome-icon :icon="['fas', 'bars']" class="text-white" />
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <form class="search mr-5">
                <input type="text" placeholder="Search.." name="search" class="search-box" />
                <button type="submit" class="btn btnIcon">
                  <font-awesome-icon :icon="['fas', 'search']" />
                </button>
              </form>
            </li>
            <li class="nav-item">
              <router-link type="button" class="btn btnIcon mr-3" to="/cart">
                <font-awesome-icon :icon="['fas', 'shopping-cart']" />
                <span class="badge badge-pill badge-danger"></span>
              </router-link>
            </li>
            <li class="nav-item">
              <div class="dropdown">
                <button
                  class="btn btnIcon dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <font-awesome-icon :icon="['fas', 'user-circle']" />
                </button>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                   <router-link class="dropdown-item" to="/login">Login</router-link>
                   <router-link class="dropdown-item" to="/profile">Profile</router-link>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Logout</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>

   
  </div>
</template>

<script>
export default {
  name: "navbar",
  props: {
    navHome: {
      default: false,
      type: Boolean
    },
    navInfoPesanan: {
      default: false,
      type: Boolean
    },
    navReviewPesanan: {
      default: false,
      type: Boolean
    },
    navPayment: {
      default: false,
      type: Boolean
    }
    
  }
};
</script>

<style scoped>
.navbar {
  padding: 10px 20px;
  background-color: #70b2ee;
}
.navbar .btnIcon {
  padding: 1px;
  font-size: 20px;
  color: rgba(32, 32, 32, 0.54);
}
.navbar .btnIcon:hover {
  color: rgba(61, 61, 61, 0.54);
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

</style>