var courses=[
    'JS',
    'HTML',
    'CSS'
];
var leng_arr=courses.length
// foreach
      Array.prototype.forEach2=function(callback){
        // khi dùng for in thì vòng lặp sẽ chạy qua cả các phần tử trong prototype
        // còn khi chạy trong for thường thi không, nhưng trong for sẽ chạy qua các empty element
        for(var index in this){
            if(this.hasOwnProperty(index)){
                callback(this[index],index,this)
                console.log(index)
            }
        }
      }
    var new_foreach=courses.forEach2((course,index,array)=>{
            
     })
    
// find
// some
// every
// reduce

Array.prototype.filter2=function(callback){
    
    var new_arr=[];
    for(var i=0;i<leng_arr;i++){
        var result=callback(this[i],i)
        // console.log(result)
        if(result){
            new_arr.push(this[i])
        }
    }
    return new_arr
}

var new_course=courses.filter2((course,index)=>{
    return course
})
// console.log(new_course)
// map()
// filter