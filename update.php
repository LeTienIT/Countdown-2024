<?php

    require('../include/global.php');

    header('Content-Type: application/json');

    $id = $_GET['id'];
    $sql = "UPDATE `z_message` SET `status`='1' WHERE `id`='$id'";
    $result = $db->rawQuery($sql);
    echo json_encode(["success" => true, "message" => "Cập nhật lời chúc $id thành công"]);

?>
