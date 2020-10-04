// // /**
//  * 最长公共版本前缀
//  * @param versions string字符串一维数组 版本号数组
//  * @return string字符串
//  */
function longestVersionPrefix( versions ) {
    // write code here
    let [a, ...b] = versions
    if(versions.length !== 0){
        var res = ''
        for (let i = 0;i < a.length;i++){
            var item = a[i]
            let flag = b.every(tmp => tmp[i] === item)
            if(flag){
                res += item
            }else{
                break
            }
        }
    }
    return res
}

var versions = ['flooll','floottt','floottt','flooghsg']
console.log(longestVersionPrefix( versions ))
// function isTrue(num){
//     var num = num * 2;
//     let i = 1,
//         index2 = 0,
//         index3 = 0,
//         index5 = 0;
//     var arr = [1]
//     var temp = [1]
//     while (arr[arr.length-1] < num){
//         temp[i] = Math.min(temp[index2]*2,temp[index3]*3,temp[index5]*5)
//         if(temp[i] == temp[index2]*2){index2++}
//         if(temp[i] == temp[index3]*3){index3++}
//         if(temp[i] == temp[index5]*5){index5++}
//         if(arr.indexOf(temp[i]) != -1){
//             arr.push(temp[i])
//         }
//     }
//     if(arr[arr.length-1] == num){
//         return true
//     }
//     return false
// }

// var n = 6
// console.log(isTrue(n))
