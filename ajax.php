<?php

$username   = $_POST['username'];
$password   = $_POST['password'];
$phone      = $_POST['phone'];
$address    = $_POST['address'];


if (empty($username)) {
    echo "emptyUsername";
} elseif (empty($password)) {
    echo "emptyPassword";
} elseif (empty($phone)) {
    echo "emptyPhone";
} elseif (empty($address)) {
    echo "emptyAddress";
} else {
    echo "ok";
}


