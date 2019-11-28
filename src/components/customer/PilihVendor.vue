<template>
  <div class="pilihVendor">
    <div class="row p-5">
      <div class="col-md-12">
        <input type="text" class="d-block form-control searchbar rounded-pill" placeholder="Cari Vendor ..." v-model="search" />
      </div>
    </div>
    <div class="row pr-5 pl-5 text-left" v-for="vendor in filteredList" :key="vendor.id">
      <div class="col-md-2 col-sm-6 mb-2" v-for="vendor in vendors" :key="vendor.id">
          <div class="card card-block">
            <div class="card-body p-2">
              <img src="../../assets/keylacopier.jpeg" alt="Photo of sunset">
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

      <div class="col-md-2 col-sm-6 mb-2" v-for="vendor in cooming_soons" :key="vendor.id">
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
          address: 'Jl. Kaliurang KM.13 Besi, Sukoharjo, Ngaglik, Sleman',
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
  },
  computed: {
		filteredList: function(){
			return this.vendors.filter((vendor) => {
				return vendor.name.match(this.search)
				//return order.type.toLowerCase().indexOf(this.search.toLowerCase()) > -1
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
