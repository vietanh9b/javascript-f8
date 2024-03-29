// Trả lời phỏng vấn theo hướng dẫn của anh Sơn:

// Khái niệm Promise: là 1 khái niệm sinh ra để xử lý thao tác bất đồng bộ 
// (async). Trc đó ta thường sử dụng callback, nhưng hay xảy ra tình trạng callback 
// hell (khó nhìn và khó hiểu) => ES6 sinh ra Promise để giải quyết callback hell.
// Để tạo ra 1 Promise: dùng từ khóa new Promise() và trong constructor của nó ta sẽ 
// truyền vào 1 executor function. Trong này nhận 2 tham số dạng hàm: resolve (khi thành công) 
// và reject (khi thất bại). Khi sd Promise: sử dụng các phương thức .then() hoặc .catch() 
// đều nhận các callback function. Khi promise được resolve thì sẽ lọt vào then, reject thì lọt vào catch
// 3 trạng thái của Promise: Pending (khi không resolve hay reject => memory leak) Fulfilled 
// (đã resolve) Rejected (đã reject)


function hell(value, cb) {
    cb(value);
}

// Không sử dụng Promise dẫn đến tạo ra callback hell 
hell(1, function (valueFromA) {
    hell(valueFromA + 1, function (valueFromB) {
        hell(valueFromB + 1, function (valueFromC) {
            hell(valueFromC + 1, function (valueFromD) {
                console.log(valueFromD + 1);
            });
        });
    });
});

// Sử dụng Promise sẽ tạo ra đoạn code dễ đọc hơn và vẫn đảm bảo đúng logic
function notHell(value) {
    return new Promise(function (resolve) {
        resolve(value);
    });
}

notHell(1)
    .then(function (value) {
        return value + 1;
    })
    .then(function (value) {
        return value + 1;
    })
    .then(function (value) {
        return value + 1;
    })
    .then(function (value) {
        console.log(value + 1);
    });




