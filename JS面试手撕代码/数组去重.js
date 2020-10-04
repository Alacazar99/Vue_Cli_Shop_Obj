

// // 1. indexOf去重
// var newArr = [];
// for (var i = 0; i < arr.length; i++) {
//     if (newArr.indexOf(arr[i]) === -1) {
//         newArr.push(arr[i])
//     }
// }

// var newArr = []
// for(let i = 0;i < arr.length;i++){
//     if(newArr.indexOf(arr[i])== -1){
//         newArr.push(arr[i])
//     }
// }


// var newArr = []
// for(let i = 0; i< arr.length;i++){
//     if(newArr.indexOf(arr[i]) === -1){
//         newArr.push(arr[i])
//     }
// }
// // 复制代码
// // 2. 哈希去重
// // 对象属性的存储采用的是哈希算法 
// var newArr = [];
// var obj = {}
// for (var i = 0; i < arr.length; i++) {
//     if (obj[typeof arr[i] + arr[i]] == undefined) {
//         newArr.push(arr[i]);
//         obj[typeof arr[i] + arr[i]] = true;
//     }
// }
// var newArr = []
// var obj = {}
// for(let i = 0;i< arr.length;i++){
//     if(obj[typeof arr[i] + arr[i]] == undefined){
//         newArr.push(arr[i])
//         obj[typeof arr[i] + arr[i]] = true
//     }
// }
// // 复制代码
// // 3. include

// // 判断数组是否包含某个值  返回 true 或 false

// var newArr=[];
// for(var i in arr){
//     if(!newArr.includes(arr[i])){
//         newArr.push(arr[i])
//     }
// }

// // 复制代码
// // 4. ES6 set数据结构
// // 类数组，成员都是唯一的，没有重复的值；需将结果转换为数组
// let set=new Set(arr);
// let newArr=[...set];
// // 或者
// let newArr=Array.from(set);
// // 复制代码
// // set去重小知识点(数组中包含引用类型数据)
// // 我们都知道ES6中set可以实现数组去重。
// // 但是如果数组中的数据类型为引用类型时，是无法实现去重的。

// // 示例代码如下：
// var arrObject1=[{name:"lisa"},{name:"lisa"},{name:"jennie"},[1,2],[1,2]];
// var arrObject2=[1,1,2,3,3];
// var set1=new Set(arrObject1);
// console.log(Array.from(set1)); // [{name:"lisa"},{name:"lisa"},{name:"jennie"},[1,2],[1,2]]
// var set2=new Set(arrObject2);
// console.log(Array.from(set2)); // [1,2,3]


// 复制代码
// 5. ES6 map数据结构

// map为键值对的集合，没有某个键，就将其设置为1
//  const map = new Map();
//  arr.filter((item)=>!map.has(item)&&map.set(item,1))

//  const map = new Map()
//  arr.filter((item)=>{
//      !map.has(item)&&map.set(item,1)
//  })

// 复制代码
// 6、reduce去重
let arr=[1,2,3,4,5,6,5,4,3,2,4,3,5];



let res = arr.reduce((pre,cur)=>{
    pre.indexOf(cur) == -1 ? pre.push(cur):pre
    return pre
},[])

let res = arr.reduce((pre,cur)=>{
    pre.indexOf(cur) == -1 ? pre.push(cur):pre
    return pre
})

console.log(res);// [1, 2, 3, 4, 5, 6]


// function camelize(str) {
//     return str
//       .split('-') // my-long-word -> ['my', 'long', 'word']
//       .map(
//         (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//       ) // ['my', 'long', 'word'] -> ['my', 'Long', 'Word']
//       .join(''); // ['my', 'Long', 'Word'] -> myLongWord
//   }

  function cameLize(str){
      return str.split('-').map(
          (word,index) => index == 0 ? word:word[0].toUpperCase() + word.slice(1)
      ).join('')
  }

  function cameLize(str){
      return str.split('-').map(
          (value,index) => index == 0 ? value:value[0].toUpperCase() + value.slice(1)
      ).join('')
  }
  function change(str){
      return str.split('-').map(
          (value,index) => index == 0 ? value:value[0].toUpperCase() + value.slice(1)
      ).join('')
  }
  function came(str){
      return str.split('-').map(
          (word,index) => index == 0 ? word: word[0].toUpperCase() + word.slice(1)
      ).join('')
  }

  var str = ' my-long-word'
  console.log(came(str))