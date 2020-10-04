

// 交换排序
    // 冒泡； n*n 稳定
    // 依次遍历数组，比较相邻数值的大小；
function bubbleSort(arr) {
    var len = arr.length
    for (var i = 0;i < len-1;i++){
        for (var j = i+1;j < len;j++){
            if(arr[i]> arr[j]){
                var tmp = arr[j]
                arr[j] = arr[i]
                arr[i] = tmp
            }
        }
    }
    return arr
}
// 冒泡排序算法优化;
// function bubbleSort(arr) {
//     var len = arr.length;
//     for (var i = 0; i < len; i++) {
//         var exchange = false; // 交换标志 
//         for (var j = 0; j < len - 1 - i; j++) {
//             if (arr[j] > arr[j + 1]) { // 相邻元素两两对比
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]] // 元素交换
//                 exchange = true; //
//             }
//         }
//         if (!exchange) { // 若本趟排序未发生交换，提前终止算法
//             break;
//         }
//     }
//     return arr;
// }

// 快速排序   n* log(n) 不稳定

// 选择第一个元素，将数组剩余元素按大小分开；
// 依次递归调用；
function QuickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var pIndex = Math.floor(arr.length / 2);
    var tmp = arr[pIndex];
    var left = [];
    var right = [];
    for (var i = 0; i < arr.length; i++) {
        if (i != pIndex) {
            if (arr[i] <= tmp) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }
    }
    return QuickSort(left).concat(tmp, QuickSort(right));
}
function quickSort(arr){
    if(arr.length <= 1){
        return  arr
    }
    var index = Math.floor(arr.length / 2)
    var tmp = arr[index]
    var left = []
    var right = []
    for(let i = 0; i < arr.length;i++){
        if(i != index){
            if(arr[i] < tmp){
                left.push(arr[i])
            }else{
                right.push(arr[i])
            }
        }
    }
    return quickSort(left).concat(tmp,quickSort(right))
}


function quickSort(arr){
    if(arr.length <= 1){
        return arr
    }
    var index = Math.floor(arr.length / 2)
    var tmp = arr[index]
    var left = []
    var right = []
    for(let i = 0; i < arr.length;i++){
        if(i != index){
            if(arr[i] < tmp){
                left.push(arr[i])
            }else{
                right.push(arr[i])
            }
        }
    }
    return quickSort(left).concat(tmp,quickSort(right))
}

function quickSort(arr){
    if(arr.length <= 1){
        return arr
    }
    var index = Math.floor(arr.length / 2)
    var tmp = arr[index]
    var left = []
    var right = []
    for(let i = 0;i < arr.length;i++){
        if(i != index){
            if(arr[i] < tmp){
                left.push(arr[i])
            }else{
                right.push(arr[i])
            }
        }
    }
    return quickSort(left).concat(tmp,quickSort(right))
}



function quickSort(arr){
    if(arr.length <= 1){
        return arr
    }
    var index = Math.floor(arr.length / 2)
    var tmp = arr[index]
    let left = []
    let right = []
    for(let i = 0;i < arr.length;i++){
        if(i != index){
            if(arr[i] < tmp){
                left.push(arr[i])
            }else{
                right.push(arr[i])
            }
        }
    }
    return quickSort(left).concat(tmp,quickSOrt(right))
}

function quickSort(arr){
    if(arr.length <= 1){
        return arr
    }
    var index = Math.floor(arr.length / 2)
    var tmp = arr[index]
    let left = []
    let right = []
    for(let i = 0;i < arr.legngth;i++){
        if(i != index){
            if(arr[i] < tmp){
                left.push(arr[i])
            }else{
                right.push(arr[i])
            }
        }
    }
    return quickSort(left).concat(tmp,quickso)
}

