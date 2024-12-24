<?php
    require('../include/global.php');

    $sql = "SELECT * FROM `z_message` ORDER BY RAND() LIMIT 1";
    $result = $db->rawQuery($sql);
    if ($result) {
        echo json_encode(["success" => true, "message" => $result]);
    } else {
        echo json_encode(["success" => false, "message" => 'No records found']);
    }