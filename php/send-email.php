<?php

$email = isset( $_POST['email'] ) ? $_POST['email'] : '';
$message  = isset( $_POST['message'] ) ? $_POST['message'] : '';

$logError = '';

$headers = array( 'From: ' . $from );
if ( ! mail( $from, 'Mensaje de ' . $from, $message, $headers ) ) {
    $logError = 'Error enviando correo';
}

if ( $logError === '' ) {
	wp_send_json( array(
		              'message' => 'Correo enviado',
		              'type'    => 'success'
	              ) );
} else {
	wp_send_json( array(
		              'message' => $logError,
		              'type'    => 'error'
	              ) );
}
