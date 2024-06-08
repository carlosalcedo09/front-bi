<template>
    <v-container class="reportePersonalizado">

        <v-container class="todofondo">

            <v-container class="cont-blanco">

                <v-container class="cont-izq">

                    <v-container class="cont-1">
                        <v-container class="logo"></v-container>
                        <v-container class="cont-text1">
                            <p class="p1">Dashboard</p>
                            <p>Análisis de Ventas</p>
                        </v-container>
                    </v-container>

                    <v-container class="cont-2">
                        <v-container class="c2-arriba">
                            <v-container class="c2-izquierda">
                                <p>Ciudad</p>
                            </v-container>
                            <v-container class="c2-derecha">
                                <v-icon class="iconofiltro" @click="clearFilters1">mdi-filter-remove-outline</v-icon>
                            </v-container>
                        </v-container>
                        <v-container class="c2-abajo">
                            <v-row class="elemento">
                                <template v-for="(filter1, index) in filters1" :key="filter1">
                                    <v-col
                                    :cols="filters1.length > 3 ? 6 : 12"
                                    class="d-flex justify-center">
                                        <v-btn
                                            :value="filter1"
                                            depressed
                                            class="ma-2 btnFiltro"
                                            :class="{'selected': isSelected1(filter1)}"
                                            @click="toggleFilter1(filter1)">
                                            {{ filter1 }}
                                        </v-btn>
                                    </v-col>
                                </template>
                            </v-row>
                        </v-container>
                    </v-container>

                    <v-container class="cont-2">
                        <v-container class="c2-arriba">
                            <v-container class="c2-izquierda">
                                <p>Línea de Producto</p>
                            </v-container>
                            <v-container class="c2-derecha">
                                <v-icon class="iconofiltro" @click="clearFilters2">mdi-filter-remove-outline</v-icon>
                            </v-container>
                        </v-container>
                        <v-container class="c2-abajo">
                            <v-row class="elemento">
                                <template v-for="(filter2, index) in filters2" :key="filter2">
                                    <v-col
                                    :cols="filters2.length > 3 ? 6 : 12"
                                    class="d-flex justify-center">
                                        <v-btn
                                            :value="filter2"
                                            depressed
                                            class="ma-2 btnFiltro"
                                            :class="{'selected': isSelected2(filter2)}"
                                            @click="toggleFilter2(filter2)">
                                            {{ filter2 }}
                                        </v-btn>
                                    </v-col>
                                </template>
                            </v-row>
                        </v-container>
                    </v-container>

                    <v-container class="cont-2">
                        <v-container class="c2-arriba">
                            <v-container class="c2-izquierda">
                                <p>Género</p>
                            </v-container>
                            <v-container class="c2-derecha">
                                <v-icon class="iconofiltro" @click="clearFilters3">mdi-filter-remove-outline</v-icon>
                            </v-container>
                        </v-container>
                        <v-container class="c2-abajo1">
                            <v-row class="elemento">
                                <template v-for="(filter3, index) in filters3" :key="filter3">
                                    <v-col
                                    :cols="filters3.length > 3 ? 6 : 12"
                                    class="d-flex justify-center">
                                        <v-btn
                                            :value="filter3"
                                            depressed
                                            class="ma-2 btnFiltro"
                                            :class="{'selected': isSelected3(filter3)}"
                                            @click="toggleFilter3(filter3)">
                                            {{ filter3 }}
                                        </v-btn>
                                    </v-col>
                                </template>
                            </v-row>
                        </v-container>
                    </v-container>

                    <v-container class="cont-2">
                        <v-container class="c2-arriba">
                            <v-container class="c2-izquierda">
                                <p>Tipo de Cliente</p>
                            </v-container>
                            <v-container class="c2-derecha">
                                <v-icon class="iconofiltro" @click="clearFilters4">mdi-filter-remove-outline</v-icon>
                            </v-container>
                        </v-container>
                        <v-container class="c2-abajo1">
                            <v-row class="elemento">
                                <template v-for="(filter4, index) in filters4" :key="filter4">
                                    <v-col
                                    :cols="filters4.length > 3 ? 6 : 12"
                                    class="d-flex justify-center">
                                        <v-btn
                                            :value="filter4"
                                            depressed
                                            class="ma-2 btnFiltro"
                                            :class="{'selected': isSelected4(filter4)}"
                                            @click="toggleFilter4(filter4)">
                                            {{ filter4 }}
                                        </v-btn>
                                    </v-col>
                                </template>
                            </v-row>
                        </v-container>
                    </v-container>

                    <v-btn class="btn-reg" @click="irmenu">
                        <v-icon left class="iconatras">mdi-arrow-left-bold-circle</v-icon>
                        Regresar
                    </v-btn>

                </v-container>

                <v-container class="cont-der">

                    <v-container class="bloque-flex">

                        <v-container class="bloque-izquierda">
                            <v-container class="caja cajatam1">
                                <v-container class="p0">
                                    <v-progress-circular
                                        :model-value="100"
                                        :rotate="360"
                                        :size="140"
                                        :width="10"
                                        color="#002854">
                                        <div class="centrartxtcirculo">
                                            <v-icon class="iconcirculo">mdi-chart-box-outline</v-icon>
                                            <p class="txtcirc1">S/. 322,967</p>
                                            <p class="txtcirc2">Ventas</p>
                                        </div>
                                    </v-progress-circular>
                                </v-container>
                                <v-container class="coli p0"></v-container>
                                <v-container class="p0">
                                    <v-progress-circular
                                        :model-value="100"
                                        :rotate="360"
                                        :size="140"
                                        :width="10"
                                        color="#002854">
                                        <div class="centrartxtcirculo">
                                            <v-icon class="iconcirculo">mdi mdi-cash</v-icon>
                                            <p class="txtcirc1">S/. 307,587</p>
                                            <p class="txtcirc2">Costos</p>
                                        </div>
                                    </v-progress-circular>
                                </v-container>
                                <v-container class="coli p0"></v-container>
                                <v-container class="p0">
                                    <v-progress-circular
                                        :model-value="100"
                                        :rotate="360"
                                        :size="140"
                                        :width="10"
                                        color="#002854">
                                        <div class="centrartxtcirculo">
                                            <v-icon class="iconcirculo">mdi-currency-usd</v-icon>
                                            <p class="txtcirc1">S/. 15,379</p>
                                            <p class="txtcirc2">utilidad</p>
                                        </div>
                                    </v-progress-circular>
                                </v-container>
                                <v-container class="coli p0"></v-container>
                                <v-container class="p0">
                                    <v-progress-circular
                                        :model-value="100"
                                        :rotate="360"
                                        :size="140"
                                        :width="10"
                                        color="#002854">
                                        <div class="centrartxtcirculo">
                                            <v-icon class="iconcirculo">mdi-cash-100</v-icon>
                                            <p class="txtcirc1">4.76 %</p>
                                            <p class="txtcirc2">% U</p>
                                        </div>
                                    </v-progress-circular>
                                </v-container>
                            </v-container>
                            <v-container class="caja cajatam2">
                                <v-container class="izqarriba">
                                    <v-container class="caja1izq">
                                        <p class="l1">Número de Deserciones</p>
                                        <p class="l2">Por Género y Grupo Etario</p>
                                    </v-container>
                                    <v-container class="caja1der">
                                        <p class="genF">Femenino</p>
                                        <p class="genM">Masculino</p>
                                    </v-container>
                                </v-container>
                                    <v-container class="cont_a">
                                        <v-container class="cont_2 h">
                                            <v-container class="cont_2 c1">
                                                <p>130</p>
                                            </v-container>
                                            <v-container class="cont_2 c2">
                                                <p>212</p>
                                            </v-container>
                                        </v-container>
                                        <v-container class="cont_2 j">
                                            <v-container class="cont_2 c1">
                                                <p>311</p>
                                            </v-container>
                                            <v-container class="cont_2 c2">
                                                <p>552</p>
                                            </v-container>
                                        </v-container>
                                        <v-container class="cont_2 j">
                                            <v-container class="cont_2 c1">
                                                <p>344</p>
                                            </v-container>
                                            <v-container class="cont_2 c2">
                                                <p>578</p>
                                            </v-container>
                                        </v-container>
                                        <v-container class="cont_2 j">
                                            <v-container class="cont_2 c1">
                                                <p>367</p>
                                            </v-container>
                                            <v-container class="cont_2 c2">
                                                <p>572</p>
                                            </v-container>
                                        </v-container>
                                        <v-container class="cont_2 j">
                                            <v-container class="cont_2 c1">
                                                <p>135</p>
                                            </v-container>
                                            <v-container class="cont_2 c2">
                                                <p>283</p>
                                            </v-container>
                                        </v-container>
                                    </v-container>
                                    <v-container class="grlive">
                                        <v-progress-linear
                                        v-model="porcentaje1"
                                        color="#DD0919"
                                        height="47"
                                        class="vertical-progress1"
                                        ></v-progress-linear>
                                        <v-progress-linear
                                        v-model="porcentaje2"
                                        color="#002854"
                                        height="47"
                                        class="vertical-progress2"
                                        ></v-progress-linear>
                                        <v-progress-linear
                                        v-model="porcentaje3"
                                        color="#DD0919"
                                        height="47"
                                        class="vertical-progress3"
                                        ></v-progress-linear>
                                        <v-progress-linear
                                        v-model="porcentaje4"
                                        color="#002854"
                                        height="47"
                                        class="vertical-progress2"
                                        ></v-progress-linear>
                                        <v-progress-linear
                                        v-model="porcentaje5"
                                        color="#DD0919"
                                        height="47"
                                        class="vertical-progress3"
                                        ></v-progress-linear>
                                        <v-progress-linear
                                        v-model="porcentaje6"
                                        color="#002854"
                                        height="47"
                                        class="vertical-progress2"
                                        ></v-progress-linear>
                                        <v-progress-linear
                                        v-model="porcentaje7"
                                        color="#DD0919"
                                        height="47"
                                        class="vertical-progress3"
                                        ></v-progress-linear>
                                        <v-progress-linear
                                        v-model="porcentaje8"
                                        color="#002854"
                                        height="47"
                                        class="vertical-progress2"
                                        ></v-progress-linear>
                                        <v-progress-linear
                                        v-model="porcentaje9"
                                        color="#DD0919"
                                        height="47"
                                        class="vertical-progress3"
                                        ></v-progress-linear>
                                        <v-progress-linear
                                        v-model="porcentaje10"
                                        color="#002854"
                                        height="47"
                                        class="vertical-progress4"
                                        ></v-progress-linear>
                                    </v-container>
                                    <v-container class="cont_2">
                                        <v-container class="cont_2 h">
                                            <p>18-25</p>
                                        </v-container>
                                        <v-container class="cont_2 j">
                                            <p>26-35</p>
                                        </v-container>
                                        <v-container class="cont_2 j">
                                            <p>36-45</p>
                                        </v-container>
                                        <v-container class="cont_2 j">
                                            <p>46-55</p>
                                        </v-container>
                                        <v-container class="cont_2 j">
                                            <p>56 o más</p>
                                        </v-container>
                                    </v-container>
                            </v-container>
                        </v-container>

                        <v-container class="bloque-flex">
                            <v-container class="b-izq">
                                <v-container class="caja cajatam3">
                                    <v-container class="izqarriba">
                                        <v-container class="caja1izq">
                                            <p class="l1">Deserciones Totales</p>
                                            <p class="l2">Por Nivel Educativo</p>
                                        </v-container>
                                    </v-container>
                                    <v-container class="bloque-flex1">
                                        <v-container class="grafica3">
                                            <v-progress-circular
                                            :model-value="porcentaje23"
                                            :rotate="180"
                                            :size="150"
                                            :width="16"
                                            color="#DD0919"
                                            class="gc1"
                                            >
                                                <v-progress-circular
                                                :model-value="porcentaje24"
                                                :rotate="180"
                                                :size="110"
                                                :width="16"
                                                color="#7e7e7e"
                                                class="gc2"
                                                >
                                                    <v-progress-circular
                                                    :model-value="porcentaje25"
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
                                        <v-container class="caja1_abcd">
                                            <p class="genA x">Billetera</p>
                                            <p class="genB x">Efectivo</p>
                                            <p class="genC x">Cartera</p>
                                        </v-container>
                                    </v-container>
                                    <v-container class="bloque-flex2">
                                        <v-container class="grafica3">
                                            <v-progress-circular
                                            :model-value="porcentaje26"
                                            :rotate="180"
                                            :size="150"
                                            :width="16"
                                            color="#DD0919"
                                            class="gc1"
                                            >
                                                <v-progress-circular
                                                :model-value="porcentaje27"
                                                :rotate="180"
                                                :size="110"
                                                :width="16"
                                                color="#7e7e7e"
                                                class="gc2"
                                                >
                                                    <v-progress-circular
                                                    :model-value="porcentaje28"
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
                                        <v-container class="caja1_abcd">
                                            <p class="genA x">Billetera</p>
                                            <p class="genB x">Efectivo</p>
                                            <p class="genC x">Cartera</p>
                                        </v-container>
                                    </v-container>
                                </v-container>
                            </v-container>
                            <v-container class="b-der">
                                <v-container class="caja cajatam4">
                                    <v-container class="izqarriba">
                                        <v-container class="caja1izq">
                                            <p class="l1">Deserciones Totales</p>
                                            <p class="l2">Por Nivel Educativo</p>
                                        </v-container>
                                    </v-container>
                                        <v-container class="cont_a">
                                            <v-container class="cont_2 y">
                                                <p>158</p>
                                            </v-container>
                                            <v-container class="cont_2 j">
                                                <p>254</p>
                                            </v-container>
                                            <v-container class="cont_2 w">
                                                <p>341</p>
                                            </v-container>
                                        </v-container>
                                        <v-container class="cont_z">
                                            <v-progress-linear
                                            v-model="porcentaje20"
                                            color="#002854"
                                            height="42"
                                            class="vertical-progress5"
                                            ></v-progress-linear>
                                            <v-progress-linear
                                            v-model="porcentaje21"
                                            color="#7e7e7e"
                                            height="42"
                                            class="vertical-progress6"
                                            ></v-progress-linear>
                                            <v-progress-linear
                                            v-model="porcentaje22"
                                            color="#DD0919"
                                            height="42"
                                            class="vertical-progress6"
                                            ></v-progress-linear>
                                        </v-container>
                                    <v-container class="caja1_abc">
                                        <p class="genA x">Billetera</p>
                                        <p class="genB x">Efectivo</p>
                                        <p class="genC x">Cartera</p>
                                    </v-container>
                                </v-container>
                                <v-container class="caja cajatam5">
                                    <v-container class="izqarriba">
                                        <v-container class="caja1izq">
                                            <p class="l1">Deserciones Totales</p>
                                            <p class="l2">Por Nivel Educativo</p>
                                        </v-container>
                                    </v-container>
                                    <v-container class="cont_2">
                                        <v-container class="p0_1 esp">
                                            <v-container class="barra1">
                                                <v-progress-linear
                                                    v-model="porcentaje18"
                                                    color="#DD0919"
                                                    height="10">
                                                </v-progress-linear>
                                                <p class="c3">108</p>
                                            </v-container>
                                            <v-container class="barra0">
                                                <v-progress-linear
                                                    v-model="porcentaje19"
                                                    color="#002854"
                                                    height="10">
                                                </v-progress-linear>
                                                <p class="c3">352</p>
                                            </v-container>
                                        </v-container>
                                    </v-container>
                                    <v-container class="caja1_ab">
                                        <p class="genF x">Femenino</p>
                                        <p class="genM x">Masculino</p>
                                    </v-container>
                                </v-container>
                            </v-container>
                        </v-container>

                    </v-container>

                    <v-container class="bloque-flex">
                        <v-container class="caja cajatam6">
                            <v-container class="izqarriba">
                                <v-container class="caja1izq">
                                    <p class="l1">Deserciones Totales</p>
                                    <p class="l2">Por Nivel Educativo</p>
                                </v-container>
                            </v-container>
                            <v-timeline direction="horizontal" line-inset="12">
                                <v-timeline-item>
                                <template v-slot:opposite>
                                    <p class="txtcirc1">S/. 784,158</p>
                                </template>
                                <v-icon class="icontiempo">mdi-chart-box-outline</v-icon>
                                <p class="txtcirc2">Ventas1</p>
                                </v-timeline-item>
                                <v-timeline-item>
                                <template v-slot:opposite>
                                    <p class="txtcirc1">S/. 584,852</p>
                                </template>
                                <v-icon class="icontiempo">mdi-chart-box-outline</v-icon>
                                <p class="txtcirc2">Ventas2</p>
                                </v-timeline-item>
                                <v-timeline-item>
                                <template v-slot:opposite>
                                    <p class="txtcirc1">S/. 746,351</p>
                                </template>
                                <v-icon class="icontiempo">mdi-chart-box-outline</v-icon>
                                <p class="txtcirc2">Ventas3</p>
                                </v-timeline-item>
                            </v-timeline>
                        </v-container>
                        <v-container class="caja cajatam7">
                            <v-container class="izqarriba">
                                <v-container class="caja1izq">
                                    <p class="l1">Deserciones Totales</p>
                                    <p class="l2">Por Nivel Educativo</p>
                                </v-container>
                            </v-container>
                            <v-container class="bloque-flex ñ">
                                <v-container class="colum1">
                                    <v-progress-circular
                                        :model-value="100"
                                        :rotate="360"
                                        :size="124"
                                        :width="9"
                                        color="#002854">
                                        <div class="centrartxtcirculo">
                                            <p class="txtcirc3">S/. 307,587</p>
                                        </div>
                                    </v-progress-circular>
                                </v-container>
                                <v-container class="colum1">
                                    <v-progress-circular
                                        :model-value="100"
                                        :rotate="360"
                                        :size="124"
                                        :width="9"
                                        color="#7e7e7e">
                                        <div class="centrartxtcirculo">
                                            <p class="txtcirc3">S/. 307,587</p>
                                        </div>
                                    </v-progress-circular>
                                </v-container>
                                <v-container class="colum1">
                                    <v-progress-circular
                                        :model-value="100"
                                        :rotate="360"
                                        :size="124"
                                        :width="9"
                                        color="#DD0919">
                                        <div class="centrartxtcirculo">
                                            <p class="txtcirc3">S/. 307,587</p>
                                        </div>
                                    </v-progress-circular>
                                </v-container>
                            </v-container>
                            <v-container class="bloque-flex">
                                <v-container class="ch">
                                </v-container>
                                <v-container class="ch">
                                </v-container>
                                <v-container class="ch">
                                </v-container>
                            </v-container>
                            <v-container class="bloque-flex colum1">
                                <p class="genA x">Billetera</p>
                                <p class="genB x">Efectivo</p>
                                <p class="genC x">Cartera</p>
                            </v-container>
                        </v-container>
                        <v-container class="caja cajatam8">
                            <v-container class="izqarriba">
                                <v-container class="caja1izq">
                                    <p class="l1">Deserciones Totales</p>
                                    <p class="l2">Por Nivel Educativo</p>
                                </v-container>
                            </v-container>
                            <v-container class="cont_2">
                                <v-container class="espacio">
                                    <p class="m1">Doctorado</p>
                                    <p class="m1">Bachiller</p>
                                    <p class="m1">Maestría</p>
                                    <p class="m1">Especialización</p>
                                    <p class="m1">Profesional</p>
                                    <p class="m1">Técnico</p>
                                    <p class="m1">Tecnólogo</p>
                                </v-container>
                                <v-container class="p0_1">
                                    <v-container class="barra3">
                                        <v-progress-linear
                                            v-model="porcentaje11"
                                            color="#DD0919"
                                            height="10">
                                        </v-progress-linear>
                                        <p class="c3">108</p>
                                    </v-container>
                                    <v-container class="barra2">
                                        <v-progress-linear
                                            v-model="porcentaje12"
                                            color="#DD0919"
                                            height="10">
                                        </v-progress-linear>
                                        <p class="c3">352</p>
                                    </v-container>
                                    <v-container class="barra2">
                                        <v-progress-linear
                                            v-model="porcentaje13"
                                            color="#DD0919"
                                            height="10">
                                        </v-progress-linear>
                                        <p class="c3">405</p>
                                    </v-container>
                                    <v-container class="barra2">
                                        <v-progress-linear
                                            v-model="porcentaje14"
                                            color="#DD0919"
                                            height="10">
                                        </v-progress-linear>
                                        <p class="c3">471</p>
                                    </v-container>
                                    <v-container class="barra2">
                                        <v-progress-linear
                                            v-model="porcentaje15"
                                            color="#DD0919"
                                            height="10">
                                        </v-progress-linear>
                                        <p class="c3">662</p>
                                    </v-container>
                                    <v-container class="barra2">
                                        <v-progress-linear
                                            v-model="porcentaje16"
                                            color="#DD0919"
                                            height="10">
                                        </v-progress-linear>
                                        <p class="c3">742</p>
                                    </v-container>
                                    <v-container class="barra2">
                                        <v-progress-linear
                                            v-model="porcentaje17"
                                            color="#DD0919"
                                            height="10">
                                        </v-progress-linear>
                                        <p class="c3">744</p>
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
        name: 'ReportePersonalizadoView',
        data(){
            return{
                filters1: ['Filter 1', 'Filter 2', 'Filter 3'],
                selectedFilters1: [],
                filters2: ['Filter 1', 'Filter 2', 'Filter 3', 'Filter 4'],
                selectedFilters2: [],
                filters3: ['Filter 1', 'Filter 2'],
                selectedFilters3: [],
                filters4: ['Filter 1', 'Filter 2'],
                selectedFilters4: [],
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
                porcentaje11: 84,
                porcentaje12: 12,
                porcentaje13: 37,
                porcentaje14: 69,
                porcentaje15: 30,
                porcentaje16: 20,
                porcentaje17: 50,
                porcentaje18: 20,
                porcentaje19: 50,
                porcentaje20: 20,
                porcentaje21: 50,
                porcentaje22: 84,
                porcentaje23: 12,
                porcentaje24: 37,
                porcentaje25: 69,
                porcentaje26: 30,
                porcentaje27: 20,
                porcentaje28: 50,
            }
        },
        created(){

        },
        mounted(){

        },
        methods:{
            irmenu(){
                this.$router.push("/Menu");
            },
            toggleFilter1(filter1) {
                const index = this.selectedFilters1.indexOf(filter1);
                if (index === -1) {
                    this.selectedFilters1.push(filter1);
                } else {
                    this.selectedFilters1.splice(index, 1);
                }
            },
            isSelected1(filter1) {
                return this.selectedFilters1.includes(filter1);
            },
            clearFilters1() {
                this.selectedFilters1 = [];
            },
            toggleFilter2(filter2) {
                const index = this.selectedFilters2.indexOf(filter2);
                if (index === -1) {
                    this.selectedFilters2.push(filter2);
                } else {
                    this.selectedFilters2.splice(index, 1);
                }
            },
            isSelected2(filter2) {
                return this.selectedFilters2.includes(filter2);
            },
            clearFilters2() {
                this.selectedFilters2 = [];
            },
            toggleFilter3(filter3) {
                const index = this.selectedFilters3.indexOf(filter3);
                if (index === -1) {
                    this.selectedFilters3.push(filter3);
                } else {
                    this.selectedFilters3.splice(index, 1);
                }
            },
            isSelected3(filter3) {
                return this.selectedFilters3.includes(filter3);
            },
            clearFilters3() {
                this.selectedFilters3 = [];
            },
            toggleFilter4(filter4) {
                const index = this.selectedFilters4.indexOf(filter4);
                if (index === -1) {
                    this.selectedFilters4.push(filter4);
                } else {
                    this.selectedFilters4.splice(index, 1);
                }
            },
            isSelected4(filter4) {
                return this.selectedFilters4.includes(filter4);
            },
            clearFilters4() {
                this.selectedFilters4 = [];
            },
        },
        computed:{

        }
    }
</script>

<style src='../../views/ReportePersonalizado/reportePersonalizado.css'></style>