<?php
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "products";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $description = $_POST['description'];

    // تحقق من تحميل الملف
    if (isset($_FILES["image"]) && $_FILES["image"]["error"] == 0) {
        $imagePath = 'uploads/' . basename($_FILES["image"]["name"]);
        if (move_uploaded_file($_FILES["image"]["tmp_name"], $imagePath)) {
            $stmt = $conn->prepare("INSERT INTO products (name, description, image_path) VALUES (?, ?, ?)");
            $stmt->bind_param("sss", $name, $description, $imagePath);
            $stmt->execute();
            $stmt->close();
            echo "تم إضافة المنتج بنجاح!";
        } else {
            echo "فشل في رفع الملف.";
        }
    } else {
        echo "لم يتم اختيار ملف صحيح.";
    }
}
$conn->close();
?>
