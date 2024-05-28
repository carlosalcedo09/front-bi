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
                        <v-btn variant="tonal" class="btn-recuperar" type="button" @click="irRestablecer">
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