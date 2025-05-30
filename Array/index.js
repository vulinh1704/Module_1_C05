
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

// let x = [1, 3, 5, 8]; // 0 0
// for (let i = 2; i < x.length; i++) {
//     if (x[i] > 1) {
//         x[i] = 0;
//     }
// }
// console.log(x); // [1, 3 , 0 , 0]

// let numbers = new Array(1, 45, 56.7, 34);



// Cho một mảng [1,7,5,9,2,6]
// let arr = [1, 7, 5, 9, 2, 6];
// - In ra các phần tử trong mảng
// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// - In ra các phần tử chẵn trong mảng
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         console.log(arr[i]);
//     }
// }

// - In ra các phần tử tại vị trí chẵn trong mảng
// for (let i = 0; i < arr.length; i += 2) {
//     console.log(arr[i]);
// }

// - In ra tổng các phần tử chẵn trong mảng
// let tongChan = 0; 
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] % 2 == 0) {
//         tongChan += arr[i];
//     }
// }
// console.log(tongChan);

// - In ra tổng các phần tử > 10 trong mảng
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] > 10) {
//         sum += arr[i];
//     }
// }
// console.log(sum);

// - In ra tổng các phần tử chia 7 dư 2 trong mảng
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 7 == 2) {
//         sum += arr[i];
//     }
// }
// console.log(sum);

// - In ra phần tử lớn nhất (max) của mảng
// let arr = [1, 7, 5, 9, 2, 6];
// // Index   0  1
// let max = arr[0];
// for(let i = 1; i < arr.length; i++) { // i = 1
//     if(arr[i] > max) { // 9 > 7 (true)
//         max = arr[i]; // max = 9
//     }
// }
// console.log("Max: ", max); // 9

// - In ra giá trị lớn nhất của các phần tử chẵn trong mảng

// let arr = [11, 7, 5, 9, -2, -6, 0, 2];
// // Index   0  1   3  4   5
// let viTriSoChanDauTien = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         viTriSoChanDauTien = i;
//         break;
//     }
// }

// if (arr[viTriSoChanDauTien] % 2 == 0) {
//     let max = arr[viTriSoChanDauTien];
//     for (let i = viTriSoChanDauTien; i < arr.length; i++) {
//         if (arr[i] % 2 == 0 && arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     console.log(max);
// } else {
//     console.log("Không có phần tử chẵn trong mảng")
// }


// let max = undefined; // không xác định
// for (let i = 0; i < arr.length; i++) {
//     if (max == undefined) {
//         if (arr[i] % 2 == 0) max = arr[i]; // Lấy giá trị số chẵn ban đầu, max = -2
//     } else { // max != undefined
//         if (arr[i] % 2 == 0 && arr[i] > max) {
//             max = arr[i];
//         }
//     }
// }
// console.log(max);


// - In ra số lượng các phần tử chia hết cho 5 trong mảng
// let count = 0;
// let arr = [11, 7, 5, 9, -2, -6, 0, 2];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 5 == 0) {
//         count++;
//     }
// }
// console.log(count);

// - In ra trung bình các phần tử chia hết cho 5 trong mảng
// let count = 0;
// let sum = 0;
// let arr = [11, 7, 1, 9, -2, -6, 1, 2];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 5 == 0) {
//         count++;
//         sum += arr[i];
//     }
// }

// let avg;
// if (count == 0) {
//     avg = 0;
// } else {
//     avg = sum / count;
// }
// console.log(avg);




// Tìm giá trị lớn nhất
// TÌm giá trị lớn thứ hai (nhỏ hơn lớn nhất)
// let arr = [11, 7, 5, 9, -2, -6, 0, 2];
// let max = arr[0];
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
// };  // max

// let max_2 = -Infinity;
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] == max) continue;
//     if (arr[i] > max_2) {
//         max_2 = arr[i];
//     }
// };
// console.log(max_2)

// let array = [12, 26, -3, 0, 4, -8, 2004]
// let max = array[0];
// let seconD = -Infinity;
// for (let i = 1; i < array.length; i++) {
//     if (array[i] > max) {
//         seconD = max; // max
//          max = array[i];
//     } else if (seconD < array[i] && array[i] < max) {
//         seconD = array[i];
//     }
// }

// if (seconD != -Infinity) {
//     console.log(seconD);
// }else {
//     console.log("Khong co so lon thu hai");
// }


// - * Tìm phần tử lớn thứ 2 trong mảng (nâng cao: 1 vòng lặp)
// let arr = [12, 26, -3, 0, 4, -8, 2004]
// let max = arr[0]; // 11
// let max_2 = -Infinity; // - vô cùng
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max_2 = max;
//         max = arr[i];
//     } else if (max_2 < arr[i] && max > arr[i]) {
//         max_2 = arr[i];
//     }
// }
// console.log(max_2);


// Mảng 1 chiều
// let arr = [1, 2, 4, 4]
//         0  1  2  3
// Mảng 2 chiều: các phần tử bên trong sẽ là các mảng con
// let arr2 = [
//     // 0  1  2  
//     [3, 4, 5],   // 0 
//     [9, -4, 10], // 1
//     [7, 0, 6]    // 2
// ];

// // console.log(arr2[0][2]); // [3 ,3 ,5 ];
// // console.log(arr2[2][0]); // [7,0,6] => lấy phần tử vị trí 0 => 7

// for (let i = 0; i < arr2.length; i++) { // i = 1
//     // arr[0] => [3, 4, 5];
//     for (let j = 0; j < arr2[i].length; j++) { // j = 3
//         console.log(arr2[i][j]); // arr[0][2] => 3 4 5
//     }
// }

// Cho mảng :  let arr = [
//         [1, 3, 4],
//         [3, 4, 5],
//         [5, 5, 6]
//     ];
// Bài 1: Tính tổng các phần tử mảng 2 chiều.
// Bài 2: In ra tổng các phần tử của từng hàng.
// Bài 3: Tìm phần tử lớn nhất trong các hàng.
// Bài 4: Tìm phần tử nhất theo đường chéo chính.


// let arr = [1, 2, 4, 3];
// let newArr = [];
// for (let i = 0; i < arr.length; i++) { // i = 2
//     newArr.push(arr[arr.length - 1 - i]); // arr[4 - 2 - 1] = arr[1] = 2
// }
// console.log(newArr); // [3, 4, 2]

// let array = [1, 2, 4, 3];
// let reverseArray = [];
// for (let i = 0; i < array.length; i++) {
//     reverseArray.unshift(array[i]); // unshift: thêm vào đầu
// }
// console.log(reverseArray); // [3, 4, 2, 1]

// let reverseArray = [];
// for (let i = array.length - 1; i >= 0; i--) {
//     reverseArray.push(array[i]); 
// }
// console.log(reverseArray); // [3, 4, 2, 1]

// let array = [1, 2, 4, 3];
// array.reverse();
// console.log(array);

let str = "1htiỉ-1mcn-5-n";
// split
// console.log(str.split(""));
let count = 0;
for (let i = 0; i < str.length; i++) {
    if (str[i] == "-") {
        let isNumber = !isNaN(str[i + 1]);
        if (isNumber) {
            count++;
        }
    }
}

console.log(count);