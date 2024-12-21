<?php
$api_url = "https://erp.vnconference.com/api/method/api_lt.api.post.countdown2025.get_random_row";

$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, $api_url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); 
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
]);

$response = curl_exec($ch);

if (curl_errno($ch)) {
    echo 'Error:' . curl_error($ch);
} else {
    $data = json_decode($response, true);
    if (isset($data['status'])) {
        if ($data['status'] === 'success') {
            echo json_encode($data['message']['message']); 
        } elseif ($data['status'] === 'no record') {
            echo json_encode("Năm mới an khang thịnh vượng, sức khỏe dồi dào, gia đình hạnh phúc.");
        } else {
            echo json_encode("^_^");
        }
    } else {
        echo json_encode("^-^");
    }
}

// Đóng cURL
curl_close($ch);
