<?php
/**
 * Script para enviar emails desde el formulario de contacto
 * Compatible con cPanel
 * 
 * Configuración:
 * 1. Actualiza $to_email con tu correo corporativo
 * 2. Ajusta $from_email si es necesario
 */

// Configuración del email
$to_email = 'info@construccionesrj.cl'; // ← CAMBIA ESTO por tu correo corporativo
$from_email = 'noreply@construccionesrj.cl'; // ← Opcional: email de origen
$subject_prefix = 'Nuevo mensaje de contacto - ';

// Headers para prevenir spam
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Solo permitir método POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Método no permitido']);
    exit;
}

// Obtener datos del formulario
$nombre = isset($_POST['nombre']) ? trim($_POST['nombre']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$telefono = isset($_POST['telefono']) ? trim($_POST['telefono']) : '';
$mensaje = isset($_POST['mensaje']) ? trim($_POST['mensaje']) : '';

// Validar campos requeridos
if (empty($nombre) || empty($email) || empty($mensaje)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Por favor completa todos los campos requeridos'
    ]);
    exit;
}

// Validar formato de email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'El formato del email no es válido'
    ]);
    exit;
}

// Sanitizar datos para prevenir inyección
$nombre = htmlspecialchars($nombre, ENT_QUOTES, 'UTF-8');
$email = filter_var($email, FILTER_SANITIZE_EMAIL);
$telefono = htmlspecialchars($telefono, ENT_QUOTES, 'UTF-8');
$mensaje = htmlspecialchars($mensaje, ENT_QUOTES, 'UTF-8');

// Preparar el contenido del email
$subject = $subject_prefix . $nombre;

$email_body = "Has recibido un nuevo mensaje desde el formulario de contacto:\n\n";
$email_body .= "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";
$email_body .= "Nombre: " . $nombre . "\n";
$email_body .= "Email: " . $email . "\n";
$email_body .= "Teléfono: " . ($telefono ? $telefono : 'No proporcionado') . "\n\n";
$email_body .= "Mensaje:\n";
$email_body .= "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
$email_body .= $mensaje . "\n\n";
$email_body .= "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";
$email_body .= "Este mensaje fue enviado desde el formulario de contacto del sitio web.\n";
$email_body .= "Fecha: " . date('d/m/Y H:i:s') . "\n";

// Headers del email
$headers = "From: " . $from_email . "\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "Content-Transfer-Encoding: 8bit\r\n";

// Intentar enviar el email
$mail_sent = @mail($to_email, $subject, $email_body, $headers);

if ($mail_sent) {
    // Éxito
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Mensaje enviado correctamente'
    ]);
} else {
    // Error al enviar
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Error al enviar el mensaje. Por favor intenta de nuevo más tarde.'
    ]);
}
?>

