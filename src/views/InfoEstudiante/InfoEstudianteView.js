export default {
    name: 'InfoEstudianteView',

    data() {
        return {
            selectedCiclo: null,
            ciclos: [
                { id: 1, name: 'Ciclo 1' },
                { id: 2, name: 'Ciclo 2' },
                { id: 3, name: 'Ciclo 3' },
                { id: 4, name: 'Ciclo 4' },
                { id: 5, name: 'Ciclo 5' },
                { id: 6, name: 'Ciclo 6' },
                { id: 7, name: 'Ciclo 7' },
                { id: 8, name: 'Ciclo 8' },
                { id: 9, name: 'Ciclo 9' },
                { id: 10, name: 'Ciclo 10' },
            ],
            selectedCurso: null,
            cursos: [
                { id: 1, name: 'Curso 1' },
                { id: 2, name: 'Curso 2' },
                { id: 3, name: 'Curso 3' }
            ],
            estudiantes: [
                { codigo: '001', nombre: 'Juan Pérez', dni: '12345678', genero: 'Masculino', distrito: 'Lima' },
                { codigo: '002', nombre: 'María Rodríguez', dni: '87654321', genero: 'Femenino', distrito: 'Arequipa' },
                { codigo: '003', nombre: 'Carlos García', dni: '56789012', genero: 'Masculino', distrito: 'Cusco' },
                { codigo: '001', nombre: 'Juan Pérez', dni: '12345678', genero: 'Masculino', distrito: 'Lima' },
                { codigo: '002', nombre: 'María Rodríguez', dni: '87654321', genero: 'Femenino', distrito: 'Arequipa' },
                { codigo: '003', nombre: 'Carlos García', dni: '56789012', genero: 'Masculino', distrito: 'Cusco' },
                { codigo: '001', nombre: 'Juan Pérez', dni: '12345678', genero: 'Masculino', distrito: 'Lima' },
                { codigo: '002', nombre: 'María Rodríguez', dni: '87654321', genero: 'Femenino', distrito: 'Arequipa' },
                { codigo: '003', nombre: 'Carlos García', dni: '56789012', genero: 'Masculino', distrito: 'Cusco' },
                { codigo: '001', nombre: 'Juan Pérez', dni: '12345678', genero: 'Masculino', distrito: 'Lima' },
                { codigo: '002', nombre: 'María Rodríguez', dni: '87654321', genero: 'Femenino', distrito: 'Arequipa' },
                { codigo: '003', nombre: 'Carlos García', dni: '56789012', genero: 'Masculino', distrito: 'Cusco' },
                { codigo: '001', nombre: 'Juan Pérez', dni: '12345678', genero: 'Masculino', distrito: 'Lima' },
                { codigo: '002', nombre: 'María Rodríguez', dni: '87654321', genero: 'Femenino', distrito: 'Arequipa' },
                { codigo: '003', nombre: 'Carlos García', dni: '56789012', genero: 'Masculino', distrito: 'Cusco' },
                { codigo: '001', nombre: 'Juan Pérez', dni: '12345678', genero: 'Masculino', distrito: 'Lima' },
                { codigo: '002', nombre: 'María Rodríguez', dni: '87654321', genero: 'Femenino', distrito: 'Arequipa' },
                { codigo: '003', nombre: 'Carlos García', dni: '56789012', genero: 'Masculino', distrito: 'Cusco' },
                { codigo: '001', nombre: 'Juan Pérez', dni: '12345678', genero: 'Masculino', distrito: 'Lima' },
                { codigo: '002', nombre: 'María Rodríguez', dni: '87654321', genero: 'Femenino', distrito: 'Arequipa' },
                { codigo: '003', nombre: 'Carlos García', dni: '56789012', genero: 'Masculino', distrito: 'Cusco' },
            ],
            selectedSemestre: null,
            semestres: [
                { id: 1, name: 'Semestre 1' },
                { id: 2, name: 'Semestre 2' },
                { id: 3, name: 'Semestre 3' }
            ],
        };
    },

    mounted() {
        if (!this.selectedCiclo && this.ciclos.length > 0) {
            this.selectedCiclo = this.ciclos[0].id;
        }
    },

    methods: {
        irmenu(){
            this.$router.push("/Menu");
        },
        borrarFiltro() {
            this.selectedCurso = null;
            this.selectedSemestre = null;
        }
    },
};