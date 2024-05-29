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

<script>
    export default {
        name: 'RestablecerContraseñaView',
        data(){
            return{
                usuario:{
                    IdPersonal:'',
                    username:'',
                    password:'',
                },
                confirmPassword: '',
                showPassword: false,
                showConfirmPassword: false,
                dialogValidar: false,
                dialogError: false,
                dialogExit: false,
            }
        },
        created(){
             this.obtenerDatos();
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
            },
            obtenerDatos(){
                this.usuario.IdPersonal=localStorage.getItem("IdPersonal");
                console.log(this.usuario.IdPersonal)
                this.usuario.username =localStorage.getItem('username')
                console.log(this.usuario.username)
            },

            restablecer(){
            
                if (!this.usuario.IdPersonal || !this.usuario.username || !this.usuario.password || !this.confirmPassword) {
                    this.mensaje = "Todos los campos deben ser completados.";
                    this.typemsg="error";
                    this.dialogError = true;
                    return;
                }

                // Verificación de que las contraseñas coinciden
                if (this.usuario.password !== this.confirmPassword) {
                this.mensaje = "Verifique la contraseña y su confirmación";
                this.dialogError = true;
                // Limpiando los campos de contraseña
                this.usuario.password = '';
                this.confirmPassword = '';
                return;
                }

                //Consultando existencia de usuario por su código
                this.$axios.get("/usuarios/" + this.usuario.IdPersonal).then((res) => {
                    this.usuarioencontrado = res.data;
                    if(this.usuarioencontrado && this.usuarioencontrado.username) {
                    this.mensaje = "¿Esta seguro que desea cambiar la contraseña de su cuenta?";
                    this.typemsg = "success";
                    this.dialogValidar = true;
                    } else {
                    this.mensaje = "No ha sido encontrada una cuenta asocida, al codigo del docente: ''"+this.usuario.IdPersonal +"', por favor verifique";
                    this.dialogError = true;
                    }
                })
                .catch((error) => {
                    console.error(error);  // Aquí debes manejar el error adecuadamente
                    this.mensaje = "Error al buscar datos del docente";
                    this.dialogError = true;
                });
           },
           cerrar() {
                this.dialogError = false;
                this.mensaje= " ";
                this.limpiar();
            },

            cancelar(){
                this.dialogValidar = false;
                this.mensaje= " ";
                this.limpiar();
            },

            async aceptar(){
                this.dialogValidar=false;
                try {
                    const saveResponse = await this.$axios.patch(`/usuarios/${this.usuario.IdPersonal}`, this.usuario);
                    this.limpiar();
                    this.typemsg="success"
                    this.mensaje = "La actualización ha sido completado con éxito";
                    this.dialogExit = true;
                } catch (error) {
                    console.error("Error al obtener los usuarios o al modificar el usuario:", error);
                    this.mensaje = "Error durante el registro del usuario.";
                    this.dialogError = true;
                }
            },

            volver(){
                this.dialogExit=false;
                this.$router.push("/");
            },

            limpiar(){
            this.usuario.password='';
            this.confirmPassword='';
            },
        },
    }
</script>

<style src='../../views/RestablecerContraseña/restablecerContraseña.css'></style>