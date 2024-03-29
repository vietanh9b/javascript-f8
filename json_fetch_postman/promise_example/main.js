let users =[
    {
        id:1,
        name:'Le Viet Anh'
    },
    {
        id:2,
        name:'Son Dang'
    },
    {
        id:3,
        name:'Duc Nguyen'
    }
]

let comments =[
    {
        id:1,
        id_user:1,
        content:'Anh chua dang video a'
    },
    {
        id:2,
        id_user:2,
        content:'Anh chua em a'
    }
]

let promise = new Promise(function(resolve, reject) {
    let userIds = comments.map(comment => comment.id_user); // Lấy danh sách id_user từ comments
    let filteredUsers = users.filter(user => userIds.includes(user.id)); // Lọc người dùng theo id xuất hiện trong comments
    resolve(filteredUsers); // Giải quyết Promise với danh sách người dùng đã lọc
});


promise
        .then(function(Result){
            console.log(Result)
        })
        .catch(function(e){
            console.log(e)
        })