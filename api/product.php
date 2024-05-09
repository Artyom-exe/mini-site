<?php

header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$id = intval($_GET['id']);

if (!$id) {
    throw new InvalidArgumentException("L'id n'est pas valide");
    die();
}

$products = file_get_contents('../storage/products.json');

$products = json_decode($products);

foreach ($products as $product) {
    if ($product->id === $id) {
        echo json_encode($product);
        die();
    }
}
