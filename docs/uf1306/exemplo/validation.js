document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formularioRexistro');
    
    formulario.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Limpar mensaxes de erro anteriores
        limparErros();
        
        // Validar campos
        const valido = validarFormulario();
        
        if (valido) {
            enviarDatosAoServer();
        }
    });
    
    function validarFormulario() {
        let valido = true;
        
        // Validar nome
        const nome = document.getElementById('nome').value.trim();
        if (nome === '') {
            mostrarErro('erroNome', 'O nome é obrigatorio');
            valido = false;
        } else if (nome.length < 3) {
            mostrarErro('erroNome', 'O nome debe ter polo menos 3 caracteres');
            valido = false;
        }
        
        // Validar email
        const email = document.getElementById('email').value.trim();
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === '') {
            mostrarErro('erroEmail', 'O email é obrigatorio');
            valido = false;
        } else if (!regexEmail.test(email)) {
            mostrarErro('erroEmail', 'Introduce un email válido');
            valido = false;
        }
        
        // Validar contrasinal
        const contrasinal = document.getElementById('contrasinal').value;
        if (contrasinal === '') {
            mostrarErro('erroContrasinal', 'O contrasinal é obrigatorio');
            valido = false;
        } else if (contrasinal.length < 6) {
            mostrarErro('erroContrasinal', 'O contrasinal debe ter polo menos 6 caracteres');
            valido = false;
        }
        
        // Validar confirmación de contrasinal
        const confirmarContrasinal = document.getElementById('confirmarContrasinal').value;
        if (confirmarContrasinal !== contrasinal) {
            mostrarErro('erroConfirmarContrasinal', 'Os contrasinais non coinciden');
            valido = false;
        }
        
        return valido;
    }
    
    function mostrarErro(idElemento, mensaxe) {
        const elemento = document.getElementById(idElemento);
        elemento.textContent = mensaxe;
        elemento.classList.remove('oculto');
    }
    
    function limparErros() {
        const erros = document.querySelectorAll('.error');
        erros.forEach(error => {
            error.textContent = '';
            error.classList.add('oculto');
        });
    }
    
    function enviarDatosAoServer() {
        const formulario = document.getElementById('formularioRexistro');
        const datosFormulario = new FormData(formulario);
        
        // Converter FormData a objeto JSON
        const datos = {};
        datosFormulario.forEach((valor, clave) => {
            datos[clave] = valor;
        });
        
        // Chamada AJAX
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'procesar.php', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        
        xhr.onload = function() {
            if (xhr.status === 200) {
                const resposta = JSON.parse(xhr.responseText);
                
                if (resposta.exito) {
                    // Mostrar mensaxe de éxito
                    const mensaxeExito = document.getElementById('mensaxeExito');
                    mensaxeExito.textContent = resposta.mensaxe;
                    mensaxeExito.classList.remove('oculto');
                    
                    // Limpar formulario
                    formulario.reset();
                    
                    // Opcional: redireccionar após un tempo
                    // setTimeout(() => { window.location.href = 'benvida.html'; }, 2000);
                } else {
                    // Mostrar erro do servidor
                    if (resposta.erros) {
                        for (const campo in resposta.erros) {
                            mostrarErro(`error${capitalizarPrimeiraLetra(campo)}`, resposta.erros[campo]);
                        }
                    } else {
                        mostrarErro('errorNome', resposta.mensaxe || 'Erro ao procesar o rexistro');
                    }
                }
            } else {
                mostrarErro('errorNome', 'Erro na conexión co servidor');
            }
        };
        
        xhr.onerror = function() {
            mostrarErro('errorNome', 'Erro na conexión co servidor');
        };
        
        xhr.send(JSON.stringify(datos));
    }
    
    function capitalizarPrimeiraLetra(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
});