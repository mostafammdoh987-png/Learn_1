var productCode = document.getElementById("productCode");
var productPrice = document.getElementById("productPrice");
var productCategory = document.getElementById("productCategory");
var productDesc = document.getElementById("productDesc");
var addBtn = document.getElementById("addBtn");
var updateBtn = document.getElementById("updateBtn");
var tableBody = document.getElementById("tableBody");
var searchInput = document.getElementById("searchInput");
var productList = [];
var updateIndex = null;
// Load from localStorage
if (localStorage.getItem("product")) {
productList = JSON.parse(localStorage.getItem("product"));
displayProduct(productList);
}
// Add Product
addBtn.addEventListener("click", function () {
if (
!productCode.value ||
!productPrice.value ||
!productCategory.value ||
!productDesc.value
) {
alert("Please fill all fields");
return;
}

var product = {
code: productCode.value,
price: productPrice.value,
category: productCategory.value,
desc: productDesc.value,
};
productList.push(product);
localStorage.setItem("product", JSON.stringify(productList));
displayProduct(productList);
clearData();
});
// Update Product
updateBtn.addEventListener("click", function () {
var product = {
code: productCode.value,
price: productPrice.value,
category: productCategory.value,
desc: productDesc.value,
};
productList.splice(updateIndex, 1, product);
localStorage.setItem("product", JSON.stringify(productList));
displayProduct(productList);
clearData();
updateBtn.classList.add("hidden");
addBtn.classList.remove("hidden");
});
// Display Products
function displayProduct(list) {
var html = "";
for (var i = 0; i < list.length; i++) {
html += `<tr>
<td>${i + 1}</td>
<td>${list[i].code}</td>
<td>${list[i].price}</td>
<td>${list[i].category}</td>
<td>${list[i].desc}</td>
<td>
<button onclick="setUpdateProduct(${i})">Update</button>
<button onclick="deleteProduct(${i})">Delete</button>

Page 109
</td>
</tr>`;
}
tableBody.innerHTML = html;
}
// Clear Form
function clearData() {
productCode.value = "";
productPrice.value = "";
productCategory.value = "";
productDesc.value = "";
}
// Delete Product
function deleteProduct(index) {
productList.splice(index, 1);
localStorage.setItem("product", JSON.stringify(productList));
displayProduct(productList);
}
// Set Product to Update
function setUpdateProduct(index) {
productCode.value = productList[index].code;
productPrice.value = productList[index].price;
productCategory.value = productList[index].category;
productDesc.value = productList[index].desc;
addBtn.classList.add("hidden");
updateBtn.classList.remove("hidden");
updateIndex = index;
}
// Search Product
searchInput.addEventListener("input", function () {
var term = searchInput.value.toLowerCase();
var matched = productList.filter((p) =>
p.code.toLowerCase().includes(term));
displayProduct(matched);
});