<template>
  <div>
    <h1>Update Departamento</h1>
    <h2 style="color: aquamarine">
        {{mensaje}}
    </h2>
    <form v-if="departamento" v-on:submit.prevent="updateDepartamento()">
        <label class="form-label">Id departamento:</label>
        <input class="form-control" type="number" v-model="departamento.idDepartamento" disabled>
        <label class="form-label">Nombre:</label>
        <input class="form-control" type="text" v-model="departamento.nombre">
        <label class="form-label">Localidad:</label>
        <input class="form-control" type="text" v-model="departamento.localidad">
        <button class="btn btn-info mt-3">
            Modificar departamento
        </button>
    </form>
  </div>
</template>

<script>
import ServiceDepartamentos from "./../services/ServiceDepartamentos.js";

const service = new ServiceDepartamentos();

    export default {
        name: "UpdateDepartamento",
        data() {
            return {
                mensaje: "",
                departamento: null
            }
        },
        methods: {
            updateDepartamento() {
                service.updateDepartamento(this.departamento).then(result => {
                    this.mensaje = "Modificado correctamente " + result;
                    this.$router.push("/")
                })
            }
        },
        mounted() {
            let id = this.$route.params.id;
            service.findDepartamento(id).then(result => {
                this.departamento = result;
            })
        }
    }
</script>

<style>

</style>