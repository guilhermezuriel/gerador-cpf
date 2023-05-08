const css$ = require('./assets/css/style.css');

const geradorCPF$$ = require('./modules/GeraCPF');

const geradorCPF = geradorCPF$$.geradorCPF;

const container = document.querySelector('.container');
const geraBtn = document.querySelector('.btn-gera');

const capturaSubmit = () => {
    document.addEventListener('click', e => {
        const el = e.target;
        if (el.classList.contains('btn-gera')) {
            addCpfGerado();
            if (document.querySelector('.btn-copia')) return
            addBtnCopia();
        };

        if(el.classList.contains('btn-copia')) {
            copyCPF();
        }
    })
};

const addCpfGerado = () => {
    const cpfGerado = document.querySelector('.cpf-gerado');
    cpfGerado.innerHTML = geradorCPF();
};

const addBtnCopia = () => {
    const createBtn = document.createElement('button');
    container.appendChild(createBtn);
    createBtn.innerText = 'Copiar';
    createBtn.className = "btn-copia";

    geraBtn.style.right = '-150px'
    createBtn.style.right = '-150px'

};


function copyCPF() {
    // Get the text field
    let copyText = document.getElementsByClassName('cpf-gerado');
    console.log(copyText)
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText[0].innerText);
  
    // Alert the copied text
    alert("O CPF foi copiado !");
}

capturaSubmit();



