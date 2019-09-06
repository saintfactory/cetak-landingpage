<template>
  <div class="row">
    <div class="col-lg-6 col-md-6 col-sm-12 col-12 left-side">
      <div id="wave" class="p-5">
        <h3>Dikejar <span class="bolder">Deadline?</span></h3>
        <h3>Tenang, Ada <span class="bolder">Cetakk.id</span></h3>
        <h6 class="my-3"><span class="bolder">Cetakk.id</span> akan segera hadir untuk memudahkan proses cetak dokumen kamu!</h6>
        <img src="../assets/Asset1.png" alt="landing-page" class="mt-5 pt-5 ml-4 w-75 d-block">
      </div>
    </div>
    <div class="col-lg-6 col-md-6 col-sm-12 col-12 right-side p-lg-5 ">
      <img src="../assets/Logo.png" alt="Logo Cetak" class="img-fluid logo mt-5" />
      <form class="form-group w-75">
        <input type="text" class="form-control" placeholder="Nama" v-model="name" required />
        <input type="email" class="form-control email" id="email" placeholder="Email" v-model="email" required />
        <input type="button" class="form-control button-subscribe" value="Subscribe" @click="subscribe" />
        <input type="button" id="order" class="form-control button-order" data-toggle="modal" data-target="#orderModal" value="Order Now" @click="orderNow" />
        <!-- <input type="button" class="form-control button-subscribe" value="Order Sekarang" @click="orderNow" /> -->

        <!-- <span class="text-secondary text-center display-block">Langganan sekarang untuk informasi lebih lanjut dan pembaruan</span> -->
        <span class="text-secondary text-center display-block">Order sekarang untuk mencoba layanan jasa percetakan dokumen kami</span>
      </form>
      <div>
        <a href="https://www.instagram.com/cetakk/"><img src="../assets/instagram.png" alt="instagram" class="social-media"></a>
        <a href="https://medium.com/cetakk-id"><img src="../assets/medium.png" alt="medium" class="social-media"></a>
        <a href="https://www.linkedin.com/company/cetakk-id/"><img src="../assets/linkedin.png" alt="linkedin" class="social-media"></a>
        <a href="mailto:cetakid.info@gmail.com?"><img src="../assets/gmail.png" alt="gmail" class="social-media"></a>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import subscribeRef from '../firebase'

let regex =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export default {
  name: 'Home',

  data() {
    return {
      // payload: {
      //   name: '',
      //   email: ''
      // }
      name: '',
      email: ''
    }
  },

  firebase: {
    subscribe: subscribeRef
  },

  // created() {
  //   let getData = function(){
  //     let ref = subscribeRef
  //     ref.on('value', function(snapshot){
  //       snapshot.forEach(function(childSnapshot){
  //         var childData = {
  //           name: childSnapshot.val().name,
  //           email: childSnapshot.val().email
  //         }
  //         console.log(childData)
  //       })
  //     })
  //   }

  //   getData()
  //},

  methods: {
    subscribe() {
      // let getData = function(childData){
      //   let ref = subscribeRef
      //   ref.on('value', function(snapshot){
      //     snapshot.forEach(function(childSnapshot){
      //       var childData = childSnapshot.val()
      //     })
      //   })
      // }

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
        // if(getData.name != this.name && getData.email != this.email){
          subscribeRef.push({
            name: this.name,
            email: this.email
          })
          alert('Terima Kasih telah subscribe! Pilih tombol "Order Now" untuk proses cetak filemu !')
          // document.querySelector("#order").style.visibility = "visible";
        // } else {
        //   alert('Nama & Email sudah terdaftar :)')
        // }
      }
      else {
        alert('Nama & email tidak boleh kosong!')
      }
    },

    orderNow() {
      window.open(
        'https://wa.me/6282390243711?text=Halo%2C%20aku%20tertarik%20untuk%20melakukan%20pencetakan%20dokumen.%20Mohon%20dibantu%20ya%20kak.%0ANama%20%3A%0AJenis%20dokumen%20%3A%0AJumlah%20halaman%20%3A%0AUkuran%20kertas%20%3A%0AJilid%20%3A%20y%2Fn%20%28tambahkan%20keterangan%20jilid%20spt%20cover%20%2B%20warna%29%0AJasa%20Antar%20%3A%20y%2Fn%20%28alamat%20kamu%29%0A%0ATerima%20Kasih'
      )
    }

    // orderNow() {
    //   let validate = function(e) {
    //     var email = document.querySelector("#email").value
    //     var regex =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
    //     if(regex.test(email)){
    //       return true;
    //     } else {
    //       alert("Masukkan alamat email yang benar");
    //       return false;
    //     }
    //   }

    //   if(validate(this.email)){
    //     subscribeRef.push({
    //       name: this.payload.name,
    //       email: this.payload.email
    //     })
    //     alert('Terima Kasih telah subscribe! Pilih tombol "Order Now" untuk proses cetak filemu !')
    //     window.open(
    //       'https://wa.me/6282390243711?text=Halo%2C%20aku%20tertarik%20untuk%20melakukan%20pencetakan%20dokumen.%20Mohon%20dibantu%20ya%20kak.%0ANama%20%3A%0AJenis%20dokumen%20%3A%0AJumlah%20halaman%20%3A%0AUkuran%20kertas%20%3A%0AJilid%20%3A%20y%2Fn%20%28tambahkan%20keterangan%20jilid%20spt%20cover%20%2B%20warna%29%0AJasa%20Antar%20%3A%20y%2Fn%20%28alamat%20kamu%29%0A%0ATerima%20Kasih'
    //     )     
    //   }
    // }

    
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