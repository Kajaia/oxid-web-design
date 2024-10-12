<?php

// Function to return view depending page
function view(string $name): mixed
{
    return include_once "../pages/{$name}.php";
}

// Switch case for urls to return views
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
