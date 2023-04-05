// ADICIONE SUS LINKS FIREBASE AQUI
const firebaseConfig = { 
  apiKey: "AIzaSyCkN23nlEXskRHSu2i8AM3eII4qFh9zHEc", 
  authDomain: "kiwi-c1c00.firebaseapp.com", 
  databaseURL: "https://kiwi-c1c00-default-rtdb.firebaseio.com", 
  projectId: "kiwi-c1c00", 
  storageBucket: "kiwi-c1c00.appspot.com", 
  messagingSenderId: "1017832951884", 
  appId: "1:1017832951884:web:9e89e2347f0aa7084364e9" };





// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const nomeUsuario = localStorage.getItem("nomeUsuario");

document.getElementById("nomeUsuario").innerHTML = "Olá, " + nomeUsuario + "!";

getData();

function addSala() {
  const sala = document.getElementById("nomeSala").value;

  firebase.database().ref("/").child(sala).set({
    purpose: "sala criada",
  });

  loadRoom(sala);
}

function getData() {
  firebase
    .database()
    .ref("/")
    .on("value", snapshot => {
      let salas = [];
      console.log("Keys Changed");
      snapshot.forEach(function (childSnapshot) {
        const childKey = childSnapshot.key;
        const row =
          "<div class='nomeSala' id='" +
          childKey +
          "' onclick='loadRoom(this.id)'> #" +
          childKey +
          "</div>"
        salas.push(row);
      });
      console.log(salas);
      const output = salas.join("");
      document.getElementById("output").innerHTML = output;
    });
}

function loadRoom(room) {
  localStorage.setItem("nomeSala", room);
  location = "chat.html";
}