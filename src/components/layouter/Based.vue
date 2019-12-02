<template>
    <div class="based">
        <div class="header">
            <nav class="navbar navbar-expand-lg navbar-dark nav-content fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand">
                    <router-link to="/home" class="nav-link">
                        <img src="../../assets/cetakkPutih.png" height="40" alt="Logo Cetakk.id">
                    </router-link>
                    </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a><i class="close fas fa-times"></i></a>
                    </li>
                    <li class="nav-item">
                        <a><router-link to="/cara" class="nav-link menus-expand text-light">Cara Kerja</router-link></a>
                    </li>
                    <li class="nav-item">
                        <a><router-link to="/tentang" class="nav-link menus-expand text-light">Tentang Kami</router-link></a>
                    </li>
                    <li class="nav-item">
                        <a><router-link to="/dashboard-customer" class="rounded-pill btn btn-light nav-link menus-expand pr-5 pl-5">Mulai</router-link></a>
                    </li>
                </ul>
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
import JQuery from 'jquery'
export default {
    name: 'Based',   
    async mounted(){
        let $ = JQuery
        
        $('.navbar-nav>li>a').on('click', function(){
            $('.navbar-collapse').collapse('hide');
        });

        $('.navbar-brand').on('click', function(){
            $('.navbar-collapse').collapse('hide');
        });
	},
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
.btn-light, .btn-light:hover{
    color: #0D7BE5 !important;
    font-weight: 600 !important;
}
.nav-item{
    font-weight: 600 !important;
}

.nav-item:hover, .nav-link:hover{
    /* transition: transform .2s !important;
    transform: scale(1.01) !important; */
    font-weight: 600 !important;
}
.close{
    display: none;
}
@media (max-width: 850px){
	.navbar-collapse{
        background-color: rgba(13, 125, 229, 0.945);
        min-height: 100vh;
        min-width: 100%;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        overflow: hidden;
    }

    .navbar-collapse .close{
        padding-top: 0px !important;
        padding-bottom: 50%;
        color: azure;
        display: block;
    }
    .navbar-collapse .nav-item .nav-link{
        border: 2px solid #dddddd39;
        border-radius: 10px;
    }

    .navbar-collapse .nav-item .nav-link:hover{
        border: 2px solid #ffd90139;
        border-radius: 10px;
    }

    .menus-expand{
        background-color: transparent;
        color: #fff !important;
    }
}

@media (max-width: 200px){
	.navbar-collapse{
        background-color: rgba(13, 125, 229, 0.945);
        min-height: 100vh;
        min-width: 100%;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        overflow: hidden;
    }

    .navbar-collapse .close{
        padding-top: 0px;
        padding-bottom: 50%;
        color: azure;
        display: block !important;
    }
    .navbar-collapse .nav-item .nav-link{
        border: 2px solid #dddddd39;
        border-radius: 10px;
    }

    .navbar-collapse .nav-item .nav-link:hover{
        border: 2px solid #ffd90139;
        border-radius: 10px;
    }

    .menus-expand{
        background-color: transparent;
    }
}
</style>


