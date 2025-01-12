const btnTrocaValor = document.querySelector('.btn');
const inputValor = document.querySelector('.valor');

btnTrocaValor.addEventListener('click', ()=>{
    trocarValor();
})

inputValor.addEventListener('keydown', (event)=>{
    if(event.key === 'Enter'){
        trocarValor();
    }
})

function trocarValor(){
    let valor = inputValor.value;
    
    if(!isNaN(valor) && valor !== ''){
        const binario = parseInt(valor).toString(2);
        document.querySelector('.res').classList.remove('valorVazio');
        document.querySelector('.res').innerHTML = `o valor decimal é ${valor} e em binario fica ${binario}`;
        inputValor.value = '';
    }else{
        document.querySelector('.res').classList.add('valorVazio');
        document.querySelector('.res').innerHTML='preencha o campo';
    }
}