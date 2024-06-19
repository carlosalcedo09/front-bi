export default {
    name: 'LoginView',
    data(){
        return{
            usuarios: [],
            username: "",
            password: "",
            mensaje: "",
            typemsg: "error",
            dialogError: false,
            showPassword: false,
        }
    },
    created(){
    this.obtenerUsuario();
    },
    methods:{
        togglePasswordVisibility() {
            this.showPassword = !this.showPassword;
        },
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