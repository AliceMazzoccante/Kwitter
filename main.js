function addUsuario() {
    const nomeUsuario = document.getElementById("nomeUsuario").value;
    if (nomeUsuario) {
        localStorage.setItem("nomeUsuario", nomeUsuario);
        // window.location = "sala.html"
        location = "sala.html"
    } else {
        document.getElementById("label").innerHTML = "Digite um nome de usuário"
    }
}

function logout() {
    localStorage.removeItem("nomeUsuario");
    localStorage.removeItem("nomeSala");
    location = "index.html";
}