<template>
  <div class="profilUser">
    <div class="row">
      <div class="col-md-3 col-sm-6 mb-2" v-for="vendor in vendors" :key="vendor.id">
          <div class="card card-block">
            <div class="card-body p-2">
              <img :src="vendor.imgLink" alt="Photo of sunset">
            </div>
            <div class="card-body p-2">
              <h3>{{ vendor.name }}</h3>
              <p class="describer">{{ vendor.address }}</p> 
            </div>

            <div class="card-footer p-2">
              <a class="btn btn-primary btn-sm mr-2" :href="vendor.orderLink">Cetakk</a>
              <button class="btn btn-warning btn-sm text-light linked" data-toggle="modal" data-target="#pesan">Cek Harga</button> 
            </div>
          </div>
      </div>
      <div class="col-md-3 col-sm-6 mb-2" v-for="vendor in cooming_soons" :key="vendor.id">
        <div class="card card-block card-cooming-soon">
          <div class="card-body p-2">
            <img :src="vendor.imgLink" alt="Cooming Soon" class="mt-4" style="opacity: 0.2;">
            <h2 class="font-weight-bold text-center caption-cooming-soon">{{ vendor.name }}</h2>
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
  },
  data() {
    return {
      vendors: [
        {
          id: 1,
          name: 'Keylacopier • Owner',
          address: 'Jl. Jaliurang KM.13 Besi, Sukoharjo, Ngaglik, Sleman',
          imgLink: 'https://static.pexels.com/photos/7096/people-woman-coffee-meeting.jpg',
          orderLink: 'https://s.id/vendor1'
        },
      ],
      cooming_soons: [
        {
          name: 'Cooming Soon',
          imgLink: 'https://assets-ouch.icons8.com/preview/149/9566f952-eae4-4d7f-ae5d-5d20728d817e.png'
        },
        {
          name: 'Cooming Soon',
          imgLink: 'https://assets-ouch.icons8.com/preview/149/9566f952-eae4-4d7f-ae5d-5d20728d817e.png'
        },
        {
          name: 'Cooming Soon',
          imgLink: 'https://assets-ouch.icons8.com/preview/149/9566f952-eae4-4d7f-ae5d-5d20728d817e.png'
        }
      ]
    }
  }
}

</script>

<style scoped>
*{
  font-size: 14px ;  
}
.cardPrint{
  border-radius: 20px;
  border: 2px solid rgba(223, 133, 49, 0.796);
}
.card-cooming-soon {
  position: relative;
  text-align: center;
  color: #7e7e7e;
  height: 100%;
}
.caption-cooming-soon {
  position: absolute;
  bottom: 45%;
  left: 15%;
  font-size: 24px;
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
