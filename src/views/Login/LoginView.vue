<template>
    <v-container class="login_css">
        
        <v-container class="todofondo">
            
            <v-container class="cajaprincipal">
                <v-container class="izquierda">

                    <v-container class="logo"></v-container>

                    <p class="bientext">Bienvenido</p>

                    <v-container class="info">

                        <v-text-field
                            label="Usuario"
                            prepend-icon="mdi mdi-account-tie mdi-48px"
                            variant="outlined"
                            v-model="username"
                            class="ingtxt"
                        ></v-text-field>

                        <v-text-field
                            label="Contraseña"
                            prepend-icon="mdi mdi-lock mdi-36px"
                            variant="outlined"
                            v-model="password"
                            type="password"
                            class="ingtxt"
                        ></v-text-field>

                        <v-btn variant="tonal" class="btn-ingresar" type="button" @click="irmenu">
                            Iniciar Sesión
                        </v-btn>
                        <v-btn variant="text">
                            ¿No tienes cuenta? Regístrate
                        </v-btn>
                        <v-btn variant="text" @click="irrecuperarCuenta">
                            ¿Olvidaste tu contraseña?
                        </v-btn>

                    </v-container>

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
        name: 'LoginView',
        data(){
            return{

            }
        },
        created(){

        },
        methods:{
            irrecuperarCuenta(){
                this.$router.push("/RecuperarCuenta");
            },
            irmenu(){
                this.$router.push("/Menu");
            },
        },
    };
</script>

<style src='../../views/Login/login.css'></style>