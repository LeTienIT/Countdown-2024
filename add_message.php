<?php
        require('../include/global.php');

        header('Content-Type: application/json');

        $content = $_POST['content'];
        if (empty($content)) {
            echo json_encode(["success" => false, "message" => "Lời nhắn trống, vui lòng nhập 1 lời nhắn trước khi thêm"]);
        } else {
            $sql = "INSERT INTO `z_message`(`content`) VALUES ('$content')";
            $result = $db->rawQuery($sql);
            echo json_encode(["success" => true, "message" => "Lời chúc của bạn đã được thêm, bây giờ những người khác có thể đọc nó"]);
        }
?>
