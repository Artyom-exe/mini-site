<?php

function gestion_formulaire(array $formMessage, array $champsConfig, array &$errors): void
{

    foreach ($champsConfig as $nomChamps => $regles) {
        $valeur = trim(htmlentities($_POST[$nomChamps]));

        if (isset($regles['requis']) && $regles['requis'] && empty($valeur)) {
            $errors[$nomChamps] = $formMessage["requis"];
        } elseif (isset($regles["minLength"]) && strlen($valeur) < $regles["minLength"]) {
            $errors[$nomChamps] = str_replace("%0%", $regles["minLength"], $formMessage["minLength"]);
        } elseif (isset($regles["maxLength"]) && strlen($valeur) > $regles["maxLength"]) {
            $errors[$nomChamps] = str_replace("%0%", $regles["maxLength"], $formMessage["maxLength"]);
        } elseif (isset($regles['type']) && $regles["type"] === "email" && !filter_var($valeur, FILTER_VALIDATE_EMAIL)) {
            $errors[$nomChamps] = $formMessage["email"];
        } elseif (isset($regles['confirme']) && $valeur !== $_POST[$regles['confirme']]) {
            $errors[$nomChamps] = $formMessage["confirme"];
        }
    }
}
