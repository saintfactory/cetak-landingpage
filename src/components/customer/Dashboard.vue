<template>
	<div>
		<p>dashboard customer</p>
		<button @click="logout" class="btn btn-danger">Logout</button>
	</div>
</template>

<script>
import firebase from 'firebase'

export default {
	name: 'DashboardCustomer',
	methods: {
		logout: function(){
			firebase.auth().signOut().then(() => {
				this.$router.replace('/')
			})
		}
	}
}
</script>