<template>
  <div class="container">
    <h1>Create Departamento</h1>
    <h2 style="color: aquamarine">
        {{mensaje}}
    </h2>
    <form v-on:submit.prevent="insertarDepartamento()">
        <label class="form-label">Id departamento:</label>
        <input class="form-control" type="number" v-model="departamento.idDepartamento">
        <label class="form-label">Nombre:</label>
        <input class="form-control" type="text" v-model="departamento.nombre">
        <label class="form-label">Localidad:</label>
        <input class="form-control" type="text" v-model="departamento.localidad">
        <button class="btn btn-info mt-3">
            Insertar departamento
        </button>
    </form>
  </div>
</template>

<script>
import ServiceDepartamentos from "./../services/ServiceDepartamentos.js";

const service = new ServiceDepartamentos();

    export default {
        name: "CreateDepartamento",
        methods: {
            insertarDepartamento() {
                service.insertDepartamento(this.departamento).then(result => {
                    this.mensaje = "Insertado correctamente " + result;
                    this.$router.push("/")
                })
            }
        },
        data() {
            return {
                mensaje: "",
                departamento: {
                    idDepartamento: 0,
                    nombre: "",
                    localidad: ""
                }
            }
        }
    }
</script>

<style>

</style>