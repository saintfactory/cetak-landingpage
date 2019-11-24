<template>
  <div class="profilUser">
    <div class="row p-3">

      <div class="col-md-12 p-4">
        <div class="row justify-content-md-center cardPrint p-3">
          <div class="col-md-12 p-0">
            <div class="imagePrint mb-4 p-0">
              <!-- <img src="../../assets/tempatPrint1.jpg" alt="" class="imagePrint mx-auto mb-2"> -->
              <span class="namaPrint ml-3">Keylacopier</span>
            </div>
            <div class="row m-2 p-0">
              <!-- <div class="col-md-4 p-0">
                <span class="status text-success">Buka</span>
              </div> -->
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
      </div>
    
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
</style>
