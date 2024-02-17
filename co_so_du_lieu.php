<?php
    $conn = mysqli_connect("localhost","root","","count_down");
    mysqli_query($conn,"SET NAME 'utf8'");
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    $sql = "SELECT * FROM `message` ORDER BY RAND() LIMIT 1";
    $result = mysqli_query($conn,$sql);
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        echo json_encode($row);
    } else {
        echo json_encode(array('error' => 'No records found'));
    }
    $conn->close();