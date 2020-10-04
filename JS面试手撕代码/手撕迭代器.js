var it = makeIterator(["a", "b"]);
console.log(it.next())
console.log(it.next())
console.log(it.next())


// function makeIterator(array) {
//     let nextindex = 0
//     return {
//         next: function () {
//             if (nextindex < array.length) {
//                 return { value: array[nextindex++], done: false }
//             } else {
//                 return { value: undefined, done: true }
//             }
//         }
//     }
// }
function makeIterator(array){
    let index = 0
    return {
        next: function(){
            if(index < array.length){
                return {
                    value:array[index++],
                    done: false
                }
            }else{
                return {value:undefined,done:true}
            }
        }
    }
}
function makeIterator(arr){
    let index = 0
    return {
        next: function(){
            if(index < arr.length){
                return { value:arr[ index++ ],done:false }
            }else{
                return { value:undefined,done:true }
            }
        }
    }
}
function makeIterator(arr){
    let index = 0
    return {
        next:function(){
            if(index < arr.length){
                return {value:arr[index++],done:false}
            }else{
                return {value:undefined,done:true}
            }
        }
    }
}
function makeIterator(arr){
    let index = 0
    return {
        next: function(){
            if(index < arr.length){
                return {value:arr[index++],done:false}
            }else{
                return {value:undefined,done:true}
            }
        }
    }
}
function makeIterator(arr){
    let index = 0
    return {
        next: function(){
            if(index < arr.length){
                return {value:arr[index++],done:false}
            }else{
                return {value:undefined,done:true}
            }
        }
    }
}
function makeIterator(arr){
    let index = 0
    return {
        next: function(){
            if(index < arr.length){
                return {value:arr[index++],done:false}
            }else{
                return {value:undefined,done:true}
            }
        }
    }
}
function makeIterator(arr){
    let index = 0
    return {
        next: function(){
            if(index < arr.length){
                return {value:arr[index++],done:false}
            }else{
                return {value:undefined,done:true}
            }
        }
    }
}

function makeIterator(arr){
    let index = 0
    return {
        next: function(){
            if(index < arr.length){
                return {value:arr[index++],done:false}
            }else{
                return { value:undefined,done:true}
            }
        }
    }
}
function makeIterator(arr){
    let index = 0
    return {
        next: function(){
            if(index < arr.length){
                return { value:arr[index++],done:false}
            }else{
                return { value:undefined,done:true}
            }
        }
    }
}
function makeIterator(arr){
    let index = 0
    return {
        next : function (){
            if(index < arr.length){
                return { value : arr[index++],done:false}
            }else{
                return { value:undefined,done:true}
            }
        }
    }
}
function makeIterator(arr){
    let index = 0
    return {
        next: function(){
            if(index < arr.length){
                return { value:arr[index++],done:false}
            }else{
                return {value:undefined,done:true}
            }
        }
    }
}
function makeIterator(arr){
    let index = 0
    return {
        next: function(){
            if(index < arr.length){
                return { value:arr[index++],done:false}
            }else{
                return { value:undefined,done:true}
            }
        }
    }
}
function makeIterator(arr){
    let index = 0
    return {
        next: function(){
            if(index < arr.length){
                return {value:arr[index++],done:false}
            }else{
                return {value:undefined,done:false}
            }
        }
    }
}
function makeIterator(arr){
    let index = 0
    return {
        next: function(){
            if(index < arr.length){
                return { value: arr[index++],done:false}
            }else{
                return { value : undefined,done:false}
            }
        }
    }
}
function makeIterator(arr){
    let index = 0
    return {
        next: function(){
            if(index< arr.length){
                return { value: arr[index++],done:false}
            }else{
                return {value: undefined,done:false}
            }
        }
    }
}
function makeIterator(arr){
    let index = 0
    return {
        next: function(){
            if(index<arr.length){
                return { value:arr[index++],done:false}
            }else{
                return { value:undefined,done: true}
            }
        }
    }
}
function makeIterator(arr){
    let index = 0
    return {
        next: function(){
            if(index < arr.length){
                return { value: arr[index++],done: false}
            }else{
                return { value: undefined,done:true}
            }
        }
    }
}