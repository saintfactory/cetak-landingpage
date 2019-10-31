<template>
	<div>
		<p>dashboard vendor</p>
		<p><a href="" id="file">Download File</a></p>
		<div v-for="list of lists" :key="list.id">
			{{ list.name }}
		</div>
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
	data() {
		return {
			lists: []
		}
	},
	methods: {
		logout: function(){
			firebase.auth().signOut().then(() => {
				this.$router.replace('/')
			})
		}
	},
	mounted() {
		// Download file from folder 'vendor-1'
		let docRef = storageRef.child('vendor-1/1572097487936-Financial Model Template by Slidebean.xlsx')
		let parentRef 
		docRef.getDownloadURL().then((url) => {
			const file = document.querySelector('#file')
			file.href = url
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

		//Get Metadata from Storage
		docRef.getMetadata().then((metadata) => {
			//console.log(metadata)
			console.log(metadata.name)
		}).catch((error) => {
			console.log(error)
		})

		//Trying to list all files in vendor dashboard
		// storageRef.child('vendor-1/uid').listAll().then((res) => {
		// 	res.prefixes.forEach((folderRef) => {
		// 		// const folder = document.querySelector('#folder')
		// 		// folder.appendChild(folderRef)
		// 		data = folderRef.status
		// 		console.log(data)
		// 	})
		// 	res.items.forEach((itemRef) => {
		// 		// const item = document.querySelector('#item')
		// 		// item.appendChild(itemRef)
		// 		data = itemRef.status
		// 		console.log(data)
		// 	}).catch((error) => {
		// 		console.log(error)
		// 	})
		// })
	}
}
</script>