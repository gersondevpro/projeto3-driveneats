let burgers = false;
let precoBurgers = 0;

function escolherBurger(burger) {
    const selecao = document.querySelector('.burgers .selecionar');

    if (selecao !== null) {
        selecao.classList.remove('selecionar');
    }

    burger.classList.add('selecionar');
    burgers = burger;
    precoBurgers = Number(burger.getElementsByTagName("h3")[0].textContent);

    finalizar();
}


let bebidas = false;
let precoBebidas = 0;

function escolherBebida(bebida) {
    const selecao = document.querySelector('.bebidas .selecionar');

    if (selecao !== null) {
        selecao.classList.remove('selecionar');
    }

    bebida.classList.add('selecionar');
    bebidas = bebida;
    precoBebidas = Number(bebidas.getElementsByTagName("h3")[0].textContent);

    finalizar();
}


let sobremesas = false;
let precoSobremesas = 0;

function escolherSobremesa(sobremesa) {
    const selecao = document.querySelector('.sobremesas .selecionar');

    if (selecao !== null) {
        selecao.classList.remove('selecionar');

    }
    sobremesa.classList.add('selecionar');
    sobremesas = sobremesa;
    precoSobremesas = Number(sobremesas.getElementsByTagName("h3")[0].textContent);

    finalizar();
}

function finalizar() {
    
    if(bebidas && burgers && sobremesas) {
        const processarPedido = document.querySelector(".condition");
        processarPedido.classList.add("enviarPedido");
        let preco = precoBebidas + precoBurgers + precoSobremesas;

        let msgWhats = `Olá, gostaria de fazer o pedido: \n- Prato: ${burgers.getElementsByTagName("h1")[0].textContent} \n- Bebida: ${bebidas.getElementsByTagName("h1")[0].textContent} \n- Sobremesa: ${sobremesas.getElementsByTagName("h1")[0].textContent} \nTotal: R$ ${preco.toFixed(2)}`;


        let encode = encodeURIComponent(msgWhats);
        processarPedido.innerHTML = `<a href="https://wa.me/5512992103300?text=${msgWhats}"><p>Fechar pedido</p></a>`
    }
    
}