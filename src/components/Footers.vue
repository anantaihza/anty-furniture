<template>
  <div>
    <div class="container foot">
      <p>
        Follow Us
        <a href>
          <img src="@/assets/component/footers/facebook.png" alt width="25px" />
        </a>
        <a href>
          <img src="@/assets/component/footers/instagram.png" alt width="25px" />
        </a>
        <a href>
          <img src="@/assets/component/footers/twitter.png" alt width="30px" />
        </a>
      </p>
      <p class="desk">
        <a href>Catalog and Brochure</a>
        <a href>Customer Service</a>
        <a href>FAQ</a>
        <a href>Contact Us</a>
        <a href>Privacy Policy</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "footers"
};
</script>

<style scoped>
.foot {
  color: #ffffff;
  background-color: #fd961e;
  font-size: 18px;
  font-weight: 500;
  border-radius: 10px;
  text-align: center;
  padding-top: 15px;
  padding-bottom: 15px;
}
.foot img {
  margin-left: 10px;
}
.foot .desk a {
  color: black;
  font-size: 15px;
  margin: 10px 10px 10px 10px;
}
.foot .desk a:hover {
  color: #ffffff;
  text-decoration: none;
}
</style>