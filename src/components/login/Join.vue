<template>
<div class="container-fluid">
        <div class="row justify-content-md-center join-part">
            <div class="col-md-12 mb-2">
                <h2 class="font-hero text-light">AYO BERGABUNG DENGAN CETAK.ID</h2>
            </div>

            <div class="col-md-12">
                <p><img src="../../assets/join.png" alt="Join Cetak.id"/></p>
            </div>
            
            <div class="col-md-12">
                <router-link to="/register-vendor" ><input type="submit" class="btn btn-warning btn-second" value="Daftar Vendor" href="#0" /></router-link>
                <router-link to="/register-customer"><input type="submit" class="btn btn-warning btn-second" value="Daftar Customer" href="#0" /></router-link>
            </div>
        </div>

        <div class="row justify-content-md-center join-paid">
        </div>
</div>
    
</template>

<script>
export default {
    name: 'Join',
}
</script>

<style scoped>
    .join-part{
        min-height: 80vh;
        background: url('../../assets/rect.png') no-repeat center; 
        background-size: cover;
        background-color: #0E75D3;
        padding-top: 120px;
    }
    .join-paid{
        min-height: 20vh;
        background-color: #0E75D3;
    }
    .btn-second{
    border-radius: 25px;
    height: 50px;
    width: 250px;
    margin: 30px;
    color: #25282B !important;
    word-spacing: 0.5px;
    text-decoration: none;
    font-weight: 600 !important
    }
</style>
