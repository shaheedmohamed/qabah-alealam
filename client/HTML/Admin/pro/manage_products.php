<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Manage Products</title>
<style>
     body {
          font-family: Arial, sans-serif;
          background-color: #1c1e26;
          color: #ccc;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          margin: 0;
     }

     /* Sidebar Styling */
     .sidebar {
          position: fixed;
          left: 0;
          top: 0;
          width: 200px;
          height: 100%;
          background-color: #252837;
          padding-top: 20px;
     }

     .sidebar a {
          display: block;
          color: #ccc;
          padding: 10px 20px;
          text-decoration: none;
          font-size: 18px;
     }

     .sidebar a:hover {
          background-color: #333;
          color: #fff;
     }

     /* Content Styling */
     .content {
          margin-left: 220px;
          width: 100%;
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
     }

     .upload-container {
          background-color: #333;
          padding: 20px;
          border-radius: 8px;
          width: 400px;
          text-align: center;
     }

     .upload-container h2 {
          color: #4e8cff;
          font-size: 1.5em;
          margin-bottom: 20px;
     }

     .upload-container label {
          display: block;
          margin-top: 10px;
          color: #ccc;
          text-align: left;
     }

     .upload-container input[type="text"], 
     .upload-container textarea, 
     .upload-container input[type="file"] {
          width: 100%;
          padding: 10px;
          margin-top: 5px;
          border: 1px solid #555;
          border-radius: 4px;
          background-color: #252837;
          color: #ccc;
     }

     .upload-container button {
          background-color: #4e8cff;
          color: #fff;
          border: none;
          padding: 10px 20px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 1em;
          margin-top: 15px;
          width: 100%;
     }

     .upload-container button:hover {
          background-color: #3d7be0;
     }

     /* Product Card Styling */
     .product-card {
          background-color: #252837;
          color: #ccc;
          width: 300px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          overflow: hidden;
          transition: transform 0.2s;
          text-align: center;
          margin: 20px;
     }

     .product-card img {
          width: 100%;
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
          color: #4e8cff;
          margin: 0;
     }

     .product-description {
          font-size: 0.9em;
          color: #ccc;
          margin: 10px 0;
     }

     .button-container {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin: 10px 0;
     }

     .delete-btn {
          background-color: #e74c3c;
          color: #fff;
          padding: 8px 12px;
          font-size: 0.9em;
          cursor: pointer;
          border: none;
          border-radius: 4px;
     }

     .delete-btn:hover {
          background-color: #d43f2f;
     }
</style>
</head>
<body>
<div class="sidebar">
     <a href="#">Manage Product </a>
     <a href="#">Add Product </a>
     <a href="#">Home</a>
</div>

     <!-- Displaying Products -->
     <?php
     $conn = new mysqli('localhost', 'root', '', 'productDB');
     if ($conn->connect_error) {
          die("Connection failed: " . $conn->connect_error);
     }

     if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['delete'])) {
          $productId = $_POST['productId'];
          $deleteQuery = "DELETE FROM products WHERE id = ?";
          $stmt = $conn->prepare($deleteQuery);
          $stmt->bind_param("i", $productId);
          $stmt->execute();
          $stmt->close();
          echo "<script>alert('Product deleted successfully.');</script>";
          echo "<script>window.location.href = 'manage_products.php';</script>";
     }

     $sql = "SELECT id, name, description, image_path FROM products";
     $result = $conn->query($sql);

     if ($result->num_rows > 0) {
          while($row = $result->fetch_assoc()) {
               echo "<div class='product-card'>";
               echo "<img src='" . htmlspecialchars($row['image_path']) . "' alt='Product Image' />";
               echo "<div class='product-content'>";
               echo "<h3 class='product-title'>" . htmlspecialchars($row['name']) . "</h3>";
               echo "<p class='product-description'>" . htmlspecialchars($row['description']) . "</p>";
               echo "<div class='button-container'>";
               echo "<form method='POST' action='' style='display:inline;'>";
               echo "<input type='hidden' name='productId' value='" . $row['id'] . "' />";
               echo "<button type='submit' name='delete' class='delete-btn'>Delete</button>";
               echo "</form>";
               echo "</div></div></div>";
          }
     } else {
          echo "<p style='color: #ccc;'>No products found.</p>";
     }
     $conn->close();
     ?>
</div>
</body>
</html>
