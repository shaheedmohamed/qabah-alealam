<?php
$conn = new mysqli("localhost", "username", "password", "products");

$result = $conn->query("SELECT * FROM products");
?>

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>المنتجات</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
<h2>المنتجات المتاحة</h2>
<div class="product-grid">
     <?php while ($row = $result->fetch_assoc()): ?>
          <div class="product-card">
               <img src="<?php echo $row['image_path']; ?>" alt="Product Image">
               <h3><?php echo $row['name']; ?></h3>
               <p><?php echo $row['description']; ?></p>
          </div>
     <?php endwhile; ?>
</div>
<?php $conn->close(); ?>
</body>
</html>
