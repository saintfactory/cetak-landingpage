<template>
	<div class="container-fluid">
		<loading :active.sync="isLoading" :can-cancel="true" :is-full-page="fullPage"></loading> 
		<div class="hero cover row justify-content-md-center">
			<div class="hero-part col-md-6 text-left">
				<h1 class="font-hero text-light mb-3">Cetak dokumen kamu sekarang
				<br> cepat, mudah, dan dimana saja</h1>
				<p class="font-secondary font-weight-normal">Dikejar <span class="font-weight-bold">Deadline</span>? Tenang, ada <span class="font-weight-bold">Cetak.Id</span></p>
				<a v-on:click="getStarted" class="btn-based btn btn-warning">
					<router-link to='/dashboard-customer' class="btn-based btn">Cetak Sekarang</router-link></a>
			</div>
			<div class="hero-paid col-md-6">
			</div>
		</div>

		<div class="usefull row justify-content-md-center">
			<div class="col-md-12 cara" style="">
				<h3 class="center font-title mt-5">Bagaimana Caranya?</h3>
			</div>

			<div class="row justify-content-md-center batch">
				<div class="col-sm-4 text-center ">
					<div class="col-md-12">
						<img class="gmbr" src="../../assets/batch1.png" alt="Upload Dokumen di Cetak.id">
					</div>
					<div class="col-md-12">
						<h5 class="text center font-subhero">UPLOAD</h5>
					</div>
					<div class="col-md-12">
						<p class="font-primary black lh-copy">Daftar akun lalu pilih tempat cetak <br> yang kamu mau kemudian upload file
						</p>
					</div>
				</div>

				<div class="col-sm-4 text-center ">
					<div class="col-md-12">
						<img class="gmbr" src="../../assets/batch2.png" alt="Upload Dokumen di Cetak.id">
					</div>
					<div class="col-md-12">
						<h5 class="text center font-subhero">CETAK</h5>
					</div>
					<div class="col-md-12">
						<p class="font-primary black lh-copy">Dokumen akan dicetak <br> sesuai dengan tempat permintaan
						</p>
					</div>
				</div>

				<div class="col-sm-4 text-center">
					<div class="col-md-12">
						<img class="gmbr" src="../../assets/batch3.png" alt="Upload Dokumen di Cetak.id">
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
		</div>

		<div class="footer cover row justify-content-md-center ">
			<div class="col-sm-12 part-foot">
				<h1 class="font-hero text-warning mb-3">500+ Dokumen</h1>
				<h2 class="font-subhero text-light mb-3">Sudah berhasil dicetak</h2>
				<p class="font-primary text-light mb-4 font-italic">Ribuan pengguna semakin mudah dan cepat<br>
						mencetak dokumen setelah menggunakan Cetak.ID
				</p>
				<a v-on:click="getStarted" class="btn-based btn btn-warning" href="#feature">
					<router-link to='/dashboard-customer' class="btn-based btn">Cetak Sekarang</router-link></a>
			</div>
		</div>
		
		<div class="super-foot cover row justify-content-md-center text-left pl-5 pt-4">
			<div class="col-md-8">
				<img src="../../assets/LogoteksPutih.png" height="95" alt="" class="mb-3">
				<p class="text-light font-primary">Copyright Cetak.Id 2019</p>
			</div>

			<div class="col-md-4">
				<table class="table table-sm table-borderless">
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
				</table>
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
.btn-based{
    border-radius: 25px;
    color: text-light;
	text-decoration: none;
}
.btn-based:hover{
    text-decoration: none;
}
.btn-second{
    border-radius: 5px;
    height: 50px;
    width: 300px;
    margin: 30px;
    color: text-light;
    text-decoration: none;
    font-weight: 700
}
.btn-primary{
    background-color: #0065C2 !important
}
.btn-primary:hover{
    background-color: rgb(8, 85, 157) !important
}
.hero {
    background:url('../../assets/bghome.png') no-repeat center;
    background-size: cover;
    min-height: 130vh;
    background-color: rgba(255, 255, 255, 0.816);
    padding-top: 200px
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
	min-height: 290px;
    max-height: 290px;
    max-width: 90%;
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
</style>