<template>
	<div>
		<p>dashboard vendor</p>
		<button @click="logout" class="btn btn-danger">Logout</button>
	</div>
</template>

<script>
import firebase from 'firebase'

export default {
	name: 'DashboardVendor',
	methods: {
		logout: function(){
			firebase.auth().signOut().then(() => {
				this.$router.replace('/')
			})
		}
	}
}
</script>