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
</template>

<script>
    export default {
        name: 'LoginView',
        data(){
            return{
                usuarios: [],
                username: "",
                password: "",
                mensaje: "",
                typemsg: "error",
                dialogError: false
            }
        },
        created(){
        this.obtenerUsuario();
        },
        methods:{
            obtenerUsuario(){
                this.$axios.get("/usuarios").then((res)=>{this.usuarios=res.data}).catch((error)=>error)
            },

            async iniciarSesion(){
                if(this.username==="" || this.password===""){
                    this.mensaje= "Faltan completar los campos de inicio de Sesión, por favor completelos.";
                    this.typemsg= "error";
                    this.dialogError= true;
                    return
                }
                try{
                    const response= await this.$axios.post("usuarios/validar",{
                        username: this.username,
                        password: this.password,
                    });
                    if(response.data.message === 'Autenticación exitosa'){
                        this.irmenu();
                        const usuarioE= this.usuarios.find(usuario=> usuario.username===this.username && usuario.password===this.password);
                        localStorage.setItem('IdPersonal', usuarioE.IdPersonal);
                    }
                }catch(error){
                    if(error.response && error.response.status===401){
                        this.mensaje= "Credenciales incorrectas, por favor revise el usuario y contraseña ingresado"
                    }else{
                        this.mensaje= "Error desconocido al iniciar sesión"
                    }
                    this.dialogError= true;
                }
            },

            irrecuperarCuenta(){
                this.$router.push("/RecuperarCuenta");
            },

            irmenu(){
                this.$router.push("/Menu");
            },
            cerrar(){
                this.mensaje="";
                this.username="";
                this.password="";
                this.dialogError= false;
            },
            irregistrar(){
                this.$router.push("/RegistrarPersonal");
            },
        },
    };
</script>

<style src='../../views/Login/login.css'></style>