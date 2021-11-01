function benvenuto() {
    let username = localStorage.getItem('nomeInserito');
    if (username != null && indirizzo!=null) {
        alert("Benvenuto" + username);
    }
    else {
        alert("Benvenuto");
    }
}
function checkRegistrazione() {
    let username = localStorage.getItem('nomeInserito');
    let emailInserita = localStorage.get('indirizzo');
    if (username != null && emailInserita != null) {
        disiscriviti();
    }
    else {
        mostraForm();

    }
}



function mostraForm() {
    let form = document.getItemById('myForm');
    form.style.display = 'block';
}
function chiudiForm() {
    let form = document.getItemById('myForm');
    form.style.display = 'none';

    //ora mostro bottone unsubscribe
    let cancella = document.getItemById('disiscriviti');
    cancella.style.display = 'block';
}
function salva() {
    let nomeInserito = document.getItemById('usernameInput');
    let indirizzo = document.getItemById('email');
    localStorage.setItem('username', nomeInserito);
    localStorage.setItem('email', indirizzo);
}

function disiscriviti() {
    localStorage.clear();
    let iscriviti = document.getItemById('iscriviti');
    iscriviti.style.display = 'block';
}