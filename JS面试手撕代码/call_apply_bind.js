
// 你希望改变上下文环境之后并非立即执行，而是回调执行的时候，使用 bind() 方法
// apply 、 call 、bind 三者都是用来改变函数的this对象的指向的；
// apply 、 call 、bind 三者第一个参数都是this要指向的对象，也就是想指定的上下文；
// apply 、 call 、bind 三者都可以利用后续参数传参；
// bind是返回对应函数，便于稍后调用；apply、call则是立即调用 。

// 自定义apply函数
Function.prototype.apply1 = function (obj, arg) {
    //context为null或者是undefined时,设置默认值
    if (!obj) {
        obj = typeof window === 'undefined' ? global : window
    }
    obj.fn = this
    let result = null
    //undefined 或者 是 null 不是 Iterator 对象，不能被 ...
    if (arg === undefined || arg === null) {
        result = obj.fn(arg)
    } else {
        result = obj.fn(...arg)
    }
    delete obj.fn
    return result
}
Function.prototype.apply = function(obj,arg){
    if(!obj){
        obj = typeof window === 'undefined' ? global:window
    }
    obj.fn = this
    let result = null
    if(arg === undefined || arg === null){
        result.obj.fn(arg)
    }else{
        result = obj.fn(...arg)
    }
    delete obj.fn
    return result
}

Function.prototype.apply = function (obj,...arg){
    if(!obj){
        obj = typeof window === 'undefined' ? global : window
    }
    obj.func = this
    let res = null
    if(arg === undefined || arg === null){
        res.obj.func(arg)
    }else{
        res = obj.func(...arg)
    }
    delete obj.func
    return res
}

Function.prototype.apply = function(obj,...arg){
    if(!obj){
        obj = typeof window === 'undefined' ? global : window
    }
    obj.func = this
    let res = null
    if(arg == undefined || arg === null){
        res.obj.func(arg)
    }else{
        res = obj.func(...arg)
    }
    delete obj.func
    return res
}
// 自定义 call 函数
Function.prototype.call1 = function (obj, ...arg) {
    if (!obj) {
        obj = typeof window === 'undefined' ? global : window
    }
    obj.fn = this
    let result = null
    result = obj.fn(...arg)
    delete obj.fn
    return result
}
Function.prototype.call = function (obj,...arg){
    if(!obj){
        obj = typeof window === 'undefined' ? global : window
    }
    obj.fn = this
    let result = null
    result = obj.fn(...arg)
    delete obj.fn
    return result
}

// 自定义 bind 函数
Function.prototype.bind = function (obj, ...arg) {
    if (!obj) {
        obj = typeof window === 'undefined' ? global : window
    }
    let self = this
    let args = arg

    function f() {}

    f.prototype = this.prototype
    let bound = function () {
        let res = [...args, ...arguments]
        let obj = this instanceof f ? this : obj
        return self.apply(obj, res)
    }
    bound.prototype = new f()
    return bound
}



number
 null 
undefined 
Symbol
String
Boolean

number
null
undefined
Symbol
String
Boolean
