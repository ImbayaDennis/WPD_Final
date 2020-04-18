<?php
    include_once 'db_conn.php';

    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $sql = "INSERT INTO contact_info (uname, email, info) VALUES ('$name', '$email', '$message');";

    if($name && $email && $message != null || $name && $email && $message != " ")
    {
        $state = mysqli_query($conn, $sql);
    }
    
    if($state)
    {
        header("Location: message_success.php?mesage=success");
    }
    else
    {
        header("Location: message_fail.php?message=fail");
    }

