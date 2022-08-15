let burgers = false;
function escolherBurger(burger) {
    const selecao = document.querySelector('.burgers .selecionar');

    if (selecao !== null) {
        selecao.classList.remove('selecionar');
    }

    burger.classList.add('selecionar');
    burgers = true;

    finalizar();
}


let bebidas = false;
function escolherBebida(bebida) {
    const selecao = document.querySelector('.bebidas .selecionar');

    if (selecao !== null) {
        selecao.classList.remove('selecionar');
    }

    bebida.classList.add('selecionar');
    bebidas = true;

    finalizar();
}

let sobremesas = false;
function escolherSobremesa(sobremesa) {
    const selecao = document.querySelector('.sobremesas .selecionar');

    if (selecao !== null) {
        selecao.classList.remove('selecionar');

    }
    sobremesa.classList.add('selecionar');
    sobremesas = true;

    finalizar();
}


function finalizar() {
    
    const processarPedido = document.querySelector(".condition");
    
    if(bebidas && burgers && sobremesas) {
        processarPedido.classList.add("enviarPedido");
        processarPedido.innerHTML = "Finalizar pedido";
    }
    
}