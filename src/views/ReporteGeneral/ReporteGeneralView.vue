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
                                <v-icon left class="icongeneroF">mdi-gender-female</v-icon>{{ femenino}}
                            </v-container>
                            <v-container class="btn-generoM">
                                <v-icon left class="icongeneroM">mdi mdi-gender-male</v-icon>{{ masculino }}
                            </v-container>
                        </v-container>

                    </v-container>

                    <v-container class="dataedad">
                        <v-container class="subtituloe1">
                            <p class="t1">Nota Promedio</p>
                            <p class="t2">Del Estudiante (0-20)</p>
                        </v-container>
                        <v-container class="subtituloe2">
                            <p class="e2">{{ notaPromedio }}</p>
                        </v-container>
                    </v-container>

                    <v-container class="infoizq1">
                        <v-container class="izqarriba">
                            <v-container class="izqizquierda">
                                <p class="p1">Promedios</p>
                                <p class="p2">Ponderados Satisfactorios</p>
                            </v-container>
                            <v-container class="izqderecha">
                                <v-icon right>mdi-check</v-icon>
                            </v-container>
                        </v-container>
                        <v-container class="izqabajo">
                            <v-container class="izqizquierda">
                                <p class="p3">{{ promedioClasificadasS }}</p>
                                <p class="p4">Estudiantes</p>
                            </v-container>
                            <v-container class="izqderecha">
                                <v-icon right class="iconopersona">mdi-account-group</v-icon>
                            </v-container>
                        </v-container>
                    </v-container>

                    <v-container class="infoizq2">
                        <v-container class="izqarriba">
                            <v-container class="izqizquierda">
                                <p class="p1">Promedios</p>
                                <p class="p2">Ponderados regulares</p>
                            </v-container>
                            <v-container class="izqderecha">
                                <v-icon right>mdi-check</v-icon>
                            </v-container>
                        </v-container>
                        <v-container class="izqabajo">
                            <v-container class="izqizquierda">
                                <p class="p3">{{ promedioClasificadasR }}</p>
                                <p class="p4">Estudiantes</p>
                            </v-container>
                            <v-container class="izqderecha">
                                <v-icon right class="iconopersona">mdi-account-group</v-icon>
                            </v-container>
                        </v-container>
                    </v-container>

                    <v-container class="infoizq3">
                        <v-container class="izqarriba">
                            <v-container class="izqizquierda">
                                <p>Cursos con menor</p>
                                <p class="p5">Promedio</p>
                            </v-container>
                            <v-container class="izqderecha">
                                <v-icon right>mdi-star-outline</v-icon>
                            </v-container>
                        </v-container>
                        <v-container class="izqabajo1">
                            <v-container class="izqizquierda">
                                <p class="p6" v-for="(cursosPonderado, index) in cursosPonderados" :key="index">{{ capitalizeFirstLetter(cursosPonderado.curso_NombreCurso) }}</p>
                            </v-container>
                            <v-container class="izqderecha1">
                                <p class="p7" v-for="(cursosPonderado, index) in cursosPonderados" :key="index">{{ cursosPonderado.promedio }}</p>
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
                                        <p class="p8">Dashboard - Análisis de desempeño</p>
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
                                        <p class="p10">{{ totalEstudiantes }}</p>
                                        <p class="p11">Estudiantes Totales</p>
                                    </v-container>
                                </v-container>
                                <v-container class="infoizq4">
                                    <v-container class="izquierda-4">
                                        <v-progress-circular
                                        :model-value="porcentajesNotas14.porcentaje"
                                        :rotate="360"
                                        :size="110"
                                        :width="14"
                                        color="#DD0919">
                                        <p class="porc">{{ porcentajesNotas14.porcentaje }}%</p>
                                        </v-progress-circular>
                                    </v-container>
                                    <v-container class="derecha-4">
                                        <p class="p12">Tasa de Riesgo </p>
                                        <p class="p13">Notas no satisfactorias</p>
                                        <p class="p14">{{ porcentajesNotas14.cantidad  }}</p>
                                    </v-container>
                                </v-container>
                                <v-container class="infoizq4">
                                    <v-container class="izquierda-4">
                                        <v-progress-circular
                                        :model-value=" porcentajesNotas18.porcentaje"
                                        :rotate="360"
                                        :size="110"
                                        :width="14"
                                        color="#002854">
                                        <p class="porc">{{ porcentajesNotas18.porcentaje }}%</p>
                                        </v-progress-circular>
                                    </v-container>
                                    <v-container class="derecha-4">
                                        <p class="p12">Tasa de Beneficio</p>
                                        <p class="p13">Notas satisfactorias</p>
                                        <p class="p14"> {{ porcentajesNotas18.cantidad }}</p>
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
                                        <p class="l1">Cantidad de Estudiantes</p>
                                        <p class="l2">Por Distrito de Residencia</p>
                                    </v-container>
                                    <v-container class="caja1der">
                                        <v-icon right>mdi-check</v-icon>
                                    </v-container>
                                </v-container>
                                <v-container class="caja1abajo">
                                    <v-container class="casa1abiz">
                                        <p v-for="(distrito, index) in estudiantesDistritos" :key="index" class="l3">{{ distrito.descripcionD }}</p>
                                    </v-container>
                                    <v-container class="casa1abder">
                                        <p v-for="(distrito, index) in estudiantesDistritos" :key="index" class="l4">{{ distrito.cantidad }}</p>
                                    </v-container>
                                </v-container>
                                <v-container class="caja1abajo1">
                                    <v-container class="abajo1izq">
                                        <p class="l5">Total de estudiantes</p>
                                        <p class="l6">que residen en en Cono Norte</p>
                                    </v-container>
                                    <v-container class="abajo1der">
                                        <p class="l7">{{ estudiantesConoNorte }}</p>
                                    </v-container>
                                </v-container>
                            </v-container>
                        </v-container>
                        <v-container class="columna2">
                            <v-container class="caja2">
                                <v-container class="izqarriba">
                                    <v-container class="caja1izq">
                                        <p class="l1">Notas no satisfactorias</p>
                                        <p class="l2">Por Género</p>
                                    </v-container>
                                    <v-container class="caja1der">
                                        <v-icon right>mdi-star-outline</v-icon>
                                    </v-container>
                                </v-container>
                                <v-container class="barra_1">
                                    <p class="b1">Cantidad de notas Femeninos</p>
                                    <v-container class="barra">
                                        <v-progress-linear
                                            v-model="porcentajeFemenino"
                                            color="#DD0919"
                                            height="25">
                                        </v-progress-linear>
                                        <p class="b2">{{ porcentajeFemenino }}%</p>
                                    </v-container>
                                </v-container>
                                <v-container class="barra_2">
                                    <p class="b4">Cantidad de notas Masculinas</p>
                                    <v-container class="barra">
                                        <v-progress-linear
                                            v-model="porcentajeMasculino"
                                            color="#002854"
                                            height="25">
                                        </v-progress-linear>
                                        <p class="b3">{{ porcentajeMasculino }}%</p>
                                    </v-container>
                                </v-container>
                            </v-container>
                            <v-container class="caja3">
                                <v-container class="izqarriba">
                                    <v-container class="caja1izq">
                                        <p class="l1">Nivel de estudiantes</p>
                                        <p class="l2">Por turno </p>
                                    </v-container>
                                    <v-container class="caja1der">
                                        <v-icon right>mdi-check</v-icon>
                                    </v-container>
                                </v-container>
                                <v-container class="cont_1">
                                    <v-container class="cont_2">
                                        <v-container class="c2_1">
                                           <p  v-for="(estudiante, index) in estudiantesTurnos" :key="index" :class="'l' + (8 + index)">{{ estudiante.cantidadEstudiantes }}</p>
                                        </v-container>
                                        <v-container class="c2_2">
                                          <p class="l11" v-for="(estudiante, index) in estudiantesTurnos" :key="index">{{ estudiante.Turno }}</p>
                                        </v-container>
                                    </v-container>
                                    <v-container class="grafica3">
                                        <v-progress-circular
                                        :model-value="porcentajeN"
                                        :rotate="180"
                                        :size="150"
                                        :width="16"
                                        color="#DD0919"
                                        class="gc1"
                                        >
                                            <v-progress-circular
                                            :model-value="porcentajeT"
                                            :rotate="180"
                                            :size="110"
                                            :width="16"
                                            color="#7e7e7e"
                                            class="gc2"
                                            >
                                                <v-progress-circular
                                                :model-value="porcentajeM"
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
                                        <p class="l1">Consolidados Notas  </p>
                                        <p class="l2">Por  Asignatura</p>
                                    </v-container>
                                    <v-container class="caja1der_1">
                                        <p class="genF">Satistactorios</p>
                                        <p class="genM">No Satisfactorias</p>
                                        <v-icon right>mdi-star-outline</v-icon>
                                    </v-container>
                                </v-container>
                                <v-container class="cont_a">
                                    <v-container v-for="(curso, index) in notasCursos" :key="index" class="cont_2 j">
                                        <v-container class="cont_2 c">
                                        <p>{{ curso.NotasMenor14 }}</p>
                                        </v-container>
                                        <v-container class="cont_2 c">
                                        <p>{{ curso.NotasMayor16 }}</p>
                                        </v-container>
                                    </v-container>
                                </v-container>
                                <v-container class="grlive">
                                    <v-container v-for="(curso, index) in notasCursos" :key="'porcentaje' + index">
                                        <v-progress-linear
                                        v-model="curso.PorcentajeNotasMenor14"
                                        color="#DD0919"
                                        height="20"
                                        class="vertical-progress1"
                                        ></v-progress-linear>
                                        <v-progress-linear
                                        v-model="curso.PorcentajeNotasMayor16"
                                        color="#002854"
                                        height="20"
                                        class="vertical-progress2"
                                        ></v-progress-linear>
                                    </v-container>
                                </v-container>
                                <v-container  v-for="(curso, index) in notasCursos" :key="index" class="cont_2">
                                    <v-container class="cont_2 h">
                                        <p>{{ curso.NombreCurso }}</p>
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
                                        <v-container class="p0">
                                            <v-container class="barra3">
                                                <v-progress-linear
                                                    v-model="porcentaje11"
                                                    color="#DD0919"
                                                    height="10">
                                                </v-progress-linear>
                                                <p class="c2">108</p>
                                            </v-container>
                                            <v-container class="barra2">
                                                <v-progress-linear
                                                    v-model="porcentaje12"
                                                    color="#DD0919"
                                                    height="10">
                                                </v-progress-linear>
                                                <p class="c2">352</p>
                                            </v-container>
                                            <v-container class="barra2">
                                                <v-progress-linear
                                                    v-model="porcentaje13"
                                                    color="#DD0919"
                                                    height="10">
                                                </v-progress-linear>
                                                <p class="c2">405</p>
                                            </v-container>
                                            <v-container class="barra2">
                                                <v-progress-linear
                                                    v-model="porcentaje14"
                                                    color="#DD0919"
                                                    height="10">
                                                </v-progress-linear>
                                                <p class="c2">471</p>
                                            </v-container>
                                            <v-container class="barra2">
                                                <v-progress-linear
                                                    v-model="porcentaje15"
                                                    color="#DD0919"
                                                    height="10">
                                                </v-progress-linear>
                                                <p class="c2">662</p>
                                            </v-container>
                                            <v-container class="barra2">
                                                <v-progress-linear
                                                    v-model="porcentaje16"
                                                    color="#DD0919"
                                                    height="10">
                                                </v-progress-linear>
                                                <p class="c2">742</p>
                                            </v-container>
                                            <v-container class="barra2">
                                                <v-progress-linear
                                                    v-model="porcentaje17"
                                                    color="#DD0919"
                                                    height="10">
                                                </v-progress-linear>
                                                <p class="c2">744</p>
                                            </v-container>
                                        </v-container>
                                    </v-container>
                                </v-container>
                                <v-container class="caja7">
                                    <v-container class="izqarriba">
                                        <v-container class="caja1izq">
                                            <p class="l1">Relación Total</p>
                                            <p class="l2">{{ estudiantesEstados.Total }}</p>
                                        </v-container>
                                        <v-container class="caja1der">
                                            <v-icon right>mdi-check</v-icon>
                                        </v-container>
                                    </v-container>
                                    <v-container class="cont_2">
                                        <v-container class="cont_3">
                                            <p class="l8">Solteros</p>
                                            <p class="l12">{{ estudiantesEstados.solteros }}</p>
                                            <p class="l9">Casados</p>
                                            <p class="l12">{{ estudiantesEstados.casados }}</p>
                                            <p class="l10">Viudos</p>
                                            <p class="l12">{{ estudiantesEstados.viudos }}</p>
                                        </v-container>
                                        <v-container class="cont_4">
                                            <svg viewBox="0 0 36 36" class="circular-chart">
                                                <path class="circle-bg" 
                                                    d="M18 2.0845
                                                    a 15.9155 15.9155 0 1 1 0 31.831
                                                    a 15.9155 15.9155 0 1 1 0 -31.831"/>
                                                    <path class="color1" 
                                                stroke-width="4"
                                                :stroke-dasharray="dashArray1"
                                                fill="none"
                                                d="M18 2.0845
                                                a 15.9155 15.9155 0 1 1 0 31.831
                                                a 15.9155 15.9155 0 1 1 0 -31.831"/>
                                                <path class="color2" 
                                                    stroke-width="4"
                                                    :stroke-dasharray="dashArray2"
                                                    fill="none"
                                                    :stroke-dashoffset="`-${porcentajeS}`"
                                                    d="M18 2.0845
                                                    a 15.9155 15.9155 0 1 1 0 31.831
                                                    a 15.9155 15.9155 0 1 1 0 -31.831"/>
                                                <path class="color3" 
                                                    stroke-width="4"
                                                    :stroke-dasharray="dashArray3"
                                                    fill="none"
                                                    :stroke-dashoffset="`-${porcentajeS + porcentajeC}`"
                                                    d="M18 2.0845
                                                    a 15.9155 15.9155 0 1 1 0 31.831
                                                    a 15.9155 15.9155 0 1 1 0 -31.831"/>
                                                <text x="18" y="16" text-anchor="middle" dy=".3em" class="texto1">
                                                    Estudiantes
                                                </text>
                                                <text x="18" y="21" text-anchor="middle" dy=".3em" class="texto2">
                                                    Por estado civil
                                                </text>
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
                totalEstudiantes: '',
                estudiantesPorGenero: '',
                masculino:'',
                femenino:'',
                notaPromedio:'',
                promedioClasificadasS:'',
                promedioClasificadasR:'',
                cursosPonderados: '',
                porcentajesNotas18: '',
                porcentajesNotas14:'',
                estudiantesEstados:'',
                estudiantesTurnos:'',
                estudiantesDistritos:'',
                estudiantesConoNorte:'',
                notasCursos: '',
                detalleGenero: '',
                porcentajeS: '',
                porcentajeC: '',
                porcentajeV: '',
                porcentajeM: '',
                porcentajeT: '',
                porcentajeN: '',
                porcentajeFemenino: '',
                porcentajeMasculino: '',
                porcentaje5: 84,
                porcentaje6: 37,
                porcentaje7: 84,
                porcentaje11: 84,
                porcentaje12: 12,
                porcentaje13: 37,
                porcentaje14: 69,
                porcentaje15: 30,
                porcentaje16: 20,
                porcentaje17: 50,
                porcentaje18: 38,
                porcentaje19: 84,
                porcentaje20: 62,
                porcentaje21: 37,
                porcentaje22: 69,
                porcentaje23: 30,
                porcentaje24: 78,
                porcentaje25: 89,
                porcentaje26: 20,
                porcentaje27: 47,
            }
        },
        created(){
            this.CargarDatosEstudiantes()
        },
        mounted() {

        },
        methods:{
            irmenu(){
                this.$router.push("/Menu");
            },
            async CargarDatosEstudiantes() {
                try {
                const responseTotal = await this.$axios.get('/estudiantes/cantidadTotal'); //Total estudiantes
                this.totalEstudiantes = responseTotal.data.Total;
                
                const responseGenero = await this.$axios.get('/estudiantes/cantidadPorGenero'); //Distribución por género
                this.estudiantesPorGenero = responseGenero.data;

                const responsePromedio = await this.$axios.get('/desempeno/notaPromedio'); //Promedio general
                this.notaPromedio= responsePromedio.data.promedio;

                const responsePromedioClas= await this.$axios.get('/estudiantes/clasificacionPromedio');  //Promedio por rangos
                this.promedioClasificadasS= responsePromedioClas.data.promedioSatisfactorio;
                this.promedioClasificadasR= responsePromedioClas.data.promedioRegular;

                const responseCursos= await this.$axios.get('/desempeno/cursosPromedio');   //Cursos menor promedio
                this.cursosPonderados= responseCursos.data;

                const responsePorcentaje14= await this.$axios.get('/desempeno/notasMenores14');
                this.porcentajesNotas14= responsePorcentaje14.data;

                const responsePorcentaje18= await this.$axios.get('/desempeno/notasMayores18');
                this.porcentajesNotas18= responsePorcentaje18.data;

                const responseEstado= await this.$axios.get('/estudiantes/estudiantesEstado');
                this.estudiantesEstados= responseEstado.data; 
                this.calcularPorcentaje();

                const responseTurno = await this.$axios.get('/desempeno/estudiantesTurno');
                this.estudiantesTurnos= responseTurno.data;
                this.calcularPorcentajeTurno();

                const responseDistritos=  await this.$axios.get('/estudiantes/estudiantesDistritos')
                this.estudiantesDistritos= responseDistritos.data;

                const responseConoNorte= await this.$axios.get('/estudiantes/totalConoNorte')
                this.estudiantesConoNorte= responseConoNorte.data.total_estudiantes;
                
                const responseNotaCursos= await this.$axios.get('/desempeno/cantidadNotasCurso')
                this.notasCursos= responseNotaCursos.data;
                console.log(this.notasCursos)

                const responseDetalleGenero= await this.$axios.get('/desempeno/detalleGenero')
                this.detalleGenero= responseDetalleGenero.data;
                this.porcentajeGenero();

                // Asignar los valores de género a las propiedades correspondientes
                const femeninoObj = this.estudiantesPorGenero.find(item => item.Genero === 'Femenino');
                const masculinoObj = this.estudiantesPorGenero.find(item => item.Genero === 'Masculino');

                this.femenino = femeninoObj ? femeninoObj.cantidad : 0;
                this.masculino = masculinoObj ? masculinoObj.cantidad : 0
                this.loading = false;
                } catch (error) {
                console.error('Error al obtener datos de estudiantes:', error);
                }              
            },

            calcularPorcentaje(){
                const { Total, solteros, casados, viudos } = this.estudiantesEstados;
                    if (Total > 0) {
                    this.porcentajeS = ((solteros / Total) * 100).toFixed(2);
                    this.porcentajeC = ((casados / Total) * 100).toFixed(2);
                    this.porcentajeV = ((viudos / Total) * 100).toFixed(2);
                    } else {
                    this.porcentajeS = 0;
                    this.porcentajeC = 0;
                    this.porcentajeV = 0;
                    }
            },
            capitalizeFirstLetter(string) {
                return string
                      .toLowerCase()
                      .split(' ')
                      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                      .join(' ');
            },
            calcularPorcentajeTurno(){
                const cantidadTurnoManana = (this.estudiantesTurnos.find(turno => turno.Turno === 'Mañana') || { cantidadEstudiantes: 0 }).cantidadEstudiantes
                const cantidadTurnoTarde = (this.estudiantesTurnos.find(turno => turno.Turno === 'Tarde') || { cantidadEstudiantes: 0 }).cantidadEstudiantes
                const cantidadTurnoNoche = (this.estudiantesTurnos.find(turno => turno.Turno === 'Noche') || { cantidadEstudiantes: 0 }).cantidadEstudiantes
              
                this.porcentajeM= ((cantidadTurnoManana/1024)*100).toFixed(2);
                this.porcentajeT=((cantidadTurnoTarde/1024)*100).toFixed(2);
                this.porcentajeN=((cantidadTurnoNoche/1024)*100).toFixed(2);

            },
            porcentajeGenero(){
                const cantidadFemenino= (this.detalleGenero.find(genero=> genero.Genero === 'Femenino')||{Total: 0}).Total;
                const cantidadMasculino= (this.detalleGenero.find(genero=> genero.Genero === 'Masculino')||{Total: 0}).Total;
                const cantidadF= (this.detalleGenero.find(genero=> genero.Genero === 'Femenino')||{cantidad_con_promedio_mayor_a_16: 0}).cantidad_con_promedio_mayor_a_16;
                const cantidadM= (this.detalleGenero.find(genero=> genero.Genero === 'Masculino')||{cantidad_con_promedio_mayor_a_16: 0}).cantidad_con_promedio_mayor_a_16;

                this.porcentajeFemenino= ((cantidadF/cantidadFemenino)*100).toFixed(2);
                this.porcentajeMasculino= ((cantidadM/cantidadMasculino)*100).toFixed(2);
            }
            
        },
        computed: {
            dashArray1() {
                return `${this.porcentajeS}, ${100 - this.porcentajeS}`;
            },
            dashArray2() {
                return `${this.porcentajeC}, ${100 - this.porcentajeC}`;
            },
            dashArray3() {
                return `${this.porcentajeV}, ${100 - this.porcentajeV}`;
            },
            color1() {
                return 'color1';
            },
            color2() {
                return 'color2';
            },
            color3() {
                return 'color3';
            },
        },
    }
</script>

<style src='../../views/ReporteGeneral/reporteGeneral.css'></style>