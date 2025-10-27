<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);

if (!$data || !isset($data['name']) || !isset($data['email']) || !isset($data['message'])) {
    echo json_encode(["success" => false, "error" => "Invalid request"]);
    exit;
}

$name = htmlspecialchars($data['name']);
$email = htmlspecialchars($data['email']);
$message = htmlspecialchars($data['message']);

$to = "hello@putusproduction.com";
$subject = "New Contact Form Submission from $name";
$body = "You received a new message:\n\nName: $name\nEmail: $email\nMessage:\n$message\n";

$headers = "From: no-reply@putusproduction.com\r\n";
$headers .= "Reply-To: $email\r\n";

if (mail($to, $subject, $body, $headers)) {
    echo json_encode(["success" => true, "message" => "Message sent successfully!"]);
} else {
    echo json_encode(["success" => false, "error" => "Failed to send email."]);
}
?>
