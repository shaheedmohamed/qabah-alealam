<!DOCTYPE html>
<html lang="en">
<head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Product List</title>
     <style>
          body {
               font-family: Arial, sans-serif;
               background-color: #f4f7fa;
               display: flex;
               flex-direction: column;
               align-items: center;
               padding: 20px;
          }
          .navbar {
               background-color:white;
               color: black;
               width: 100%;
               padding: 15px;
               text-align: center;
          }
          .navbar a {
               color: black;
               text-decoration: none;
               margin: 0 15px;
               font-weight: bold;
          }
          .navbar a:hover {
               text-decoration: underline;
          }
          .product-card {
               background-color: #fff;
               width: 450px;
               height: 400px;
               border-radius: 8px;
               box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
               overflow: hidden;
               transition: transform 0.2s;
               text-align: center;
               margin-bottom: 20px;
          }
          .product-card img {
               width: 400px;
               height: 200px;
               object-fit: cover;
          }
          .product-card:hover {
               transform: translateY(-5px);
          }
          .product-content {
               padding: 15px;
          }
          .product-title {
               font-size: 1.2em;
               font-weight: bold;
               color: #333;
               margin: 0;
          }
          .product-description {
               font-size: 0.9em;
               color: #666;
               margin: 10px 0;
          }
          .no-products {
               font-size: 1.2em;
               color: #ff0000; /* لون أحمر لرسالة عدم وجود منتجات */
          }
          #back{
               color: Blue;
               text-decoration: none;
               margin: 0 15px;
               font-weight: bold;
          }
          #back:hover{
               color: black;
               background-color: #9999;
               transition: .1s;
          }
     </style>
</head>
<body>




<?php
// اتصال بقاعدة البيانات
$conn = new mysqli('localhost', 'root', '', 'productDB');
if ($conn->connect_error) {
     die("<script>alert('Connection failed: " . $conn->connect_error . "');</script>");
}

// جلب جميع المنتجات
$sql = "SELECT name, description, image_path FROM products";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
     while($row = $result->fetch_assoc()) {
          echo "<div class='product-card'>";
          echo "<img src='" . htmlspecialchars($row['image_path']) . "' alt='Product Image' />";
          echo "<div class='product-content'>";
          echo "<h3 class='product-title'>" . htmlspecialchars($row['name']) . "</h3>";
          echo "<p class='product-description'>" . htmlspecialchars($row['description']) . "</p>";
          echo "</div></div>";
     }
} else {
     echo "<div class='no-products'>No products available.</div>";
     echo "";
}
$conn->close();
?>

</body>
</html>