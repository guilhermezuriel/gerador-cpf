//Criando um validador de CPF, utilizando classes e conceitos de POO

exports.cpfValido = class cpfValido{
    constructor(cpf){
        Object.defineProperty(this, 'cpf',{
            enumerable:true, 
            writable: false,
            configurable:false,
            value: cpf,
        });
    }

    get cpf(){
        return this.cpf;
    }

    validaCPF(){
        let cpflimpo = this.cpf.replace(/\D+/g, '');
        const digitos = cpflimpo.slice(0,9);
        const vfsequencia = this.cpf.charAt(0).repeat(11);
        const comparacpf = cpfValido.criaCPF_valido(digitos);
        return (comparacpf === cpflimpo && comparacpf !== vfsequencia) ? true : false;

    }

    static criaCPF_valido(digitos){
        const stringDigitos = digitos.split('');
        while(stringDigitos.length !== 11){
            const soma = cpfValido.somaTotal(stringDigitos);
            const novoDigito = cpfValido.maisDigito(soma);

            stringDigitos.push(novoDigito);
        }
        return stringDigitos.join('');
    }

    static estilizaCPF(cpf){
        let cpfestilizado = `${cpf[0]}${cpf[1]}${cpf[2]}.${cpf[3]}${cpf[4]}${cpf[5]}.${cpf[6]}${cpf[7]}${cpf[8]}-${cpf[9]}${cpf[10]}`;
        return cpfestilizado 
    }

    //Realiza a adição do número ao CPF;
    static maisDigito(total){
        const novodigito = (11 - (total % 11));
        if (novodigito > 9) return 0;
        return novodigito; 
    };
    
    //Realiza a soma total dos números no CPF;
    static somaTotal (stringDigitos){
    return stringDigitos.reduce((acumulador, valor, indice) =>{
        let n = stringDigitos.length + 1 - (indice);
        return acumulador += Number(valor) * n   
    }, 0);

};
}

