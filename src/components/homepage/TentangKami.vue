<template>
<div class="hero">
    <div class="row justify-content-md-center">
        <div class="col-md-5 text-left">
            <div class="row m-3">
                <span class="superFont font-weight-bold mb-2"><i class="fas fa-question mr-2"></i> Tentang Kami</span>
                <p>Platform percetakan online di Indonesia yang memberikan manfaat serta kenyamanan dalam proses cetak dokumen secara efektif dan efisien.
                Juga memberikan dampak dalam aspek sosial khususnya dalam pertumbuhan ekonomi.
                Dalam perjalananya cetakk.id juga terus berusaha untuk meningkatkan performa layanan dari sebuah platform yang menghubungkan 
                pengguna terhadap mitra-mitra bisnis kami yaitu vendor percetakan dan pengguna.</p>
            </div>

            <div class="row m-3">
                <span class="superFont font-weight-bold mb-2"><i class="fas fa-thumbs-up mr-2"></i> Keuntungan</span>
                <p>Meminimalisir rusaknya dokumen dan infeksi virus, efisiensi dalam proses cetak dokumen,
                dan turut serta meningkatkan ekonomi Indonesia di bidang percetakan
                khususnya untuk individu yang mempunyai mesin printer.</p>
            </div>

            <div class="row m-3 mt-5">
                <a href="https://www.instagram.com/cetakkid.official/">
                    <img class="img-tumbs" src="../../assets/img/instagram.svg" alt="instagram">
                </a>
                <a href="https://www.linkedin.com/company/cetakk-id/">
                    <img class="img-tumbs" src="../../assets/img/linkedin.svg" alt="instagram">
                </a>
            </div>
        </div>
        <div class="col-md-6 m-3">
            <img src="../../assets/img/home-paid.svg" alt="Tentang Kami" class="img-about" >
        </div>  
    </div>
    
</div>
</template>

<script>

</script>

<style scoped>
.hero{
    /* background:url('../../assets/img/vectorBg.png') no-repeat center;
    background-size: cover; */
    min-height: 100vh;
	background-color: rgb(255, 255, 255);
    padding-top: 150px;
    /* background-position-y: 70px      */
}

.superFont{
    font-size: 35px
}

p{
    font-size: 13.5px
}

.img-tumbs{
    min-width: 48px;
    max-width: 48px;
    margin-right: 10px
}

.img-tumbs:hover{
    transition: transform .5s !important;
	transform: scale(1.1) !important
}

.img-about {
    min-width: 100%;
}

@media (max-width: 900px) {
    .hero{
        padding-top: 80px !important;
    }
    .img-about {
        min-width: 100%;
        visibility: hidden;
        display: none;
    }
}
</style>