<template>
  <div>
    <navbar :navBack="true" />
    <subnav />
    <div class="container">
            <div class="row">
                <div class="col-md-3 user-foto">
                    <font-awesome-icon :icon="['fas', 'user-circle']" />
                </div>
                <div class="col-md-9 my-auto">
                    <h1>User1510</h1>
                    <div class="col-3 pl-0">
                        <button type="button" class="btn btn-warning btn-sm btn-block">Edit Profile</button>
                        <button type="button" class="btn btn-warning btn-sm btn-block">Setting</button>
                    </div>
                </div>
            </div>
            <div class="row mb-4">
                <div class="col-lg-4">
                    <div class="card">
                        <div class="card-body text-center">
                            <h4>WHISLIST</h4>
                            <img src="@/assets/profile/Sofa.png" alt="">
                            <p><strong>Landskrona Sofa</strong></p>
                            <p>Rp. 4.350.000</p>
                            <button type="button" class="btn btn-more">SHOW MORE</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card">
                        <div class="card-body text-center">
                            <h4>DELIVERY STATUS</h4>
                             <font-awesome-icon :icon="['fas', 'gift']" class="gift-card" />
                            <p class="mb-4">Item is being packed</p>
                            <button type="button" class="btn btn-more">SHOW MORE</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card">
                        <div class="card-body text-center">
                            <h4>HISTORY</h4>
                            <img src="@/assets/profile/Lamp.png" alt="">
                            <p><strong>Lampan Table Lamp</strong></p>
                            <p>Rp. 185.000</p>
                            <button type="button" class="btn btn-more">SHOW MORE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footers />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footers from "@/components/Footers.vue";

export default {
  name: "profile",
  components: {
    Navbar,
    Footers
  }
};
</script>

<style scoped>
.user-foto {
    color: rgba(0, 0, 0, 0.54);
    font-size: 180px;
}
.card {
    padding-bottom: 6%;
    width: 93%;
    height: 95%;  
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);
    border-radius: 25px;
}
.card h4 {
    font-weight: 500;
}
.card img {
    width: 40%;
    display: block;
    margin: auto;
    height: 7vw;
    object-fit: contain;
}
.gift-card {
    font-size: 85px;
    color: rgba(0, 0, 0, 0.54);
    margin: 20px auto;
}
.btn-more {
    background-color: #C4C4C4;
    border-radius: 0;
    padding: auto;
}
.btn-more:hover {
    background-color: #afaeae;
}
</style>