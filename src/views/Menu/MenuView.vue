<template>
    <v-container class="menu_css">

        <v-container class="m_arriba">

            <v-container class="m_izquierda">
                <v-container class="logo"></v-container>
                <v-container class="ucvmenu"></v-container>
                <p class="nombretxt">Carlos Jose Alcedo Javier</p>
                <v-container class="accesos">
                    <v-container class="acceso gmail" @click="irGmail"></v-container>
                    <v-container class="acceso drive" @click="irDrive"></v-container>
                    <v-container class="acceso myloft" @click="irMyloft"></v-container>
                    <v-container class="acceso trilce" @click="irTrilce"></v-container>
                    <v-container class="acceso blackboard" @click="irBlackboard"></v-container>
                    <v-container class="acceso clementina" @click="irClementina"></v-container>
                </v-container>
                <button class="btn_cerrar" @click="irlogin">Cerrar Sesión</button>
            </v-container>

            <v-container class="m_derecha">
                <v-container class="cajaprincipal1 reporte" @click="irReporte">
                </v-container>
                <v-container class="cajaprincipal1 recomendaciones" @click="irRecomendaciones">
                </v-container>
            </v-container>

        </v-container>

        <v-container class="m_abajo">

            <section class="splide">
                <v-container class="splide__track">
                    <ul class="splide__list">
                        <li v-for="(image, index) in images" :key="index" class="splide__slide" :style="{ backgroundImage: 'url(' + image + ')' }" @click="expandImage(index)"></li>
                    </ul>
                </v-container>
            </section>


        </v-container>

        <v-container v-if="expandedImage !== null" class="modal">
            <span class="close" @click="collapseImage">&times;</span>
            <img :src="images[expandedImage]" class="modal-content">
        </v-container>

    </v-container>

</template>

<script>
import Splide from '@splidejs/splide';

export default {
    name: 'MenuView',
    data() {
    return {
        images: [
            require('../../components/img/1.png'),
            require('../../components/img/2.png'),
            require('../../components/img/3.png'),
            require('../../components/img/4.png'),
            require('../../components/img/5.png'),
            require('../../components/img/6.png'),
            require('../../components/img/7.png'),
            require('../../components/img/8.png'),
            require('../../components/img/9.png'),
            require('../../components/img/10.png'),
            require('../../components/img/11.png'),
            require('../../components/img/12.png'),
            require('../../components/img/13.png'),
            require('../../components/img/14.png'),
            require('../../components/img/15.png'),
            require('../../components/img/16.png'),
            require('../../components/img/17.png'),
            require('../../components/img/18.png'),
            require('../../components/img/19.png'),
            require('../../components/img/20.png'),
        ],
        expandedImage: null,
    };
    },
    mounted() {
        var splide = new Splide('.splide', {
        type: 'loop',
        perPage: 3,
        perMove: 1,
        autoplay: true,
        pagination : false,
        arrows: false,
        });
        splide.mount();
    },
    methods: {
        irlogin() {
            this.$router.push("/");
        },
        irReporte() {
            this.$router.push("/Reporte");
        },
        irRecomendaciones() {
            this.$router.push("/Recomendaciones");
        },
        expandImage(index) {
            this.expandedImage = index;
        },
        collapseImage() {
            this.expandedImage = null;
        },
        irGmail(){
            window.open('https://mail.google.com/', '_blank');
        },
        irDrive(){
            window.open('https://drive.google.com/', '_blank');
        },
        irMyloft(){
            window.open('https://app.myloft.xyz/', '_blank');
        },
        irTrilce(){
            window.open('https://trilce.ucv.edu.pe/', '_blank');
        },
        irBlackboard(){
            window.open('https://ucv.blackboard.com/', '_blank');
        },
        irClementina(){
            window.open('https://uvcv.edu.pe/', '_blank');
        },
    },
};
</script>

<style src='../../views/Menu/menu.css'></style>