<template>
  <div class="container">
    <h1>Departamentos Component</h1>
    <div v-if="!status" class="wrapper">
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="shadow"></div>
      <div class="shadow"></div>
      <div class="shadow"></div>
    </div>
    <table v-else class="table table-rounded table-warning">
      <thead>
        <tr>
          <th>Id departamento</th>
          <th>Nombre</th>
          <th>Localidad</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="dept in departamentos" :key="dept">
          <td>{{ dept.idDepartamento }}</td>
          <td>{{ dept.nombre }}</td>
          <td>{{ dept.localidad }}</td>
          <td class="d-flex gap-2 py-3">
            <router-link class="btn btn-warning" :to="'/details/' + dept.idDepartamento + '/' + dept.nombre + '/' + dept.localidad">
                Details
            </router-link>
            <router-link class="btn btn-secondary" :to="'/update/' + dept.idDepartamento">
                Update
            </router-link>
            <router-link class="btn btn-danger" :to="'/delete/' + dept.idDepartamento">
                Delete
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ServiceDepartamentos from "./../services/ServiceDepartamentos.js";

const service = new ServiceDepartamentos();

    export default {
    name: "DepartamentosComponent",
    data() {
        return {
        departamentos: [],
        status: false,
        };
    },
    mounted() {
        service.getDepartamentos().then((result) => {
        this.departamentos = result;
        this.status = true;
        console.log(this.departamentos);
        
        });
    }
    };
</script>

<style scoped>
.wrapper {
  width: 200px;
  height: 60px;
  position: relative;
  z-index: 1;
}

.circle {
  width: 20px;
  height: 20px;
  position: absolute;
  border-radius: 50%;
  background-color: #fff;
  left: 15%;
  transform-origin: 50%;
  animation: circle7124 0.5s alternate infinite ease;
}

@keyframes circle7124 {
  0% {
    top: 60px;
    height: 5px;
    border-radius: 50px 50px 25px 25px;
    transform: scaleX(1.7);
  }

  40% {
    height: 20px;
    border-radius: 50%;
    transform: scaleX(1);
  }

  100% {
    top: 0%;
  }
}

.circle:nth-child(2) {
  left: 45%;
  animation-delay: 0.2s;
}

.circle:nth-child(3) {
  left: auto;
  right: 15%;
  animation-delay: 0.3s;
}

.shadow {
  width: 20px;
  height: 4px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.9);
  position: absolute;
  top: 62px;
  transform-origin: 50%;
  z-index: -1;
  left: 15%;
  filter: blur(1px);
  animation: shadow046 0.5s alternate infinite ease;
}

@keyframes shadow046 {
  0% {
    transform: scaleX(1.5);
  }

  40% {
    transform: scaleX(1);
    opacity: 0.7;
  }

  100% {
    transform: scaleX(0.2);
    opacity: 0.4;
  }
}

.shadow:nth-child(4) {
  left: 45%;
  animation-delay: 0.2s;
}

.shadow:nth-child(5) {
  left: auto;
  right: 15%;
  animation-delay: 0.3s;
}
</style>