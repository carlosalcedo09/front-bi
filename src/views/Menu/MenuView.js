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
        irReporteGeneral() {
            this.$router.push("/ReporteGeneral");
        },
        irReportePersonalizado() {
            this.$router.push("/ReportePersonalizado");
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