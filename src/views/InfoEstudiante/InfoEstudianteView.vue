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
                </v-container>
            </v-container>
        </v-container>
    </v-container>
</template>

<script src='../../views/InfoEstudiante/InfoEstudianteView.js'></script>

<style src='../../views/InfoEstudiante/infoEstudiante.css'></style>