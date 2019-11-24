<template>
    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header mb-2">
                <h2 class="modal-title text-left" ><img src="../../assets/Logo.png" alt="Logo Cetak" class="img-fluid logo" /></h2>
                <!-- <p class="modal-title modplus text-left" >Daftar Harga</p> -->
                <button type="button" class="align-center close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <p class="modal-title modplus text-left mb-3" >Cek Estimasi Harga</p>

                <!-- Daftar Print -->
                <p><a data-toggle="collapse" href="#print" aria-expanded="false" aria-controls="print">Cek Harga Print</a></p>
                <table class="table table-hover table-bordered table-sm text-left collapse multi-collapse" id="print">
                    <thead class="">
                        <th class="col1">Barang</th>
                        <th class="col2">Harga/qtc</th>
                        <th class="col3">Pesanan</th>
                    </thead>

                    <tbody v-for="print in prints" v-bind:key="print.id">
                        <tr>
                            <td class="align-baseline">{{print.etalase}}</td>
                            <td class="align-baseline">Rp. {{print.harga}}</td>
                            <td class="align-baseline"><input type="number" class="form-control modal-badge" placeholder="0" v-model="print.order"></td>
                        </tr>
                    </tbody>
                </table>

                <!-- Daftar Jilid	 -->
                <p><a data-toggle="collapse" href="#jilid" aria-expanded="false" aria-controls="jilid">Cek Harga Jilid</a></p>
                <table class="table table-hover table-bordered table-sm text-left collapse multi-collapse" id="jilid">
                    <thead class="">
                        <th class="col1">Barang</th>
                        <th class="col2">Harga/qtc</th>
                        <th class="col3">Pesanan</th>
                    </thead>

                    <tbody v-for="jilid in jilids" v-bind:key="jilid.id">
                        <tr>
                            <td class="align-baseline">{{jilid.etalase}}</td>
                            <td class="align-baseline">Rp. {{jilid.harga}}</td>
                            <td class="align-baseline"><input type="number" class="form-control modal-badge" placeholder="0" v-model="jilid.order"></td>
                        </tr>
                    </tbody>
                </table>

                <table class="table table-hover table-bordered table-sm text-left">
                    <tr class="bg-total">
                        <td class="align-baseline font-weight-bold" colspan="2">Total Harga</td>
                        <td class="align-baseline">Rp {{ (totalJilid + totalPrint) }}</td>
                    </tr>
                </table>

                <input type="button" id="order" class="form-control button-order" data-toggle="modal" data-target="#orderModal" value="Pesan Sekarang" @click="orderNow" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PriceList',
    computed: {
        totalPrint: function(){
            return this.prints.reduce(function(total, item){
                return total += item.order*item.harga; 
            },0);
        },
        
        totalJilid: function(){
            return this.jilids.reduce(function(total, item){
                return total += item.order*item.harga; 
            },0);
        }
    },
    methods: {
        orderNow: function() {
            window.open(
                'https://s.id/vendor1'
            )
        }
    },
    data() {
        return {
            hvs_hitamputih: [
                {
                    etalase: 'A4',
                    harga: 200,
                    order: ''
                },
                {
                    etalase: 'F4',
                    harga: 250,
                    order: ''
                },
                {
                    etalase: 'A3',
                    harga: 1200,
                    order: ''
                }
            ],
            hvs_warna: [
                {
                    etalase: 'A4',
                    harga: 500,
                    order: ''
                },
                {
                    etalase: 'F4',
                    harga: 750,
                    order: ''
                },
                {
                    etalase: 'A3',
                    harga: 1200,
                    order: ''
                }
            ],
			prints: [
				{
					etalase: "Kertas A4 Print Hitam/Putih",
					harga: 200,
                    order: ''
				},
				{
					etalase: "Kertas A4 Print Warna",
					harga: 500,
                    order: ''
				},
				{
					etalase: "Kertas A4 Print Full Warna",
					harga: 1500,
                    order: ''
				},
				{
					etalase: "Kertas F4 Print Hitam/Putih",
					harga: 250,
                    order: ''
				},
				{
					etalase: "Kertas F4 Print Warna",
					harga: 750,
                    order: '' 
				},
				{
					etalase: "Kertas F4 Print Full Warna",
					harga: 2000,
                    order: '' 
				},
			],
			jilids: [
				{
					etalase: "Jilid Mika",
					harga: 3000,
                    order: '' 
				},
				{
					etalase: "Jilid Hardcover",
					harga: 4000,
                    order: '' 
				},					
			],
        }
    }
}
</script>

<style scoped>
  * {
    font-family: 'Open Sans';
  }
  .col1{width: 70%} .col2{width: 20%} .col3{width: 10%}
  .modplus{
    font-weight: 700;
    font-size: 16px;
  }
  .bg-total{
    border-top:0.5px solid #333;
    margin-top: 50px;
  }
  input {
    margin-top: 20px;
    border: none;
  }
  .modal-badge {
    margin-top: 0 !important;
    height: 25px !important;
  }
  .modal-content{
    background-color: #f0f0f0 !important;
    z-index: 9999999;
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
  .logo {
    width: 30%;
  }
</style>