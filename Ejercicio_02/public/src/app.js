import {agregarMascotas, eliminarMascota} from "./vista.js"

const formulario = document.getElementById("formulario")
const tarjetita = document.getElementById("mascotas_registradas")

function manejarDatos(e) {
    e.preventDefault()
    let mascota = {
        id: Date.now(),
        nombre: document.getElementById('nombre').value,
        tipo: document.getElementById('tipo_mascota').value,
        edad: document.getElementById('edad').value,
        nombre_dueño: document.getElementById('nombre_dueño').value,
        estado_vacunacion: document.querySelector('input[name="vacunada"]:checked')?.value
    }
    agregarMascotas(mascota)
    formulario.reset()
}

function manejarEliminar(e){
    if(e.target.dataset.action === "borrar"){
        const button = e.target
        const mascotaItem = button.closest(".tarjeta")
        const id = parseInt(mascotaItem.dataset.id)
        eliminarMascota(id)
    }
}


document.addEventListener("DOMContentLoaded", () => {
    formulario.addEventListener("submit", manejarDatos)
    tarjetita.addEventListener("click", manejarEliminar)
})