let valor: number = 100;
let nome: string = "";
let qualquer: any = "";
let pago: boolean = false;

//arrays
const lista = [];
lista.push("Jhonatan", "Cachorro", 22, true, [])

const lista2: number[] = [];
lista.push(12,20,30,40)

//Tipos personalizados (Type Alias)

type Transacao = {
    tipoTransacao: string;
    data: Date;
    valor: number;
}

const novaTransacao: Transacao = {  //A variável novaTransacao do tipo "Transacao", tem os valores
    tipoTransacao: "",  
    data: new Date(),
    valor: 0
}
