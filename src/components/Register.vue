<template>
	<div>
		<form class="w-25 w-75-sm mx-auto mt-5">
			<img src="../assets/Logo.png" alt="Logo Cetak" class="img-fluid logo my-4 pb-3 w-75"/>
			<div class="form-group text-left">
				<label for="exampleInputEmail1">Email address</label>
				<input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
				<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
			</div>
			<div class="form-group text-left">
				<label for="exampleInputPassword1">Password</label>
				<input type="password" v-model="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
			</div>
			<div class="form-group form-check text-left">
				<input type="checkbox" class="form-check-input" id="exampleCheck1">
				<label class="form-check-label" for="exampleCheck1">Check me out</label>
			</div>
			<button type="button" class="btn btn-primary w-100" @click="register()">Register</button>
		</form>
	</div>
</template>

<script>
/* eslint-disable */
import firebase from 'firebase'

export default {
	name: 'Register',
	data(){
		return {
			email: '',
			password: ''
		}
	},
	methods: {
		register: function(){
			firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
				function(user){
					alert('Akun berhasil dibuat!')
					this.$router.push({path: '/'})
				},
				function(err){
					alert('Akun gagal dibuat, ' + err.message)
				}
			)
		}
	}
}
</script>