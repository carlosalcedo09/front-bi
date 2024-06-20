    
    import jsPDF from 'jspdf';
    import html2canvas from 'html2canvas';
    import ChatBot1View from '../ChatBot1/ChatBot1View.vue';
    import ChatBot2View from '../ChatBot2/ChatBot2View.vue';
    export default {
        name: 'ReportePersonalizadoView',
        components: {
            ChatBot1View,
            ChatBot2View,
        },
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
                containers1: [
                    {message: 'Mensaje del chatbot para el Contenedor 1' },
                    {message: 'Mensaje del chatbot para el Contenedor 2' },
                    {message: 'Mensaje del chatbot para el Contenedor 3' },
                    {message: 'Mensaje del chatbot para el Contenedor 9' },
                    {message: 'Mensaje del chatbot para el Contenedor 10' },
                    {message: 'Mensaje del chatbot para el Contenedor 11' },
                ],
                containers2: [
                    {message: 'Mensaje del chatbot para el Contenedor 4' },
                    {message: 'Mensaje del chatbot para el Contenedor 5' },
                    {message: 'Mensaje del chatbot para el Contenedor 6' },
                    {message: 'Mensaje del chatbot para el Contenedor 7' },
                    {message: 'Mensaje del chatbot para el Contenedor 8' },
                ],
                currentMessage1: null,
                messageVisible1: false,
                currentMessage2: null,
                messageVisible2: false,
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
            showMessage(index, chatbot) {
                if (chatbot === 'chatbot1') {
                    this.currentMessage1 = index;
                    this.messageVisible1 = true;
                } else if (chatbot === 'chatbot2') {
                    this.currentMessage2 = index;
                    this.messageVisible2 = true;
                }
            },
            hideMessage(chatbot) {
                if (chatbot === 'chatbot1') {
                    this.messageVisible1 = false;
                } else if (chatbot === 'chatbot2') {
                    this.messageVisible2 = false;
                }
            },
        },
        computed:{

        }
    }