// CRUD: tạo, đọc, sửa, xóa
// Đọc

let productNames = ["Iphone", "Macbook", "Win"];

function add() {
    let newData = document.getElementById("newProduct").value;
    productNames.push(newData);
    getAll();
    document.getElementById("newProduct").value = '';
}

function remove(index) {
    let isConfirm = confirm("Are you sure?");
    if (isConfirm) {
        productNames.splice(index, 1);
        getAll();
    }
}

function getAll() {
    let html = '';
    for (let i = 0; i < productNames.length; i++) {
        html += `
           <tr>
                <td>${productNames[i]}</td>
                <td><button onClick=showEdit(${i})>Edit</button></td>
                <td><button onClick=remove(${i})>Delete</button></td>
            </tr>   
        `
    }
    document.getElementById("data").innerHTML = html;
}

function search() {
    // Step 1: tìm ra sản phẩm người dùng muốn đưa vào mảng productSearch
    let nameSearch = document.getElementById("name-search").value;
    let productSearch = [];
    for (let i = 0; i < productNames.length; i++) {
        if (productNames[i].toLowerCase().includes(nameSearch.toLowerCase())) {
            productSearch.push(productNames[i]);
        }
    }
    // Step Hiển thị vào ul có id show-data
    let html = ``;
    for (let i = 0; i < productSearch.length; i++) {
        html += `<li>${productSearch[i]}</li>`
    }
    document.getElementById("show-data").innerHTML = html;
}

function showEdit(index) {
    document.getElementById("newProduct").value = productNames[index];
    document.getElementById("action").innerHTML = `<button onClick=edit(${index})>Edit</button>`
}

function edit(index) {
    let newData = document.getElementById("newProduct").value;
    if (newData) {
        productNames[index] = newData;
        getAll();
    }
    document.getElementById("newProduct").value = "";
    document.getElementById("action").innerHTML = ` <button onclick="add()">Add</button>`;
}

getAll();




// Tạo 1 ô input cho phép người dùng tìm kiếm theo tên (Nên tạo 1 mảng mới chứa dữ liệu tìm kiếm)
// Tìm gần đúng
// Nhập đến đâu lọc dữ liệu đến đó


// Edit không đùng prompt mà dùng html
// Lưu dữ liệu (local storage)

