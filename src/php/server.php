<?php
//$_POST = json_decode(file_get_contents('php://input'), true); //для формата JSON
// echo var_dump($_POST);  // для formData

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

// Настройка 
$mail = new PHPMailer(true);
$mail -> Charset = 'UTF-8';
$mail -> setLanguage('ru', 'phpmailer/language/');
$mail -> IsHTML(true);

// От кого письмо 
$mail -> setFrom('tazik2247@gmail.com', 'Отправитель');
// Кому отправляешь
$mail -> addAddress('pitluk22@gmail.com');
// Тема письма 
$mail -> setFrom('Hello, It is Petr Lukyanchik');

// Тело письма 
$body = '<h1>This man wants to hire you!</h1>';

if (trim(!empty($_POST['name']))) {
	$body.= '<p><strong>Name:</strong>' .$_POST['name'].'</p>';
}
if (trim(!empty($_POST['email']))) {
	$body.= '<p><strong>Email:</strong>' .$_POST['email'].'</p>'; 
}
if (trim(!empty($_POST['message']))) {
	$body.= '<p><strong>Message:</strong>' .$_POST['message'].'</p>'; 
}

$mail -> Body = $body;

// Отправляем 
if (!$mail->send()) {
	$message = 'OMG! Fatal Error here!';
} else {
	$message = 'Data was sent correct!';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encoded($response);