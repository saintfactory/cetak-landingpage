<template>
  <div class="row">
    <div class="col-lg-6 col-md-6 col-sm-12 col-12 left-side">
      <div id="wave" class="w-100 p-5">
        <h4><span class="bolder">CETAK.ID</span> akan segera hadir untuk memudahkan proses cetak dokumen kamu!</h4>
        <h6 class="mt-2"><span class="bolder">SUBSCRIBE</span> now for more info and updates!</h6>
        <h6><span class="bolder">ORDER</span> untuk cetak dokumen via whatsapp</h6>
        <img src="../assets/undraw_printing_invoices_5r4r.png" alt="landing-page" class="my-4 w-75 d-block">
        <span class="text-white font-weight-bold">Contact Info : cetak.info@gmail.com</span>
      </div>
    </div>
    <div class="col-lg-6 col-md-6 col-sm-12 col-12 right-side p-lg-5">
      <h4 class="logo mt-5">CETAK.ID</h4>
      <form class="form-group w-75">
        <input type="text" class="form-control" placeholder="Nama" v-model="name" />
        <input type="email" class="form-control" placeholder="Email" v-model="email" />
        <input type="button" class="form-control button-subscribe" value="Subscribe" @click="subscribe" />
        <input type="button" class="form-control button-order" data-toggle="modal" data-target="#orderModal" value="Order Now" />
        
        <div class="modal fade" id="orderModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Cara Order Cetak Dokumen</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <img src="../assets/undraw_payments_21w6.png" class="img-fluid" alt="Cara Order">
              </div>
              <div class="modal-footer">
                <button type="button" class="form-control button-order" @click="orderNow">Order Sekarang</button>
              </div>
            </div>
          </div>
        </div>

        <span class="text-secondary text-center display-block">And don’t worry, we hate spam too!</span>
        <span class="text-secondary text-center display-block">You can unsubscribe at anytime.</span>
      </form>
      <div>
        <a href="https://instagram.com"><img src="../assets/instagram.png" alt="instagram" class="social-media"></a>
        <a href="https://linked.in"><img src="../assets/linkedin.png" alt="linkedin" class="social-media"></a>
        <a href="https://twitter.com"><img src="../assets/twitter.png" alt="twitter" class="social-media"></a>
        <a href="https://web.whatsapp.com"><img src="../assets/whatsapp.png" alt="whatsapp" class="social-media"></a>
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
      subscribeRef.push({
        name: this.name,
        email: this.email
      })
      this.name = ''
      this.email = ''
      alert('Terima Kasih sudah subscribe! Tunggu release kami selanjutnya ya!')
    },

    orderNow() {
        return null
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
    z-index: 1;
  }

  #wave {
    position: absolute;
    background-image: url('../assets/background_biru.png');
    background-repeat: no-repeat;
    z-index: 1;
    min-height: 100vh;
    left: 0;
  }

  .right-side {
    background-color: #F6F6F6;
    min-height: 100vh;
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