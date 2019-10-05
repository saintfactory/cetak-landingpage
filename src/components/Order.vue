<template>
	<div>
		<article v-for="user in user" :key="user.id">
			<!-- <img :src="location.image">
			<h1>{{ location.name }}</h1> -->
			<h4>{{ user.name }}</h4>
			<h5>{{ user.email }}</h5>
		</article>
		
		<form>
			<input v-model="name" placeholder="Name">
			<input v-model="email" placeholder="Email">
			<button type="button" @click="addUser(name, email)">Add New Location</button>
		</form>
	</div>
</template>

<script>
/* eslint-disable */ 
import {dbstore} from '../firebase'

export default {
	name: 'Order',
	data(){
		return {
			user: [],
			name: '',
			email: ''
		}
	},

	firestore() {
		return {
			user: dbstore.collection('user').orderBy('createdAt')
		}
	},

	methods: { 
    addUser(name, email) {      // <-- and here 
      const createdAt = new Date()
			dbstore.collection('user').add({ name, email, createdAt })
			.then(function() {
				console.log("Document successfully written!");
			})
			.catch(function(error) {
				console.error("Error writing document: ", error);
			});
    }
  }
}
</script>