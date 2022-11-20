import { getFetch, loginFetch, postFetch} from "./src/fetch.js";
import { api2 } from "./src/api.js";

const app = document.querySelector('.ourApp')
let content = ''

const data = {
    username: 'soyLida',
    password: '123456'
}

loginFetch(`${api2}/user/login`, data)
.then(user => {
    localStorage.setItem('sessionId', JSON.stringify(user))
    // localStorage.setItem('tokenSession', user.token)
})

const usuario = JSON.parse(localStorage.sessionId)

const datos = await postFetch(`${api2}/user/test`, {hola: 'hola'}, usuario.token)
datos.forEach(element => {
    const {name, observation, reating, status} = element
    content += `
        <div class="card" style="width: 18rem;margin: 50px;">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Satisfaccion: ${status ? '<span style="color: green">Satisfecho</span>' : '<span style="color: red">No satisfecho</span>'}</h6>
                <h6 class="card-subtitle mb-2 text-muted">Calificacion: <span style="color: green">${reating} Estrellas</span></h6>
                <h6 class="card-subtitle mb-2 text-muted" style="margin-top: 30px;">Observaciones</h6>
                <p class="card-text">${observation}</p>
            </div>
        </div>
    `
});

app.innerHTML = content
