<?php
header('Content-Type: application/json');

// Allow CORS dynamically
$allowedOrigins = [
  'https://putusproduction.com',
  'https://www.putusproduction.com',
  'http://localhost:5173'
];

if (isset($_SERVER['HTTP_ORIGIN']) && in_array($_SERVER['HTTP_ORIGIN'], $allowedOrigins)) {
    header('Access-Control-Allow-Origin: ' . $_SERVER['HTTP_ORIGIN']);
}

header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit(0);
}

// Only handle POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'error' => 'Invalid request']);
    exit;
}

// 🧩 Determine form type correctly
if (isset($_POST['formType'])) {
    $formType = trim($_POST['formType']);
} elseif (isset($_POST['subscribe'])) {
    $formType = 'subscribe';
} else {
    $formType = 'contact';
}

// Get and sanitize form inputs
$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$phone = trim($_POST['phone'] ?? '');
$message = trim($_POST['message'] ?? '');

// Basic validation
if (empty($email)) {
    echo json_encode(['success' => false, 'error' => 'Email is required']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'error' => 'Invalid email format']);
    exit;
}

// 1️⃣ Determine subject and body
if ($formType === 'subscribe') {
    $subject = "New Subscription Request";
    $body = "New subscriber details:\n\n"
          . "Name: $name\n"
          . "Email: $email\n"
          . "Subscribed On: " . date('Y-m-d H:i:s');
} else {
    $subject = "New Contact Form Submission";
    $body = "Name: $name\n"
          . "Email: $email\n"
          . "Phone: $phone\n"
          . "Message: $message\n"
          . "Submitted On: " . date('Y-m-d H:i:s');
}

// 2️⃣ Send Email
$to = "hello@putusproduction.com";
$headers = "From: no-reply@putusproduction.com\r\n";
$headers .= "Reply-To: $email\r\n";

$mailSuccess = mail($to, $subject, $body, $headers);

// 3️⃣ Save to CSV file
$fileName = ($formType === 'subscribe') ? 'subscribe_submissions.csv' : 'contact_submissions.csv';
$file = __DIR__ . '/' . $fileName;
$data = [$name, $email, $phone, $message, date('Y-m-d H:i:s')];
$fp = fopen($file, 'a');
if ($fp) {
    fputcsv($fp, $data);
    fclose($fp);
}

// 4️⃣ Response
if ($mailSuccess) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'error' => 'Mail sending failed']);
}
?>
