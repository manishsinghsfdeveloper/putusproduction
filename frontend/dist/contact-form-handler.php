<?php
header('Content-Type: application/json');

// Allow requests from your frontend
header('Access-Control-Allow-Origin: https://putusproduction.com');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Only handle POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'error' => 'Invalid request']);
    exit;
}

// Get and sanitize form inputs
$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$phone = $_POST['phone'] ?? '';
$message = $_POST['message'] ?? '';
$subscribe = $_POST['subscribe'] ?? false;

if (empty($name) || empty($email)) {
    echo json_encode(['success' => false, 'error' => 'Missing required fields']);
    exit;
}

// 1️⃣ Send Email
$to = "hello@putusproduction.com";
$subject = $subscribe ? "New Subscriber" : "New Contact Form Submission";
$body = "Name: $name\nEmail: $email\nPhone: $phone\nMessage: $message";
$headers = "From: no-reply@putusproduction.com\r\nReply-To: $email\r\n";

$mailSuccess = mail($to, $subject, $body, $headers);

// 2️⃣ Save to CSV file
$file = __DIR__ . '/contact_submissions.csv';
$data = [$name, $email, $phone, $message, date('Y-m-d H:i:s')];
$fp = fopen($file, 'a');
fputcsv($fp, $data);
fclose($fp);

if ($mailSuccess) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'error' => 'Mail sending failed']);
}
?>
