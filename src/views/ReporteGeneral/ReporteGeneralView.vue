<template>
    <v-container class="reporteGeneral">

        <v-container class="todofondo">

            <v-container class="cont-blanco">

                <v-container class="cont-izq">

                    <v-container class="datagenero">

                        <v-container class="subtitulo1">
                            <p class="t1">Género</p>
                        </v-container>

                        <v-container class="cajagenero">
                            <v-container class="btn-generoF">
                                <v-icon left class="icongeneroF">mdi-gender-female</v-icon>1500
                            </v-container>
                            <v-container class="btn-generoM">
                                <v-icon left class="icongeneroM">mdi mdi-gender-male</v-icon>1200
                            </v-container>
                        </v-container>

                    </v-container>

                    <v-container class="dataedad">
                        <v-container class="subtituloe1">
                            <p class="t1">Edad Promedio</p>
                            <p class="t2">Del Estudiante (Años)</p>
                        </v-container>
                        <v-container class="subtituloe2">
                            <p class="e2">41</p>
                        </v-container>
                    </v-container>

                    <v-container class="infoizq1">
                        <v-container class="izqarriba">
                            <v-container class="izqizquierda">
                                <p class="p1">Deserciones</p>
                                <p class="p2">Personal Capacitado</p>
                            </v-container>
                            <v-container class="izqderecha">
                                <v-icon right>mdi-check</v-icon>
                            </v-container>
                        </v-container>
                        <v-container class="izqabajo">
                            <v-container class="izqizquierda">
                                <p class="p3">2291</p>
                                <p class="p4">Empleados</p>
                            </v-container>
                            <v-container class="izqderecha">
                                <v-icon right class="iconopersona">mdi-account-group</v-icon>
                            </v-container>
                        </v-container>
                    </v-container>

                    <v-container class="infoizq2">
                        <v-container class="izqarriba">
                            <v-container class="izqizquierda">
                                <p class="p1">Deserciones</p>
                                <p class="p2">Personal No Capacitado</p>
                            </v-container>
                            <v-container class="izqderecha">
                                <v-icon right>mdi-check</v-icon>
                            </v-container>
                        </v-container>
                        <v-container class="izqabajo">
                            <v-container class="izqizquierda">
                                <p class="p3">1193</p>
                                <p class="p4">Empleados</p>
                            </v-container>
                            <v-container class="izqderecha">
                                <v-icon right class="iconopersona">mdi-account-group</v-icon>
                            </v-container>
                        </v-container>
                    </v-container>

                    <v-container class="infoizq3">
                        <v-container class="izqarriba">
                            <v-container class="izqizquierda">
                                <p>Motivo de</p>
                                <p class="p5">Deserción</p>
                            </v-container>
                            <v-container class="izqderecha">
                                <v-icon right>mdi-star-outline</v-icon>
                            </v-container>
                        </v-container>
                        <v-container class="izqabajo1">
                            <v-container class="izqizquierda">
                                <p class="p6">Bajo rendimiento</p>
                                <p class="p6">Cambio de ciudad</p>
                                <p class="p6">Enfermedad</p>
                                <p class="p6">Nuevo trabajo</p>
                            </v-container>
                            <v-container class="izqderecha1">
                                <p class="p7">328</p>
                                <p class="p7">970</p>
                                <p class="p7">33</p>
                                <p class="p7">2153</p>
                            </v-container>
                        </v-container>
                    </v-container>

                    <v-btn class="btn-reg" @click="irmenu">
                        <v-icon left class="iconatras">mdi-arrow-left-bold-circle</v-icon>
                        Regresar
                    </v-btn>

                </v-container>

                <v-container class="cont-der">
                    <v-container  class="cont-arriba">
                        <v-container class="c-arr-izq">
                            <v-container class="arr-izq">
                                <v-container class="izq-izq">
                                    <v-container class="a"></v-container>
                                    <v-container class="b">
                                        <p class="p8">Dashboard - Análisis</p>
                                        <p class="p9">Indicadores</p>
                                    </v-container>
                                </v-container>
                                <v-container class="izq-der">
                                    
                                </v-container>
                            </v-container>
                            <v-container class="aba-izq">
                                <v-container class="infoizq4">
                                    <v-container class="izq-4"></v-container>
                                    <v-container class="der-4">
                                        <p class="p10">9790</p>
                                        <p class="p11">Estudiantes Totales</p>
                                    </v-container>
                                </v-container>
                                <v-container class="infoizq4">
                                    <v-container class="izquierda-4">
                                        <v-progress-circular
                                        :model-value="porcentaje1"
                                        :rotate="360"
                                        :size="110"
                                        :width="14"
                                        color="#DD0919">
                                        <p class="porc">{{ porcentaje1 }}%</p>
                                        </v-progress-circular>
                                    </v-container>
                                    <v-container class="derecha-4">
                                        <p class="p12">Tasa de Deserción</p>
                                        <p class="p13">Empleados Retirados</p>
                                        <p class="p14">3484</p>
                                    </v-container>
                                </v-container>
                                <v-container class="infoizq4">
                                    <v-container class="izquierda-4">
                                        <v-progress-circular
                                        :model-value="porcentaje2"
                                        :rotate="360"
                                        :size="110"
                                        :width="14"
                                        color="#002854">
                                        <p class="porc">{{ porcentaje2 }}%</p>
                                        </v-progress-circular>
                                    </v-container>
                                    <v-container class="derecha-4">
                                        <p class="p12">Fuerza Activa</p>
                                        <p class="p13">Número de Empleados</p>
                                        <p class="p14">6306</p>
                                    </v-container>
                                </v-container>
                            </v-container>
                        </v-container>
                        <v-container class="c-arr-der">
                            <p class="p15">Exportar en:</p>
                            <v-btn class="btn-desc">
                                <v-icon left class="iconform">mdi-file-pdf-box</v-icon>
                                PDF
                            </v-btn>
                            <v-btn class="btn-desc">
                                <v-icon left class="iconform">mdi-file-excel-box</v-icon>
                                EXCEL
                            </v-btn>
                        </v-container>
                    </v-container>
                    <v-container  class="cont-abajo">
                        <v-container class="columna1">
                            <v-container class="caja1">
                                <v-container class="izqarriba">
                                    <v-container class="caja1izq">
                                        <p class="l1">Deserciones Totales</p>
                                        <p class="l2">Por Tipo de Cargo del Empleado</p>
                                    </v-container>
                                    <v-container class="caja1der">
                                        <v-icon right>mdi-check</v-icon>
                                    </v-container>
                                </v-container>
                                <v-container class="caja1abajo">
                                    <v-container class="casa1abiz">
                                        <p class="l3">Bajo rendimiento</p>
                                        <p class="l3">Cambio de ciudad</p>
                                        <p class="l3">Enfermedad</p>
                                        <p class="l3">Nuevo trabajo</p>
                                        <p class="l3">Bajo rendimiento</p>
                                        <p class="l3">Cambio de ciudad</p>
                                        <p class="l3">Enfermedad</p>
                                        <p class="l3">Nuevo trabajo</p>
                                        <p class="l3">Enfermedad</p>
                                        <p class="l3">Nuevo trabajo</p>
                                    </v-container>
                                    <v-container class="casa1abder">
                                        <p class="l4">328</p>
                                        <p class="l4">970</p>
                                        <p class="l4">33</p>
                                        <p class="l4">2153</p>
                                        <p class="l4">328</p>
                                        <p class="l4">970</p>
                                        <p class="l4">33</p>
                                        <p class="l4">2153</p>
                                        <p class="l4">33</p>
                                        <p class="l4">2153</p>
                                    </v-container>
                                </v-container>
                                <v-container class="caja1abajo1">
                                    <v-container class="abajo1izq">
                                        <p class="l5">Prom Deserciones</p>
                                        <p class="l6">Por Cargo del Empleado</p>
                                    </v-container>
                                    <v-container class="abajo1der">
                                        <p class="l7">155</p>
                                    </v-container>
                                </v-container>
                            </v-container>
                        </v-container>
                        <v-container class="columna2">
                            <v-container class="caja2">
                                <v-container class="izqarriba">
                                    <v-container class="caja1izq">
                                        <p class="l1">Número de Deserciones</p>
                                        <p class="l2">Por Género</p>
                                    </v-container>
                                    <v-container class="caja1der">
                                        <v-icon right>mdi-star-outline</v-icon>
                                    </v-container>
                                </v-container>
                                <v-container class="barra_1">
                                    <p class="b1">Deserciones Femeninas</p>
                                    <v-container class="barra">
                                        <v-progress-linear
                                            v-model="porcentaje3"
                                            color="#DD0919"
                                            height="25">
                                        </v-progress-linear>
                                        <p class="b2">{{ porcentaje3 }}%</p>
                                    </v-container>
                                </v-container>
                                <v-container class="barra_2">
                                    <p class="b4">Deserciones Masculinas</p>
                                    <v-container class="barra">
                                        <v-progress-linear
                                            v-model="porcentaje4"
                                            color="#002854"
                                            height="25">
                                        </v-progress-linear>
                                        <p class="b3">{{ porcentaje4 }}%</p>
                                    </v-container>
                                </v-container>
                            </v-container>
                            <v-container class="caja3">
                                <v-container class="izqarriba">
                                    <v-container class="caja1izq">
                                        <p class="l1">Nivel de Deserción</p>
                                        <p class="l2">Por Distancia al Trabajo</p>
                                    </v-container>
                                    <v-container class="caja1der">
                                        <v-icon right>mdi-check</v-icon>
                                    </v-container>
                                </v-container>
                                <v-container class="cont_1">
                                    <v-container class="cont_2">
                                        <v-container class="c2_1">
                                            <p class="l8">510</p>
                                            <p class="l9">828</p>
                                            <p class="l10">2146</p>
                                        </v-container>
                                        <v-container class="c2_2">
                                            <p class="l11">Lejos</p>
                                            <p class="l11">Muy Lejos</p>
                                            <p class="l11">Cerca</p>
                                        </v-container>
                                    </v-container>
                                    <v-container class="grafica3">
                                        <v-progress-circular
                                        :model-value="porcentaje5"
                                        :rotate="180"
                                        :size="150"
                                        :width="16"
                                        color="#DD0919"
                                        class="gc1"
                                        >
                                            <v-progress-circular
                                            :model-value="porcentaje6"
                                            :rotate="180"
                                            :size="110"
                                            :width="16"
                                            color="#7e7e7e"
                                            class="gc2"
                                            >
                                                <v-progress-circular
                                                :model-value="porcentaje7"
                                                :rotate="180"
                                                :size="68"
                                                :width="16"
                                                color="#002854"
                                                class="gc3"
                                                >
                                                </v-progress-circular>
                                            </v-progress-circular>
                                        </v-progress-circular>
                                    </v-container>
                                </v-container>
                            </v-container>
                        </v-container>
                        <v-container class="columna3">
                            <v-container class="caja4">
                                <v-container class="izqarriba">
                                    <v-container class="caja1izq">
                                        <p class="l1">Número de Deserciones</p>
                                        <p class="l2">Por Género y Grupo Etario</p>
                                    </v-container>
                                    <v-container class="caja1der_1">
                                        <p class="genF">Femenino</p>
                                        <p class="genM">Masculino</p>
                                        <v-icon right>mdi-star-outline</v-icon>
                                    </v-container>
                                </v-container>
                            </v-container>
                            <v-container class="caja5">
                                <v-container class="caja6">
                                    <v-container class="izqarriba">
                                        <v-container class="caja1izq">
                                            <p class="l1">Deserciones Totales</p>
                                            <p class="l2">Por Nivel Educativo</p>
                                        </v-container>
                                        <v-container class="caja1der">
                                            <v-icon right>mdi-check</v-icon>
                                        </v-container>
                                    </v-container>
                                </v-container>
                                <v-container class="caja7">
                                    <v-container class="izqarriba">
                                        <v-container class="caja1izq">
                                            <p class="l1">Relación Total</p>
                                            <p class="l2">3484</p>
                                        </v-container>
                                        <v-container class="caja1der">
                                            <v-icon right>mdi-check</v-icon>
                                        </v-container>
                                    </v-container>
                                    <v-container class="cont_2">
                                        <v-container>
                                            <p class="l8">Admin</p>
                                            <p class="l9">Financiera</p>
                                            <p class="l10">Servicios</p>
                                        </v-container>
                                        <v-container>
                                            <svg viewBox="0 0 36 36" class="circular-chart">
                                            <path class="circle-bg"
                                                    d="M18 2.0845
                                                    a 15.9155 15.9155 0 0 1 0 31.831
                                                    a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                            <path :stroke-dasharray="dashArray1"
                                                    class="circle"
                                                    :class="color1"
                                                    d="M18 2.0845
                                                    a 15.9155 15.9155 0 0 1 0 31.831
                                                    a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                            <path :stroke-dasharray="dashArray2"
                                                    class="circle"
                                                    :class="color2"
                                                    d="M18 2.0845
                                                    a 15.9155 15.9155 0 0 1 0 31.831
                                                    a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                            <path :stroke-dasharray="dashArray3"
                                                    class="circle"
                                                    :class="color3"
                                                    d="M18 2.0845
                                                    a 15.9155 15.9155 0 0 1 0 31.831
                                                    a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                            </svg>
                                        </v-container>
                                    </v-container>
                                </v-container>
                            </v-container>
                        </v-container>
                    </v-container>
                </v-container>

            </v-container>

        </v-container>

    </v-container>
</template>

<script>
    export default {
        name: 'ReporteGeneralView',
        data(){
            return{
                porcentaje1: 45,
                porcentaje2: 84,
                porcentaje3: 37,
                porcentaje4: 84,
                porcentaje5: 84,
                porcentaje6: 37,
                porcentaje7: 84,
                porcentaje8: 30,
                porcentaje9: 20,
                porcentaje10: 50,
            }
        },
        created(){

        },
        methods:{
            irmenu(){
                this.$router.push("/Menu");
            },
        },
        computed: {
            dashArray1() {
            return `${this.porcentaje8} ${100 - this.porcentaje8}`;
            },
            dashArray2() {
            return `${this.porcentaje9} ${100 - this.porcentaje9} ${this.porcentaje8} ${100 - this.porcentaje8}`;
            },
            dashArray3() {
            const total = this.porcentaje8 + this.porcentaje9;
            return `${this.porcentaje10} ${100 - this.porcentaje10} ${total} ${100 - total}`;
            },
            color1() {
            return 'color1';
            },
            color2() {
            return 'color2';
            },
            color3() {
            return 'color3';
            }
        },
    }
</script>

<style src='../../views/ReporteGeneral/reporteGeneral.css'></style>