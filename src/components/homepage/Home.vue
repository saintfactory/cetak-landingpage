<template>
	<div class="container-fluid">
		<loading :active.sync="isLoading" :can-cancel="true" :is-full-page="fullPage"></loading> 
		<div class="hero cover row justify-content-md-center">
			<div class="hero-part col-md-6 text-left">
				<h1 class="font-hero text-light mb-3">Cetak dokumen kamu sekarang
				<br> cepat, mudah, dan dimana saja</h1>
				<p class="font-secondary font-weight-normal">Dikejar <span class="font-weight-bold">Deadline</span>? Tenang, ada <span class="font-weight-bold">Cetak.Id</span></p>
				<a v-on:click="getStarted" class="rounded-pill btn btn-warning mt-3">
					<router-link to='/dashboard-customer' class="btn-based btn font-weight-bold text-secondary">Cetak Sekarang</router-link>
				</a>
			</div>
			<div class="hero-paid col-md-6">
			</div>
		</div>

		<div class="usefull row justify-content-md-center mb-5">
			<div class="col-md-12 cara">
				<h3 class="center font-title mt-5 mb-5">Bagaimana Caranya?</h3>
			</div>

				<div class="col-md-4 text-center ">
					<div class="col-md-12">
						<img class="gmbr" src="../../assets/img/benefit1.png" alt="Upload Dokumen di Cetak.id">
					</div>
					<div class="col-md-12">
						<h5 class="text center font-subhero">PILIH</h5>
					</div>
					<div class="col-md-12">
						<p class="font-primary black lh-copy">Pilih vendor yang kamu mau! gunakan <br> fitur cek harga untuk memastikan estimasi harga
						</p>
					</div>
				</div>

				<div class="col-md-4 text-center ">
					<div class="col-md-12">
						<img class="gmbr" src="../../assets/img/benefit2.png" alt="Upload Dokumen di Cetak.id">
					</div>
					<div class="col-md-12">
						<h5 class="text center font-subhero">CETAK</h5>
					</div>
					<div class="col-md-12">
						<p class="font-primary black lh-copy">Dokumen pesanan Anda akan <br> dicetak oleh vendor pilihan Anda
						</p>
					</div>
				</div>

				<div class="col-md-4 text-center">
					<div class="col-md-12">
						<img class="gmbr" src="../../assets/img/benefit3.png" alt="Upload Dokumen di Cetak.id">
					</div>
					<div class="col-md-12">
						<h5 class="text center font-subhero">AMBIL</h5>
					</div>
					<div class="col-md-12 text-center">
						<p class="font-primary black lh-copy">Ambil hasil cetak dokumen <br> di tempat pilihan sekaligus bayar
						</p>
					</div>
				</div>

		</div>

		<div class="footer cover row justify-content-md-center ">
			<div class="col-sm-12 part-foot">
				<h1 class="font-hero text-warning mb-3">500+ Dokumen</h1>
				<h2 class="font-subhero text-light mb-3">Sudah berhasil dicetak</h2>
				<p class="font-primary text-light mb-4 font-italic">Banyak pengguna semakin mudah dan cepat<br>
						mencetak dokumen setelah menggunakan Cetak.ID
				</p>
				<a v-on:click="getStarted" class="rounded-pill btn btn-warning mt-3 mb-5">
					<router-link to='/dashboard-customer' class="btn-based btn font-weight-bold text-secondary">Cetak Sekarang</router-link>
				</a>
			</div>
		</div>
		
		<div class="super-foot bg-dark cover row justify-content-md-center copyrights">
			<div class="col-md-8 p-4">
				<img src="../../assets/img/LogoteksPutih.png" alt="" class="mb-3 footerCredit">
				<p class="text-light font-primary">Copyright Cetak.Id 2019</p>
			</div>

			<div class="col-md-4 p-4 medsos">
				<!-- <table class="table table-sm table-borderless">
					<thead class="font-primary text-light font-weight-bold">
						<th>Navigasi</th>
						<th>Sosial Media</th>
					</thead>
					<tbody>
						<tr>
							<td><a><router-link to='/tentang-kami' class="text-light font-smaller">Tentang Kami</router-link></a></td>
							<td><a class="text-light font-smaller" href="https://www.instagram.com/cetakkid.official/">Instagram</a></td>
						</tr>
						<tr>
							<td><a><router-link to='/tentang-kami' class="text-light font-smaller">Cara Cetak</router-link></a></td>
							<td><a class="text-light font-smaller" href="https://www.linkedin.com/company/cetakk-id/">LinkedIn</a></td>
						</tr>
					</tbody>
				</table> -->
				<a href="https://www.instagram.com/cetakkid.official/">
                    <img class="img-tumbs" src="../../assets/img/instagramwhite.png" alt="">
                </a>
				<a href="https://www.linkedin.com/company/cetakk-id/">
                    <img class="img-tumbs" src="../../assets/img/linkedinwhite.png" alt="">
                </a>
			</div>

		</div>

	</div>
