<template>
<div class="hero">
    <div class="row vision-part" id="visi">
        <div class="col-md-6">
            <img class="web" src="../../assets/img/platform.svg" alt="">
            <img class="mobile" src="../../assets/img/platformMbl.svg" alt="">
        </div>

        <div class="col-md-6 text-left">
            <div class="col-md-12 mb-3 mini-navigate">
                <nav class="navbar navbar-expand-lg p-0 navbar-light">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse p-0" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item text-light">
                                <a class="nav-link p-0 pb-2 pt-2 mr-4" href="#visi">Visi <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item text-light">
                                <a class="nav-link p-0 pb-2 pt-2 mr-4" href="#">Fitur</a>
                            </li>
                            <li class="nav-item text-light">
                                <a class="nav-link p-0 pb-2 pt-2 mr-4" href="#">Partisipasi</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div class="col-md-12">
                <p class="font-title font-weight-bold text-light">Sebagai Platform</p>
            </div>
            <div class="col-md-11 mb-5 text-lighter">
                <p>
                    Platform percetakan online di Indonesia yang memberikan manfaat 
                    serta kenyamanan dalam proses cetak dokumen secara efektif dan efisien. 
                    Juga memberikan dampak dalam aspek sosial khususnya dalam pertumbuhan ekonomi. 
                    Dalam perjalananya cetakk.id juga terus berusaha untuk meningkatkan 
                    performa layanan dari sebuah platform yang menghubungkan pengguna terhadap
                     mitra-mitra bisnis kami yaitu vendor percetakan dan pengguna.
                </p>
            </div>

            <div class="col-md-12">
                <p class="font-title font-weight-bold text-light">Hadirkan Versi BETA</p>
            </div>
            <div class="col-md-11 mb-5 text-lighter">
                <p>
                    Sebagai langkah awal dan meningkatkan layanan platform dalam jangka
                    panjang, cetakk.id meluncurkan versi BETA untuk mengenalkan platform
                    kepada setiap pengguna.
                </p>
            </div>
        </div>

        <div class="col-md-12 fitur">
            <div class="col-md-12">
                <p class="font-title font-weight-bold">Fitur Pendukung</p>
            </div>
            <div class="col-md-12 text-left">

            </div>
        </div>

        <div class="col-md-12 testimoni">
            <div class="col-md-12">
                <p class="font-title font-weight-bold">Apa Kata Orang ?</p>
            </div>
            <div class="col-md-12 text-left">

<<<<<<< HEAD
            </div>
        </div>

        
=======
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
>>>>>>> beta-v1
    </div>

    <div class="row partisipasi" id="fitur">
        
    </div>

</div>
</template>

<script>

</script>

<style scoped>
.font-hero{
    font-weight: 700 !important;
    font-size: 40px;
}
strong{
	font-weight: 700 !important
}
.font-subhero{
    font-weight: 900 !important;
    font-size: 25px;
}
.font-title{
    font-size: 30px;
}
.text-desc{
	font-size: 12px;
}
.text-slider-items{
	display: none
}
.font-secondary{
    font-weight: 500;
    font-size: 18px;
    color: #ffc502
}
.font-primary{
    font-size: 14px;
}
.text-lighter{
    color: rgb(224, 224, 224)
}

.vision-part{
    min-height: 150rem;
    background: url('../../assets/img/bgGradient.svg') no-repeat center;
    background-size: cover;
    background-position-y: 70px;
    padding: 8rem 2rem 2rem 2rem
}
.vision-part .web{
    max-width: 80%;
}
.vision-part .mobile{
    display: none;
}
.fitur, .testimoni {
    height: 40rem;
}
/* .fitur-part{
    min-height: 40rem;
    background-color: rgb(255, 255, 255);
    padding: 8rem 2rem 2rem 2rem
} */

.partisipasi{
    min-height: 50rem;
    background-color: rgb(255, 255, 255);
}
@media (max-width: 900px) {
    .font-hero{
		font-weight: 700;
		font-size: 30px;
	}
	.font-title{
		font-size: 20px;
	}
    .img-about {
        min-width: 100%;
        visibility: hidden;
        display: none;
    }
    .vision-part{
        min-height: 60rem;
        background: url('../../assets/img/bgGradient.svg') no-repeat center;
        background-size: cover;
        background-position-y: 40px;
        padding: 4rem 1rem 1rem 1rem
    }
    .mini-navigate{
        display: none;
    }
    .vision-part .web{
        display: none;
    }
    .vision-part .mobile{
        max-width: 95%;
        margin-bottom: 2rem;
        display: inline;
    }
}
</style>