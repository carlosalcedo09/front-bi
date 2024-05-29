<template>
    <v-container class="registrarpersonal_css">

        <v-container class="todofondo">

            <v-container class="cajaprincipal">

                <v-container class="izquierda">

                    <v-container class="logo"></v-container>

                    <p class="bientext">Registrarse</p>

                    <p class="texto">Datos del personal</p>

                    <v-container class="info">

                        <v-text-field
                            label="Código del Personal"
                            prepend-icon="mdi mdi-identifier mdi-48px"
                            variant="outlined"
                            v-model="username"
                            class="ingtxt"
                        ></v-text-field>

                        <v-text-field
                            label="Nombres"
                            prepend-icon="mdi mdi-account mdi-48px"
                            variant="outlined"
                            v-model="username"
                            class="ingtxt"
                        ></v-text-field>

                        <v-text-field
                            label="Documento de Identidad"
                            prepend-icon="mdi mdi-card-account-details-outline mdi-48px"
                            variant="outlined"
                            v-model="username"
                            class="ingtxt"
                        ></v-text-field>

                        <v-text-field
                            label="Apellidos"
                            prepend-icon="mdi mdi-account mdi-48px"
                            variant="outlined"
                            v-model="username"
                            class="ingtxt"
                        ></v-text-field>

                        <v-text-field
                            label="Categoría de Personal"
                            prepend-icon="mdi mdi-account-tie mdi-48px"
                            variant="outlined"
                            v-model="username"
                            class="ingtxt"
                        ></v-text-field>

                    </v-container>

                    <p class="texto">Datos de la cuenta</p>

                    <v-container class="info">

                        <v-text-field
                            label="Usuario"
                            prepend-icon="mdi mdi-account mdi-48px"
                            variant="outlined"
                            v-model="username"
                            class="ingtxt"
                        ></v-text-field>

                        <v-text-field
                            label="Contraseña"
                            prepend-icon="mdi mdi-lock-outline mdi-48px"
                            variant="outlined"
                            v-model="username"
                            class="ingtxt"
                        ></v-text-field>

                        <v-text-field
                            label="Confirmar Contraseña"
                            prepend-icon="mdi mdi-lock-check-outline mdi-48px"
                            variant="outlined"
                            v-model="username"
                            class="ingtxt"
                        ></v-text-field>

                    </v-container>

                    <v-btn variant="text" class="btn-cancelar" @click="irlogin">
                        Cancelar
                    </v-btn>
                    <v-btn variant="tonal" class="btn-registrar" type="button" @click="irlogin">
                        Registrarse
                    </v-btn>

                </v-container>

                <v-container class="derecha">
                    <v-container class="contcolor">
                        <v-container class="ucv"></v-container>
                    </v-container>
                </v-container>

            </v-container>

        </v-container>

    </v-container>
</template>

<script>
    export default {
        name: 'RegistrarPersonalView',
        data(){
            return{

            }
        },
        created(){

        },
        methods:{
            irlogin(){
                this.$router.push("/");
            },
        },
    }
</script>

<style src='../../views/RegistrarPersonal/registrarPersonal.css'></style>