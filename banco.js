class ContaBancaria {
    constructor(titular, numeroConta) {
        this.titular = titular;
        this.numeroConta = numeroConta;
        this._saldo = 0;
    }

    depositar(valor) {
        if (valor > 0) {
            this._saldo += valor;
            console.log(`Depósito de R$${valor} realizado com sucesso.`);
        } else {
            console.log("Valor de depósito inválido.");
        }
    }

    sacar(valor) {
        if (valor > 0 && valor <= this._saldo) {
            this._saldo -= valor;
            console.log(`Saque de R$${valor} realizado com sucesso.`);
        } else {
            console.log("Saldo insuficiente para o saque.");
        }
    }

    consultarSaldo() {
        console.log(`Saldo atual: R$${this._saldo}`);
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(titular, numeroConta, limiteCredito) {
        super(titular, numeroConta);
        this.limiteCredito = limiteCredito;
    }

    sacar(valor) {
        if (valor > 0 && valor <= (this._saldo + this.limiteCredito)) {
            if (valor <= this._saldo) {
                this._saldo -= valor;
            } else {
                this.limiteCredito -= (valor - this._saldo);
                this._saldo = 0;
            }
            console.log(`Saque de R$${valor} realizado com sucesso.`);
        } else {
            console.log("Saldo insuficiente, incluindo o limite de crédito.");
        }
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(titular, numeroConta) {
        super(titular, numeroConta);
    }

    sacar(valor) {
        if (valor > 0 && valor <= this._saldo) {
            this._saldo -= valor;
            console.log(`Saque de R$${valor} realizado com sucesso.`);
        } else {
            console.log("Saldo insuficiente para o saque.");
        }
    }
}

let conta1 = new ContaCorrente("Felipe", "12345", 500);
let conta2 = new ContaPoupanca("João", "67890");

conta1.depositar(1000);
conta2.depositar(300);

conta1.consultarSaldo();
conta2.consultarSaldo();

conta1.sacar(1200);
conta2.sacar(500);

conta1.consultarSaldo();
conta2.consultarSaldo();
