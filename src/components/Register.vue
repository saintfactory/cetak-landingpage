<template>
	<div>
		<form class="w-25 w-75-sm mx-auto mt-5">
			<img src="../assets/Logo.png" alt="Logo Cetak" class="img-fluid logo my-4 pb-3 w-75"/>
			<div class="form-group text-left">
				<label for="name">Name</label>
				<input type="text" v-model="name" class="form-control" id="name" aria-describedby="nameHelp" placeholder="Enter name">
			</div>
			<div class="form-group text-left">
				<label for="exampleInputEmail1">Email address</label>
				<input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
				<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
			</div>
			<div class="form-group text-left">
				<label for="exampleInputPassword1">Password</label>
				<input type="password" v-model="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
			</div>
			<div class="form-group text-left">
				<label for="password_confirm">Confirm Password</label>
				<input type="password" v-model="password_confirm" class="form-control" id="password_confirm" placeholder="Password Confirm">
			</div>
			<div class="form-group text-left">
				<label for="address">Address</label>
				<input type="text" v-model="address" class="form-control" id="address" aria-describedby="addressHelp" placeholder="Address">
			</div>
			<div class="form-group text-left">
				<label for="no_telp">Telp Number</label>
				<input type="text" v-model="no_telp" class="form-control" id="no_telp" aria-describedby="no_telpHelp" placeholder="No. telp">
			</div>
			<div class="form-group text-left">
				<label for="gender">Gender</label>
				<input type="text" v-model="gender" class="form-control" id="gender" aria-describedby="genderHelp" placeholder="Gender">
			</div>
			<div class="form-group text-left">
				<label for="status">Status</label>
				<input type="text" v-model="status" class="form-control" id="status" aria-describedby="statusHelp" placeholder="Status">
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
import 'firebase/firestore'
import customers, { dbstore } from '../firebase'

export default {
	name: 'Register',
	data(){
		return {
			name: '',
			email: '',
			address: '',
			no_telp: '',
			gender: '',
			status: '',
			password: '',
			password_confirm: ''
		}
	},

	firestore() {
		return {
			customers: customers
		}
	},

	methods: {
		register() {
			const createdAt = new Date()
			dbstore.collection('customers').add({ 
				//name, email, address, no_telp, gender, status, password, password_confirm, createdAt 
				name: this.name,
				email: this.email,
				address: this.address,
				no_telp: this.no_telp,
				gender: this.gender,
				status: this.status,
				password: this.password,
				password_confirm: this.password_confirm
			})
			.then(function(docRef) {
				alert('Akun berhasil dibuat!')
				console.log("Document written with ID: ", docRef.id);
				this.$router.replace('Home')
			})
			.catch(function(error) {
				console.error("Error adding document: ", error);
			});

			firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
				(user) => {
					//alert('Akun berhasil dibuat!')
					this.$router.replace('/')
				},
				(err) => {
					alert('Akun gagal dibuat, ' + err.message)
				}
			)
		}
	}
}
</script>