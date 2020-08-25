<template>
  <div>
    <navbar :navHome="true" />
    <subnav />
    <div class="container" id="head-category">
      <table class="table table-borderless">
        <tbody>
          <tr>
            <td>
              <img v-bind="{ src : room.roomphotos[0].urlPhoto, alt : room.roomName }" width="100%" />
            </td>
            <td>
              <div class="container">
                <h1>{{ room.roomName }}</h1>
                <p>{{ room.roomDesc }}</p>
                <div class="row">
                  <div v-for="categ in category" :key="categ.id">
                    <div class="category text-center">
                        <button
                        @click="onCategory(categ.id)"
                        class="btn btn-light col-lg-11 col-md-11 col-sm-11 col-11"
                      >{{ categ.categoryName }}</button>
                    </div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="container" id="preference-product">
      <div class="row  text-center">
        <div v-if="product.length == 0">
          <h4>Data tidak ada</h4>
        </div>
        
          <div class="col-md-4 col-lg-3 col-sm-6 col-6" v-for="prod in product" :key="prod.id">
            <button type="button" class="btn">
              <div class="card text-center">
                <img
                  v-bind="{ src : prod.productphotos[0].urlPhoto, alt : prod.productName }"
                  class="card-img-top"
                />
                <div class="card-body">
                  <h5>{{ prod.productName }}</h5>
                  <price :value="prod.productPrice" />
                </div>
              </div>
            </button>
      
        </div>
      </div>
    </div>

    <footers />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Subnav from "@/components/Subnav.vue";
import Price from "@/components/Price.vue";
import Footers from "@/components/Footers.vue";
import axios from "axios";

export default {
  name: "Showroom",
  components: {
    Navbar,
    Subnav,
    Price,
    Footers
  },
  data() {
    return {
      room: [],
      category: [],
      product: []
    };
  },
  mounted() {
    
  },
  created() {
    this.getRoom()

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
        console.log("categories", dataCategory);
        this.category = dataCategory;
      })
      .catch(e => {
        console.log(e);
      });
  },
  methods: {
    getRoom() {
      const options = {
        url: `https://rpl.abisatria.my.id/api/room/${this.$route.params.id}`,
        method: 'get'
      };
      axios(options)
        .then(response => {
          console.log('data room :',response.data.data);
          let roomId = response.data.data;

          this.room = roomId
          
        })
        .catch(e => {
          // alert(e);
          console.log(e);
        });
    },
    onCategory: function(id) {
      const options = {
        url: `https://rpl.abisatria.my.id/api/product/${id}`,
        method: "get"
      };
      axios(options)
        .then(response => {
          let ctgId = response.data.data;
          console.log(ctgId);
          this.product = ctgId;
        })
        .catch(e => {
          // alert(e);
          console.log(e);
        });
    }
  },
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