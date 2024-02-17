<?php
    session_start();
    $conn = mysqli_connect("localhost","root","","count_down");
    mysqli_query($conn,"SET NAME 'utf8'");
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    $content = $_POST['content'];
    if(empty($content))
    {
        echo "Lời nhắn trống, vui lòng nhập 1 lời nhắn trước khi thêm";
    }
    else
    {
        $sql = "INSERT INTO `message`(`content`) VALUES ('$content')";
        $result = mysqli_query($conn,$sql);
        if($result > 0 )
        {
            echo "Lời nhắn của bạn đã được thêm, bây giờ những người khác có thể đọc nó";
        }
        else
        {
            echo "Lỗi";
        }
    }