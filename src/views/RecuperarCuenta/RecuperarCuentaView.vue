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
                            v-model="correo"
                            class="ingtxt"
                        ></v-text-field>

                        <v-btn variant="tonal" class="btn-recuperar" @click="enviarCodigo">
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
    <v-dialog v-model="dialogCorrect" :width="500">
        <v-card color="#002854">
          <v-card-title>
            <span class="mx-auto">Codigo de verificación</span>
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
              Aceptar
            </v-btn>
          </v-card-actions>
        </v-card>
     </v-dialog>
</template>

<script>
    export default {
        name: 'RecuperarCuentaView',
        data(){
            return{
                typemsg:"error",
                correo: "",
                dialogError: false,
                dialogCorrect: false,
            }
        },
        created(){

        },
        methods:{
            irlogin(){
                this.$router.push("/");
            },

            async enviarCodigo() {

            const emailPattern = /^(.+)@(gmail\.com|ucvvirtual\.edu\.pe)$/;

            // Verifica si la dirección de correo electrónico coincide con el patrón
            if (!emailPattern.test(this.correo)) {
            this.mensaje = "La dirección de correo electrónico debe ser de tipo '@gmail.com' o '@ucvvirtual.edu.pe'";
            this.typemsg = "error";
            this.dialogError = true;
            return;
            }
            
            try {
                const response = await this.$axios.post("/email/enviarCorreo", { email: this.correo });
                this.mensaje="El codigo de verificacion ha sido enviado correctamente al correo de verificación: " + this.correo;
                this.typemsg="success"
                this.correo= "";
                this.dialogCorrect=true;
            
            } catch (error) {
                this.mensaje="Error al enviar el correo de verificación";
                console.log(error)
                this.dialogError=true;
            }
            },
            
            cerrar(){
                this.mensaje="";
                this.correo="";
                this.dialogError= false;
            }
         },
    }
</script>

<style src='../../views/RecuperarCuenta/recuperarCuenta.css'></style>