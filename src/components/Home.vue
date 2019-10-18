<template>
  <div class="row">
    <div class="col-lg-6 col-md-6 col-sm-12 col-12 left-side">
      <div id="wave">
        <h3>Dikejar <span class="bolder">Deadline?</span></h3>
        <h3>Tenang, Ada <span class="bolder">Cetakk.id</span></h3>
        <h6 class="my-3"><span class="bolder">Cetakk.id</span> akan segera hadir untuk memudahkan proses cetak dokumen kamu!</h6>
        <img src="../assets/Asset1.png" alt="landing-page" class="mt-3 pt-5 ml-5 w-75 d-block">
      </div>
    </div>

    <div class="col-lg-6 col-md-6 col-sm-12 col-12 right-side p-lg-5 ">
      <img src="../assets/Logo.png" alt="Logo Cetak" class="img-fluid logo mt-5 pt-5 mb-4"/>
      <div class="row justify-content-md-center">
        <div class="col-md-10">
          <form class="form-group w-100">
            <!-- <input type="button" id="order" class="form-control button-order" data-toggle="modal" data-target="#orderModal" value="Cetak Sekarang" @click="orderNow" /> -->
            <input type="button" class="form-control button-order" value="Order" data-toggle="modal" data-target="#pesan"/> 
              <p class="spanduk text-secondary text-left display-block">Saat ini, kami hanya melayani wilayah Kaliurang, Sleman, Yogyakarta</p>
            <input type="button" class="form-control button-subscribe" value="Subscribe" data-toggle="modal" data-target="#subscribe"/>

            <div class="pt-3">
              <span class="letter text-secondary">---------------------------</span>
              <span class="span-letter font-weight-bold text-secondary">ATAU</span>
              <span class="letter text-secondary">---------------------------</span>
            </div>
            
            <p class="mt-3 text-secondary spandave">Ikuti sosial media kami untuk info Cetakk.Id</p>
          </form>
        </div>
      </div>

      <div>
        <a href="https://www.instagram.com/cetakkid.official/"><img src="../assets/instagram.png" alt="instagram" class="social-media"></a>
        <a href="https://medium.com/cetakk-id"><img src="../assets/medium.png" alt="medium" class="social-media"></a>
        <a href="https://www.linkedin.com/company/cetakk-id/"><img src="../assets/linkedin.png" alt="linkedin" class="social-media"></a>
        <a href="mailto:cetakid.info@gmail.com?"><img src="../assets/gmail.png" alt="gmail" class="social-media"></a>
      </div>
    </div>

    <!-- Modal Subscribe -->
    <div class="modal fade" id="subscribe" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <p class="modal-title text-center" ><img src="../assets/Logo.png" alt="Logo Cetak" class="img-fluid logo" /></p>
            <button type="button" class="align-center close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form class="form-group">
              <input type="text" class="form-control in-field" placeholder="Nama" v-model="name" required />
              <input type="email" class="form-control in-field email" id="email" placeholder="Email" v-model="email" required />
              <input type="button" class="text-subscribe form-control button-subscribe" value="Subscribe" @click="subscribe" />
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Order -->
    <div class="modal fade" id="pesan" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <lazyComponent />
    </div>

  </div>
</template>

<script>
/* eslint-disable */
import subscribeRef from '../firebase'

let regex =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const lazyComponent = () => import('./PriceList.vue')
export default {
  name: 'Home',
  components: {
    lazyComponent
  },

  data() {
    return {
      name: '',
      email: ''
    }
  },

  firebase: {
    subscribe: subscribeRef
  },

  methods: {
    subscribe() {
      let validate = function(e) {
        var email = document.querySelector("#email").value
        var regex =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if(regex.test(email)){
          return true;
        } else {
          alert("Masukkan alamat email yang benar");
          return false;
        }
      }

      if(this.name != '' && this.email != '' && validate(this.email)){
          subscribeRef.push({
            name: this.name,
            email: this.email
          })
          alert('Terima Kasih telah subscribe! Pilih tombol "Order Now" untuk proses cetak filemu !')
      }
      else {
        alert('Nama & email tidak boleh kosong!')
      }
    },

  }
}
</script>

<style scoped>
  * {
    font-family: 'Open Sans';
  }
  .col1{width: 70%} .col2{width: 20%} .col3{width: 10%}
  .spanduk{
    font-size: 12px;
  }
  .modplus{
    font-weight: 700;
    font-size: 16px;
  }
  .spandave{
    font-size: 14px;
  }
  .letter{
    letter-spacing: -3px;
  }
  .bg-total{
    border-top:0.5px solid #333;
    margin-top: 50px;
  }
  .span-letter{
    margin-left: 20px;
    margin-right: 20px;
  }
  .left-side {
    background-color: #F6F6F6;
    background-image: url('../assets/bgbiru.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: -40px;
    min-height: 100vh;
    padding-top: 6rem;
    text-align: left
  }

  /* #wave {
    position: absolute;
    background-image: url('../assets/background_biru.png');
    background-repeat: no-repeat;
    z-index: -1;
    min-height: 100vh;
    background-size: cover;
    left: 0;
  } */

  .right-side {
    background-color: #F6F6F6;
    min-height: 100vh;
  }

  h5 {
    text-align: left;
    line-height: 34px;
    color: #fff;
    font-weight: 600;
    width: 60%;
    margin: 0 auto;
  }

  h3 {
    text-align: left;
    color: #fff;
    width: 60%;
    margin: 0 auto;
  }

  h3 span {
    color: #F4BE0B;
    margin: 0 auto;
  }

  h6 {
    text-align: left;
    line-height: 22px;
    color: #fff;
    font-weight: 600;
    width: 60%;
    margin: 0 auto;
  }

  h6 span {
    color: #F4BE0B;
  }

  .bolder {
    font-weight: 900;
  }

  form {
    margin: 0 auto;
    padding: 10px;
  }

  input {
    margin-top: 20px;
    border: none;
  }

  .modal-badge {
    margin-top: 0 !important;
    height: 25px !important;
  }

  .button-subscribe {
    background-color: #F4BE0B;
    color: #fff;
    font-weight: bold;
    margin-bottom: 30px;
  }

  .text-subscribe{
    color: #250825 !important;
  }

  .modal-content{
    background-color: #f0f0f0 !important;
    z-index: 9999999;
  }
  .fade {
    background-color: #080808ad !important;
  }
  /* .in-field{
    background-color: rgb(209, 209, 209);
  } */
  .button-subscribe:hover {
    opacity: 0.5;
  }

  .button-order {
    background-color: #0065C2;
    color: #fff;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .button-order:hover {
    opacity: 0.5;
  }

  .social-media {
    width: 40px;
    height: 40px;
    display: inline;
    margin: 10px;
  }

  .social-media:hover {
    opacity: 0.5;
  }

  .logo {
    width: 30%;
  }
</style>