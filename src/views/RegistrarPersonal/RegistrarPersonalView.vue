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
                            @input="handleInput"
                            v-model="usuario.IdPersonal"
                            class="ingtxt"
                        ></v-text-field>

                        <v-text-field
                            label="Nombres"
                            prepend-icon="mdi mdi-account mdi-48px"
                            variant="outlined"
                            v-model="nombresP"
                            class="ingtxt"
                        ></v-text-field>

                        <v-text-field
                            label="Documento de Identidad"
                            prepend-icon="mdi mdi-card-account-details-outline mdi-48px"
                            variant="outlined"
                            v-model="dniP"
                            class="ingtxt"
                        ></v-text-field>

                        <v-text-field
                            label="Apellidos"
                            prepend-icon="mdi mdi-account mdi-48px"
                            variant="outlined"
                            v-model="apellidosP"
                            class="ingtxt"
                        ></v-text-field>

                        <v-text-field
                            label="Categoría de Personal"
                            prepend-icon="mdi mdi-account-tie mdi-48px"
                            variant="outlined"
                            v-model="categoriaP"
                            class="ingtxt"
                        ></v-text-field>

                    </v-container>

                    <p class="texto">Datos de la cuenta</p>

                    <v-container class="info">

                        <v-text-field
                            label="Usuario"
                            prepend-icon="mdi mdi-account mdi-48px"
                            variant="outlined"
                            v-model="usuario.username"
                            class="ingtxt1"
                        ></v-text-field>

                        <v-text-field
                            label="Contraseña"
                            prepend-icon="mdi mdi-lock-outline mdi-48px"
                            variant="outlined"
                            v-model="usuario.password"
                            class="ingcontraseña"
                            :type="showPassword ? 'text' : 'password'"
                            :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                            @click:append="togglePasswordVisibility"
                        ></v-text-field>

                        <v-text-field
                            label="Confirmar Contraseña"
                            prepend-icon="mdi mdi-lock-check-outline mdi-48px"
                            variant="outlined"
                            v-model="confirmPassword"
                            class="ingcontraseña"
                            :type="showConfirmPassword ? 'text' : 'password'"
                            :append-icon="showConfirmPassword ? 'mdi-eye-off' : 'mdi-eye'"
                            @click:append="toggleConfirmPasswordVisibility"
                        ></v-text-field>

                    </v-container>

                    <v-btn variant="text" class="btn-cancelar" @click="irlogin">
                        Cancelar
                    </v-btn>
                    <v-btn variant="tonal" class="btn-registrar" type="button" @click="registrar">
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
    <v-dialog v-model="dialogError" :width="500">
        <v-card color="#ec4a4a">
            <v-card-title>
                <span class="mx-autoR">¡Verifique!</span>
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
    <v-dialog v-model="dialogExit" :width="500">
        <v-card color="#033076">
            <v-card-title>
                <span class="mx-autoR">¡Registro exitoso!</span>
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
            <v-card-actions class="prueba">
                <v-btn class="btnclose1"
                    @click="cerrar">
                    Cerrar
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: 'RegistrarPersonalView',
        data(){
            return{
                usuario:{
                    id:"",
                    IdPersonal:"",
                    username: "",
                    password: "",
                    correo:"",
                },
                nombresP: "",
                apellidosP: "",
                personal:"",
                usuarioRegistrado: "",
                confirmPassword: "",
                showPassword: false,
                showConfirmPassword: false,
                dniP: "",
                ultimoID:"",
                categoriaP:"",
                mensaje:"",
                typemsg:"",
                dialogError:false,
                dialogExit:false
            }
        },
        created(){

        },
        methods:{
            handleInput() {
                // Cancelar el timeout anterior si existe
                if (this.timeout) {
                    clearTimeout(this.timeout);
                }
                // Establecer un nuevo timeout
                this.timeout = setTimeout(() => {
                    this.obtenerDatos();
                }, 2000); 
            },
            togglePasswordVisibility() {
                this.showPassword = !this.showPassword;
            },
            toggleConfirmPasswordVisibility() {
                this.showConfirmPassword = !this.showConfirmPassword;
            },
            obtenerDatos() {
                if (this.IdPersonal !== "") {
                    this.$axios.get("/personal/" + this.usuario.IdPersonal)
                    .then((res) => {
                        this.personal = res.data;
                        if(this.personal && this.personal.nombresP) {
                        this.nombresP = this.personal.nombresP;
                        this.apellidosP= this.personal.apellidosP;
                        this.dniP= this.personal.dniPers;
                        this.correo= this.personal.correo;
                            if(this.personal.idTipo===1){
                                this.categoriaP="Docente"
                            }else{
                                this.categoriaP="Administrativo"
                            }
                        } else {
                        this.typemsg = "error";
                        this.mensaje = "El docente no ha sido encontrado, verifique el código ingresado";
                        this.dialogError = true;
                        }
                    })
                    .catch((error) => {
                        console.error(error);  // Aquí debes manejar el error adecuadamente
                        this.mensaje = "Error al buscar datos del docente";
                        this.typemsg = "error";
                        this.dialogError = true;
                    });
                }
            },

            irlogin(){
                this.$router.push("/");
            },

            cerrar() {
                this.dialogError = false;
                this.dialogExit= false;
                this.mensaje= " ";
            },

            async registrar() {
                // Verificación de que todos los campos necesarios están completos
                if (!this.usuario.IdPersonal || !this.usuario.password || !this.confirmPassword) {
                    this.mensaje = "Todos los campos deben ser completados.";
                    this.typemsg = "error";
                    this.dialogError = true;
                    return;
                }

                // Verificación de que las contraseñas coinciden
                if (this.usuario.password !== this.confirmPassword) {
                    this.typemsg = "error";
                    this.mensaje = "Verifique la contraseña y su confirmación";
                    this.dialogError = true;
                    // Limpiando los campos de contraseña
                    this.usuario.password = '';
                    this.confirmPassword = '';
                    return;
                }

                try {
                    // Consultando existencia de usuario por su código
                    const response = await this.$axios.get("/usuarios/"+ this.usuario.IdPersonal);
                    if (!response.data) {
                    this.mensaje = "El personal con Código: " + this.usuario.IdPersonal + " ya está registrado, no podemos asignarle otro usuario.";
                    this.typemsg = "error";
                    this.dialogError = true;
                    this.limpiar();
                    return;
                    }
                } catch (error) {
                    console.error("Error al verificar la existencia del usuario:", error);
                }

                try {
                    // Obteniendo el valor del último id
                    const usersResponse = await this.$axios.get('/usuarios');
                    const usuarios = usersResponse.data;
                    let ultimoID = 0;
                    if (usuarios.length > 0) {
                    ultimoID = usuarios.sort((a, b) => b.id - a.id)[0].id;
                    }
                    console.log("Último ID de usuario:", ultimoID);

                    // Asignando el siguiente ID
                    this.usuario.id = ultimoID + 1;

                    // Grabando usuario
                    const saveResponse = await this.$axios.post("/usuarios", this.usuario);
                    console.log(saveResponse);
                    this.mensaje = "El registro ha sido completado con éxito";
                    this.typemsg = "success";
                    this.dialogExit = true;
                    this.limpiar();
                } catch (error) {
                    console.error("Error al obtener los usuarios o al guardar el nuevo usuario:", error);
                    this.mensaje = "Error durante el registro del usuario.";
                    this.typemsg = "error";
                    this.dialogError = true;
                }
            },
            
            limpiar(){
                this.usuario.IdPersonal= "";
                this.usuario.password="";
                this.usuario.username="";
                this.dniP="";
                this.nombresP="";
                this.apellidosP="";
                this.confirmPassword="";
                this.categoriaP="";
            }

        },
    }
</script>

<style src='../../views/RegistrarPersonal/registrarPersonal.css'></style>