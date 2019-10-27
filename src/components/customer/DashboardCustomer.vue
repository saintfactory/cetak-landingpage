<template>
    <div class="d-flex" id="wrapper">

    <!-- Sidebar -->
    <div class="shadow text-left" id="sidebar-wrapper">
      <div class="sidebar-heading"><img src="../../assets/Logo.png" alt="" width="220px"></div>
      <div class="list-group list-group-flush">
          <section class="menus">
            <a><router-link class="list-group-item list-group-item-action" to='/profile-customer' ><i class="fas fa-user icon"></i> Profil</router-link></a>
            <a><router-link class="list-group-item list-group-item-action" to='/pesanan-customer'><i class="fas fa-clone icon"></i> Cetak Dokumen</router-link></a>
            <a><router-link class="list-group-item list-group-item-action" to='/history-customer'><i class="fas fa-history icon"></i> Sejarah Pesanan</router-link></a>
          </section>

          <section class="menus">
            <a><router-link class="list-group-item list-group-item-action" to='/login'><i class="fas fa-question icon"></i> Bantuan</router-link></a>
            <a><router-link class="list-group-item list-group-item-action" to='/login'><i class="fas fa-door-open icon"></i> Keluar</router-link></a>
          </section>
      </div>
    </div>
    <!-- /#sidebar-wrapper -->

    <!-- Page Content -->
    <div id="page-content-wrapper">
      <div class="text-left dashboard">
            <div class="sidebar-heading container-fluid">
            <button class="btn btn-light float-left" id="menu-toggle"><i class="fas fa-align-left"></i></button>

            <p class="float-right username">Halo, <span>Nama User</span></p>
        </div>

        <section class="content">
            <router-view></router-view>
        </section>
      </div>
    </div>
    <!-- /#page-content-wrapper -->

  </div>
</template>

<script>
import { storageRef } from '../../firebase'
import storage from 'firebase/storage'
import firebase from 'firebase'
import JQuery from 'jquery'

export default {
	name: 'DashboardCustomer',
	data(){
		return {
			file: ''
		}
	},

  	mounted(){
		let $ = JQuery
		$(".custom-file-input").on("change", function() {
		var fileName = $(this).val().split("\\").pop();
		$(this).siblings(".custom-file-label").addClass("selected").html(fileName);
    }),
    
    $("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
    });
	},

	methods: {
		uploadDocument(){ 
			let file = document.querySelector('#file').files[0]
			let name = (+new Date()) + '-' + file.name
			const metadata = {
				contentType: file.type
			}

			storageRef.child('vendor-1/' + name).put(file, metadata)
				.then(function(snapshot) {
					console.log('Uploaded a blob or file!');
					alert('Upload dokumen berhasil!' + 'Untuk proses selanjutnya, silahkan tunggu respon dari Vendor!')
				})
    	},

		handleDocument(){
			this.file = this.$refs.file.files[0]
		},

		logout(){
			firebase.auth().signOut().then(() => {
				this.$router.replace('/')
			})
		}
	}
}
</script>

<style scoped>

#sidebar-wrapper {
  min-height: 100vh;
  margin-left: -15rem;
  position: fixed;
  -webkit-transition: margin .25s ease-out;
  -moz-transition: margin .25s ease-out;
  -o-transition: margin .25s ease-out;
  transition: margin .25s ease-out;
  background-color: #0275d8 !important;
}
#menu-toggle{
    display: block;
    margin-top: 15px;
}
.sidebar-heading{
    min-height: 90px
}
#sidebar-wrapper .sidebar-heading {
  padding: 0.875rem 1.25rem;
}
.icon{
    min-width: 40px;
}
.username{
    line-height: 4;
    font-size: 14px;
    font-weight: 800;
}
.list-group-item{
    font-size: 14px;
    border-color: transparent !important;
    border-left: 3px solid transparent !important;
    background-color: #0275d8 !important;
    color: white !important;
}
.list-group-item:hover{
    background-color: rgb(101, 170, 235) !important;
    color: white !important;
    border-left: 3px solid #FEC71F !important;
    -webkit-transition: background-color 0.3s !important;
    -moz-transition: background-color 035s !important;
    -o-transition: background-color 0.3s !important;
    transition: background-color 0.3s !important;
}
.menus{
    border-bottom: 0.5px solid rgba(255, 255, 255, 0.966) !important;
    padding: 10px 0 10px;
}
#sidebar-wrapper .list-group {
  width: 17rem;
}

#page-content-wrapper {
  min-width: 100vw;
  margin-left: 17rem;
  -webkit-transition: margin .25s ease-out;
  -moz-transition: margin .25s ease-out;
  -o-transition: margin .25s ease-out;
  transition: margin .25s ease-out;
}

#wrapper.toggled #sidebar-wrapper {
  margin-left: 0;
  -webkit-transition: margin .25s ease-out;
  -moz-transition: margin .25s ease-out;
  -o-transition: margin .25s ease-out;
  transition: margin .25s ease-out;
}

#wrapper.toggled #page-content-wrapper {
  margin-left: 0;
}

.dashboard{
    padding: 10px 20px;
}

@media (min-width: 800px) {
  #sidebar-wrapper {
    margin-left: 0;
  }
    /* #menu-toggle{
    display: none;
    } */
  #page-content-wrapper {
    min-width: 0;
    width: 100%;
  }

  #wrapper.toggled #sidebar-wrapper {
    margin-left: -17rem;
  }
}

.router-link-exact-active{
  background-color: rgb(101, 170, 235) !important;
  z-index: 1000;
  color: #fff !important;
  border-left: 3px solid #FEC71F !important;
    -webkit-transition: background-color 0.3s !important;
    -moz-transition: background-color 035s !important;
    -o-transition: background-color 0.3s !important;
    transition: background-color 0.3s !important;
}
.content{
    padding: 0 10px;
    
}
</style>

