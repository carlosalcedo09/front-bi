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
            selectedCurso: 1,
            cursos: [
                { id: 1, name: 'Competencia Comunicativa' },
                { id: 2, name: 'Fundamentos Programación' },
                { id: 3, name: 'Introducción Ingeniería' },
                { id: 4, name: 'Matemática I'},
                { id: 5, name: 'Pensamiento Lógico'},
                { id: 6, name: 'Tutoría I'}
            ],
            estudiantes: [
               
            ],
            selectedSemestre: 18,
            semestres: [
                { id: 1, name: '2015-I'},
                { id: 2, name: '2015-II'},
                { id: 3, name: '2016-I' },
                { id: 4, name: '2016-II'},
                { id: 5, name: '2017-I'},
                { id: 6, name: '2017-II'},
                { id: 7, name: '2018-I'},
                { id: 8, name: '2018-II'},
                { id: 9, name: '2019-I'},
                { id: 10, name: '2019-II'},
                { id: 11, name: '2020-I'},
                { id: 12, name: '2020-II'},
                { id: 13, name: '2021-I'},
                { id: 14, name: '2021-II'},
                { id: 15, name: '2022-I'},
                { id: 16, name: '2022-II'},
                { id: 17, name: '2023-I'},
                { id: 18, name: '2023-II'},
                
            ],
            estudiantes1:[],
        };
    },

    mounted() {
        if (!this.selectedCiclo && this.ciclos.length > 0) {
            this.selectedCiclo = this.ciclos[0].id;
        }
    },
    created(){
        this.cargarDatos();
    },
    methods: {
        async cargarDatos(){
            const responseEstudiantes = await this.$axios.get('/desempeno/estudiantesCursosSemestre',{
                params:{
                    idCurso: 'GPDG102',
                    semestre: '2023-I'
                }
            });
            this.estudiantes= responseEstudiantes.data;
            console.log(this.estudiantes1);
        },
        irmenu(){
            this.$router.push("/Menu");
        },
        borrarFiltro() {
            this.selectedCurso = null;
            this.selectedSemestre = null;
        }
    },
};