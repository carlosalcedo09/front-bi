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
                            :type="showPassword ? 'text' : 'password'"
                            :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                            @click:append="togglePasswordVisibility"
                            class="ingcontraseña"
                        ></v-text-field>

                        <v-btn variant="tonal" class="btn-ingresar" type="button" @click="iniciarSesion">
                            Iniciar Sesión
                        </v-btn>
                        <v-btn variant="text" @click="irregistrar">
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
    
    <v-dialog v-model="dialogError" :width="500">
        <v-card color="#ec4a4a">

            <v-card-title>
            <span class="mx-auto">¡Verifique!</span>
            </v-card-title>

        <v-card-text>
            <v-alert
                v-if="mensaje !== ''"
                color="white"
                :type="typemsg"
                outlined>
                {{ mensaje }}
            </v-alert>
            </v-card-text>

        <v-card-actions class="prueba">
            <v-btn class="btnclose"
            @click="cerrar">
            Cerrar
            </v-btn>
        </v-card-actions>

        </v-card>
    </v-dialog>
    <v-dialog v-model="dialogProce" :width="500">
        <v-card color="#033076">
            <v-card-title>
                <span class="mx-autoR">Procesando ...</span>
            </v-card-title>
            <v-card-text>
                <v-alert
                    v-if="mensaje !== ''"
                    color="#033076"
                    :type="typemsg"
                    outlined>
                    {{ mensaje }}
                </v-alert>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>

</script>

<script src="../../views/Login/LoginView.js"></script>
<style src='../../views/Login/login.css'></style>