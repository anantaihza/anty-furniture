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
        <span id="categories">Room</span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav subnav">
          <div v-for="room in rooms" :key="room.id">
            <router-link
              :to="{ name: 'Showroom', params: { id: room.id } }"
              class="nav-item btn btn-light"
            >{{ room.roomName }}</router-link>
          </div>
        </div>
        <div class="information">
          <a href="#">Service Information</a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "subnav",
  data() {
    return {
      rooms: []
    };
  },
  created() {
    this.getAllRoom();
  },
  methods: {
    getAllRoom() {
      const options = {
        url: "https://rpl.abisatria.my.id/api/room/",
        method: "get"
      };

      axios(options)
        .then(response => {
          this.rooms = response.data.data;
          console.log("Room : ", this.rooms);
        })
        .catch(e => {
          // alert(e);
          console.log(e);
        });
    }
  }
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