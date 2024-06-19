<template>
    <v-container class="reportePersonalizado">

        <v-container class="todofondo">

            <v-container class="cont-blanco">

                <v-container class="cont-izq">

                    <v-container class="cont-1">
                        <v-container class="logo"></v-container>
                        <v-container class="cont-text1">
                            <p class="p1">Dashboard</p>
                            <p>{{ nombreCursoSeleccionado }}</p>
                        </v-container>
                    </v-container>

                    <v-container class="cont-2">
                        <v-container class="c2-arriba">
                            <v-container class="c2-izquierda">
                                <p>Asignaturas Académicas</p>
                            </v-container>
                            <v-container class="c2-derecha">
                                <v-icon class="iconofiltro" @click="clearFilters1">mdi-filter-remove-outline</v-icon>
                            </v-container>
                        </v-container>
                        <v-container class="c2-abajo">
                            <v-row class="elemento">
                                <template v-for="(filter1, index) in filters1" :key="filter1">
                                    <v-col
                                    :cols="filters1.length > 3 ? 12 : 12"
                                    class="d-flex justify-center">
                                        <v-btn
                                            :value="filter1"
                                            depressed
                                            class="ma-2 btnFiltro"
                                            :class="{'selected': selectedFilter1 === filter1}"
                                            @click="handleFilterClick(filter1)">
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
                                <p>Periodo de tiempo</p>
                            </v-container>
                            <v-container class="c2-derecha">
                                <v-icon class="iconofiltro" @click="clearFilters2">mdi-filter-remove-outline</v-icon>
                            </v-container>
                        </v-container>
                        <v-container class="c2-abajoa">
                            <v-row class="elemento">
                                <template v-for="(filter2, index) in filters2" :key="filter2">
                                    <v-col
                                    :cols="filters2.length > 3 ? 6 : 12"
                                    class="d-flex justify-center">
                                        <v-btn
                                            :value="filter2"
                                            depressed
                                            class="ma-2 btnFiltro"
                                            :class="{'selected': selectedFilter2 === filter2}"
                                            @click="handleFilterClick1(filter2)">
                                            {{ filter2 }}
                                        </v-btn>
                                    </v-col>
                                </template>
                            </v-row>
                        </v-container>
                    </v-container>
                    <v-btn class="btn-reg" @click="descargarPDF">
                        <v-icon left class="iconatras">mdi-file-pdf-box</v-icon>
                        Descargar PDF
                    </v-btn>

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
                                            <v-icon class="iconcirculo">mdi-account</v-icon>
                                            <p class="txtcirc1">{{ cantidadEstu.cantidadM }}</p>
                                            <p class="txtcirc2"> Matriculados</p>
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
                                            <v-icon class="iconcirculo">mdi mdi-account-tie</v-icon>
                                            <p class="txtcirc1">{{ cantidadProfe.cantidadP }}</p>
                                            <p class="txtcirc2">Docentes</p>
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
                                            <v-icon class="iconcirculo">mdi-chart-box-outline</v-icon>
                                            <p class="txtcirc1">{{ cantidadNotas.cantidadN }}</p>
                                            <p class="txtcirc2">Notas</p>
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
                                            <v-icon class="iconcirculo">mdi-star-settings</v-icon>
                                            <p class="txtcirc1">{{promedioGeneral.promedio}}</p>
                                            <p class="txtcirc2">Nota</p>
                                            <p class="txtcirc2">Promedio</p>
                                        </div>
                                    </v-progress-circular>
                                </v-container>
                            </v-container>
                            <v-container class="caja cajatam2">
                                <v-container class="izqarriba">
                                    <v-container class="caja1izq">
                                        <p class="l1">Número de Calificaciones</p>
                                        <p class="l2">Por tipo </p>
                                    </v-container>
                                    <v-container class="caja1der">
                                        <p class="genF">No Satisfactorias</p>
                                        <p class="genM">Satisfactorias</p>
                                    </v-container>
                                </v-container>
                                    <v-container class="cont_a">
                                        <v-container v-for="(curso, index) in cursosTipo" :key="index" class="cont_2 h">
                                            <v-container class="cont_2 c1">
                                                <p>{{ curso.NotasInSatis }}</p>
                                            </v-container>
                                            <v-container class="cont_2 c2">
                                                <p>{{ curso.NotasSatis }}</p>
                                            </v-container>
                                        </v-container>
                                    </v-container>
                                    <v-container class="grlive">
                                        <v-container v-for="(curso, index) in cursosTipo" :key="index">
                                            <v-progress-linear
                                            v-model="curso.PorcentajeI"
                                            color="#DD0919"
                                            height="47"
                                            class="vertical-progress1"
                                            ></v-progress-linear>
                                            <v-progress-linear
                                            v-model="curso.PorcentajeS"
                                            color="#002854"
                                            height="47"
                                            class="vertical-progress2"
                                            ></v-progress-linear>
                                        </v-container>
                                       
                                    </v-container>
                                    <v-container class="cont_2">
                                        <v-container class="cont_2 h">
                                            <p>Examen Parcial</p>
                                        </v-container>
                                        <v-container class="cont_2 j">
                                            <p>Práctica Calificada</p>
                                        </v-container>
                                        <v-container class="cont_2 j">
                                            <p>Examen Final</p>
                                        </v-container>
                                        <v-container class="cont_2 j">
                                            <p>Inves. Formativa</p>
                                        </v-container>
                                    </v-container>
                            </v-container>
                        </v-container>

                        <v-container class="bloque-flex">
                            <v-container class="b-izq">
                                <v-container class="caja cajatam3">
                                    <v-container class="izqarriba">
                                        <v-container class="caja1izq">
                                            <p class="l1">Desempeño Anual</p>
                                            <p class="l2">Cantidad de notas satisfactorias</p>
                                        </v-container>
                                    </v-container>
                                    <v-container class="bloque-flex1">
                                        <v-container class="grafica3">
                                            <v-progress-circular
                                            :model-value="porcentajeC1[0]"
                                            :rotate="180"
                                            :size="150"
                                            :width="16"
                                            color="#DD0919"
                                            class="gc1"
                                            >
                                                <v-progress-circular
                                                :model-value="porcentajeC1[1]"
                                                :rotate="180"
                                                :size="110"
                                                :width="16"
                                                color="#7e7e7e"
                                                class="gc2"
                                                >
                                                    <v-progress-circular
                                                    :model-value="porcentajeC1[2]"
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
                                            <p class="genA x">{{labelsC1[0]}}</p>
                                            <p class="genB x">{{ labelsC1[1] }}</p>
                                            <p class="genC x">{{ labelsC1[2] }}</p>
                                        </v-container>
                                    </v-container>
                                    <v-container class="bloque-flex2">
                                        <v-container class="grafica3">
                                            <v-progress-circular
                                            :model-value="porcentajeC1[3]"
                                            :rotate="180"
                                            :size="150"
                                            :width="16"
                                            color="#DD0919"
                                            class="gc1"
                                            >
                                                <v-progress-circular
                                                :model-value="porcentajeC1[4]"
                                                :rotate="180"
                                                :size="110"
                                                :width="16"
                                                color="#7e7e7e"
                                                class="gc2"
                                                >
                                                    <v-progress-circular
                                                    :model-value="porcentajeC1[5]"
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
                                            <p class="genA x">{{ labelsC1[3] }}</p>
                                            <p class="genB x">{{ labelsC1[4] }}</p>
                                            <p class="genC x">{{ labelsC1[5] }}</p>
                                        </v-container>
                                    </v-container>
                                </v-container>
                            </v-container>
                            <v-container class="b-der">
                                <v-container class="caja cajatam4">
                                    <v-container class="izqarriba">
                                        <v-container class="caja1izq">
                                            <p class="l1">Notas Satisfactorias</p>
                                            <p class="l2">Por Unidad</p>
                                        </v-container>
                                    </v-container>
                                        <v-container class="cont_a">
                                            <v-container class="cont_2 y">
                                                <p>{{ UnidadU.NotasM}}</p>
                                            </v-container>
                                            <v-container class="cont_2 j">
                                                <p> {{ UnidadS.NotasM }}</p>
                                            </v-container>
                                            <v-container class="cont_2 w">
                                                <p>{{ UnidadT.NotasM }}</p>
                                            </v-container>
                                        </v-container>
                                        <v-container class="cont_z">
                                            <v-progress-linear
                                            v-model="UnidadU.Porcentaje"
                                            color="#002854"
                                            height="42"
                                            class="vertical-progress5"
                                            ></v-progress-linear>
                                            <v-progress-linear
                                            v-model="UnidadS.Porcentaje"
                                            color="#7e7e7e"
                                            height="42"
                                            class="vertical-progress6"
                                            ></v-progress-linear>
                                            <v-progress-linear
                                            v-model="UnidadT.Porcentaje"
                                            color="#DD0919"
                                            height="42"
                                            class="vertical-progress6"
                                            ></v-progress-linear>
                                        </v-container>
                                    <v-container class="caja1_abc">
                                        <p class="genA x">Primera Unidad</p>
                                        <p class="genB x">Segundo Unidad</p>
                                        <p class="genC x">Tercera Unidad</p>
                                    </v-container>
                                </v-container>
                                <v-container class="caja cajatam5">
                                    <v-container class="izqarriba">
                                        <v-container class="caja1izq">
                                            <p class="l1">Promedios </p>
                                            <p class="l2">Por Genero </p>
                                        </v-container>
                                    </v-container>
                                    <v-container class="cont_2">
                                        <v-container class="p0_1 esp">
                                            <v-container class="barra1">
                                                <v-progress-linear
                                                    v-model="GeneroFemenino.porcentaje"
                                                    color="#DD0919"
                                                    height="10">
                                                </v-progress-linear>
                                                <p class="c3">{{ GeneroFemenino.promedio }}</p>
                                            </v-container>
                                            <v-container class="barra0">
                                                <v-progress-linear
                                                    v-model="GeneroMasculino.porcentaje"
                                                    color="#002854"
                                                    height="10">
                                                </v-progress-linear>
                                                <p class="c3">{{ GeneroMasculino.promedio }}</p>
                                            </v-container>
                                        </v-container>
                                    </v-container>
                                    <v-container class="caja1_ab">
                                        <p class="genF x">{{ GeneroFemenino.Genero }}</p>
                                        <p class="genM x">{{ GeneroMasculino.Genero }}</p>
                                    </v-container>
                                </v-container>
                            </v-container>
                        </v-container>

                    </v-container>

                    <v-container class="bloque-flex">
                        <v-container class="caja cajatam6">
                            <v-container class="izqarriba">
                                <v-container class="caja1izq">
                                    <p class="l1">Notas Promedio</p>
                                    <p class="l2">Por Semestre Académico</p>
                                </v-container>
                            </v-container>
                            <v-container class="p0_1">
                                <v-card class="mx-auto text-center cajalinea" max-width="600" dark>
                                    <v-card-text class="cardpd">
                                        <v-sheet color="white">
                                            <div style="position: relative; height: 204px;">
                                                <v-sparkline
                                                    v-for="(line, index) in values"
                                                    :key="index"
                                                    :model-value="line"
                                                    :color="colors[index]"
                                                    height="100"
                                                    padding="24"
                                                    stroke-linecap="round"
                                                    smooth
                                                    :labels="[]"
                                                    :stroke-width="2" 
                                                    style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; margin-top: -23px;">
                                                </v-sparkline>
                                            </div>
                                            <div class="labels">
                                                <span v-for="(label, index) in labels" :key="index" class="label">
                                                    {{ label }}
                                                </span>
                                            </div>
                                        </v-sheet>
                                    </v-card-text>
                                </v-card>
                            </v-container>
                            <v-container class="p0_1 adiclc">
                                <p class="lc1 comlc">Com. Comunicativa</p>
                                <p class="lc2 comlc">Fund. Programación</p>
                                <p class="lc3 comlc">Int. Ingeniería</p>
                                <p class="lc4 comlc">Matemática I</p>
                                <p class="lc5 comlc">Pens. Lógico</p>
                                <p class="lc6 comlc">Tutoria I</p>
                            </v-container>
                        </v-container>

                        <v-container class="caja cajatam7">
                            <v-container class="izqarriba">
                                <v-container class="caja1izq">
                                    <p class="l1">Calificación Promedio</p>
                                    <p class="l2">Por turno</p>
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
                                            <p class="txtcirc3">{{ promedios[1] }} .00</p>
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
                                            <p class="txtcirc3">{{ promedios[2]}} .00</p>
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
                                            <p class="txtcirc3">{{ promedios[0] }} .00</p>
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
                                <p class="genA x">Mañana</p>
                                <p class="genB x">Tarde</p>
                                <p class="genC x">Noche</p>
                            </v-container>
                        </v-container>
                        <v-container class="caja cajatam8">
                            <v-container class="izqarriba">
                                <v-container class="caja1izq">
                                    <p class="l1">Notas No Sartistactorias</p>
                                    <p class="l2">Por docente</p>
                                </v-container>
                            </v-container>
                            <v-container class="cont_2">
                                <v-container class="espacio">
                                    <p v-for="(curso, index) in cursosProfesor" :key="index" class="m1">{{curso.NombreCompleto}}</p>
                                </v-container>
                                <v-container class="p0_1">
                                    <v-container v-for="(curso, index) in cursosProfesor" :key="index" class="barra2">
                                        <v-progress-linear
                                            v-model="curso.Porcentaje"
                                            color="#DD0919"
                                            height="10">
                                        </v-progress-linear>
                                        <p class="c3">{{ curso.NotasM }}</p>
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
    
    import jsPDF from 'jspdf';
    import html2canvas from 'html2canvas';
    export default {
        name: 'ReportePersonalizadoView',
        data(){
            return{
                añoInicial: 2010,
                añoFinal: 2013,
                idCurso: 'GPDG102',
                cursos: [],
                cursosGenero: [],
                cursosTurno:[],
                cursosProfesor:[],
                cursosUnidad:[],
                GeneroMasculino: [],
                GeneroFemenino: [],
                UnidadS: [],
                UnidadU: [],
                UnidadT:[],
                promedios:[],
                cursosTipo:[],
                añosPromedios:[],
                promedioGeneral:'',
                cantidadEstu: '',
                cantidadProfe:'',
                cantidadNotas:'',
                porcentajeC1:[],
                labelsC1:[],
                nombreCursoSeleccionado:'Competencia Comunicativa',
                filters1: ['Competencia Comunicativa', 'Fundamentos Programación', 'Introducción Ingeniería','Matemática I','Pensamiento Lógico','Tutoría I'],
                selectedFilter1: [],
                filters2: ['2009-2012', '2011-2014', '2013-2016', '2015-2018','2017-2020','2019-2022','2021-2024'],
                selectedFilter2: [],
                values:[],
                // Colores para cada línea
                colors: ['#7e7e7e', '#DD0919', '#002854', '#13a8a8', '#e9a166', '#f0e54c'],
                // Etiquetas comunes para todas las líneas
                labels: [],
            }
        },
        created(){
            this.resumenCursos();
            this.cargarDatos();
        },
        mounted(){

        },
        methods:{
            irmenu(){
                this.$router.push("/Menu");
            },
            async resumenCursos(){
                try {
                    const response = await this.$axios.get('/desempeno/resumen', {
                    params: {
                        añoI: this.añoInicial,
                        añoF: this.añoFinal,
                    }
                    });
                    this.cursos = response.data;
                    //Llenar labels
                    const periodosUnicos = [...new Set(this.cursos.map(curso => curso.Periodo))];
                    this.labels= periodosUnicos;
                    //Llenar values
                    const valoresPorCurso = this.obtenerValoresPorCurso(this.cursos);
                    this.values= valoresPorCurso;
                } catch (error) {
                    console.error('Error al obtener datos:', error);
                }
            },

            async cargarDatos(){
                try{
                    const response = await this.$axios.get('/desempeno/generoCurso',{
                        params:{
                            idCurso: this.idCurso,
                        }
                    });
                    this.cursosGenero= response.data;
                    this.llenarArregloGenero();
                              
                    const responseTurno = await this.$axios.get('/desempeno/turnoCurso',{
                        params:{
                            idCurso: this.idCurso,
                        }
                    });
                    this.cursosTurno= responseTurno.data;
                    this.promedios = this.cursosTurno.map(curso => curso.Promedio);

                    const responseUnidad= await this.$axios.get('/desempeno/unidadCurso',{
                        params:{
                            idCurso: this.idCurso,
                        }
                    });
                    this.cursosUnidad= responseUnidad.data;
                    this.llenarArregloUnidad();

                    const responseProfesores= await this.$axios.get('/desempeno/profesoresCurso',{
                        params:{
                            idCurso: this.idCurso,
                        }
                    });
                    this.cursosProfesor= responseProfesores.data;

                    const responseTipo= await this.$axios.get('/desempeno/tipoNota',{
                        params: {
                            idCurso: this.idCurso,
                        }
                    });
                    this.cursosTipo= responseTipo.data;

                    const responseAño= await this.$axios.get('/desempeno/anual',{
                        params: {
                            idCurso: this.idCurso,
                        }
                    });
                    this.añosPromedios= responseAño.data;
                    this.porcentajeAños();

                    const responseA= await this.$axios.get('/desempeno/promedioCursoE',{
                        params:{
                            idCurso: this.idCurso,
                        }
                    });
                    this.promedioGeneral= responseA.data;

                    const responseB = await this.$axios.get('/desempeno/estudiantesCursoE',{
                        params:{
                            idCurso: this.idCurso,
                        }
                    });
                    this.cantidadEstu= responseB.data;

                    const responseC= await this.$axios.get('/desempeno/profesoresCursoE',{
                        params:{
                            idCurso: this.idCurso,
                        }
                    });
                    this.cantidadProfe= responseC.data;

                    const responseD= await this.$axios.get('/desempeno/cantidadNotasRegistradas',{
                        params:{
                            idCurso: this.idCurso,
                        }
                    });
                    this.cantidadNotas= responseD.data;

                }catch(error){
                    console.error('Error al obtener datos',error)
                }
            },
            llenarArregloGenero(){
                this.GeneroMasculino = this.cursosGenero.find(curso=>curso.Genero==='Masculino');
                this.GeneroFemenino = this.cursosGenero.find(cursos=>cursos.Genero==='Femenino');
            },

            llenarArregloUnidad(){
                this.UnidadU= this.cursosUnidad.find(curso=>curso.idUnidad==='U1');
                this.UnidadS= this.cursosUnidad.find(curso=>curso.idUnidad==='U2');
                this.UnidadT= this.cursosUnidad.find(curso=>curso.idUnidad==='U3');
            },

            porcentajeAños(){
               const por2009= (this.añosPromedios.find(año=>año.year===2009));
               const por2010= (this.añosPromedios.find(año=>año.year===2010));
               const por2011= (this.añosPromedios.find(año=>año.year===2011));
               const por2021= (this.añosPromedios.find(año=>año.year===2021));
               const por2022= (this.añosPromedios.find(año=>año.year===2022));
               const por2023= (this.añosPromedios.find(año=>año.year===2023));
               
               this.porcentajeC1=[por2009.Porcentaje,por2010.Porcentaje,por2011.Porcentaje,por2021.Porcentaje,por2022.Porcentaje,por2023.Porcentaje];
               this.labelsC1=[por2009.Notas+ ' notas en ' +por2009.year,
                            por2010.Notas+ ' notas en ' +por2010.year,
                            por2011.Notas+ ' notas en ' +por2011.year,
                            por2021.Notas+ ' notas en ' +por2021.year,
                            por2022.Notas+ ' notas en ' +por2022.year,
                            por2023.Notas+ ' notas en ' +por2023.year ]
            },
            
            obtenerValoresPorCurso(cursos) {
                const valoresPorCurso = {};

                cursos.forEach(curso => {
                    const { c_NombreCurso, Periodo, promedio } = curso;
                    if (!valoresPorCurso[c_NombreCurso]) {
                        valoresPorCurso[c_NombreCurso] = [];
                    }
                    valoresPorCurso[c_NombreCurso].push(promedio);
                });
                            
                Object.values(valoresPorCurso).forEach(promedios => {
                    promedios;
                });

                const nombresCursosOrdenados = Object.keys(valoresPorCurso).sort();
                const valoresOrdenados = nombresCursosOrdenados.map(curso => valoresPorCurso[curso]);

                return valoresOrdenados;
            },
            descargarPDF() {
                const filename = 'dashboardPersonalizado.pdf';
                const element = document.querySelector('.reportePersonalizado');
                const options = {
                scale: 3,
                useCORS: true,
                logging: true,
                };

                const pdf = new jsPDF('l', 'px', [element.offsetWidth, element.offsetHeight]);
            // Título en mayúsculas y negrita
                    pdf.setFont('helvetica', 'bold');
                    pdf.setFontSize(60);
                    pdf.text(`REPORTE DE LA ASIGNATURA ACADÉMICA`, pdf.internal.pageSize.getWidth() / 2, 230, {
                    align: 'center'
                    });
                    

                    pdf.setFont('helvetica', 'bold');
                    pdf.setFontSize(60);
                    pdf.text(`${this.nombreCursoSeleccionado}`, pdf.internal.pageSize.getWidth() / 2, 280, {
                    align: 'center'
                    });

                    // Restablecemos la fuente a normal para el resto del texto
                    pdf.setFont('helvetica', 'normal');
                    pdf.setFontSize(30);

                    // Fecha y hora actual
                    const fechaHora = new Date().toLocaleString();
                    pdf.text(`Fecha y hora: ${fechaHora}`, pdf.internal.pageSize.getWidth() / 2,320, {
                    align: 'center'
                    });

                    // Descripcion
                    pdf.text(`Documento generado por personal Administrativo `, pdf.internal.pageSize.getWidth() / 2, 350, {
                    align: 'center'
                    });

                    // Descripcion
                    pdf.text(`El presente documento resumen los datos analizados, cabe presicar que para una mejor visualización utilizar el panel administrativo del sistema `, pdf.internal.pageSize.getWidth() / 2, 380, {
                    align: 'center'
                    });


                    // Añadir nueva página para el contenido capturado
                    pdf.addPage();

                    // Capturar el contenido y agregarlo al PDF
                    html2canvas(element, options).then((canvas) => {
                        const imgData = canvas.toDataURL('image/png', 1.0);

                        const ratio = pdf.internal.pageSize.getHeight() / canvas.height;
                        const imgWidth = canvas.width * ratio;
                        const imgHeight = pdf.internal.pageSize.getHeight();

                        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);

                        pdf.save(filename);
                    });
                },

            handleFilterClick(filter1) {
                this.toggleFilter1(filter1);
                this.executeAdditionalFunction(filter1);
            },

            toggleFilter1(filter1) {
                if (this.selectedFilter1 === filter1) {
                    this.selectedFilter1 = null; 
                } else {
                    this.selectedFilter1 = filter1;
                }
            },
            isSelected1(filter1) {
                return this.selectedFilter1 === filter1;
            },
            clearFilters1() {
                 this.selectedFilter1 = null; // Limpiar filtro seleccionado
            },
            executeAdditionalFunction(filter1) {
                this.nombreCursoSeleccionado=filter1
                if(filter1==='Competencia Comunicativa'){
                    this.idCurso='GPDG102'
                }else if(filter1==='Fundamentos Programación'){
                    this.idCurso='HEDE102'
                }else if(filter1==='Introducción Ingeniería'){
                    this.idCurso='HEDE101'
                }else if(filter1==='Matemática I'){
                    this.idCurso='HEDE103'
                }else if(filter1==='Pensamiento Lógico'){
                    this.idCurso='GPDG101'
                }else if(filter1==='Tutoría I'){
                    this.idCurso='VPDG101'
                }

                this.cargarDatos();
            },
            handleFilterClick1(filter2) {
                this.toggleFilter2(filter2);
                this.executeAdditionalFunction1(filter2);
            },
            toggleFilter2(filter2) {
                if (this.selectedFilter2 === filter2) {
                    this.selectedFilter2 = null; 
                } else {
                    this.selectedFilter2 = filter2;
                }
            },
            isSelected2(filter2) {
                return this.selectedFilters2=== filter2;
            },
            clearFilters2() {
                this.selectedFilter2 = null;
            },
            executeAdditionalFunction1(filter2) {
                if(filter2==='2009-2012'){
                    this.añoInicial= 2009;
                    this.añoFinal=2012;
                }else if(filter2==='2011-2014'){
                    this.añoInicial= 2011;
                    this.añoFinal=2014;
                }else if(filter2==='2013-2016'){
                    this.añoInicial= 2013;
                    this.añoFinal=2016;
                }else if(filter2==='2015-2018'){
                    this.añoInicial= 2015;
                    this.añoFinal=2018;
                }else if(filter2==='2017-2020'){
                    this.añoInicial= 2017;
                    this.añoFinal=2020;
                }else if(filter2==='2019-2022'){
                    this.añoInicial= 2019;
                    this.añoFinal=2022;
                }else if(filter2==='2021-2024'){
                    this.añoInicial= 2021;
                    this.añoFinal=2024;
                }
                this.resumenCursos();
            },
        },
        computed:{

        }
    }
</script>

<style src='../../views/ReportePersonalizado/reportePersonalizado.css'></style>