<template>
	<div class="container-fluid">
		<loading :active.sync="isLoading" :can-cancel="true" :is-full-page="fullPage"></loading> 
		<div class="hero cover row justify-content-md-center">
			<div class="hero-part col-md-6 text-left">
				<h1 class="font-hero text-light mb-3">Cetak dokumen kamu sekarang
				<br> cepat, mudah, dan dimana saja</h1>
				<p class="font-secondary font-weight-normal">Dikejar <span class="font-weight-bold">Deadline</span>? Tenang, ada <span class="font-weight-bold">Cetakk.Id</span></p>
				
				<p class="font-weight-bold text-light mt-5">Dokumen tercetak bulan ini</p>
				<div class="row pl-3">
					<div class="col-1 bg-light p-2 mr-2 text-center rounded shadow">
						<span class="count" id="ribuan"></span>
					</div>

					<div class="col-1 bg-light p-2 mr-2 text-center rounded shadow">
						<span class="count" id="ratusan"></span>
					</div>
					<div class="col-1 bg-light p-2 mr-2 text-center rounded shadow">
						<span class="count" id="puluhan"></span>
					</div>
					<div class="col-1 bg-light p-2 text-center rounded shadow">
						<span class="count" id="satuan"></span>
					</div>
				</div>

				
				<a v-on:click="getStarted" class="rounded-pill btn btn-warning mt-5">
					<router-link to='/dashboard-customer' class="btn-based btn font-weight-bold text-dark">Cetak Sekarang</router-link>
				</a>
			</div>
			<div class="hero-paid col-md-6">
				<img src="../../assets/img/home-paid.svg" alt="Hero image">
			</div>
		</div>

		<div class="usefull row justify-content-md-center mb-5">
			<div class="col-md-12 cara">
				<h3 class="center font-title mt-5 mb-5">Bagaimana Caranya?</h3>
			</div>

				<div class="col-md-4 text-center ">
					<div class="col-md-12">
						<img class="gmbr" src="../../assets/img/benefit1.svg" alt="Upload Dokumen di Cetakk.id">
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
						<img class="gmbr" src="../../assets/img/benefit2.svg" alt="Upload Dokumen di Cetakkid">
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
						<img class="gmbr" src="../../assets/img/benefit3.svg" alt="Upload Dokumen di Cetakk.id">
					</div>
					<div class="col-md-12">
						<h5 class="text center font-subhero">AMBIL</h5>
					</div>
					<div class="col-md-12 text-center">
						<p class="font-primary black lh-copy">Ambil hasil dokumen di lokasi  <br> vendor dan lakukan pembayaran
						</p>
					</div>
				</div>

		</div>

		<div class="footer cover row justify-content-md-center ">
			<div class="col-sm-12 part-foot">
				<h1 class="font-hero text-warning mb-3">100+ Dokumen</h1>
				<h2 class="font-subhero text-light mb-3">Sudah berhasil dicetak</h2>
				<p class="font-primary text-light mb-4 font-italic">Banyak pengguna semakin mudah dan cepat<br>
						mencetak dokumen setelah menggunakan Cetakk.id
				</p>
				<a v-on:click="getStarted" class="rounded-pill btn-outline-warning btn mt-3 mb-5">
					<router-link to='/dashboard-customer' class="btn text-button font-weight-bold text-white">Cetak Sekarang</router-link>
				</a>
			</div>
		</div>
		
		<div class="super-foot bg-dark cover row justify-content-md-center copyrights">
			<div class="col-md-8 p-4">
				<img src="../../assets/img/LogoteksPutih.png" alt="" class="mb-3 footerCredit">
				<p class="text-light font-primary">Copyright Cetakk.Id 2019</p>
			</div>

			<div class="col-md-4 p-4 medsos">
				<a href="https://www.instagram.com/cetakkid.official/">
                    <img class="img-tumbs" src="../../assets/img/instagramwhite.svg" alt="Instagram Profile">
                </a>
				<a href="https://www.linkedin.com/company/cetakk-id/">
                    <img class="img-tumbs" src="../../assets/img/linkedinwhite.svg" alt="LinkedIn Profile">
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

		// Set the date we're counting down to
		var countDownDate = new Date("Nov 28, 2010 01:40:00").getTime();

		// Update the count down every 1 second
		var x = setInterval(function() {

		// Get today's date and time
		var now = new Date().getTime();
			
		// Find the distance between now and the count down date
		var t = countDownDate + now;

		// var t = Date.parse(endtime) - Date.parse(new Date());
			
		// Time calculations for days, hours, minutes and seconds
		// var ribuan = Math.floor((distance % (10 * 10 * 10 * 10 * 10)) / (10 * 10 * 10 * 10));
		// var ratusan = Math.floor((distance % (100000 * 10 * 10 * 10)) / (100000 * 10 * 10));
		// var puluhan = Math.floor((distance % (100000 * 10 * 10)) / (100000 * 10));
		// var satuan = Math.floor((distance % (100000 * 10)) / 100000);
		
		var satuan = Math.floor((t / 176190790) % 10);
		var puluhan = Math.floor((t / 176190790 / 10) % 10);
		var ratusan = Math.floor((t / (176190790 * 10 * 10)) % 10);
		var ribuan = Math.floor(t / (176190790 * 10 * 10 * 10));

		// Output the result in an element with id="demo"
		document.getElementById("ribuan").innerHTML = 0;
		document.getElementById("ratusan").innerHTML = ratusan;
		document.getElementById("puluhan").innerHTML = puluhan;
		document.getElementById("satuan").innerHTML = satuan;

		
		}, 1000);
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
.count{
	font-size: 20px;
	font-weight: 800;
}
.hero {
    background:url('../../assets/img/vectorBg.svg') no-repeat center;
    background-size: cover;
    min-height: 120vh;
	background-color: rgba(255, 255, 255, 0.816);
	background-position-y: -10vh;
	padding-top: 15vh;
}
.hero-part{
    padding: 100px;
}
/* .hero-paid{
	background: url('../../assets/home-paid.png') no-repeat;
} */

.hero-paid img{
	width: 100%;
	padding: 6rem 5rem 0 5rem;
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

.btn-outline-warning{
	border: 2px solid #F4BE0B;
}

.text-white{
	color: #fff !important;
}

.text-white:hover{
	color: #222 !important;
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
    background: url('../../assets/img/footer.svg') no-repeat center;
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

@media (max-width: 900px) {
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
		background: url('../../assets/img/footer.svg') no-repeat center;
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