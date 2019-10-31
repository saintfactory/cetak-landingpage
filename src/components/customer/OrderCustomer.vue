<template>
    <div class="orderUser">
        <div class="row p-3">
            <div class="col-md-6 profilPrinted shadow-sm pl-5 pr-5 pt-3 bg-light">
                <div class="row mt-2">
                    <img src="../../assets/tempatPrint1.jpg" alt="" class="imageProfiled mx-auto mb-2">
                </div>
                <div class="row">
                    <span class="namaPrint text-warning">ACADIA PRINT</span>
                </div>
                <div class="row orient">
                    <span>Rating : </span>
                </div>
                <div class="row mt-3">
                    <table>
                        <tr class="align-baseline">
                            <td class="text-center"><p><i class="fas fa-map-pin text-info mr-3"></i></p></td>
                            <td><p>Jalan Kaliurang km.14, Umbulmartani, Ngemplak, Sleman, Yogykarta</p></td>
                        </tr>
                        <tr class="align-baseline">
                            <td class="text-center"><p><i class="fas fa-envelope text-info mr-3"></i></p></td>
                            <td><p>acadiaganteng@gmail.com</p></td>
                        </tr>
                        <tr class="align-baseline">
                            <td class="text-center"><p><i class="fas fa-comments text-info mr-3"></i></p></td>
                            <td><p>Kalo Pesan tolong sopan ya bambank, kalo masih mau pulang dengan damai dan sentosa, terima open BO</p></td>
                        </tr>
                    </table>
                </div>

                
            </div>
            <div class="col-md-6 pl-5 pl-5 pt-3">
                    <form action="">
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputRangkap">Jumlah Rangkap</label>
                                <input type="email" class="form-control" id="inputRangkap" placeholder="ex: 1,2,3,..">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputHalaman">Jumlah Halaman</label>
                                <input type="password" class="form-control" id="inputHalaman" placeholder="ex: 30">
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputJenisKertas">Pilihan Jenis Kertas</label>
                                <select id="inputJenisKertas" class="form-control">
                                    <option selected>A4 - Warna</option>
                                    <option>A4 - Laser</option>
                                </select>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputJenisFinishing">Pilihan Jenis Finishing</label>
                                <select id="inputJenisFinishing" class="form-control">
                                    <option selected>Jilid Mika Cover</option>
                                    <option>Jilid Hard Cover</option>
                                </select>
                            </div>
                        </div>
                        <div class="custom-file">
                            <input type="file" class="custom-file-input" id="validatedCustomFile" required>
                            <label class="custom-file-label" for="validatedCustomFile">Choose file...</label>
                            <div class="invalid-feedback">Example invalid custom file feedback</div>
                        </div>
                        <hr>
                        <div class="row col-md-5 float-right">
                            <button type="submit" class="btn btn-primary btn-block">Kirim Pesanan</button>
                        </div>
                    </form>
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
.profilPrinted{
    min-height: 80vh;
}
.orient{
    padding-bottom: 10px;
    border-bottom: 0.3px solid #ddd !important;
}
.imageProfiled{
    min-width: 100%;
    border-radius: 5px;
    border: 2px solid rgb(238, 238, 238);
}
.namaPrint{
    font-size: 20px !important;
    font-weight: 800 !important;
    color: #252040
}
</style>
