const firebase = require('../configfirebase');

const controlador = {};
const db = firebase.firestore();

controlador.inicio = (req, res) => {
    res.render('index');
}

controlador.admin = (req, res) => {
    res.render('./admin')
}

controlador.guardar = (req,res)=>{
    console.log(req.body);

    db.collection('algo').doc('12').set(req.body.infopersonal)
    .then(()=>{
        console.log("Dato almacenado ")
    })
    res.render('/admin')
}

module.exports = controlador;

function agregardatos() {
    // leerDatos();
    db.collection("perfil").add({
        nombre: txnombres.value,
        telefono: txtelefono.value,
        correo: txcorreo.value,
        
    })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            alert('datos agregados correctamennte', docRef.id);
        })
        .catch((error) => {
            console.error("Error: ", error);
        });
}

function leerDatos() {
    listaagendas.innerHTML = "";
    // btnActualizar.classList.add('d-none');

    db.collection("agendas").get()
        .then((querySnapshot) => {
            // esquema para definir funciones anonimas
            querySnapshot.forEach((doc) => {
                listaagendas.innerHTML += `
                   <tr>
                       <td>${doc.data().nombre}</td>
                       <td>${doc.data().telefono}</td>
                       <td>${doc.data().correo}</td>
                       <td>
                           <button onclick="eliminar('${doc.id}')" class="btn btn-danger">delete</button>
                       
                       </td>
                   </tr>           
               `;
            });
        })
        .catch(function (error) {
            console.log("Error: ", error);
        });
}