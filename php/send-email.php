<?php

$name    = isset($_POST['name']) ? $_POST['name'] : '';
$email   = isset($_POST['email']) ? $_POST['email'] : '';
$subject = isset($_POST['subject']) ? $_POST['subject'] : '';
$message = isset($_POST['message']) ? $_POST['message'] : '';
$to    = 'ivans1041@gmail.com';

$message = 'Nombre ' . $name . '<br>Email ' . $email . '<br>' . $message;

$logError = '';

$headers = array('From: ' . $email);
if (!mail($to, $subject, $message, implode("\r\n", $headers))) {
  $logError = 'Error enviando correo';
}

if ($logError === '') {
  json_encode(array(
                 'message' => 'Correo enviado',
                 'type'    => 'success'
               ));
} else {
  json_encode(array(
                 'message' => $logError,
                 'type'    => 'error'
               ));
}
