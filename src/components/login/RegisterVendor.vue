<template>
<div class="container-fluid">
    <div class="row register">
        <div class="col-md-5 infoBar">
            <div class="gridImage text-center">
                <img src="../../assets/regist.png" alt="">
                <h3 class="mt-4">Daftarkan Dirimu Disini</h3>
                <p>Lengkapi data diri akun kamu dengan <br> baik dan benar</p>
            </div>
        </div>

        <div class="col-md-7 contentMain">
            <form action="">
                <div class="forms row justify-content-md-center text-left">
                    <div class="col-md-10 tempatUsaha mb-4 mt-4">
                        <h5>1. Detail Tempat Usaha</h5>
                        <hr>
                        <div class="form-group row">
                            <label for="inputTempat" class="col-sm-3 font-weight-bold col-form-label col-form-label-sm">Nama Tempat</label>
                            <div class="col-sm-9">
                                <input type="text" v-model="shop_name" class="form-control form-control-sm" id="inputTempat" placeholder="Nama Tempat Print/Fotocopy">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputKota" class="col-sm-3 font-weight-bold col-form-label col-form-label-sm">Kota</label>
                            <div class="col-sm-9">
                                <select class="custom-select custom-select-sm" v-model="city" id="inputKota">
                                    <option selected>Pilih Kota</option>
                                    <option value="Yogyakarta">Yogyakarta</option>
                                    <option value="Solo">Solo</option>
                                    <option value="Magelang">Magelang</option>
                                    <option value="Gunung Kidul">Gunung Kidul</option>
                                    <option value="Klaten">Klaten</option>
                                    <option value="Boyolali">Boyolali</option>
                                    <option value="Salatiga">Salatiga</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputAlamat" class="col-sm-3 font-weight-bold col-form-label col-form-label-sm">Alamat</label>
                            <div class="col-sm-9">
                                <input type="text" v-model="address" class="form-control form-control-sm" id="inputAlamat" placeholder="Alamat Tempat">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputJenis" class="col-sm-3 font-weight-bold col-form-label col-form-label-sm">Jenis Usaha</label>
                            <div class="col-sm-9">
                                <select class="custom-select custom-select-sm" v-model="job_type" id="inputJenis">
                                    <option selected>Pilih Jenis Usaha</option>
                                    <option value="Percetakan Massal">Percetakan Massal</option>
                                    <option value="Individu">Individu</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-md-10 pemilikUsaha">
                        <h5>2. Detail Pemilik Usaha</h5>
                        <hr>
                        <div class="form-group row">
                            <label for="inputNamaPemilik" class="col-sm-3 font-weight-bold col-form-label col-form-label-sm">Nama Pemilik</label>
                            <div class="col-sm-9">
                                <input type="text" v-model="name" class="form-control form-control-sm" id="inputNamaPemilik" placeholder="Nama Pemilik">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputTelp" class="col-sm-3 font-weight-bold col-form-label col-form-label-sm">Telepon</label>
                            <div class="col-sm-9">
                                <input type="text" v-model="no_telp" class="form-control form-control-sm" id="inputTelp" placeholder="Nomor Telepon">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputEmail" class="col-sm-3 font-weight-bold col-form-label col-form-label-sm">Email</label>
                            <div class="col-sm-9">
                                <input type="email" v-model="email" class="form-control form-control-sm" id="inputEmail" placeholder="Email">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputSandi" class="col-sm-3 font-weight-bold col-form-label col-form-label-sm">Kata Sandi</label>
                            <div class="col-sm-9">
                                <input type="password" v-model="password" class="form-control form-control-sm" id="inputSandi" placeholder="Masukan Kata Sandi">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputUlangSandi" class="col-sm-3 font-weight-bold col-form-label col-form-label-sm">Konfirmasi Sandi</label>
                            <div class="col-sm-9">
                                <input type="password" v-model="password_confirm" class="form-control form-control-sm" id="inputUlangSandi" placeholder="Konfirmasi Kata Sandi">
                            </div>
                        </div>
                    </div>

                    <div class="col-md-10 confirm mt-3">
                        <div class="form-group row">
                            <div class="textPart col-sm-9">
                                <label for="inputConfirm" class="col-form-label col-form-label-sm">Dengan mendaftar di Cetakk.id, kamu menyetujui
                                    <router-link to="/kebijakan" class="font-weight-bold registLink text-primary">Syarat dan Ketentuan</router-link>
                                </label>

                                <!-- <label for="inputConfirm" class="col-form-label col-form-label-sm">yang sudah ditetapkan. Sudah punya akun?
                                    <router-link to="/login" class="font-weight-bold">Masuk</router-link>
                                </label> -->
                            </div>
                            <div class="col-sm-3">
                                <button type="button" @click="register()" class="btn btn-primary float-right btn-block">Daftar</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </form>
        </div>
    </div>
</div>
    
</template>

<script>
/* eslint-disable */
import { dbstore } from '../../firebase'
import firebase from 'firebase'
import 'firebase/firestore'
export default {
    data(){
        return {
            address: '',
            city: '',
            email: '',
            job_type: '',
            name: '',
            password: '',
            password_confirm: '',
            shop_name: '',
            no_telp: ''
        }
    },
    methods: {
        register() {
			const createdAt = new Date()
			dbstore.collection('vendor').add({ 
				name: this.name,
				email: this.email,
                address: this.address,
                city: this.city,
				no_telp: this.no_telp,
				job_type: this.job_type,
				shop_name: this.shop_name,
				password: this.password,
				password_confirm: this.password_confirm,
				createdAt
			})
			.then(function(docRef) {
				alert('Akun berhasil dibuat!')
				this.$router.replace('Home')
			})
			.catch(function(error) {
				alert('Maaf, terjadi kesalahan saat membuat akun', error)
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

<style scoped>
    .register{
        min-height: 100vh;
        padding-top: 10vh
    }
    .infoBar{
        background-color: transparent
    }
    .gridImage{
        margin-top: 20%;
    }
    .contentMain{
        background-color: transparent
    }
    .registLink:hover{
        text-decoration: none;
    }
</style>