</template>

<script>
/* eslint-disable */
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

export default {
	name: 'Home',
	components: {
		Loading
	},
	data(){
		return {
			isLoading: false,
			fullPage: true
		}
	},
	methods: {
		getStarted(){
			return 0
		}
	},
	mounted() {
		this.isLoading = true
		setTimeout(() => {
			this.isLoading = false
		}, 3000)
	}
}
</script>

<style scoped>
.font-hero{
    font-weight: 700;
    font-size: 32px;
}
.font-subhero{
    font-weight: 700;
    font-size: 25px;
}
.font-title{
    font-size: 30px;
}
.font-secondary{
    font-weight: 500;
    font-size: 18px;
    color: #ffc502
}
.font-primary{
    font-size: 14px;
}
.hero {
    background:url('../../assets/img/vectorBg.png') no-repeat center;
    background-size: cover;
    min-height: 120vh;
	background-color: rgba(255, 255, 255, 0.816);
	background-position-y: -10vh;
	padding-top: 25vh;
}
.hero-part{
    padding: 100px;
}
.hero-paid{
	background: url('../../assets/home-paid.png') no-repeat;
}
section{
    margin-top: 10vh
}
.home-image{
    min-width: 70%
}

.hero--button {
    color: #C7E87C;
}

.gmbr{
	min-height: 240px;
    max-height: 240px;
    max-width: 100%;
	margin-bottom: 40px;
}

.gmbr:hover{
	transition: transform .5s !important;
	transform: scale(1.1) !important
}

.font-smaller:hover{
    color: #F4BE0B !important;
    text-decoration: none;
    transform: scale(1.02) !important;
}

.footer{
    background: url('../../assets/footer.png') no-repeat center;
    background-size: cover;
    min-height: 50vh;
	background-color: #ffffff;
	background-position-y: 20px;
}
.part-foot{
    margin-top: 100px;
}

.super-foot{
    min-height: 100px;
    background-color:#0E75D3
}
.footerCredit{
	width: 100px;
	text-align: left
}

.img-tumbs{
    min-width: 35px;
    max-width: 35px;
	margin: 10px;
	text-align: center;
}

.img-tumbs:hover{
    transition: transform .5s !important;
	transform: scale(1.1) !important
}
.copyrights{
	text-align: left !important;	
}
.medsos{
	text-align: right !important
}

@media (max-width: 790px) {
	.font-hero{
		font-weight: 700;
		font-size: 20px;
	}
	.hero{
		padding-top: 100px;
		min-height: 70vh;
		background-position-y: 0vh;
	}
	.hero-part{
    	padding: 30px;
	}
	.hero-paid{
		display: none
	}
	.gmbr{
		min-height: 180px;
		max-height: 180px;
		max-width: 100%;
		margin-bottom: 20px;
	}	
	.footer{
		background: url('../../assets/footer.png') no-repeat center;
		background-size: cover;
		min-height: 40vh;
		background-color: #0065C2;
	}
	.copyrights{
		text-align: center !important;
		padding-bottom: 0px !important
	}

	.medsos{
		text-align: center !important;
		padding-top: 0px !important
	}

}
</style>