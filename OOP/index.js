class Student { // lớp: mô tả các THUỘC TÍNH, PHƯƠNG THỨC của các đối tượng
    // THUỘC TÍNH: là các đặc điểm mà các đối tượng có thể mang
    name; // biến, không dùng let
    age;
    score;
    // address;

    constructor(nameInput, ageInput, scoreInput) { // hàm tạo (Phương thức sản xuất ra các đối tượng), gọi khi khởi tạo đối tượng
        // console.log("Gọi constructor")
        this.name = nameInput; // this: đại diện cho đối tượng sẽ được tạo ra
        this.age = ageInput;
        this.score = scoreInput;
    }

    // PHƯƠNG THỨC: là các hành động mà đối tượng có thể mang;
    study() { // hàm, không dùng function
        // console.log("sinh viên này đang hoc")
        console.log(this.name + " đang học");
    }

    play() {
        console.log("Sinh viên này đang chơi");
    }
}

// OOP: Object Oriented Progaming Lập trình hướng đối tượng)
// Đối tượng: là các thực thể mang thuộc tính, hành vi cụ thể được tạo ra từ lớp của nó
let s = new Student("Linh", 40, 9.5); // Object 
let s2 = new Student("Lâm", 40, 9.5); // Object 
// Truy xuất thuộc tính và phương thưc
console.log(s.name);
// console.log(s.address);
s.study();
s2.study();
// console.log(s);

/*
Bài 1: Hoàn thành bài tập: Viết một lớp các đối tượng hình chữ nhật lấy tên là Rectangle, mỗi hình chữ nhật đều có những đặc tính sau:
+ Có thông số chiều dài.
+ Có thông số chiều rộng.
+ Có tính năng tính diện tích.
+ Có tính năng tính chu vi.
=> Tạo một đối tượng HCN
+ Hiển thị thông tin hình chữ nhât lên web
+ Thay đổi chiều dài và chiều rộng của hình chữ nhật
+  In ra màn hình diện tích và chu vi của hình chữ nhật đó.

Bài 2: Bài tập Sinh Viên: Viết một lớp Student để quản lý thông tin sinh viên gồm các thuộc tính như tên, tuổi, một mảng điểm số. Tạo các phương thức cho phép thay đổi thông tin sinh viên, hiển thị thông tin sinh viên và tính trung bình điểm của sinh viên.
=> Tạo ra 2 đối tượng student và hiển thị sinh viên có điểm trung bình cao hơn

Bài 3: https://james.codegym.vn/mod/assign/view.php?id=15520&forceview=1
*/