<template>
    <v-container class="infoEst_css">
        <v-container class="infoFondo">
            <v-container class="cajaprincipal">
                <v-container class="cajaizq">
                    <v-container class="caja1">
                        <v-container class="c1">
                            <v-container class="caja1_1"></v-container>
                            <p class="p1">Lista de Estudiantes</p>
                        </v-container>
                        <v-container class="caja1_2">
                        </v-container>
                    </v-container>
                    <v-container class="caja2">
                        <p class="p2">Ciclo:</p>
                        <select v-model="selectedCiclo" class="cbxCiclo" >
                            <option v-for="(ciclo, index) in ciclos" :key="index" :value="ciclo.id" disabled>{{ ciclo.name }}</option>
                        </select>
                        <p class="p3">Curso:</p>
                        <select v-model="selectedCurso" class="cbxCurso">
                            <option v-for="(curso, index) in cursos" :key="index" :value="curso.id">{{ curso.name }}</option>
                        </select>
                        <p class="p3">Semestre Académico:</p>
                        <select v-model="selectedSemestre" class="cbxCiclo">
                            <option v-for="(semestre, index) in semestres" :key="index" :value="semestre.id">{{ semestre.name }}</option>
                        </select>
                        <v-btn class="btnO" @click="borrarFiltro"><span class="mdi mdi-broom iconoO"></span></v-btn>
                        <v-btn class="btnO" @click="irmenu"><span class="mdi mdi-arrow-left iconoO"></span></v-btn>
                    </v-container>
                    <v-container class="caja3">
                        <table class="tablaEstudiantes">
                            <thead>
                                <tr>
                                    <th>Código</th>
                                    <th>Nombre</th>
                                    <th>DNI</th>
                                    <th>Género</th>
                                    <th>Distrito</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(estudiante, index) in estudiantes" :key="index">
                                    <td>{{ estudiante.codigo }}</td>
                                    <td>{{ estudiante.nombre }}</td>
                                    <td>{{ estudiante.dni }}</td>
                                    <td>{{ estudiante.genero }}</td>
                                    <td>{{ estudiante.distrito }}</td>
                                    <td><i class="mdi mdi-eye iconojo"></i></td>
                                </tr>
                            </tbody>
                        </table>
                    </v-container>
                </v-container>
                <v-container class="cajader">
                    <v-container>
                        <p class="tit1">Detalle de Notas de</p>
                        <p class="tit2">Progrmación de Aplicaciones Móviles</p>
                    </v-container>
                    <v-container class="igual">
                        <v-container class="der1">
                            <span class="mdi mdi-account-circle"></span>
                        </v-container>
                        <v-container class="der2">
                            <v-container class="cp1">
                                <p class="txt1">Nombre:</p>
                                <p class="txt2">Carlos Jose Alcedo Javier</p>
                            </v-container>
                            <v-container class="cp1">
                                <p class="txt1">Carrera:</p>
                                <p class="txt2">Ingeniería de Sistemas</p>
                            </v-container>
                            <v-container class="cp1">
                                <p class="txt1">Ciclo:</p>
                                <p class="txt2">1</p>
                            </v-container>
                        </v-container>
                    </v-container>
                    <v-container class="der3">
                        <v-container class="card1">
                            <p class="cardtit">Unidad 1</p>
                            <v-container class="flexcard">
                                <v-container class="cuadrado">
                                    <p class="m1">Investigación Formativa</p>
                                    <p class="m2">15</p>
                                </v-container>
                                <v-container class="cuadrado">
                                    <p class="m1">Examen Parcial</p>
                                    <p class="m2">15</p>
                                </v-container>
                                <v-container class="cuadrado">
                                    <p class="m1">Práctica Calificada</p>
                                    <p class="m2">15</p>
                                </v-container>
                            </v-container>
                        </v-container>
                        <v-container class="card1">
                            <p class="cardtit">Unidad 2</p>
                            <v-container class="flexcard">
                                <v-container class="cuadrado">
                                    <p class="m1">Investigación Formativa</p>
                                    <p class="m2">15</p>
                                </v-container>
                                <v-container class="cuadrado">
                                    <p class="m1">Examen Parcial</p>
                                    <p class="m2">15</p>
                                </v-container>
                                <v-container class="cuadrado">
                                    <p class="m1">Práctica Calificada</p>
                                    <p class="m2">15</p>
                                </v-container>
                            </v-container>
                        </v-container>
                        <v-container class="card1">
                            <p class="cardtit">Unidad 3</p>
                            <v-container class="flexcard">
                                <v-container class="cuadrado">
                                    <p class="m1">Investigación Formativa</p>
                                    <p class="m2">15</p>
                                </v-container>
                                <v-container class="cuadrado">
                                    <p class="m1">Examen Parcial</p>
                                    <p class="m2">15</p>
                                </v-container>
                                <v-container class="cuadrado">
                                    <p class="m1">Práctica Calificada</p>
                                    <p class="m2">15</p>
                                </v-container>
                            </v-container>
                        </v-container>
                    </v-container>
                    <v-container class="der4">
                        <v-container class="card2">
                            <p class="cardtit1">Resumen</p>
                            <p class="cardcont1">- La unidad con menor promedio es: </p>
                            <v-container class="flexcard1">
                                <p class="u1">Unidad 1</p>
                                <span class="mdi mdi-arrow-right-bold iconflecha"></span>
                                <p class="u2">18</p>
                            </v-container>
                            <p class="cardcont1">- Debe mejorar sus calificaciones en el área de: </p>
                            <p class="u3">PC o INF o EP</p>
                        </v-container>
                    </v-container>
                </v-container>
            </v-container>
        </v-container>
    </v-container>
</template>

<script src='../../views/InfoEstudiante/InfoEstudianteView.js'></script>

<style src='../../views/InfoEstudiante/infoEstudiante.css'></style>