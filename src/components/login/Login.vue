<template>
	<div class="container-fluid">
		<div class="row justify-content-md-center login-part">			
			<form class="w-25 form-login">	
				<h2 class="font-hero text-light">SELAMAT DATANG</h2>
				<p class="text-light mb-5">Silahkan masuk dengan akun terdaftar</p>
				<div class="form-group text-left">
					<input type="email" v-model="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email">
				</div>
				<div class="form-group text-left">
					<input type="password" v-model="password" class="form-control" placeholder="Password">
				</div>
				<div class="form-group form-check text-left">
					<input type="checkbox" class="form-check-input" id="exampleCheck1">
					<label class="form-check-label text-light" for="exampleCheck1">Check me out</label>
				</div>
				<button type="button" class="btn btn-warning w-100" @click="login()">Login</button>
			</form>
		</div>

		<div class="row justify-content-md-center login-paid">
        </div>
	</div>
</template>

<script>
/* eslint-disable */
import firebase from 'firebase'
// import admin from 'firebase-admin'
// import token from '../../firebase'

export default {
	name: 'Login',
	data(){
		return {
			email: '',
			password: ''
		}
	},

	methods: {
		login: function(){
			let email = this.email
			let password = this.password
			firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
				(user) => {
					console.log('bisa nih')
					this.$router.replace('/dashboard-customer')
				},
				(err) => {
					alert('Login gagal, ' + err.message)
				}
			)

			// let token = function(){
			// 	let uid = 'BoKqyoSM0ec11tZCQrDdp9mu8Pl2';

			// 	return admin.auth().createCustomToken(uid)
			// 	.then(function(customToken) {
			// 		return customToken
			// 	})
			// 	.catch(function(error) {
			// 		console.log('Error creating custom token:', error);
			// 	});
			// }

			// firebase.auth().signInWithCustomToken(token)
			// 	.then(
			// 		(customToken) => {
			// 			let email = this.email
			// 			let password = this.password
			// 			this.$router.replace('/dashboard-customer')
			// 			//console.log(customToken)
			// 		},
			// 		(err) => {
			// 			console.log(err)
			// 			alert('Login gagal, ' + err.message)
			// 		}
			// 	)
		}
	}
}
</script>

<style scoped>
	.login-part{
        min-height: 80vh;
        background: url('../../assets/rect.png') no-repeat center; 
        background-size: cover;
        background-color: #0E75D3;
        padding-top: 80px;
    }
	.login-paid{
        min-height: 20vh;
        background-color: #0E75D3;
    }
	.form-login{
		margin-top: 10rem
	}
</style>
