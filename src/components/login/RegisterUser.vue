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
                    <div class="col-md-10 dataDiri">
                        <div class="form-group row">
                            <label for="inputTempat" class="col-sm-3 font-weight-bold col-form-label col-form-label-sm">Nama</label>
                            <div class="col-sm-9">
                                <input type="email" class="form-control form-control-sm" id="inputTempat" placeholder="Nama Lengkap">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inpuJk" class="col-sm-3 font-weight-bold col-form-label col-form-label-sm">Jenis Kelamin</label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control form-control-sm" id="inputJk" placeholder="Pilih Jenis Kelamin">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputEmail" class="col-sm-3 font-weight-bold col-form-label col-form-label-sm">Email</label>
                            <div class="col-sm-9">
                                <input type="email" class="form-control form-control-sm" id="inputEmail" placeholder="Alamat Email">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputNomor" class="col-sm-3 font-weight-bold col-form-label col-form-label-sm">Telepon</label>
                            <div class="col-sm-9">
                                <input type="password" class="form-control form-control-sm" id="inputNomor" placeholder="Nomor Telepon">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputStatus" class="col-sm-3 font-weight-bold col-form-label col-form-label-sm">Status</label>
                            <div class="col-sm-9">
                                <select class="custom-select custom-select-sm" id="inputStatus">
                                    <option selected>Pilih Status</option>
                                    <option value="1">Mahasiswa</option>
                                    <option value="2">Babu</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputSandi" class="col-sm-3 font-weight-bold col-form-label col-form-label-sm">Kata Sandi</label>
                            <div class="col-sm-9">
                                <input type="password" class="form-control form-control-sm" id="inputSandi" placeholder="Masukan Kata Sandi">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputUlangSandi" class="col-sm-3 font-weight-bold col-form-label col-form-label-sm">Konfirmasi Sandi</label>
                            <div class="col-sm-9">
                                <input type="password" class="form-control form-control-sm" id="inputUlangSandi" placeholder="Masukan Kata Sandi">
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
                                <button type="submit" class="btn btn-primary float-right btn-block">Daftar</button>
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
export default {
}
</script>

<style scoped>
    .register{
        min-height: 100vh;
        padding-top: 10vh
    }
    .dataDiri{
        margin-top: 10vh;
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
