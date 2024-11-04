import Global from "@/Global"
import axios from "axios"

export default class ServiceDepartamentos {
    getDepartamentos() {
        return new Promise( function(resolve) {
            let departamentos = [];
            let request = "api/departamentos";

            let url = Global.urlApiDepartamentos + request;
            axios.get(url).then(response => {
                console.log("Leyendo...");
                departamentos = response.data
                resolve(departamentos)
            })
        })
    }

    insertDepartamento(departamento) {
        return new Promise( function(resolve) {
            let request = "api/departamentos";

            let url = Global.urlApiDepartamentos + request;
            axios.post(url, departamento).then(response => {
                console.log("Insertando...");
                resolve(response)
            })
        })
    }

    updateDepartamento(departamento) {
        return new Promise( function(resolve) {
            let request = "api/departamentos";

            let url = Global.urlApiDepartamentos + request;
            axios.put(url, departamento).then(response => {
                console.log("Modificado...");
                resolve(response)
            })
        })
    }

    findDepartamento(id) {
        return new Promise( function(resolve) {
            let departamento = null
            let request = "api/departamentos/" + id;

            let url = Global.urlApiDepartamentos + request;
            axios.get(url).then(response => {
                console.log("Encontrado...");
                departamento = response.data
                resolve(departamento)
            })
        })
    }

    deleteDepartamento(id) {
        return new Promise( function(resolve) {
            let request = "api/departamentos/" + id;

            let url = Global.urlApiDepartamentos + request;
            axios.delete(url).then(response => {
                console.log("Borrado...");
                resolve(response)
            })
        })
    }
}
