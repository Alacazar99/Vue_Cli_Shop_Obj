// function searchInsertPosition( nums ,  target ) {
//   // write code here
//   var res = nums.indexOf(target)
//   if(res == -1){
//       if(nums[nums.length-1] <target){
//           return nums.length
//       } 
//       for(var i = 0; i< nums.length;i++){
//           if(nums[i]>target){
//               return i
//           }
//       }
//   }

//   for(var i = 0;i < nums.length;i++){
//       if(nums[i] == target){
//           return i
//       }
//       if(nums[i] > target){
//           return i
//       }
//   }
//   return res
// }

// var nums = [1,3,5,6], target = 0
// console.log(searchInsertPosition( nums ,  target ))

// function quickSort(arr){
//     if(arr.length <= 1){
//         return arr
//     }
//     let index = Math.floor(arr.length / 2)
//     let tmp = arr[index]
//     let left = []
//     let right = []
//     for(let i = 0;i< arr.length;i++){
//         if(i != index){
//             if(arr[i] < tmp){
//                 left.push(arr[i])
//             }else{
//                 right.push(arr[i])
//             }
//         }
//     }
//     return quickSort(left).concat(tmp,quickSort(right))
// }

// function mergeSort(arr) {  //采用自上而下的递归方法
//     var len = arr.length;
//     if (len < 2) {
//         return arr;
//     }
//     var middle = Math.floor(len / 2),
//         left = arr.slice(0, middle),
//         right = arr.slice(middle);
//     return merge(mergeSort(left), mergeSort(right));
// }

// function merge(left, right) {
//     var result = [];

//     while (left.length && right.length) {
//         if (left[0] <= right[0]) {
//             result.push(left.shift());
//         } else {
//             result.push(right.shift());
//         }
//     }
//     while (left.length)
//         result.push(left.shift());

//     while (right.length)
//         result.push(right.shift());
//     return result;
// }





