<template>
	<div>
		<p>dashboard vendor</p>
		<p><a href="" id="file">Download File</a></p>
		<button @click="logout" class="btn btn-danger">Logout</button>
	</div>
</template>

<script>
/* eslint-disable */ 
import firebase from 'firebase'
import '../../firebase'
import { storageRef } from '../../firebase'

export default {
	name: 'DashboardVendor',
	methods: {
		logout: function(){
			firebase.auth().signOut().then(() => {
				this.$router.replace('/')
			})
		}
	},
	mounted() {
		storageRef.child('vendor-1/1572097487936-Financial Model Template by Slidebean.xlsx').getDownloadURL().then((url) => {
			const file = document.querySelector('#file')
			file.href = url
			
			console.log(url.status)
			console.log(url.response)
		}).catch(error => {
			switch (error.code) {
				case 'storage/object-not-found':
				// File doesn't exist
				break;

				case 'storage/unauthorized':
				// User doesn't have permission to access the object
				break;

				case 'storage/canceled':
				// User canceled the upload
				break;

				case 'storage/unknown':
				// Unknown error occurred, inspect the server response
				break;
			}
		})
	}
}
</script>