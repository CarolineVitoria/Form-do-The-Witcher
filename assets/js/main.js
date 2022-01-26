function form(){
    const elForm = document.querySelector('form');

    function telaDeConfirmacao(evento){
        evento.preventDefault();
        window.location.href = "./confirmacao.html";
    }
    elForm.addEventListener('submit', telaDeConfirmacao);
}
form();
