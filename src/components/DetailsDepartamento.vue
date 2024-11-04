<template>
  <div>
    <h1>Details Departamento</h1>
    <router-link class="btn text-primary" to='/'>Back to list</router-link>
    <ul class="list-group">
        <li class="list-group-item">
            {{this.$route.params.id}}
        </li>
        <li class="list-group-item">
            {{this.$route.params.nombre}}
        </li>
        <li class="list-group-item">
            {{this.$route.params.localidad}}
        </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "DetailsDepartamento"
    }
</script>

<style>

</style>