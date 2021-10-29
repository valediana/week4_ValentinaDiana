let loggedIn = false;

function openForm() {
    let form = document.getElementById("myForm")
    form.style.display = "block";
}

function closeForm() {
    let form = document.getElementById("myForm")
    form.style.display = "none";
}

function welcome() {

    //se l'utente è loggato:
    if (loggedIn) {
        let username = localStorage.getItem("username");
        alert("Benvenuto " + username);
    }
    else {
        alert("Benvenuto!")
    }
}


//verificare che l'utente ha inserito qualcosa
function changeLoginPage() {
    //recupero gli elementi il cui class name è input
    let inputs = document.getElementsByClassName("input");

    //recuper il tasto login
    let loginButton = document.querySelector("input[type='submit']")

    //verifico che siano compilati
    for (let i = 0; i < inputs.length; i++) {

        if (inputs[i].value == "") //se l'i-esimo input è stringa vuota
        {
            //tasto login resta disabilitato
            loginButton.disabled = true; //oppure disabled = "disabled"
            return;
        }
        loginButton.disabled = false; //tasto login abilitato
    }

    
}

//al submit, salvo i dati inseriti dall'utente
function save() {
    //recupero tutti gli elementi che hanno class name input -> inputs = array di 2 elementi
    
    let inputs = document.getElementsByClassName("input");

    let insUsername = inputs[0].value;
    //salvo nel local storage
    localStorage.setItem('username', insUsername);
   
}

function hideForm() {
    ////recupero la form
    let form = document.querySelector("form");

    ////nascondo la form
    form.style.display = "none"; //cambio stile della form con display:none;

    //recupero tasto di logout
    let logoutButton = document.getElementById("logoutButton");

    //lo rendo visibile
    logoutButton.style.display = "inline";
}

function checkLoggedUser() {
    //recupero eventuali dati dal local storage
    let storedUsername = localStorage.getItem('username');
   

    //se ci sono (ovvero l'utente è loggato) nascondo la form
    if (storedUsername != null) {
        hideForm();
    }

    //altrimenti niente
}

function logout() {
    localStorage.clear() //svuoto il local storage

    //recupero la form
    let form = document.querySelector("form");

    //mostro la form
    form.style.display = "inline"; 

    //recupero e nascondo il tasto di logout 
    let logoutButton = document.getElementById("logoutButton");
    logoutButton.style.display = "none";
}