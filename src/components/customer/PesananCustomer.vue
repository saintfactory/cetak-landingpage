<template>
  <div class="profilUser">
    <div class="row">

      <!-- <div class="col-md-12 p-4">
        <div class="row justify-content-md-center cardPrint p-3">
          <div class="col-md-12 p-0">
            <div class="imagePrint mb-4 p-0">
              <span class="namaPrint ml-3">Keylacopier</span>
            </div>
            <div class="row m-2 p-0">
              <div class="d-inline p-0 mr-3">
                <button class="btn btn-primary btn-sm float-left">
                  <a href="https://s.id/vendor1" class="text-light linked">Cetakk</a>
                </button>
              </div>
              <div class="d-inline p-0">
                <button class="btn btn-warning btn-sm text-light linked float-left" data-toggle="modal" data-target="#pesan">Cek Harga</button> 
              </div>
            </div>
            <hr class="orient">
            <div class="row alamatPrint p-0 m-2">
              <p>Jl. Jaliurang KM.13 Besi, Sukoharjo, Ngaglik, Sleman</p>
            </div>
          </div>
        </div>
      </div> -->

      <!-- insert by irfan ============================================ -->
      <div class="col-md-3 col-sm-6">
          <div class="card card-block">
            <!-- <div class="card-header text-right">
              <i class="material-icons">settings</i>
            </div> -->

            <div class="card-body p-2">
              <img src="https://static.pexels.com/photos/7096/people-woman-coffee-meeting.jpg" alt="Photo of sunset">
            </div>
            <div class="card-body p-2">
              <h3>Sierra Web Development • Owner</h3>
              <p class="describer">Jl. Jaliurang KM.13 Besi, Sukoharjo, Ngaglik, Sleman</p> 
            </div>

            <div class="card-footer p-2">
              <!-- WAK INI CARA BIKIN TOMBOL YG EFEKTIF, JNGN TARO <A> DALAM BUTTON -_____-      -->
              <button class="btn btn-primary btn-sm mr-2" href="https://s.id/vendor1">Cetakk</button>
              <button class="btn btn-warning btn-sm text-light linked" data-toggle="modal" data-target="#pesan">Cek Harga</button> 
            </div>
          </div>
      </div>
      <!-- ### insert by irfan ============================================ -->
    
    </div>

    <!-- Modal Order -->
    <div class="modal fade" id="pesan" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <PriceList />
    </div>  


    
  </div>
</template>

<script>
import PriceList from './PriceList'
export default {
  name: 'Home',
  components : {
    PriceList
  }
}

</script>

<style scoped>
*{
  font-size: 14px !important;  
}
.cardPrint{
  border-radius: 20px;
  border: 2px solid rgba(223, 133, 49, 0.796);
}
.imagePrint{
  min-width: 100%;
  max-width: 100%;
  border-radius: 10px;
  height: 300px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../../assets/tempatPrint1.jpg");
  background-position: center;
}
.namaPrint{
  font-size: 30px !important;
  font-weight: 600;
  position: absolute;
  color: #fff;
  top: 50%;
}
.orient{
  border-bottom: 0.3px solid #ddd !important;
}
.linked{
  text-decoration: none;
}
.alamatPrint{
  max-height: 40px;
  overflow: auto;
}
.status{
  line-height: 3;
}
.fade {
  background-color: #080808ad !important;
}
.modal-badge {
  margin-top: 0 !important;
  height: 25px !important;
}
.modal-content{
  background-color: #f0f0f0 !important;
  z-index: 9999999;
}
.card:hover{
  transform: scale(1.001);
  transition:0.3s;
  box-shadow: 2px 2px 5px rgba(54, 54, 54, 0.3);
}
.card img{
  width:100%;
}

</style>
