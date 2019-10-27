<template>
    <div class="profilUser">
        <div class="row p-3">

            <div class="col-md-3 p-4">
                <div class="row justify-content-md-center cardPrint p-3">
                    <div class="col-md-11 bg-light p-0">
                        <div class="row">
                            <img src="../../assets/tempatPrint1.jpg" alt="" class="imagePrint mx-auto mb-2">
                        </div>
                        <div class="row">
                            <span class="namaPrint">Acadiadiadia Print</span>
                        </div>
                        <div class="row mb-2 orient p-0">
                            <div class="col-md-6 p-0">
                                <span class="status text-success">Buka</span>
                            </div>
                            <div class="col-md-6 p-0">
                                <button class="btn btn-primary btn-sm float-right">
                                    <router-link class="text-light linked" to='/order-customer'>Cetakk</router-link>
                                </button>
                                
                            </div>
                        </div>
                        <div class="row alamatPrint p-0">
                            <p>alamat print alamat print alamat print alamat print</p>
                        </div>
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
.cardPrint{
    border-radius: 20px;
    border: 2px solid rgba(223, 133, 49, 0.796);
}
.imagePrint{
    min-width: 100%;
    max-width: 100%;
    border-radius: 10px
}
.namaPrint{
    font-size: 20px !important;
    font-weight: 600;
}
.orient{
    border-bottom: 0.3px solid #ddd !important;
}
.linked{
    text-decoration: none;
}
.alamatPrint{
    max-height: 40px;
    overflow: auto;
}
.status{
    line-height: 3;
}
</style>
