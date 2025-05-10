<?php
header('Content-Type: application/json');

// Simular procesamento do formulario
$datos = json_decode(file_get_contents('php://input'), true);

$resposta = [];

// Validacións adicionais no servidor
if (empty($datos['nome'])) {
    $resposta['erros']['nome'] = 'O nome é obrigatorio';
}

if (empty($datos['email'])) {
    $resposta['erros']['email'] = 'O email é obrigatorio';
} elseif (!filter_var($datos['email'], FILTER_VALIDATE_EMAIL)) {
    $resposta['erros']['email'] = 'O email non é válido';
}

// Verificar se hai erros
if (!empty($resposta['erros'])) {
    $resposta['exito'] = false;
} else {
    // Aquí iría a lóxica para gardar os datos na BD
    // Por exemplo:
    // $exito = gardarUsuarioNaBD($datos);
    
    // Simulamos que todo foi ben
    $resposta['exito'] = true;
    $resposta['mensaxe'] = 'Rexistro completado con éxito!';
}

echo json_encode($resposta);

// Función de exemplo para gardar na BD
function gardarUsuarioNaBD($datos) {
    // Implementación real para conectar e gardar na BD
    return true;
}
?>