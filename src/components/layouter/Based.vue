<template>
    <div class="based">
        <div class="header">
            <nav class="navbar navbar-expand-lg navbar-dark nav-content fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand">
                    <router-link to="/home" class="nav-link">
                        <img src="../../assets/cetakkPutih.png" class="branded" alt="Logo Cetakk.id">
                    </router-link>
                    </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="closer"><router-link to="/cara" class="nav-link menus-expand text-light"><i class="fas fa-times-circle"></i></router-link></a>
                    </li>
                    <li class="nav-item">
                        <a><router-link to="/cara" class="rounded-pill nav-link menus-expand text-light">Cara Kerja</router-link></a>
                    </li>
                    <li class="nav-item">
                        <a><router-link to="/tentang" class="rounded-pill nav-link menus-expand text-light">Tentang Kami</router-link></a>
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
import '../../firebase'
export default {
    name: 'Based',
    
    mounted(){
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
.navbar-toggler-icon {
    width: 1em !important;
    height: 1em !important;
}
.navbar-dark .navbar-toggler {
    color: rgba(255,255,255,.5);
    border-color: transparent !important;
    margin-top: -10px;
}
.nav-content{
    background: #0D7BE5;
    z-index: 200;
    height: 70px;
}
li{
    margin: 10px;
}
.branded{
    height: 40px;
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
.closer{
    display: none;
    border: none !important;
}
.closer .nav-link{
    border: none !important;
    font-size: 40px;
}
@media (max-width: 850px){
    .branded{
        height: 20px;
    }

    .navbar-brand{
        padding-top: 0 !important
    }
    .navbar-brand .nav-link{
        padding-top: 0 !important
    }
 
    .nav-content{
        background: #0D7BE5;
        z-index: 200;
        height: 50px;
    }
    button .navbar-toggler{
        padding-top: 0 !important;
    }
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

    .navbar-collapse .closer{
        padding: 100px 0 50px;
        display: block;
        color: azure;
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


