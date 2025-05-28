
// - Tìm các hàm tương tác với mảng: CRUD (Create, Read, Update, Delete) các phần tử trong mảng
/*

push(): Thêm phần tử vào cuối mảng
pop(): Xóa phần tử ở cuối mảng
concat(): Nối các mảng với nhau
join(): Tạo ra chuỗi chứa các phần tử từ mảng
splice(): Thêm, xóa, sửa

let names = ["Ling", "Phú", "C04", "Abc"]; // array
// names.splice(1, 1); // (<vị trị bắt đầu>, <số lượng phần tử muốn xóa>) // xóa
// names.splice(1, 0, "Lộc"); // chèn
// names.splice(2, 0, "Bình");
names.splice(2, 1, "Bình"); // Sửa
console.log(names);

// map, forEach, filter, find, findIndex, reduce,...: hàm duyệt mảng (Tìm hiểu thêm)
names.map(item => console.log(item));

*/

// let names = ["Ling", "Phú", "C04", "Abc"]; // array
// console.log(names);
// let str = names.join(";"); // "Ling-Phú-C04"
// console.log("str: " + str);
// console.log(names); //  ['Ling', 'Phú', 'C04', 'Abc']

// names.push("TDVL"); // unshift(): Thêm đầu mảng
// names.pop(); // shift(): xóa phẩn tử đầu mảng
// let names_2 = ["TD", "VL", "C"];
// let names_3 = names.concat(names_2);
// console.log(names_3);
// console.log(names)

/*
Hoàn thành các bài sau: (30p)
Cho một mảng [1,7,5,9,2,6,7,9,7]
- In ra các phần tử trong mảng.
- In ra các phần tử chẵn trong mảng.
- In ra các phần tử tại vị trí chẵn trong mảng.
- Cho người dùng nhập vào 1 số và in ra số lần xuất hiện của số đó trong mảng.
// let numbers = [1, 7, 5, 9, 2, 6, 7, 9, 7];
// let n = +prompt("Nhập số cần kiểm tra: ");
// let count = 0;
// for (let i = 0; i < numbers.length; i++) {
//     if (n === numbers[i]) {
//         count++;
//     }
// }
// console.log("Số lần xuất hiện của số " + n + " là: " + count);

// for (let i = 0; i < numbers.length; i++) {
//     if (i % 2 == 0) {
//         console.log(numbers[i]);
//     }
// }

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 == 0) {
//         console.log(numbers[i]);
//     }
// }

*/








/*
Array (Mảng): là biến đặc biệt chứa các dữ "liệu liên quan đến nhau"
Cách khai báo:
   let <ten_mang> = [<phan_tu>, <phan_tu_2>,....]
   let scores = new Array(4, 5, 10, 0); // Cách khai báo khác (ít sử dụng)

- Chỉ số mảng (index): Vị trí của các giá trị trong mảng bắt đầu từ 0
- Phần tử (element): là các giá trị trong mảng
- Cách truy xuất phần tử trong mảng: <ten_mang>[<index>]
- Cách gán lại giá trị cho 1 phần tử trong mảng: <ten_mang>[<vi_tri] = <giá trị muốn gán lại>
- Độ dài mảng (length): Số lượng phần tử có trong mảng

Note:
- Trong JS thì các phần tử không cần cùng kiểu dữ liệu
let a = "a";
a = 1;
a = true;
let array = [1, true, "hello"];

Ví dụ:
let name_1 = "Linh";
let name_2 = "Cường";
let numbers = [1, 3, 4, 5.6]; // Tập số nguyên 
// name => c04
let nameStudentOfC04Class = ["Linh", "Cường", "Bảo Anh", "Quốc Anh"]; // Tập các tên
// Chỉ số mảng:               0        1         2           3
// VỊ trí cuối: length - 1 
// Phần tủ:                  "Linh"   "Cường" "Bảo Anh"  "Quốc Anh"
// Độ dài: 4
// Cách truy xuất phần tử trong mảng  
console.log(nameStudentOfC04Class[0]); // "Linh"
console.log(nameStudentOfC04Class[1]); // "Cương"
console.log(nameStudentOfC04Class.length); // Lấy ra độ dài mảng: 4
nameStudentOfC04Class[0] = "TDVL";
console.log(nameStudentOfC04Class[0]);



// Sử dụng for để duyệt mảng
let nameStudentOfC04Class = ["Linh", "Cường", "Bảo Anh", "Quốc Anh", "Abc", "Lâm"];
// Chỉ số mảng:               0        1         2           3 (i)
for(let i = 0; i < nameStudentOfC04Class.length; i++)  { // i < 4 
    console.log(nameStudentOfC04Class[i]); 
} 

*/


// let x = [1, 3, 4, 7]; // x.length = 4
// //       0  1  2  3
// let y = [2, 4, 6]; 
// //      0   1
// x[2] = y[x.length - 3]; // y[1] = 3
// console.log(x);


// let x = [1, 3, 5, 7];
// let y = [2, 4, 6];
// //       0  1  2
// x[2] = y[1]+ x[x[0] + y[0]]; // 11 : .... + 7
// console.log(x);


// let x = [];
// for (var i = 0; i < 10; i++) { // i -> 9
//     x.push(i * 2); // [0, 2, 4, 6, 8]
// }
// console.log(x); // [0,2,4,6,8,10,12,14,16,18]

let x = [1, 3, 5, 8]; // 0 0
for (let i = 2; i < x.length; i++) {
    if (x[i] > 1) {
        x[i] = 0;
    }
}
console.log(x); // [1, 3 , 0 , 0]













