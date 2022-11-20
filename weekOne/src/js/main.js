// function mifuncion() {

//     const nombre = prompt('Ingresa tu nombre')
//     alert('Hola ' + nombre + ' Esta es mi primera app')

// }

// const mifuncion2 = () => {
//     const nombre = prompt('Ingresa tu nombre')
//     alert('Hola ' + nombre + ' Esta es mi primera app')
// }

// const objeto = {
//     nombre: 'Alberth',
//     apellido: 'Pantoja',
//     edad: '19',
//     genero: 'masculino',
//     datosPersonales: {
//         numero: 12345123,
//         ciudad: 'pamplona',
//         barrio: 'las americas'
//     }
// }


// let miPrimerVariable = 'Alberth'
// let miPrimerVariable2 = "Hola"
// let miPrimerVariable3 = `Hola ${objeto.nombre} ${objeto.apellido}, como estas?, veo que vienes de ${objeto.datosPersonales.ciudad}`

// document.write(miPrimerVariable3)


const form = document.querySelector('#firstForm')
const resp = document.querySelector('.response')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let nombre = document.querySelector('#nombre')
    let apellido = document.querySelector('#apellido')

    let respuesta = `<p>Hola ${nombre.value} ${apellido.value}, gracias por usar mi app</p>`

    nombre.value = ''
    apellido.value = ''

    resp.innerHTML = respuesta 
})

const btn = document.querySelector('.clear')

btn.addEventListener('click', (e) => {
    e.preventDefault()
    resp.innerHTML = ''
})

