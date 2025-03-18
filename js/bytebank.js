var saldo = 3000;
var elementoSaldo = document.querySelector(".saldo-valor .valor");
if (elementoSaldo) {
    elementoSaldo.textContent = saldo.toString();
}
var elementoFormulario = document.querySelector(".block-nova-transacao form");
addEventListener("submit", function (event) {
    event.preventDefault(); /*Ao submeter um formulario é comportamento padrão da página, ela recarregar, a função previne isso */
    if (!elementoFormulario.checkValidity()) {
        alert("Por favor, preencha todos os campos da transação!");
        return;
    }
    /*Pegando os componentes do formulario block-nova-transacao */
    var inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao");
    var inputValor = elementoFormulario.querySelector("#valor");
    var inputData = elementoFormulario.querySelector("#data");
    /*Pegando os valores do formulario block-nova-transacao */
    var tipoTransacao = inputTipoTransacao.value;
    var valor = inputValor.valueAsNumber; /*Tava contantenando strings em vez de somar */
    var data = new Date(inputData.value);
    if (tipoTransacao == "Depósito") {
        saldo += valor;
    }
    else if (tipoTransacao == "Transferência" || tipoTransacao == "Pagamento de Boleto") {
        saldo -= valor;
    }
    else {
        alert("Tipo de translação é inválido! ");
    }
    elementoSaldo.textContent = saldo.toString();
    /*Guardando esses valores */
    var novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    };
    console.log(novaTransacao);
    elementoFormulario.reset(); /*Reseta o formulario quando ele for preenchido */
});
