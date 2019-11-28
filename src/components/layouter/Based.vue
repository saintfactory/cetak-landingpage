<template>
    <div class="based">
        <div class="header">
            <nav class="navbar navbar-expand-lg navbar-dark nav-content fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand">
                    <router-link to="/home" class="nav-link">
                        <img src="../../assets/cetakkPutih.png" height="40" alt="">
                    </router-link>
                    </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a><router-link to="/cara" class="nav-link menus-expand text-light">Cara Penggunaan</router-link></a>
                    </li>
                    <li class="nav-item">
                        <a><router-link to="/tentang" class="nav-link menus-expand text-light">Tentang</router-link></a>
                    </li>
                </ul>

                <!-- <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a><router-link to='/join' class="nav-link text-light">Daftar</router-link></a>
                    </li>
                    <li class="nav-item" id="font-pbtn">
                        <a><router-link to='/login' class="nav-link text-primary btn btn-block btn-light" id="font-pbtn">Masuk</router-link></a>
                    </li>
                </ul> -->
                </div>
            </div>
            </nav>
        </div>

        <div class="content">
            <router-view></router-view>
        </div>
    </div>
    
</template>

<script>
import '../../firebase'
export default {
    name: 'Based',
}
</script>

<style scoped>
.nav-content{
    background: #0D7BE5;
    z-index: 200;
    height: 70px;
}
li{
    margin: 10px;
}

.nav-item{
    font-weight: 600 !important;
}

.nav-item:hover, .nav-link:hover{
    transition: transform .2s !important;
    transform: scale(1.01) !important;
    font-weight: 700 !important;
}

@media (max-width: 790px){
	.navbar-collapse{
        background-color: rgba(23, 23, 23, 0.898);
        border-radius: 10px
    }
    .menus-expand{
        background-color: transparent;
    }
}
</style>


