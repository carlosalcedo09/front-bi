   
    import jsPDF from 'jspdf';
    import html2canvas from 'html2canvas';
    import ChatBot1View from '../ChatBot1/ChatBot1View.vue';
    import ChatBot2View from '../ChatBot2/ChatBot2View.vue';
    export default {
        name: 'ReporteGeneralView',
        components: {
            ChatBot1View,
            ChatBot2View,
        },
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
                estudiantesCategorias: '',
                porcentajeS: '',
                porcentajeC: '',
                porcentajeV: '',
                porcentajeM: '',
                porcentajeT: '',
                porcentajeN: '',
                porcentajeFemenino: '',
                porcentajeMasculino: '',
                cursos: ['C. Comunicativa', 'F. Programación', 'I. Sistemas','Matemática I','P. Lógico','Tutoría I'],
                containers1: [
                    {message: 'Mensaje del chatbot para el Contenedor 1' },
                    {message: 'Mensaje del chatbot para el Contenedor 2' },
                    {message: 'Mensaje del chatbot para el Contenedor 3' },
                    {message: 'Mensaje del chatbot para el Contenedor 4' },
                    {message: 'Mensaje del chatbot para el Contenedor 5' },
                    {message: 'Mensaje del chatbot para el Contenedor 6' },
                    {message: 'Mensaje del chatbot para el Contenedor 7' },
                    {message: 'Mensaje del chatbot para el Contenedor 8' },
                ],
                containers2: [
                    {message: 'Mensaje del chatbot para el Contenedor 9' },
                    {message: 'Mensaje del chatbot para el Contenedor 10' },
                    {message: 'Mensaje del chatbot para el Contenedor 11' },
                    {message: 'Mensaje del chatbot para el Contenedor 12' },
                ],
                currentMessage1: null,
                messageVisible1: false,
                currentMessage2: null,
                messageVisible2: false,
            }
        },
        created(){
            this.CargarDatosEstudiantes();
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
                
                const responseEstudianteCategoria= await this.$axios.get('/desempeno/estudiantesCategoria')
                this.estudiantesCategorias= responseEstudianteCategoria.data;
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
            },
            descargarPDF() {
                const filename = 'dashboardInformativo.pdf';
                const element = document.querySelector('.reporteGeneral');
                const options = {
                scale: 3,
                useCORS: true,
                logging: true,
                };

                const pdf = new jsPDF('l', 'px', [element.offsetWidth, element.offsetHeight]);
            // Título en mayúsculas y negrita
            pdf.setFont('helvetica', 'bold');
                    pdf.setFontSize(60);
                    pdf.text('REPORTE GENERAL', pdf.internal.pageSize.getWidth() / 2, 230, {
                    align: 'center'
                    });

                    // Restablecemos la fuente a normal para el resto del texto
                    pdf.setFont('helvetica', 'normal');
                    pdf.setFontSize(30);

                    // Fecha y hora actual
                    const fechaHora = new Date().toLocaleString();
                    pdf.text(`Fecha y hora: ${fechaHora}`, pdf.internal.pageSize.getWidth() / 2,300, {
                    align: 'center'
                    });

                    // Descripcion
                    pdf.text(`Documento generado por personal Administrativo `, pdf.internal.pageSize.getWidth() / 2, 330, {
                    align: 'center'
                    });

                    // Descripcion
                    pdf.text(`El presente documento resumen los datos analizados, cabe presicar que para una mejor visualización utilizar el panel administrativo del sistema `, pdf.internal.pageSize.getWidth() / 2, 360, {
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