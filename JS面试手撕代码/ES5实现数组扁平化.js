let arr = [
    [1, 2, 2],
    [3, 4, 5, 5],
    [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10
];

function myFlat() {
    _this = this; // 保存 this：arr
    let newArr = [];
    // 循环arr中的每一项，把不是数组的元素存储到 newArr中
    let cycleArray = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            let item = arr[i];
            if (Array.isArray(item)) { // 元素是数组的话，继续循环遍历该数组
                cycleArray(item);
                continue;
            } else {
                newArr.push(item); // 不是数组的话，直接添加到新数组中
            }
        }
    }
    cycleArray(_this); // 循环数组里的每个元素
    return newArr; // 返回新的数组对象
}

Array.prototype.myFlat = myFlat;

arr = arr.myFlat(); // [1, 2, 2, 3, 4, 5, 5, 6, 7, 8, 9, 11, 12, 12, 13, 14, 10]



// ES6写法===============================
// 思路：

// 循环数组里的每一个元素
// 判断该元素是否为数组
// 是数组的话，继续循环遍历这个元素——数组
// 不是数组的话，把元素添加到新的数组中

const myFlat = (arr) => {
    let newArr = [];
    let cycleArray = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            let item = arr[i];
            if (Array.isArray(item)) {
                cycleArray(item);
                continue;
            } else {
                newArr.push(item);
            }
        }
    }
    cycleArray(arr);
    return newArr;
}


myFlat(arr);   // [1, 2, 2, 3, 4, 5, 5, 6, 7, 8, 9, 11, 12, 12, 13, 14, 10]

// reduce  手动实现数组扁平化flat方法
const myFlat = arr => {
    return arr.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? myFlat(cur) : cur);
    }, []);
};
console.log(myFlat(arr));
// [12, 23, 34, 56, 78, 90, 100, 110, 120, 130, 140]

const myFlat = (arr) => {
    let newArr = [];
    let array = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            let item = arr[i];
            if (Array.isArray(item)) {
                array(item)
                continue
            } else {
                newArr.push(item)
            }
        }
    }
    array(arr)
    return newArr;
}

const myFalt = (arr) => {
    let newArr = []
    // 变量申明函数
    let cycArray = (arr) => {
        for (var i = 0; i < arr.length; i++) {
            let item = arr[i]
            if (Array.isArray(item)) {
                cycArray(item)
                continue
            } else {
                newArr.push(item)
            }
        }
    }
    cycArray(arr)
    return newArr
}

const myFlat = (arr)=>{
    let newArr = []
    let cycArray = (arr)=>{
        for(var i = 0;i< arr.length;i++){
            let item = arr[i]
            if(Array.isArray(item)){
                cycArray(item)
                continue
            }else{
                newArr.push(item)
            }
        }
    }
    cycArray(arr)
    return newArr
}

const myFlat = (arr) =>{
    let newArr = []
    let cycArray = (arr)=>{
        for(var i = 0;i < arr.length;i++){
            let item = arr[i]
            if(Array.isArray(item)){
                cycArray(item)
                continue
            }else{
                newArr.push(item)
            }
        }
    }
    cycArray(arr)
    return newArr
}

const myFlat = (arr) =>{
    let newArr = []
    let cycArray = (arr) =>{
        for(let i = 0;i < arr.length;i++){
            let item = arr[i]
            if(Array.isArray(item)){
                cycArray(item)
                continue
            }else{
                newArr.push(item)
            }
        }
    }
    cycArray(arr)
    return newArr
}
const myFlat = (arr) => {
    let newArr = []
    let cycArray = (arr)=>{
        for(let i = 0;i < arr.length;i++){
            let item = arr[i]
            if(Array.isArray(item)){
                cycArray(item)
                continue
            }else{
                newArr.push(item)
            }
        }
    }
    cycArray(arr)
    return newArr
}

const myFlat = (arr) =>{
    let newArr = []
    let cycArray = (arr) =>{
        for(let i = 0;i < arr.length;i++){
            let item = arr[i]
            if(array.isArray(item)){
                cycArray(item)
                continue
            }else{
                newArr.push(item)
            }
        }
    }
    cycArray(arr)
    return newArr
}

const myFlat = (arr)=>{
    let newArr = []
    let cycArray = (arr) =>{
        for(var i = 0;i < arr.length;i++){
            let item = arr[i]
            if(Array.isArray(item)){
                cycArray(item)
                continue
            }else{
                newArr.push(item)
            }
        }
    }
}
// 数组去重

//1, indexOf去重

var newArr = []
for (var i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) == -1) {
        newArr.push(arr[i])
    }
}

// 2. 哈希去重

var newArr = [];
var obj = {}
for (var i = 0; i < arr.length; i++) {
    if (obj[typeof arr[i] + arr[i]] == undefined) {
        newArr.push(arr[i]);
        obj[typeof arr[i] + arr[i]] = true;
    }
}

// 3. include

// 判断数组是否包含某个值，返回true或false
var newArr = [];
for (var i in arr) {
    if (!newArr.includes(arr[i])) {
        newArr.push(arr[i])
    }
}

// 4. ES6 set数据结构
// 类数组，成员都是唯一的，没有重复的值；需将结果转换为数组
let set = new Set(arr);
let newArr = [...set];
// 或者
let newArr = Array.from(set);

// 注意点：组中的数据类型为引用类型时，是无法实现去重的。

// map数据结构
// map为键值对的集合，没有某F个键，就将其设置为1
const map = new Map();
arr.filter((item) => !map.has(item) && map.set(item, 1))


// 6、reduce去重
let arr=[1,2,3,4,5,6,5,4,3,2,4,3,5];
let result = arr.reduce((prev,cur,index,arr)=>{
    prev.indexOf(cur)==-1 ? prev.push(cur):prev;
    return prev;
},[])
console.log(result);// [1, 2, 3, 4, 5, 6]



