

var obj = new Object();
// 创建一个空对象
obj.__proto__ = F.prototype;
// obj的__proto__指向构造函数的prototype
var result = F.call(obj);
// 把构造函数的this指向obj，并执行构造函数把结果赋值给result
if (typeof (result) === 'object') {
    objB = result;
    // 构造函数F的执行结果是引用类型，就把这个引用类型的对象返回给objB
} else {
    objB = obj;
    // 构造函数F的执行结果是值类型，就返回obj这个空对象给objB
}

var obj = new Object()
obj.__proto__ = F.prototype
var result = F.call(obj)
if(typeof (result) === 'object'){
    obj2 = result
}else{
    obj2 = obj
}