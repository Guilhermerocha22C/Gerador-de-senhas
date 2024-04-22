function gerarSenha() {
    const comprimento = 12; 
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!&_-';
    let senha = '';
    for (let i = 0; i < comprimento; i++) {
        const indice = Math.floor(Math.random() * caracteres.length);
        senha += caracteres.charAt(indice);
    }
    senha = '      ' + senha;
    const senhaGeradaInput = document.getElementById('senha-gerada');
    senhaGeradaInput.value = senha;
    const copiarSenhaButton = document.getElementById('copiar-senha');
    copiarSenhaButton.disabled = false;
}

function copiarSenha() {
    const senhaGeradaInput = document.getElementById('senha-gerada');
    const senha = senhaGeradaInput.value;
    senhaGeradaInput.select();
    document.execCommand('copy');
    alert('Senha copiada para a área de transferência!');
}
