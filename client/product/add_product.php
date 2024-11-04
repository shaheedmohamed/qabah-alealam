<?php
$servername = "localhost";
$username = "root"; // تأكد من أن هذا هو اسم المستخدم الصحيح
$password = ""; // تأكد من أن هذه هي كلمة المرور الصحيحة (افتراضيًا، XAMPP لا يضع كلمة مرور لمستخدم "root")
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



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>إضافة منتج</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h2>إضافة منتج</h2>
    <form id="productForm" action="upload_product.php" method="POST" enctype="multipart/form-data">
        <label>اسم المنتج:</label>
        <input type="text" name="name" required>
        
        <label>وصف المنتج:</label>
        <textarea name="description" required></textarea>

        <label>صورة المنتج:</label>
        <input type="file" name="image" required>

        <div id="progressContainer">
            <progress id="progressBar" value="0" max="100"></progress>
        </div>

        <button type="submit">إضافة المنتج</button>
    </form>
    
    <script src="upload_progress.js"></script>
</body>
</html>
