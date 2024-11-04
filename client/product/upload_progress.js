document.getElementById('productForm').onsubmit = function (e) {
     e.preventDefault();
     const formData = new FormData(this);
     const xhr = new XMLHttpRequest();
 
     xhr.upload.onprogress = function (e) {
         if (e.lengthComputable) {
             const percent = (e.loaded / e.total) * 100;
             document.getElementById('progressBar').value = percent;
         }
     };
 
     xhr.onload = function () {
         if (xhr.status === 200) {
             alert("تم رفع المنتج بنجاح!");
             window.location.href = 'products_page.php';
         }
     };
 
     xhr.open('POST', 'upload_product.php', true);
     xhr.send(formData);
 };
 