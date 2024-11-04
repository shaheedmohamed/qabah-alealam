<?php
// اتصال بقاعدة البيانات
$conn = new mysqli('localhost', 'root', '', 'productDB');
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// التحقق من ID المنتج
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['productId'])) {
    $productId = $_POST['productId'];

    // جلب بيانات المنتج
    $sql = "SELECT name, description, image_path FROM products WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $productId);
    $stmt->execute();
    $result = $stmt->get_result();
    $product = $result->fetch_assoc();
    $stmt->close();
}

// تحديث بيانات المنتج
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['update'])) {
    $productId = $_POST['productId'];
    $productName = htmlspecialchars($_POST['productName']);
    $description = htmlspecialchars($_POST['description']);
    $productImage = $_FILES['productImage'];

    if (!empty($productImage['name'])) {
        $uploadDir = 'uploads/';
        $uploadFile = $uploadDir . basename($productImage['name']);
        move_uploaded_file($productImage['tmp_name'], $uploadFile);
    } else {
        $uploadFile = $product['image_path'];
    }

    $updateQuery = "UPDATE products SET name = ?, description = ?, image_path = ? WHERE id = ?";
    $stmt = $conn->prepare($updateQuery);
    $stmt->bind_param("sssi", $productName, $description, $uploadFile, $productId);
    $stmt->execute();
    $stmt->close();

    echo "<script>alert('Product updated successfully!');</script>";
    echo "<script>window.location.href = 'manage_products.php';</script>";
}

$conn->close();
?>
