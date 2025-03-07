<?php
    $username = $_POST['username'] ;
    $password = $_POST['password'] ;

   if ($username == '') {
       echo 'emptyUsername';
   } elseif ($password == '') {
       echo 'emptyPassword';
   } else {
       echo 'ok';
   }