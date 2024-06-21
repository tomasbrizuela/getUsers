let getUsers = async () => {
    let response = await fetch('http://localhost:3003/data');
    let data = await response.json()
    return data
}

let list = document.querySelector('#list');


document.addEventListener('DOMContentLoaded', async function (){
    let users = await getUsers();
    users.forEach((user) => {
        let card = document.createElement('div');
        let nombre = document.createElement('p');
        let email = document.createElement('p');

        card.style.border = "1px solid black";
        card.style.borderRadius = "20px";
        card.style.padding = "5px";
        card.style.margin = "15px";

        nombre.textContent = user.nombre;
        email.textContent = user.email;

        card.appendChild(nombre);
        card.appendChild(email);
        list.appendChild(card);
    })
})