<template>
  <div class="pilihVendor">
    <div class="row p-5">
      <div class="col-md-12">
        <input type="text" class="d-block form-control searchbar rounded-pill" placeholder="Cari Vendor ..." :keyup="filteredList" v-model="search" id="search" />
      </div>
    </div>
    <!-- <div class="row pr-5 pl-5 text-left" v-for="vendor in filteredList" :key="vendor.id"> -->
    <div class="row pr-5 pl-5 text-left">
      <div class="col-md-3 col-sm-6 mb-2" id="vendorCard" v-for="vendor in filteredList" :key="vendor.id">
          <div class="card card-block">
            <div class="card-body p-2">
              <img :src="vendor.imgLink" :alt="vendor.alt">
            </div>
            <div class="card-body p-2">
              <h3 class="font-weight-bold">{{ vendor.name }}</h3>
              <p class="describer">{{ vendor.address }}</p> 
              <p>Buka pukul <span class="text-info">{{ vendor.openOrder }}</span></p>
            </div>

            <div class="card-footer p-2">
              <a class="btn btn-primary btn-sm mr-2" :href="vendor.orderLink">Cetakk</a>
              <button class="btn btn-warning btn-sm text-light linked" data-toggle="modal" data-target="#pesan">Cek Harga</button> 
            </div>
          </div>
      </div>
    </div>

    <!-- Modal Order -->
    <div class="modal fade" id="pesan" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <PriceList v-if="true" />
    </div>  
  </div>
</template>

<script>
import PriceList from './PriceList'
import imgKeylaCopierFc from '../../assets/keylacopier.jpeg'
import imgFazaFc from '../../assets/img/FC_Faza.png'
import imgNusantaraFc from '../../assets/img/FC_Nusantara.png'
import imgGrahaFc from '../../assets/img/FC_Graha.png'
import imgMataramFc from '../../assets/img/FC_Mataram.png'

export default {
  name: 'PilihVendor',
  components : {
    PriceList
  },
  data() {
    return {
      search: '',
      vendors: [
        {
          id: 1,
          name: 'Keylacopier • Owner',
          address: 'Jl. Kaliurang KM 13,5, Besi, Sukoharjo, Sleman (Depan Olive Chicken Jakal KM 13,5)',
          openOrder: '07.00 - 23.00 WIB',
          orderLink: 'https://s.id/vendor1',
          imgLink: imgKeylaCopierFc,
          alt: 'Keyla FC image'
        },
        {
          id: 2,
          name: 'Graha FC • Owner',
          address: 'Besi, Sukoharjo, Kec. Ngaglik, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55581 (Depan Rumah Makan Padang Mentari Pagi)',
          openOrder: '07.00 - 20.00 WIB',
          orderLink: 'https://s.id/vendor1',
          imgLink: imgGrahaFc,
          alt: 'Graha FC image'
        },
        {
          id: 3,
          name: 'Mataram FC • Owner',
          address: 'Jl. Besi Jaya No.B3, Besi, Sukoharjo, Kec. Ngaglik, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55581 (Depan Kost Putri Orange)',
          openOrder: '07.00 - 21.00 WIB',
          orderLink: 'https://s.id/vendor1',
          imgLink: imgMataramFc,
          alt: 'Mataram FC image'
        },
        {
          id: 4,
          name: 'Nusantara FC • Owner',
          address: 'Gg. Kanguru, Tj. Manding, Umbulmartani, Kec. Ngemplak, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55584 (Sebelah Hokkaido Ice Cream Corner)',
          openOrder: '07.00 - 21.00 WIB',
          orderLink: 'https://s.id/vendor1',
          imgLink: imgNusantaraFc,
          alt: 'Nusantara FC image'
        },
        {
          id: 5,
          name: 'Faza FC • Owner',
          address: 'Jl. Pandanaran - UII, Candi Winangun, Sardonoharjo, Kec. Ngaglik, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55581 (Sebelah Ayam Jalapeno)',
          openOrder: '07.00 - 21.00 WIB',
          orderLink: 'https://s.id/vendor1',
          imgLink: imgFazaFc,
          alt: 'Faza FC image'
        },
      ],
      
    }
  },

  computed: {
    filteredList(){
      return this.vendors.filter(vendor => {
        return vendor.name.toLowerCase().includes(this.search.toLowerCase())
        //return vendor.name.startsWith(this.search) 
      })
    }
	}
}

</script>

<style scoped>
.pilihVendor{
  padding-top: 10vh
}
*{
  font-size: 14px ;  
}
.card-Coming-soon {
  position: relative;
  text-align: center;
  color: #7e7e7e;
  height: 100%;
}
.caption-Coming-soon {
  position: absolute;
  bottom: 45%;
  left: 15%;
  font-size: 24px;
}
.linked{
  text-decoration: none;
}
.fade {
  background-color: #080808ad !important;
}
.card:hover{
  transform: scale(1.001);
  transition:0.3s;
  box-shadow: 2px 2px 5px rgba(54, 54, 54, 0.3);
}
.card img{
  width:100%;
}
.searchbar {
  border: 2px solid #ddd;
}

</style>
