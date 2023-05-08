const CPF = require('./ValidaCPF.js');

const ValidaCPF = CPF.cpfValido;

exports.geradorCPF = function geradorCPF(){
    let cpfli = [];
    for (let i = 0 ; i < 9 ; i++){
        cpfli.push(Math.floor(Math.random()*10));
    }
    cpfli = cpfli.join('');
    const cpfcriado = ValidaCPF.criaCPF_valido(cpfli);
    return ValidaCPF.estilizaCPF(cpfcriado);
};


