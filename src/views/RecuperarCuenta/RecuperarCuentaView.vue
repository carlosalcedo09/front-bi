<template>
    <v-container class="recuperarcuenta_css">

        <v-container class="todofondo">

            <v-container class="cajaprincipal">

                <v-container class="izquierda">

                    <v-container class="logo"></v-container>

                    <p class="bientext">Recuperar Cuenta</p>

                    <p class="texto">Ingresa tu correo electrónico y te enviaremos un código para que recuperes el acceso a tu cuenta.</p>

                    <v-container class="info">

                        <v-text-field
                            label="Correo Electrónico"
                            prepend-icon="mdi mdi-account-tie mdi-48px"
                            variant="outlined"
                            v-model="username"
                            class="ingtxt"
                        ></v-text-field>

                        <v-btn variant="tonal" class="btn-recuperar" type="button">
                            Enviar código
                        </v-btn>
                        <v-btn variant="text" class="btn-cancelar" @click="irlogin">
                            Cancelar
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
        name: 'RecuperarCuentaView',
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

<style src='../../views/RecuperarCuenta/recuperarCuenta.css'></style>