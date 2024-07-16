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
            selectedCurso: 'Competencia Comunicativa',
            idCurso:'GPDG102',
            cursos: [
                { id: 1, name: 'Competencia Comunicativa' },
                { id: 2, name: 'Fundamentos de Programación' },
                { id: 3, name: 'Introducción a la Ingeniería' },
                { id: 4, name: 'Matemática I'},
                { id: 5, name: 'Pensamiento Lógico'},
                { id: 6, name: 'Tutoría I'}
            ],
            estudiantes: [],
            nombresEstudiante: '',
            selectedSemestre: '2023-I',
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
            ciclo:'',
            carrera:'',
            notas:[],
            unidades: [],
            unidadMenor:'',
            promedioMenor:'',
            area:'',
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
                    idCurso: this.idCurso,
                    semestre: this.selectedSemestre,
                }
            });
            this.estudiantes= responseEstudiantes.data;
        },
        filtrar(){
            if(this.selectedCurso==='Competencia Comunicativa'){
                this.idCurso='GPDG102'
            }else if(this.selectedCurso==='Fundamentos de Programación'){
                this.idCurso='HEDE102'
            }else if(this.selectedCurso==='Introducción a la Ingeniería'){
                this.idCurso='HEDE101'
            }else if(this.selectedCurso==='Matemática I'){
                this.idCurso='HEDE103'
            }else if(this.selectedCurso==='Pensamiento Lógico'){
                this.idCurso='GPDG101'
            }else if(this.selectedCurso==='Tutoría I'){
                this.idCurso='VPDG101'
            }
            this.cargarDatos();
        },
        irmenu(){
            this.$router.push("/Menu");
        },
        borrarFiltro(){
            this.carrera='';
            this.nombresEstudiante='';
            this.ciclo='';
            this.selectedCurso = 'Competencia Comunicativa';
            this.selectedSemestre = '2023-I';
        },
        async verDetalles(index) {
            const estudianteSeleccionado= this.estudiantes[index];
             //Llenando información de estudiante
            this.carrera='Ingeniería de Sistemas'
            this.ciclo=1;
            this.nombresEstudiante= estudianteSeleccionado.e_nombresE + ' '+estudianteSeleccionado.e_apellidosE;
            
            try {
                const responseDetalle = await this.$axios.get('/desempeno/detalleNotaEstudiante', {
                    params: {
                        idCurso: this.idCurso,
                        codigoE: estudianteSeleccionado.codigo,
                    }
                });
                this.notas = responseDetalle.data;
                console.log(this.notas);
                this.organizarUnidades();
                const unidadMenorPromedio = this.getResumen();
                this.unidadMenor= unidadMenorPromedio.nombre;
                this.promedioMenor= unidadMenorPromedio.promedio;
                const menorPromedioPorTipo = this.calcularAreaMejorar();
                this.area= menorPromedioPorTipo;
            } catch (error) {
                console.error('Error al obtener detalle de notas:', error);
            }
            
        },
        organizarUnidades() {
            const unidades = {};
            this.notas.forEach(nota => {
                if (!unidades[nota.d_idUnidad]) {
                    unidades[nota.d_idUnidad] = {
                        id: nota.d_idUnidad,
                        titulo: `Unidad ${nota.d_idUnidad.replace('U', '')}`,
                        notas: []
                    };
                }
                unidades[nota.d_idUnidad].notas.push({
                    idTipo: nota.d_idTipo,
                    tipo: this.getTipoNota(nota.d_idTipo),
                    nota: nota.d_nota
                });
            });
            this.unidades = Object.values(unidades);
        },
        getTipoNota(idTipo) {
            switch (idTipo) {
                case 'PC': return 'Práctica Calificada';
                case 'IF': return 'Investigación Formativa';
                case 'EP': return 'Examen Parcial';
                case 'EF': return 'Examen Final';
                default: return 'Otro';
            }
        },
        getResumen(){
            let unidadMenorPromedio = null;
            let menorPromedio = Infinity;
    
            this.unidades.forEach(unidad => {
                const totalNotas = unidad.notas.reduce((sum, nota) => sum + nota.nota, 0);
                const promedio = totalNotas / unidad.notas.length;
    
                if (promedio < menorPromedio) {
                    menorPromedio = promedio;
                    unidadMenorPromedio = {
                        nombre: unidad.titulo,
                        promedio: promedio.toFixed(2) 
                    };
                }
            });
    
            return unidadMenorPromedio;
        },

        calcularAreaMejorar() {
            const tipos = {
                'Práctica Calificada': { sum: 0, count: 0 },
                'Investigación Formativa': { sum: 0, count: 0 },
                'Examen Parcial': { sum: 0, count: 0 },
                'Examen Final': { sum: 0, count: 0 }
            };
    
            this.notas.forEach(nota => {
                const tipo = this.getTipoNota(nota.d_idTipo);
                if (tipos[tipo]) {
                    tipos[tipo].sum += nota.d_nota;
                    tipos[tipo].count += 1;
                }
            });
    
            let tipoMenorPromedio = null;
            let menorPromedio = Infinity;
    
            for (const tipo in tipos) {
                if (tipos[tipo].count > 0) {
                    const promedio = tipos[tipo].sum / tipos[tipo].count;
                    if (promedio < menorPromedio) {
                        menorPromedio = promedio;
                        tipoMenorPromedio = {
                            tipo: tipo,
                            promedio: promedio.toFixed(2)
                        };
                    }
                }
            }
    
            return tipoMenorPromedio;
        },
    },
};