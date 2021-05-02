let login = document.getElementById('login')
let email = document.getElementById('email')

ativar.addEventListener('click', () => {
    modal.classList.toggle('animar');
});

//logar.addEventListener('click', () => {
  // load.classList.toggle('animar'); 
//});

function logar(){
    if(verificaDados()){ load.classList.toggle('animar'); }
    else { alert("Informe os dados!"); }
}

function verificaDados(){
    if(login.value != "" && email.value != "" ) 
    {
        return true;
    } 
    return false; 
}