class Student { // mô tả, bản vẽ
    id; // thuộc tính, đặc điểm của các đối tượng
    name;
    age;

    constructor(id, name, age) { // hàm tạo
        this.id = id;
        this.name = name;
        this.age = age;
    }

    play() { // phương thức, hành động của các đối tượng
        console.log(this.name + " is playing"); // this sẽ đại diện cho đối tượng đang sử dụng
    }
}

// new Student => gọi hàm tạo

let s = new Student(1, "Linh", 27); // khai báo đối tượng
console.log(s.name);
s.play(); 

let s1 = new Student(1, "Hoàng Anh", 27);
s1.play();