function quickSort(arr){
    if(arr.length <= 1){
        return arr
    }
    var index = Math.floor(arr.length / 2)
    var tmp = arr[index]
    let left = []
    let right = []
    for(let i = 0;i<arr.length;i++){
        if(i!= index){
            if(arr[i]< tmp){
                left.push(arr[i])
            }else{
                right.push(arr[i])
            }
        }
    }
    return quickSort(left).concat(tmp,quickSort(right))
}
function quickSOrt(arr){
    if(arr.length <= 1){
        return arr
    }
    var index = Math.floor(arr.length/2)
    var tmp = arr[index]
    let left = []
    let right = []
    for(let i = 0;i<arr.length;i++){
        if(i != index){
            if(arr[i]< tmp){
                left.push(arr[i])
            }else{
                right.push(arr[i])
            }
        }
    }
    return quickSort(left).concat(tmp,quickSort(right))
}
function quickSort(arr) {
    if(arr.length <= 1){
        return arr
    }
    var index = Math.floor(arr.length / 2)
    var tmp = arr[index]
    let left = []
    let right = []
    for(let i = 0;i < arr.length;i++){
        if(i != index){
            if(arr[i] < tmp){

            }
        }
    }
}


function quickSort(arr){
    if(arr.length <= 1){
        return arr
    }
    var index = Math.floor(arr.length / 2)
    var tmp = arr[index]
    let left = []
    let right = []
    for(let i = 0;i<arr.length;i++){
        if(i != index){
            if(arr[i] < tmp){
                left.push(arr[i])
            }else{
                right.push(arr[i])
            }
        }
    }
    return quickSort(left).concat(tmp,quickSort(right))
}


// <!-- 选择排序 -->

// 直接选择 n*n 不稳定

// <!-- 从剩余未排序数组中选择一个最小值，完成顺序交换 -->
function SelectionSort(arr) {
    var tmp, minIndex;
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
        minIndex = i;
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        tmp = arr[j];
        arr[j] = arr[minIndex];
        arr[minIndex] = tmp;
    }
    return arr;
}
function selectionSort(arr){
    var tmp,minIndex
    var len = arr.legnth
    for(var i = 0;i < len-1;i++){
        minIndex = i
        for(var j = i+1;j < len;j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j
            }
        }
        tmp = arr[j]
        arr[j] = arr[minIndex]
        arr[minIndex] = tmp
    }
    return arr
}

// 插入排序

// 直接插入排序 稳定

// 从未排序的数组中，选出第一个排入（已排序数组中）
function InsertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            let tmp = arr[i];
            let p = i - 1;
            while (p >= 0 && tmp < arr[p]) {
                arr[p + 1] = arr[p];
                p--;
            }
            arr[p + 1] = tmp;
        }
    }
}



// 希尔排序 n-n*n  不稳定

function shellSort(arr) {
    var len = arr.length,
        temp,
        gap = 1;
    while (gap < len / 3) {          //动态定义间隔序列
        gap = gap * 3 + 1;
    }
    for (gap; gap > 0; gap = Math.floor(gap / 3)) {
        for (var i = gap; i < len; i++) {
            temp = arr[i];
            for (var j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
                arr[j + gap] = arr[j];
            }
            arr[j + gap] = temp;
        }
    }
    return arr;
}

// 归并排序
// n* log(n) 稳定

function mergeSort(arr) {  //采用自上而下的递归方法
    var len = arr.length;
    if (len < 2) {
        return arr;
    }
    var middle = Math.floor(len / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    var result = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    while (left.length)
        result.push(left.shift());

    while (right.length)
        result.push(right.shift());
    return result;
}

// 堆排序

// n*log(n)  不稳定：

var len;    //因为声明的多个函数都需要数据长度，所以把len设置成为全局变量
function buildMaxHeap(arr) {   //建立大顶堆
    len = arr.length;
    for (var i = Math.floor(len / 2); i >= 0; i--) {
        heapify(arr, i);
    }
}

function heapify(arr, i) {     //堆调整
    var left = 2 * i + 1,
        right = 2 * i + 2,
        largest = i;
    if (left < len && arr[left] > arr[largest]) {
        largest = left;
    }
    if (right < len && arr[right] > arr[largest]) {
        largest = right;
    }
    if (largest != i) {
        swap(arr, i, largest);
        heapify(arr, largest);
    }
}

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function heapSort(arr) {
    buildMaxHeap(arr);

    for (var i = arr.length - 1; i > 0; i--) {
        swap(arr, 0, i);
        len--;
        heapify(arr, 0);
    }
    return arr;
}