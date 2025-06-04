/*
Hàm: là 1 khối các lệnh thực hiện 1 tác vụ (tính năng) nào đó.
Hàm, Function, Phương thức, Method

// Khai báo hàm;
function <ten_ham>() {
    <khoi_lenh_thu_thi>
}

note: Tên hàm thì được viết theo kiểu camelCase, và là động từ

function goProgram() {
    alert("Hello world");
}

// Cách sử dụng hàm
<ten_ham>();

goProgram();

// THAM SỐ TRUYỀN VÀO: các biến trong dấu ngoặc tròn, các giá trị định mà hàm cần sử dụng
// Không giới số lượng tham số truyền vào
function showInfo(name, age) { // name: được gọi là tham số truyền vào
    alert("Hello " + name + " có tuổi " + age); // sử dụng tham số truyền vào
}

// "Lâm", "Quân" là giá trị thực mà hàm sẽ sử dụng để thây thế cho tham số truyền vào là ĐỐI SỐ truyền vào hàm
// Số lượng đối số thì sẽ cần bằng số lượng tham số truyền vào
showInfo("Lâm", 18); // name = "Lâm", age = 18
showInfo("Quân", 17); // name = "Quân", age = 17

// return (trả về): từ khóa sử dụng để TRẢ VỀ giá trị cho hàm.
function getAvg(a, b) {
    let avg = (a + b) / 2;
    // console.log("avg", avg); // hiển thị
    return avg; // trả ra avg
}

let a1 = 1;
let b1 = 11;
// showAvg(a1, b1);

let c = getAvg(a1, b1); // tính trung bình cộng a và b sau đó gán giá trị đó cho biến c 
console.log("c", c);
*/


/* 
Viết hàm nhận vào 2 tham số a và b, trả về tích từ a đến b 
- Sử dụng với a và b lần lượt là (5, 7), (11, 15)

function tichADenB(a, b) {
    let tich = 1;
    for (let i = a; i <= b; i++) {
        tich *= i;
    }
    return tich;
}

let a = 11;
let b = 15;
let c = tichADenB(a, b);
console.log(c);
*/



// Khi gặp từ khóa từ khóa return thì ngay lập tức dừng hàm và trả về
// 1 hàm thì chỉ có 1 giá trị trả về.

// function getAvg(a, b) {
//     let avg = (a + b) / 2;
//     return avg;
// }

// let a1 = 1;
// let b1 = 11;
// let c = getAvg(a1, b1); // 6
// console.log(c);

// function getData() {
//     let a = 0;
//     for (let i = 1; i < 10; i++) {
//         a = i;
//         if (a == 5) return a;
//     }
//     console.log("Hello");
//     return a;
// }

// let b = getData();
// console.log(b);

// - Tạo hàm show() để hiển thị "Hello".
// - Tạo hàm tinhTong(a, b) tính tổng 2 số và hiển thị ra màn hình.
// - Tạo hàm tinhTong(a, b) tính tổng 2 số và return về tổng đó.
// https://james.codegym.vn/mod/assign/view.php?id=15502


/*
Biến toàn cục:là biến không nằm trong nằm khối nào cả, phạm vi sử dụng từ lúc khai báo đến hết chương trình
Biến cục bộ: Các biến nằm trong 1 khối nào đó, phạm vi sử đụn sẽ từ lúc khai báo đến hết khối

*/
// console.log(a);
// let a = 10;
// console.log(a);

// for (let i = 0; i < 10; i++) {
//     let a = 11;
//     console.log(a)
//     console.log(i)
// }

// console.log(i);
// console.log(a);


// function hello() {
//     let a = 10;
// }

// hello();
// console.log(a);
// Một biến không thể khởi tạo quá 1 lần khi ở cùng phạm vi
// 2 Biến nếu khác phạm vi mà cùng tên thì luôn ưu tiên biến ở trong phạm vị của đoạn code cần sử dụng
// let a = "Hi";
// if (true) {
//     let a = "Hello";
//     console.log(a);
// }

// console.log(a);

// function go(a) { // a: tham số truyền vào, biến cục bộ ở trong hàm go()
//     console.log(a);
// }

// let a = 2;

/*
Phân biệt let, var và const

let:
- Không thể khai báo lại biến (ở cùng 1 phạm vi)
- Không cho phép sử dụng biến trước khi khai báo
- Phạm vi của let Block scope

var:
- Có thể khai báo lại biến (cơ chế hosting)
- Có thế sử dụng trước khi khai báo.
- Phạm vi của var là Function scope

const:
- Tương tự let nhưng không cho phép gán lại giá trị

*/

// if (true) {
//     var a = 10;
// }
// console.log(a);


// function test() {
//     var a = 10;
// }
// console.log(a)

// var a = 10;
// // 1000 dòng
// var a = 20;
// console.log(a);

// console.log(a); // undefined
// a++;
// a = a + 1;
// var a = 10;


/*
Block scope: các biến được khai báo trong các khối không phải là function

Function scope: các biến có phạm vi ở trong cùng 1 function
*/

// if(true) {
//     let a = 5; // block scope
// }

// while(false) {
//     let b = 10; // block scope
// }

// function go() {
//     let c = 20; // function scope
//     let d = 21; // function scope
//     if(true) {
//         let e = 21; // block scope
//     }
// }

// các cách khai báo hàm

// let a = 'g';

// add("vu", "linh")

function test(a) {
    if (a == 2) return 2;
    return a * test(a - 1); // đệ quy
}

test(5);

/*
test(5)  = 120
   5 * 24
                
*/


// function test() {
//     test2(); // Gọi hàm khác ở trong hàm
//     console.log("Hello Linh") // hàm 
// }

// function test2() {
//     console.log("Hello world")
// }

// test();