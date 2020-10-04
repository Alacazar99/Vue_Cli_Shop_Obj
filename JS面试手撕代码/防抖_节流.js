//防抖
function debounce(fn, delay) {
    let timeout = null;
    var that = this;
    return function () {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            fn.apply(that, arguments)
        }, delay)
    }
}
function debounce(func,wait){
    let timeout = null
    var that = this
    var args = arguments
    return function(){
        clearTimeout(timeout)
        timeout = setTimeout(()=>{
            func.apply(that,args)
        },wait)
    }
}
//节流
// function throttle(fn,delay) {
//     let canRun = true
//     return function () {
//         if(!canRun) return
//         canRun = false
//         setTimeout(()=>{
//             fn.apply(this,arguments)
//             canRun = true
//         },delay)
//     }
// }

function throttle(func,wait){
    let flag = true
    var that = this
    var args = arguments
    return function(){
        if(!flag) return 
        flag = false
        setTimeout(()=>{
            func,apply(that,args)
            flag = true
        },wait)
    }
}
// 节流

// 2）节流

// 原理 ：规定在一个单位时间内，只能触发一次函数。
// 如果 这个单位时间内触发多次函数，只有一次生效。
// 适用 场景
// 拖拽 场景：固定时间内只执行一次，防止超高频次触发位置变动
// 缩放 场景：监控浏览器 resize
// 使用 时间戳实现
// 使用 时间戳，当触发事件的时候，我们取出当前的时间戳，
// 然后 减去之前的时间戳(最一开始值设为 0 )，
// 如果 大于 设置的时间周期，就执行函数，然后更新时间戳为当前的时间戳，如果小于，就不执行。

// function throttle(func,delay){
//     let flag = true;
//     return function(){
//         if(!flag){
//             flag = false;
//             setTimeout(()=>{
//                 func.apply(this,arguments);
//                 flag = true;
//             },delay)
//         }
//     }
// }

function throttle(func,wait){
    let flag = true
    return function(){
        if(!flag){
            flag = false
            var that = this
            var args = arguments
            setTimeout(()=>{
                func.apply(that,args)
                flag = true
            },wait)
        }
    }
}

// 节流： 在规定的时间内，必然执行一次func函数
function thrrttle(func,wait){
    let flag = true
    let that = this
    return function(){
        if(!flag){
            flag = false
            setTimeout(()=>{
                func.apply(that,arguments)
                flag = true
            },wait)
        }
    }
}

// 时间戳
var throttle = function(func, delay){
    var prev = Date.now();
    return function(){
        var context = this;
        var args = arguments;
        var now = Date.now();
        if(now-prev>=delay){
            func.apply(context,args);
            prev = Date.now();
        }
    }
}
function throttle(func,wait){
    let prev = Date.now()
    return function(){
        var that = this
        var arg = arguments
        var now = Date.now()
        if(now - prev >= wait){
            func.apply(that,arg)
            prev = Date.now()
        }
    }
}
function throttle(func,wait){
    let prev = Date.now()
    return function(){
        var that = this
        var arg = arguments
        var now = Date.now()
        if(now - prev >= wait){
            func.apply(that,arg)
            prev = Date.now()
        }
    }
}
function throttle(func,wait){
    let prev = Date.now()
    return function(){
        let that = this
        let arg = arguments
        var now = Date.now()
        if(now - prev >= wait){
            func.apply(that,arg)
            prev = Date.now()
        }
    }
}


function throttle(func,wait){
    let prev = Date.now()
    return function(){
        var that = this
        var arg = arguments
        var now = Date.now()
        if(now - prev >= wait){
            func.apply(that,arguments)
        }
    }
}

function throttle(func,wait){
    let flag = true
    let that = this
    let args = arguments
    return function(){
        if(!flag){
            flag = false
            setTimeout(()=>{
                func.apply(that,args)
                flag = true
            },wait)
        }
    }
}


// 防抖，事件触发后又执行回调，在设定的时间内，再次触发，则重新计时；

function debounce(func,wait){
    let timeOut = null;
    let that = this
    return function(){
        clearTimeout(timeOut)
        timeOut = setTiemout(()=>{
            func.apply(that,arguments)
        },wait)
    }
}
function debounce(func,wait){
    let timeout = null
    let that = this
    let args = arguments
    return function(){
        clearTimeout(timeout)
        timeout = setTimeout(()=>{
            func.apply(that,args)
        },wait)
    }
}

function debounce(func,wait){
    let timeout = null
    let that = this
    return function(){
        clearTimeout(timeout)
        timeout = setTimeout(()=>{
            func.apply(that,arguments)
        },wait)
    }
}
function debounce(func,wait){
    let timeout = null
    let that = this
    return function(){
        clearTimeout(timeout)
        timeout = setTimeout(()=>{
            func.apply(that,arguments)
        },wait)
    }
}


function debounce(func,wait){
    let timeout = null
    return function(){
        clearTimeout(timeout)
        timeout = setTimeout(()=>{
            func.apply(this,arguments)
        },wait)
    }
}
function debounce(func,wait){
    let timeout = null
    return function(){
        clearTimeout(timeout)
        timeout = setTimeout(()=>{
            func.apply(this,arguments)
        },wait)
    }
}

// 防抖

// 1）防抖

// 原理：在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。
// 适用场景：
// 按钮提交场景：防止多次提交按钮，只执行最后提交的一次
// 搜索框联想场景：防止联想发送请求，只发送最后一次输入

function debounce(func,wait){
    let timeout = null;
    return function(){
        clearTimeout(timeout);
        timeout = setTimeout(()=>{
            func.apply(this,arguments);
        },wait);
    }
}
function debounce(func,wait){
    let timeout = null
    return function (){
        clearTimeout(timeout)
        tiemout = setTimeout(()=>{
            func.apply(this,arguments);
        },wait)
    }
}
function debounce(func,wait){
    let timeout = null
    return function(){
        clearTimeout(timeout)
        timeout = setTimeout(()=>{
            func.apply(this,arguments)
        },wait)
    }
}

// 防抖；
function debounce(func,wait){
    let timeout = null;
    return function(){
        clearTimeout(timeout);
        timeout = setTimeout(()=>{
            func.apply(this,arguments);
        },wait)
    }
}

