<!DOCTYPE html>
<html lang="en" data-bs-theme="auto">
  <head>
    <script src="../js/color-modes.js"></script>
    <link
      rel="stylesheet"
      href="../bootstrap-icons-1.10.5/font/bootstrap-icons.min.css"
    />
    <link rel="shortcut icon" href="../img/ali.png" type="image/x-icon">

    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="" />
    <meta
      name="author"
      content="Mark Otto, Jacob Thornton, and Bootstrap contributors"
    />
    <meta name="generator" content="Hugo 0.112.5" />
    <title>manage product</title>

    <link href="../css/bootstrap.min.css" rel="stylesheet" />

    <style>
      .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }

      .b-example-divider {
        width: 100%;
        height: 3rem;
        background-color: rgba(0, 0, 0, 0.1);
        border: solid rgba(0, 0, 0, 0.15);
        border-width: 1px 0;
        box-shadow: inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
          inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
      }

      .b-example-vr {
        flex-shrink: 0;
        width: 1.5rem;
        height: 100vh;
      }

      .bi {
        vertical-align: -0.125em;
        fill: currentColor;
      }

      .nav-scroller {
        position: relative;
        z-index: 2;
        height: 2.75rem;
        overflow-y: hidden;
      }

      .nav-scroller .nav {
        display: flex;
        flex-wrap: nowrap;
        padding-bottom: 1rem;
        margin-top: -1px;
        overflow-x: auto;
        text-align: center;
        white-space: nowrap;
        -webkit-overflow-scrolling: touch;
      }

      .btn-bd-primary {
        --bd-violet-bg: #712cf9;
        --bd-violet-rgb: 112.520718, 44.062154, 249.437846;

        --bs-btn-font-weight: 600;
        --bs-btn-color: var(--bs-white);
        --bs-btn-bg: var(--bd-violet-bg);
        --bs-btn-border-color: var(--bd-violet-bg);
        --bs-btn-hover-color: var(--bs-white);
        --bs-btn-hover-bg: #6528e0;
        --bs-btn-hover-border-color: #6528e0;
        --bs-btn-focus-shadow-rgb: var(--bd-violet-rgb);
        --bs-btn-active-color: var(--bs-btn-hover-color);
        --bs-btn-active-bg: #5a23c8;
        --bs-btn-active-border-color: #5a23c8;
      }
      .bd-mode-toggle {
        z-index: 1500;
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

    <!-- Custom styles for this template -->
    <link href="../css/sidebars.css" rel="stylesheet" />
    <link rel="stylesheet" href="../css/myStyle.css" />
  </head>
  <body>
    <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
      <symbol id="check2" viewBox="0 0 16 16">
        <path
          d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
        />
      </symbol>
      <symbol id="circle-half" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
      </symbol>
      <symbol id="moon-stars-fill" viewBox="0 0 16 16">
        <path
          d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"
        />
        <path
          d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"
        />
      </symbol>
      <symbol id="sun-fill" viewBox="0 0 16 16">
        <path
          d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"
        />
      </symbol>
    </svg>

    <div
      class="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle"
    >
      <button
        class="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center"
        id="bd-theme"
        type="button"
        aria-expanded="false"
        data-bs-toggle="dropdown"
        aria-label="Toggle theme (auto)"
      >
        <svg class="bi my-1 theme-icon-active" width="1em" height="1em">
          <use href="#circle-half"></use>
        </svg>
        <span class="visually-hidden" id="bd-theme-text">Toggle theme</span>
      </button>
      <ul
        class="dropdown-menu dropdown-menu-end shadow"
        aria-labelledby="bd-theme-text"
      >
        <li>
          <button
            type="button"
            class="dropdown-item d-flex align-items-center"
            data-bs-theme-value="light"
            aria-pressed="false"
          >
            <svg class="bi me-2 opacity-50 theme-icon" width="1em" height="1em">
              <use href="#sun-fill"></use>
            </svg>
            Light
            <svg class="bi ms-auto d-none" width="1em" height="1em">
              <use href="#check2"></use>
            </svg>
          </button>
        </li>
        <li>
          <button
            type="button"
            class="dropdown-item d-flex align-items-center"
            data-bs-theme-value="dark"
            aria-pressed="false"
          >
            <svg class="bi me-2 opacity-50 theme-icon" width="1em" height="1em">
              <use href="#moon-stars-fill"></use>
            </svg>
            Dark
            <svg class="bi ms-auto d-none" width="1em" height="1em">
              <use href="#check2"></use>
            </svg>
          </button>
        </li>
        <li>
          <button
            type="button"
            class="dropdown-item d-flex align-items-center active"
            data-bs-theme-value="auto"
            aria-pressed="true"
          >
            <svg class="bi me-2 opacity-50 theme-icon" width="1em" height="1em">
              <use href="#circle-half"></use>
            </svg>
            Auto
            <svg class="bi ms-auto d-none" width="1em" height="1em">
              <use href="#check2"></use>
            </svg>
          </button>
        </li>
      </ul>
    </div>

    <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
      <symbol id="home" viewBox="0 0 16 16">
        <path
          d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"
        />
      </symbol>

      <symbol id="people-circle" viewBox="0 0 16 16">
        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
        <path
          fill-rule="evenodd"
          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
        />
      </symbol>
    </svg>

    <main class="d-flex flex-nowrap">
      <div
        id="sidebarId"
        class="position-relative d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar"
      >
        <span style="right: 10px; top: 2px" class="position-absolute">
          <button class="btn" onclick="toggleSidebar()">
            <i class="bi bi-x-circle"></i>
          </button>
        </span>

        <a
          href="/"
          class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <i class="bi bi-lightning-charge"></i>
          <span class="fs-4 sidebar-text mt-3">Manage Product</span>
        </a>
        <hr />
        <ul class="nav nav-pills flex-column mb-auto">
          <li class="nav-item">
            <a href="../user/add.html" class="nav-link  text-white" aria-current="page">
              <svg class="bi pe-none me-2" width="16" height="16">
                <use xlink:href="#home" />
              </svg>
              <span class="sidebar-text"> Home </span>
            </a>
          </li>

          <li>
            <a href="../pro/dash_up.php" class="nav-link text-white">
              <svg class="bi pe-none me-2" width="16" height="16">
                <use xlink:href="#people-circle" />
              </svg>
              <span class="sidebar-text"> Add Product </span>
            </a>
          </li>
        </ul>
        <hr />
        
      </div>

      <div class="b-example-divider b-example-vr"></div>

      <section class="w-100">
        
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
      </section>
    </main>
    <script src="../js/bootstrap.bundle.min.js"></script>

    <script src="../js/sidebars.js"></script>
    <script src="../js/main.js"></script>
  </body>
</html>
