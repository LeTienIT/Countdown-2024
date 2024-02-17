<?php
    $id = $_GET['id'];
    $conn = mysqli_connect("localhost","root","","count_down");
    mysqli_query($conn,"SET NAME 'utf8'");
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    $sql = "UPDATE `message` SET `status`='1' WHERE `id`='$id'";
    $result = mysqli_query($conn,$sql);
    if($result > 0 )
    {
        echo "Cập nhật lời chúc "+$id+" thành công";
    }
    else
    {
        echo "Lỗi câoj nhật status";
    }
    $conn->close();