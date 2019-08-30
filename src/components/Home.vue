<template>
  <div class="row">
    <div class="col-lg-6 col-md-6 col-sm-12 col-12 left-side">
      <div id="wave" class="w-100 p-5">
        <h4><span class="bolder">CETAKK.ID</span> akan segera hadir untuk memudahkan proses cetak dokumen kamu!</h4>
        <h6 class="mt-2"><span class="bolder">SUBSCRIBE</span> now for more info and updates!</h6>
        <h6><span class="bolder">ORDER</span> untuk cetak dokumen via whatsapp</h6>
        <img src="../assets/undraw_printing_invoices_5r4r.png" alt="landing-page" class="my-4 w-75 d-block">
        <span class="text-white font-weight-bold">Contact Info : cetakid.info@gmail.com</span>
      </div>
    </div>
    <div class="col-lg-6 col-md-6 col-sm-12 col-12 right-side p-lg-5">
      <h4 class="logo mt-5">CETAKK.ID</h4>
      <form class="form-group w-75">
        <input type="text" class="form-control" placeholder="Nama" v-model="name" required />
        <input type="email" class="form-control" placeholder="Email" v-model="email" required />
        <input type="button" class="form-control button-subscribe" value="Subscribe" @click="subscribe" />
        <input type="button" id="order" class="form-control button-order" data-toggle="modal" data-target="#orderModal" value="Order Now" @click="orderNow" />

        <span class="text-secondary text-center display-block">And don’t worry, we hate spam too!</span>
        <span class="text-secondary text-center display-block">You can unsubscribe at anytime.</span>
      </form>
      <div>
        <a href="https://www.instagram.com/cetakk/"><img src="../assets/instagram.png" alt="instagram" class="social-media"></a>
        <a href="https://medium.com/cetakk-id"><img src="../assets/medium.png" alt="medium" class="social-media"></a>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import subscribeRef from '../firebase'

export default {
  name: 'Home',

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
      if(this.name != '' && this.email != ''){
        subscribeRef.push({
          name: this.name,
          email: this.email
        })
        alert('Terima Kasih telah subscribe! Pilih tombol "Order Now" untuk proses cetak filemu !')
        document.querySelector("#order").style.visibility = "visible";
      } else {
        alert('Nama & email tidak boleh kosong!')
      }
    },

    orderNow() {
      window.open(
        'https://wa.me/6282390243711?text=Maaf%20sebelumnya%2C%20jika%20ingin%20melakukan%20pesanan%20cetak%20dokumen.%20Kamu%20harus%20mengisi%20form%20dibawah%20ini%20terlebih%20dahulu.%0A%0AHalo%2C%20saya%20mau%20titip%20dokumen%20saya%20untuk%20di%20print.%0ANama%20%3A%0AJenis%20dokumen%20%3A%0AJumlah%20halaman%20%3A%0AUkuran%20kertas%20%3A%0AJilid%20%3A%20y%2Fn%20%28tambahkan%20keterangan%20jilid%20spt%20cover%20%2B%20warna%29%0AJasa%20Antar%20%3A%20y%2Fn%20%28alamat%20kamu%29%0A%0ATerima%20Kasih'
      )
    }
  }
}
</script>

<style scoped>
  * {
    font-family: 'Open Sans';
  }

  .left-side {
    background-color: #F6F6F6;
    background-image: url('../assets/background_biru_2.png');
    background-repeat: no-repeat;
    min-height: 100vh;
    z-index: -1;
  }

  #wave {
    position: absolute;
    background-image: url('../assets/background_biru.png');
    background-repeat: no-repeat;
    z-index: -1;
    min-height: 100vh;
    left: 0;
  }

  .right-side {
    background-color: #F6F6F6;
    min-height: 100vh;
    z-index: 1;
  }

  h4 {
    text-align: left;
    line-height: 34px;
    color: #fff;
    font-weight: 600;
    width: 60%;
    margin: 0 auto;
  }

  h6 {
    text-align: left;
    line-height: 22px;
    color: #F4BE0B;
    font-weight: 600;
    width: 60%;
    margin: 0 auto;
  }

  .bolder {
    font-weight: 900;
  }

  .logo {
    color: #0065C2;
    font-weight: bolder;
    margin: 0 auto;
    text-align: center;
  }

  form {
    margin: 0 auto;
    padding: 30px;
  }

  input {
    margin-top: 30px;
    border: none;
  }

  .button-subscribe {
    background-color: #0065C2;
    color: #fff;
    font-weight: bold;
    margin-bottom: 30px;
  }

  .button-subscribe:hover {
    opacity: 0.5;
  }

  .button-order {
    background-color: #F4BE0B;
    color: #fff;
    font-weight: bold;
    margin-bottom: 30px;
    visibility: hidden;
  }

  .button-order:hover {
    opacity: 0.5;
  }

  img {
    margin: 0 auto;
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
</style>