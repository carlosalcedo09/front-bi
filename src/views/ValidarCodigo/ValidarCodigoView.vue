<template>
    <v-container class="validarcodigo_css">
        <v-container class="todofondo">
            <v-container class="cajaprincipal">
                <v-container class="izquierda">
                    <v-container class="logo"></v-container>
                    <p class="bientext">Validar Código</p>
                    <p class="texto">Ingresa el código de verificación que recibió en su correo electrónico proporcionado anteriormente.</p>
                    <v-container class="info">
                        <div>
                            <v-row>
                                <v-col cols="3">
                                    <v-text-field
                                        ref="code1"
                                        variant="outlined"
                                        v-model="code1"
                                        maxlength="1"
                                        class="ingtxt"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="3">
                                    <v-text-field
                                        ref="code2"
                                        variant="outlined"
                                        v-model="code2"
                                        maxlength="1"
                                        class="ingtxt"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="3">
                                    <v-text-field
                                        ref="code3"
                                        variant="outlined"
                                        v-model="code3"
                                        maxlength="1"
                                        class="ingtxt"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="3">
                                    <v-text-field
                                        ref="code4"
                                        variant="outlined"
                                        v-model="code4"
                                        maxlength="1"
                                        class="ingtxt"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                        </div>
                        <v-btn variant="tonal" class="btn-recuperar" type="button" @click="verificarCodigo">
                            Validar código
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
              @click="irRestablecer">
              Aceptar
            </v-btn>
          </v-card-actions>
        </v-card>
     </v-dialog>
</template>


<script>
export default {
    name: 'ValidarCodigoView',
    data() {
        return {
        code1: '',
        code2: '',
        code3: '',
        code4: '',
        codigoCompleto: '',
        dialogError: false,
        mensaje: "",
        typemsg: "",
        dialogCorrect: false,
        }
    },
    methods: {
        irlogin() {
            this.$router.push("/");
        },

        irRestablecer() {
            this.$router.push("/RestablecerContraseña");
        },

        moveToNext(index) {
            const nextField = this.$refs['code' + (index + 1)];
            if (nextField) {
                this.$nextTick(() => {
                    nextField.focus();
                });
            }
        },

        moveToPrevious(index) {
            if (index > 1) {
                const prevField = this.$refs['code' + (index - 1)];
                if (prevField) {
                    this.$nextTick(() => {
                    prevField.focus();
                    });
                }
            }
        },
        
        async verificarCodigo() {
          if(this.code1!==""&&this.code2!==""&&this.code3!==""&&this.code4!==""){
            this.codigoCompleto = this.code1 + '' + this.code2 + '' + this.code3 + '' + this.code4;
            try {
                const response = await this.$axios.post("/email/verificarCodigo", { code: this.codigoCompleto });
                // Verificar si la respuesta indica que el código es válido
                if (response.data.message === 'Código de verificación válido') {
                    this.mensaje=" El Código de verificación ingresado es válido puede iniciar el restablecimiento de contraseña";
                    this.typemsg="success";
                    this.dialogCorrect=true;
                } else {
                    this.mensaje='El código de verificación es inválido';
                    this.typemsg="error";
                    this.dialogError=true;
                }
            } catch (error) {
                console.error('Error al verificar el código:', error);
            }  

          }else{
            this.mensaje= "Por favor complete todos los dígitos del código de verficación",
            this.typemsg="error";
            this.dialogError=true;
          }
        },

        cerrar(){
                this.mensaje="";
                this.dialogError= false;
        },

    },
    watch: {
        code1(newValue) {
            if (newValue.length === 1) {
                this.moveToNext(1);
            }
        },
        code2(newValue) {
            if (newValue.length === 1) {
                this.moveToNext(2);
            } else if (newValue.length === 0) {
                this.moveToPrevious(2);
            }
        },
        code3(newValue) {
            if (newValue.length === 1) {
                this.moveToNext(3);
            } else if (newValue.length === 0) {
                this.moveToPrevious(3);
            }
        },
        code4(newValue) {
            if (newValue.length === 0) {
                this.moveToPrevious(4);
            }
        },
    },
}
</script>


<style src='../../views/ValidarCodigo/validarCodigo.css'></style>