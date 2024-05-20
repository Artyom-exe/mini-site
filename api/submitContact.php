<?php
require_once __DIR__ . DIRECTORY_SEPARATOR . 'formGestion.php';

header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$errors = [];

$champsConfig = [
    'name' => [
        'requis' => true,
        'maxLength' => 100
    ],
    'email' => [
        'requis' => true,
        'maxLength' => 100
    ],
    'message' => [
        'requis' => true,
        'maxLength' => 1000
    ]
];

$formMessage = [
    "requis" => "Ce champ est requis!",
    "email" => "Veuillez entrer une adresse mail valide!",
    "maxLength" => "Ce champ doit comprendre au plus %0% caractères"
];

gestion_formulaire($formMessage, $champsConfig, $errors);

if (count($errors) > 0) {
    http_response_code(422);
    echo json_encode($errors);
} else {
    $contacts = json_decode(file_get_contents(dirname(__DIR__) . DIRECTORY_SEPARATOR . "storage" . DIRECTORY_SEPARATOR . 'contacts.json'), true);
    $contacts[] = $_POST;
    file_put_contents(dirname(__DIR__) . DIRECTORY_SEPARATOR . "storage" . DIRECTORY_SEPARATOR . 'contacts.json', json_encode($contacts));
    echo json_encode(['success' => true]);
}
