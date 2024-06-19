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
                            v-model="usuario.password"
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
                        <v-btn variant="tonal" class="btn-recuperar" @click="restablecer">
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
            <v-btn class="btncerrar"
              @click="cerrar">
              Cerrar
            </v-btn>
          </v-card-actions>
        </v-card>
     </v-dialog>
     <v-dialog v-model="dialogValidar" :width="500">
        <v-card color="#002854">
          <v-card-title>
            <span class="mx-auto">Confirmación</span>
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
            <v-btn class="btnclose1"
              @click="aceptar">
              Aceptar
            </v-btn>
            <v-btn class="btnclose1"
              @click="cancelar">
              Cancelar
            </v-btn>
          </v-card-actions>
        </v-card>
     </v-dialog>
     <v-dialog v-model="dialogExit" :width="500">
        <v-card color="#002854">
          <v-card-title>
            <span class="mx-auto">Operación exitosa</span>
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
            <v-btn class="btncerrar"
              @click="volver">
              Aceptar
            </v-btn>
          </v-card-actions>
        </v-card>
     </v-dialog>
</template>

<script src='../../views/RestablecerContraseña/RestablecerContraseñaView'></script>

<style src='../../views/RestablecerContraseña/restablecerContraseña.css'></style>