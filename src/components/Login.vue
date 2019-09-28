<template>
	<div>
		<form class="w-25 mx-auto mt-5">
			<img src="../assets/Logo.png" alt="Logo Cetak" class="img-fluid logo my-4 pb-3 w-75"/>
			<div class="form-group text-left">
				<label for="email">Email address</label>
				<input type="email" v-model="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
				<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
			</div>
			<div class="form-group text-left">
				<label for="password">Password</label>
				<input type="password" v-model="password" class="form-control" id="password" placeholder="Password">
			</div>
			<div class="form-group form-check text-left">
				<input type="checkbox" class="form-check-input" id="checkbox">
				<label class="form-check-label" for="checkbox">Check me out</label>
			</div>
			<button type="button" class="btn btn-primary w-100" @click="login()">Login</button>
		</form>
	</div>
</template>

<script>
/* eslint-disable */
import firebase from 'firebase'

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
			firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
				(user) => {
					this.$router.replace('Dashboard')
				},
				(err) => {
					console.log(err)
					alert('Login gagal, ' + err.message)
				}
			)
		}
	}
}
</script>