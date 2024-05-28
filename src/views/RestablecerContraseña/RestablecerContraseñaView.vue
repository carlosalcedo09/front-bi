<template>
    <v-container class="restablecercontraseña_css">

        <v-container class="todofondo">

            <v-container class="cajaprincipal">

                <v-container class="izquierda">

                    <v-container class="logo"></v-container>

                    <p class="bientext">Restablecer Contraseña</p>

                    <p class="texto">Ingresa la nueva contraseña para tu cuenta.</p>

                    <v-container class="info">

                        <v-text-field
                            label="Nueva Contraseña"
                            prepend-icon="mdi mdi-lock mdi-48px"
                            variant="outlined"
                            v-model="password"
                            :type="showPassword ? 'text' : 'password'"
                            :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                            @click:append="togglePasswordVisibility"
                            class="ingtxt"
                        ></v-text-field>

                        <v-text-field
                            label="Confirmar Contraseña"
                            prepend-icon="mdi mdi-lock mdi-48px"
                            variant="outlined"
                            v-model="confirmPassword"
                            :type="showConfirmPassword ? 'text' : 'password'"
                            :append-icon="showConfirmPassword ? 'mdi-eye-off' : 'mdi-eye'"
                            @click:append="toggleConfirmPasswordVisibility"
                            class="ingtxt1"
                        ></v-text-field>

                        <v-btn variant="tonal" class="btn-recuperar" type="button">
                            Restablecer Contraseña
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
        name: 'RestablecerContraseñaView',
        data(){
            return{
                password: '',
                confirmPassword: '',
                showPassword: false,
                showConfirmPassword: false,
            }
        },
        created(){

        },
        methods:{
            irlogin(){
                this.$router.push("/");
            },
            togglePasswordVisibility() {
                this.showPassword = !this.showPassword;
            },
            toggleConfirmPasswordVisibility() {
                this.showConfirmPassword = !this.showConfirmPassword;
            }
        },
    }
</script>

<style src='../../views/RestablecerContraseña/restablecerContraseña.css'></style>