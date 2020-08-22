<template>
  <div>
    <navbar :navHome="true" />
    <subnav />
    <div class="container" id="head-category">
      <table class="table table-borderless">
        <tbody>
          <tr>
            <td>
              <img v-bind="{ src : room.roomphotos[1].urlPhoto, alt : room.roomName }" width="100%" />
            </td>
            <td>
              <div class="container">
                <h1>{{ room.roomName }}</h1>
                <p>{{ room.roomDesc }}</p>
                <div class="row">
                  <div v-for="(ctg,index) in category" :key="index">
                    <div class="category text-center">
                      <button
                        @click="cNow(ctg.categoryName)"
                        class="btn btn-light col-lg-11 col-md-11 col-sm-11 col-11"
                      >{{ ctg.categoryName }}</button>
                    </div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="categNow === 'sofa'" class="container" id="preference-product">
      <div class="row text-center">
        <div class="col-md-4 col-lg-3 col-sm-6 col-6">
          <button type="button" class="btn">
            <div class="card text-center">
              <img src="@/assets/showroom/sheeva-sofa.png" class="card-img-top" alt />
              <div class="card-body">
                <h5>Sheeva Sofa</h5>
                <p>Rp. 2.635.000</p>
              </div>
            </div>
          </button>
        </div>
        <div class="col-md-4 col-lg-3 col-sm-6 col-6">
          <button type="button" class="btn">
            <div class="card text-center">
              <img src="@/assets/showroom/appollo-sofa.png" class="card-img-top" alt />
              <div class="card-body">
                <h5>Appollo Sofa</h5>
                <p>Rp. 2.980.000</p>
              </div>
            </div>
          </button>
        </div>

        <div class="col-md-4 col-lg-3 col-sm-6 col-6">
          <button type="button" class="btn">
            <div class="card text-center">
              <img src="@/assets/showroom/alden-sofa.png" class="card-img-top" alt />
              <div class="card-body">
                <h5>Alden Sofa</h5>
                <p>Rp. 3.268.000</p>
              </div>
            </div>
          </button>
        </div>

        <div class="col-md-4 col-lg-3 col-sm-6 col-6">
          <button type="button" class="btn">
            <div class="card text-center">
              <img src="@/assets/showroom/hemling-sofa.png" class="card-img-top" alt />
              <div class="card-body">
                <h5>Hemling Sofa</h5>
                <p>Rp. 3.130.000</p>
              </div>
            </div>
          </button>
        </div>

        <div class="col-md-4 col-lg-3 col-sm-6 col-6">
          <button type="button" class="btn">
            <div class="card text-center">
              <img src="@/assets/showroom/luxor-sofa.png" class="card-img-top" alt />
              <div class="card-body">
                <h5>luxor Sofa</h5>
                <p>Rp. 4.465.000</p>
              </div>
            </div>
          </button>
        </div>

        <div class="col-md-4 col-lg-3 col-sm-6 col-6">
          <button type="button" class="btn">
            <div class="card text-center">
              <img src="@/assets/showroom/vimie-sofa.png" class="card-img-top" alt />
              <div class="card-body">
                <h5>Vimie Sofa</h5>
                <p>Rp. 4.690.000</p>
              </div>
            </div>
          </button>
        </div>

        <div class="col-md-4 col-lg-3 col-sm-6 col-6">
          <button type="button" class="btn">
            <div class="card text-center">
              <img src="@/assets/showroom/charmen-sofa.png" class="card-img-top" alt />
              <div class="card-body">
                <h5>Charmen Sofa</h5>
                <p>Rp. 4.710.000</p>
              </div>
            </div>
          </button>
        </div>

        <div class="col-md-4 col-lg-3 col-sm-6 col-6">
          <button type="button" class="btn">
            <div class="card text-center">
              <img src="@/assets/showroom/landskoma-sofa.png" class="card-img-top" alt />
              <div class="card-body">
                <h5>Landskoma Sofa</h5>
                <p>Rp. 3.268.000</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>

    <div v-else-if="categNow === 'lamp'" class="container" id="preference-product">
      <div class="row text-center">
        <p>Mipan....</p>
      </div>
    </div>

    <div v-else-if="categNow === 'carpet'" class="container" id="preference-product">
      <div class="row text-center">
        <p>Zuzuzu....Zuzuzu</p>
      </div>
    </div>

    <div v-else-if="categNow === 'chair'" class="container" id="preference-product">
      <div class="row text-center">
        <p>Mipan Yakakus</p>
      </div>
    </div>

    <div v-else-if="categNow === 'table'" class="container" id="preference-product">
      <div class="row text-center">
        <p>Nyam Nyam Nyam..</p>
      </div>
    </div>

    <div v-else-if="categNow === 'decoration'" class="container" id="preference-product">
      <div class="row text-center">
        <p>Mipaaaaaannn..... zuzuzuzuzuzuzuzu</p>
      </div>
    </div>

    <div v-else class="container" id="preference-product">
      <div class="row text-center">
        <p>Mantul</p>
      </div>
    </div>

    <footers />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Subnav from "@/components/Subnav.vue";
import Footers from "@/components/Footers.vue";
import axios from "axios";

export default {
  name: "bedroom",
  components: {
    Navbar,
    Subnav,
    Footers
  },
  data() {
    return {
      categNow: "",
      room: [],
      category: []
    };
  },
  created() {
    //room
    const options = {
      url: "https://rpl.abisatria.my.id/api/room/",
      method: "get"
    };

    axios(options)
      .then(response => {
        this.room = response.data.data[0];
        console.log(this.room);
      })
      .catch(e => {
        // alert(e);
        console.log(e);
      });

    //category
    const optionsC = {
      url: "https://rpl.abisatria.my.id/api/category/",
      method: "get"
    };

    axios(optionsC)
      .then(response => {
        // console.log(this.room)
        let dataCategory = [];
        let categories = response.data.data;
        categories.map(data => {
          data.rooms.map(subdata => {
            if (this.room.id == subdata.id) {
              dataCategory.push(data);
              // console.log(data.categoryName)
            }
          });
        });
        this.category = dataCategory;
        console.log("categories", this.category);
      })
      .catch(e => {
        console.log(e);
      });
  },
  methods: {
    cNow: function(text) {
      this.categNow = text;
      console.log(this.categNow);
    }
  }
};
</script>

<style scoped>
#preference-product .container {
  margin-top: 50px;
}
.col-md-4 .card {
  border: none;
  margin-bottom: 15px;
  padding: 10px 20px;
}
.col-md-4 .card:hover {
  background-color: #d8d8d8;
}
.col-md-4 .card img {
  /* width: 40%; */
  display: block;
  margin: 20px auto;
  height: 12vw;
  object-fit: contain;
}

#head-category {
  margin-top: 50px;
}
.category button {
  margin-right: 20px;
  background-color: #ffffff;
  box-shadow: 1px 1px 5px rgb(204, 204, 204);
  border-radius: 18px;
  padding: 3px 10px;
}
.category button:focus {
  background-color: #ebebeb;
}
</style>