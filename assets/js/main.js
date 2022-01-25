function form(){
    const elForm = document.querySelector('form');
    const elFechar = document.querySelector('.el-fechar');
    const divConfirmacao = document.querySelector('.div-confirmacao');
    const header = document.querySelector('header');
    const main = document.querySelector('main');

    function telaDeConfirmacao(evento){
        evento.preventDefault();        
        document.getElementById('name').disabled = true;
        document.getElementById('email').disabled = true;
        document.getElementById('number').disabled = true;
        document.querySelector('select').disabled = true;
        divConfirmacao.style.display='block';
        header.style.filter='blur(10px)';
        main.style.filter='blur(10px)';

    }
    function fecharTela(){
        elForm.submit();
    }
    elForm.addEventListener('submit', telaDeConfirmacao);
    elFechar.addEventListener('click', fecharTela);
}
form();
