// keywords: javascript array methods
//  1. To string
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());
// result: Banana,Orange,Apple,Mango
// 2. join: join cũng là to string nhưng cho phép ta có thể thêm các phần tử khác vào string
console.log(fruits.join(" * "));
// 3. pop: pop là xóa đi phần tử cuối cùng của mảng và in ra phần tử đó
console.log(fruits.pop());
console.log(fruits)
// 4. push: push thêm phần tử vào cuối mảng chứ không trực tiếp in ra
fruits.push('hahah');
console.log(fruits)
// 5.shift: hoạt động giống pop nhưng sẽ xóa đầu mảng
// 6. unshift: hoạt động giống push nhưng sẽ thêm vào từ đầu mảng
// 7. splicing: là có thể xóa, thêm phần tử
fruits.splice(2, 0, "Lemon", "Kiwi");
// 8.concat: là nối chuỗi
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myDads = ["kkk", "hahah", "ooo"];
const myChildren = myGirls.concat(myDads,myBoys);

document.getElementById("demo").innerHTML = myChildren;
// 9.slicing: là cắt phần tử của mảng gốc sau đó trả lại 1 mảng mới
const newFruit = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1);
document.getElementById("demo").innerHTML = newFruit + "<br><br>" + citrus;
// 10. delete: xóa phần tử mảng: 
delete fruits[0];
// 11. flat: làm phảng mảng( ví dụ trong mảng có nhiều mảng con thì sẽ làm phảng mảng thành 1 mảng)
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();