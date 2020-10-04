
// function returnMax(arr){
//     var res = 0
//     arr.sort((a,b)=>{ return a-b})
//     //console.log(arr)
//     var len = arr.length
//     if(len == 3){
//         return  arr[0] * arr[1] * arr[2]
//     }
//     var tmp = arr[len-1] * arr[0] * arr[1]
//     for(let i = 0;i < len;i++){
//         var item = arr[i]
//         if()
//     }
// }
// arr = [10,-50,20]
// console.log(NaN == false)

// console.log(null == false)
// console.log(undefined == false)

// if(!null){
//     console.log('12312')
// }
// console.log('' == false)
// console.log(0 == false)
// function changeStr(s){
//     var newS = s.split(' ')
//     var res = ''
//     for(let i = 0;i < newS.length;i++){
//         var item = newS[i]
//         console.log(item)
//         if(item == ''){
//             continue
//         }else{
//             var t = ''
//             for(var j= item.length-1;j >= 0;j--){
//                 t += item[j]
//             }
//             res = res + t + ' '
//         }
//     }
//     return res
// }
// s = 'abc  def  ghi'
// console.log(changeStr(s))