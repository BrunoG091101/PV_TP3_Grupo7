import { mascotas } from "./mascotas.js"

// agregarMascotas(): agregará un objeto al array mascotas, que almacenará lo que se pase por formulario
export function agregarMascotas(obj){

    mascotas.push(obj) // hacemos push del objeto al array
    console.log(mascotas)
    mostrarMascotas() // llamamos a la función mostrarMascotas()

}

function mostrarMascotas(){
    let contenedor = document.getElementById('mascotas_registradas')
    contenedor.innerHTML = ''

    mascotas.forEach(m => {
        let tarjeta = document.createElement('div') // creamos un div
        tarjeta.classList.add('tarjeta') // al div creado le asignamos la clase tarjeta
        tarjeta.dataset.id = m.id // le asignamos un data-id con el id de la mascota

        tarjeta.innerHTML = `
            <p> <strong>Nombre: </strong>${m.nombre}</p>
            <p> <strong>Tipo: </strong>${m.tipo}</p>
            <p> <strong>Edad: </strong>${m.edad}</p>
            <p> <strong>Dueño: </strong>${m.nombre_dueño}</p>
            <p> <strong>Vacunado: </strong>${m.estado_vacunacion}</p>
            <button data-action="borrar">Eliminar</button>
        `

        contenedor.appendChild(tarjeta)

    })
    
    // resumen

    let total = mascotas.length
    let vacunadas = mascotas.filter(m => m.estado_vacunacion == 'Si').length
    let noVacunadas = total - vacunadas

    let resumen = document.getElementById('resumen')
    resumen.innerHTML = `
        <p><strong>Total de mascotas registradas: </strong>${total}</p>
        <p><strong>Vacunadas: </strong>${vacunadas}</p>
        <p><strong>No vacunadas: </strong>${noVacunadas}</p>
    `
}

export function eliminarMascota(id){
    const indiceMascota = mascotas.findIndex(m=> m.id === id);
    if (indiceMascota !== -1){
        mascotas.splice(indiceMascota, 1);
        mostrarMascotas()
    }

}