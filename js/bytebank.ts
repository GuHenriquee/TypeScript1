let saldo = 3000;

const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;

if (elementoSaldo){
    elementoSaldo.textContent = saldo.toString();
}


const elementoFormulario = document.querySelector(".block-nova-transacao form") as HTMLFormElement;

addEventListener("submit", function(event){
    event.preventDefault(); /*Ao submeter um formulario é comportamento padrão da página, ela recarregar, a função previne isso */
    if (!elementoFormulario.checkValidity()){
        alert("Por favor, preencha todos os campos da transação!");
        return
    }


    /*Pegando os componentes do formulario block-nova-transacao */
    const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao") as HTMLSelectElement;
    const inputValor = elementoFormulario.querySelector("#valor") as HTMLInputElement;
    const inputData = elementoFormulario.querySelector("#data")as HTMLInputElement;

    /*Pegando os valores do formulario block-nova-transacao */
    let tipoTransacao: string = inputTipoTransacao.value;
    let valor: number = inputValor.valueAsNumber; /*Tava contantenando strings em vez de somar */
    let data: Date = new Date (inputData.value);

    if(tipoTransacao == "Depósito"){
        saldo += valor;
    }else if (tipoTransacao == "Transferência" || tipoTransacao == "Pagamento de Boleto"){
        saldo -= valor;
    }else{
        alert("Tipo de translação é inválido! ")
    }

    elementoSaldo.textContent = saldo.toString();

    /*Guardando esses valores */
    const novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    }

    console.log(novaTransacao);
    elementoFormulario.reset(); /*Reseta o formulario quando ele for preenchido */
})