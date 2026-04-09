<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=UTF-8');
header('Cache-Control: no-store');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput ?: '{}', true);

if (!is_array($data)) {
    $data = $_POST;
}

function clean_value($value, int $limit = 4000): string
{
    $text = trim((string) $value);
    $text = str_replace(["\r", "\0"], '', $text);
    return substr($text, 0, $limit);
}

$name = clean_value($data['name'] ?? '', 120);
$email = clean_value($data['email'] ?? '', 160);
$phone = clean_value($data['phone'] ?? '', 80);
$service = clean_value($data['service'] ?? '', 120);
$budget = clean_value($data['budget'] ?? '', 120);
$message = clean_value($data['message'] ?? '', 4000);
$company = clean_value($data['company'] ?? '', 120);
$submittedAt = clean_value($data['submittedAt'] ?? gmdate('c'), 64);
$source = clean_value($data['source'] ?? '', 255);

if ($company !== '') {
    echo json_encode(['ok' => true]);
    exit;
}

$errors = [];

if ($name === '') {
    $errors['name'] = 'Name is required.';
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors['email'] = 'A valid email is required.';
}

if ($service === '') {
    $errors['service'] = 'Please choose a service.';
}

if ($budget === '') {
    $errors['budget'] = 'Please choose a budget range.';
}

if ($message === '') {
    $errors['message'] = 'Please add a short project summary.';
}

if (!empty($errors)) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'errors' => $errors]);
    exit;
}

$to = 'hello@excellonline.ca';
$subject = '[Excell Online] ' . ($service !== '' ? $service : 'Project') . ' inquiry from ' . $name;

$bodyLines = [
    'New inquiry from excellonline.ca',
    '',
    'Name: ' . $name,
    'Email: ' . $email,
    'Phone: ' . ($phone !== '' ? $phone : 'Not provided'),
    'Service: ' . $service,
    'Budget: ' . $budget,
    'Submitted at: ' . $submittedAt,
    'Source: ' . ($source !== '' ? $source : 'Unknown'),
    '',
    'Project details:',
    $message,
];

$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'From: Excell Online <hello@excellonline.ca>',
    'Reply-To: ' . $name . ' <' . $email . '>',
    'X-Mailer: PHP/' . phpversion(),
];

$sent = @mail($to, $subject, implode("\n", $bodyLines), implode("\r\n", $headers));

if (!$sent) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Unable to send your message right now.']);
    exit;
}

echo json_encode(['ok' => true]);

