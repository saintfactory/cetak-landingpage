<template>
  <div class="profilUser">
      <div class="row">
          <div class="col-md-12">
             <div class="card shadow-sm">
                <div class="card-header bg-warning text-light">
                    Data Diri Pengguna
                </div>
                <div class="card-body">
                    <form action="">
                    <div class="form-group row">
                        <label for="inputNama" class="col-sm-2 col-form-label">Nama</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputNama" value="Mahdi">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputJk" class="col-sm-2 col-form-label">Jenis Kelamin</label>
                        <div class="col-sm-10">
                            <select id="inputJk" class="form-control">
                                <option selected>Laki-laki</option>
                                <option>Perempuan</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-10">
                            <input type="email" class="form-control" id="inputEmail" value="madiCowoSetia@gmail.com">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputNomor" class="col-sm-2 col-form-label">Telepon</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputNomor" value="085852343423">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputStatus" class="col-sm-2 col-form-label">Status</label>
                        <div class="col-sm-10">
                            <select id="inputStatus" class="form-control">
                                <option selected>Mahasiswa</option>
                                <option>Babu</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputPass" class="col-sm-2 col-form-label">Password</label>
                        <div class="col-sm-10">
                            <input type="password" class="form-control" id="inputPass" value="asdfghjgfds">
                        </div>
                    </div>
                    <hr>
                    <div class="row col-md-2 float-right">
                        <button type="submit" class="btn btn-primary btn-block">Edit Data</button>
                    </div>
                </form>
                </div>
                </div>
            </div>
        </div>

        
    </div>
</template>

<script>

export default {
	name: 'Home',
}
</script>

<style scoped>
*{
  font-size: 14px !important;  
}
.profileDatas{
    border-bottom: 2px solid black
}
</style>
