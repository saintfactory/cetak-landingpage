<template>
    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header mb-2">
                <h2 class="modal-title text-left" ><img src="../assets/Logo.png" alt="Logo Cetak" class="img-fluid logo" /></h2>
                <!-- <p class="modal-title modplus text-left" >Daftar Harga</p> -->
                <button type="button" class="align-center close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <p class="modal-title modplus text-left mb-3" >Cek Estimasi Harga</p>

                <!-- <table class="table table-hover table-bordered table-sm text-left">
                <thead class="">
                    <th class="col1">Barang</th>
                    <th class="col2">Harga/qtc</th>
                    <th class="col3">Pesanan</th>
                </thead>

                <tbody v-for="produk in produk" v-bind:key="produk">
                    <tr>
                    <td class="align-baseline">{{produk.etalase}}</td>
                    <td class="align-baseline">Rp. {{produk.harga}}</td>
                    <td class="align-baseline"><input type="number" class="form-control modal-badge" placeholder="0"></td>
                    </tr>
                </tbody>

                <tr class="bg-total">
                    <td class="align-baseline font-weight-bold" colspan="2">Total Harga</td>
                    <td class="align-baseline">Rp.50000</td>
                </tr>
                </table> -->

                <!-- Daftar Print -->
                <p><a data-toggle="collapse" href="#print" aria-expanded="false" aria-controls="print">Harga Print</a></p>
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
                <p><a data-toggle="collapse" href="#jilid" aria-expanded="false" aria-controls="jilid">Harga Jilid</a></p>
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
                'https://wa.me/6282390243711?text=Halo%2C%20aku%20tertarik%20untuk%20melakukan%20pencetakan%20dokumen.%20Mohon%20dibantu%20ya%20kak.%0ANama%20%3A%0AJenis%20dokumen%20%3A%0AJumlah%20halaman%20%3A%0AUkuran%20kertas%20%3A%0AJilid%20%3A%20y%2Fn%20%28tambahkan%20keterangan%20jilid%20spt%20cover%20%2B%20warna%29%0AJasa%20Antar%20%3A%20y%2Fn%20%28alamat%20kamu%29%0A%0ATerima%20Kasih'
            )
        }
    },
    data() {
        return {
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