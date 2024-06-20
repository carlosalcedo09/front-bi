import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import ChatBot1View from "../ChatBot1/ChatBot1View.vue";
import ChatBot2View from "../ChatBot2/ChatBot2View.vue";
import axios from "axios";
export default {
  name: "ReporteGeneralView",
  components: {
    ChatBot1View,
    ChatBot2View,
  },
  data() {
    return {
      totalEstudiantes: "",
      estudiantes: [],
      estudiantesPorGenero: [],
      promedios:[],
      masculino: "",
      femenino: "",
      notaPromedio: "",
      promedioClasificadasS: "",
      promedioClasificadasR: "",
      cursosPonderados: [],
      porcentajesNotas18: [],
      porcentajesNotas14: [],
      estudiantesEstados: [],
      estudiantesTurnos: [],
      estudiantesDistritos: [],
      estudiantesConoNorte: "",
      notasCursos: [],
      detalleGenero: [],
      estudiantesCategorias: [],
      porcentajeS: "",
      porcentajeC: "",
      porcentajeV: "",
      porcentajeM: "",
      porcentajeT: "",
      porcentajeN: "",
      porcentajeFemenino: "",
      porcentajeMasculino: "",
      cursos: [
        "C. Comunicativa",
        "F. Programación",
        "I. Sistemas",
        "Matemática I",
        "P. Lógico",
        "Tutoría I",
      ],
      containers1: [
        { message: '' },
        { message: '' },
        { message: '' },
        { message: '' },
        { message: '' },
        { message: ''},
        { message: '' },
        { message: '' },
        { message: '' },
        { message: '' },
        { message: '' },],
      containers2: [
        { message: "Mensaje del chatbot para el Contenedor 9" },
        { message: "Mensaje del chatbot para el Contenedor 10" },
        { message: "Mensaje del chatbot para el Contenedor 11" },
        { message: "Mensaje del chatbot para el Contenedor 12" },
      ],
      currentMessage1: null,
      messageVisible1: false,
      currentMessage2: null,
      messageVisible2: false,
      promedioPonderado: [],
      respuesta1: '',
      respuesta2: '',
      respuesta3: '',
      respuesta4: '',
      respuesta5:'',
      respuesta6:'',
      respuesta7: '',
      respuesta8: '',
      respuesta9: '',
      respuesta10:'',
      respuesta11: '',
      respuesta12: '',
      respuesta13:'',
      respuesta14:'',
      respuesta15:'',
      arreglo:[],
    };
  },
  created() {
    this.CargarDatosEstudiantes();
    this.sendMessage();
  },
  mounted() {},
  methods: {
    irmenu() {
      this.$router.push("/Menu");
    },
    async CargarDatosEstudiantes() {
      try {
        const responseTotal = await this.$axios.get(
          "/estudiantes/cantidadTotal"
        ); //Total estudiantes
        this.totalEstudiantes = responseTotal.data.Total;
        this.estudiantes = responseTotal.data;
        const responsePromedio = await this.$axios.get(
          "/desempeno/notaPromedio"
        ); //Promedio general
        this.notaPromedio = responsePromedio.data.promedio;
        this.promedioPonderado= responsePromedio.data;
      

        //promedios
        const responsePromedioClas = await this.$axios.get(
          "/estudiantes/clasificacionPromedio"
        ); 
        this.promedioClasificadasS =responsePromedioClas.data.promedioSatisfactorio;
        this.promedioClasificadasR = responsePromedioClas.data.promedioRegular;
        this.promedios= responsePromedioClas.data;
       


        //Cursos
        const responseCursos = await this.$axios.get(
          "/desempeno/cursosPromedio"
        ); //Cursos menor promedio
        this.cursosPonderados = responseCursos.data;

        const responsePorcentaje14 = await this.$axios.get(
          "/desempeno/notasMenores14"
        );
        this.porcentajesNotas14 = responsePorcentaje14.data;

        const responsePorcentaje18 = await this.$axios.get(
          "/desempeno/notasMayores18"
        );
        this.porcentajesNotas18 = responsePorcentaje18.data;

        const responseEstado = await this.$axios.get(
          "/estudiantes/estudiantesEstado"
        );
        this.estudiantesEstados = responseEstado.data;
        
        
        const responseTurno = await this.$axios.get(
          "/desempeno/estudiantesTurno"
        );
        this.estudiantesTurnos = responseTurno.data;
       
        this.calcularPorcentajeTurno();
        

        const responseDistritos = await this.$axios.get(
          "/estudiantes/estudiantesDistritos"
        );
        this.estudiantesDistritos = responseDistritos.data;
        

        const responseConoNorte = await this.$axios.get(
          "/estudiantes/totalConoNorte"
        );
        this.estudiantesConoNorte = responseConoNorte.data.total_estudiantes;

        const responseDetalleGenero = await this.$axios.get(
          "/desempeno/detalleGenero"
        );
        this.detalleGenero = responseDetalleGenero.data;
       
        this.porcentajeGenero();

        const responseGenero = await this.$axios.get(
          "/estudiantes/cantidadPorGenero"
        ); 
        this.estudiantesPorGenero = responseGenero.data;
        
      
        const responseNotaCursos = await this.$axios.get(
          "/desempeno/cantidadNotasCurso"
        );
        this.notasCursos = responseNotaCursos.data;
       

        /*const responseEstudianteCategoria= await this.$axios.get('/desempeno/estudiantesCategoria')
                this.estudiantesCategorias= responseEstudianteCategoria.data;*/
        // Asignar los valores de género a las propiedades correspondientes
        const femeninoObj = this.estudiantesPorGenero.find(
          (item) => item.Genero === "Femenino"
        );
        const masculinoObj = this.estudiantesPorGenero.find(
          (item) => item.Genero === "Masculino"
        );
        this.femenino = femeninoObj ? femeninoObj.cantidad : 0;
        this.masculino = masculinoObj ? masculinoObj.cantidad : 0;

        this.loading = false;
      } catch (error) {
        console.error("Error al obtener datos de estudiantes:", error);
      }
    },

    

    
    llenandoRespuestas(){
      this.containers1 = [
        { message: this.respuesta1 },
        { message: this.respuesta2 },
        { message: this.respuesta3 },
        { message: this.respuesta4 },
        { message: this.respuesta5 },
        { message: this.respuesta6},
        { message: this.respuesta7 },
        { message: this.respuesta8 },
        { message: this.respuesta13 },
        { message: this.respuesta14 },
        { message: this.respuesta15 },
      ]
      console.log(this.containers1);
    },
    print(){
      console.log(this.respuesta4)
    },

    calcularPorcentaje() {
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
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    },
    calcularPorcentajeTurno() {
      const cantidadTurnoManana = (
        this.estudiantesTurnos.find((turno) => turno.Turno === "Mañana") || {
          cantidadEstudiantes: 0,
        }
      ).cantidadEstudiantes;
      const cantidadTurnoTarde = (
        this.estudiantesTurnos.find((turno) => turno.Turno === "Tarde") || {
          cantidadEstudiantes: 0,
        }
      ).cantidadEstudiantes;
      const cantidadTurnoNoche = (
        this.estudiantesTurnos.find((turno) => turno.Turno === "Noche") || {
          cantidadEstudiantes: 0,
        }
      ).cantidadEstudiantes;

      this.porcentajeM = ((cantidadTurnoManana / 1024) * 100).toFixed(2);
      this.porcentajeT = ((cantidadTurnoTarde / 1024) * 100).toFixed(2);
      this.porcentajeN = ((cantidadTurnoNoche / 1024) * 100).toFixed(2);
    },
    porcentajeGenero() {
      const cantidadFemenino = (
        this.detalleGenero.find((genero) => genero.Genero === "Femenino") || {
          Total: 0,
        }
      ).Total;
      const cantidadMasculino = (
        this.detalleGenero.find((genero) => genero.Genero === "Masculino") || {
          Total: 0,
        }
      ).Total;
      const cantidadF = (
        this.detalleGenero.find((genero) => genero.Genero === "Femenino") || {
          cantidad_con_promedio_mayor_a_16: 0,
        }
      ).cantidad_con_promedio_mayor_a_16;
      const cantidadM = (
        this.detalleGenero.find((genero) => genero.Genero === "Masculino") || {
          cantidad_con_promedio_mayor_a_16: 0,
        }
      ).cantidad_con_promedio_mayor_a_16;

      this.porcentajeFemenino = ((cantidadF / cantidadFemenino) * 100).toFixed(
        2
      );
      this.porcentajeMasculino = (
        (cantidadM / cantidadMasculino) *
        100
      ).toFixed(2);
    },
    descargarPDF() {
      const filename = "dashboardInformativo.pdf";
      const element = document.querySelector(".reporteGeneral");
      const options = {
        scale: 3,
        useCORS: true,
        logging: true,
      };

      const pdf = new jsPDF("l", "px", [
        element.offsetWidth,
        element.offsetHeight,
      ]);
      // Título en mayúsculas y negrita
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(60);
      pdf.text("REPORTE GENERAL", pdf.internal.pageSize.getWidth() / 2, 230, {
        align: "center",
      });

      // Restablecemos la fuente a normal para el resto del texto
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(30);

      // Fecha y hora actual
      const fechaHora = new Date().toLocaleString();
      pdf.text(
        `Fecha y hora: ${fechaHora}`,
        pdf.internal.pageSize.getWidth() / 2,
        300,
        {
          align: "center",
        }
      );

      // Descripcion
      pdf.text(
        `Documento generado por personal Administrativo `,
        pdf.internal.pageSize.getWidth() / 2,
        330,
        {
          align: "center",
        }
      );

      // Descripcion
      pdf.text(
        `El presente documento resumen los datos analizados, cabe presicar que para una mejor visualización utilizar el panel administrativo del sistema `,
        pdf.internal.pageSize.getWidth() / 2,
        360,
        {
          align: "center",
        }
      );

      // Añadir nueva página para el contenido capturado
      pdf.addPage();

      // Capturar el contenido y agregarlo al PDF
      html2canvas(element, options).then((canvas) => {
        const imgData = canvas.toDataURL("image/png", 1.0);

        const ratio = pdf.internal.pageSize.getHeight() / canvas.height;
        const imgWidth = canvas.width * ratio;
        const imgHeight = pdf.internal.pageSize.getHeight();

        pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);

        pdf.save(filename);
      });
    },
    showMessage(index, chatbot) {
      if (chatbot === "chatbot1") {
        this.currentMessage1 = index;
        this.messageVisible1 = true;
      } else if (chatbot === "chatbot2") {
        this.currentMessage2 = index;
        this.messageVisible2 = true;
      }
    },

    hideMessage(chatbot) {
      if (chatbot === "chatbot1") {
        this.messageVisible1 = false;
      } else if (chatbot === "chatbot2") {
        this.messageVisible2 = false;
      }
    },
    async sendMessage() {
      this.arreglo= this.estudiantes;
      if (!Array.isArray(this.arreglo)) {
        try {
          let jsonData = JSON.stringify(this.arreglo);
          const res = await axios.post("http://localhost:5000/chatbot", {
            message: jsonData,
          });
          this.respuesta4=res.data.response;
          return res.data.response;
        } catch (error) {
          console.error(error);
        }
      }else {
        let data = this.arreglo.map((item) => ({ ...item }));
        let jsonData = JSON.stringify(data);
        try {
            const res = await axios.post("http://localhost:5000/chatbot", {
            message: jsonData,
            });
            this.respuesta4=res.data.response;
            return res.data.response;
        } catch (error) {
            console.error(error);
        }
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
      return "color1";
    },
    color2() {
      return "color2";
    },
    color3() {
      return "color3";
    },
  },
};
