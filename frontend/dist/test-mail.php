<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// test email
$to = "hello@putusproduction.com";
$subject = "Test Email from PHP";
$message = "This is a test email from Hostinger PHP setup.";
$headers = "From: no-reply@putusproduction.com";

if (mail($to, $subject, $message, $headers)) {
  echo "✅ Test email sent successfully.";
} else {
  echo "❌ Failed to send test email.";
}
?>
