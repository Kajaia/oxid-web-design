<?php

// Route based view
function view(string $name): mixed
{
    return include_once "../pages/{$name}.php";
}

// Simple routes
$requestUri = $_SERVER['REQUEST_URI'];
switch ($requestUri) {
    case '/':
        view('home');
        break;
    case '/about':
        view('about');
        break;
    default:
        view('errors/404');
}
