// 考虑数组

module.exports = function clone(target) {
    if (typeof target === 'object') {
        let cloneTarget = Array.isArray(target) ? [] : {};
        for (const key in target) {
            cloneTarget[key] = clone(target[key]);
        }
        return cloneTarget;
    } else {
        return target;
    }
};

//  ============= =============


function deepCopy(target, map = new Map()) {
    if (typeof target === 'object') {
        let cloneTarget = Array.isArray(target) ? [] : {};
        if (map.get(target)) {
            return map.get(target);
        }
        map.set(target, cloneTarget);
        for (const key in target) {
            cloneTarget[key] = clone(target[key], map);
        }
        return cloneTarget;
    } else {
        return target;
    }
};

function deepCopy(target, map = new Map()) {
    if (typeof target === 'object') {
        let clones = Array.isArray(target) ? [] : {}
        if (map.get(target)) {
            return map.get(target)
        }
        map.set(target, clones)
        for (const ket in target) {
            clones[key] = clone(target[key], map)
        }
        return clones
    } else {
        return target
    }
}
function deepCopy(target, map = new Map()) {
    if (typeof target == 'object') {
        let targetclones = Array.isArray(target) ? [] : {}
        if (map.get(target)) {
            return map.get(target)
        }
        map.set(target, targetclones)
        for (const key in target) {
            targetclones[key] = clone(target[key], map)
        }
        return targetclones
    } else {
        return target
    }
}

//  ------------------------------------

function deepCopy(target, map = new WeakMap()) {
    // 判断是否为基本数据类型;
    if (typeof target === 'object') {
        // 判断是都否为数组;
        let cloneObj = Array.isArray(target) ? [] : {};
        // 判断是否为循环引用;
        if (map.get(target)) {
            return map.get(target);
        };
        map.set(target, cloneObj);
        for (const prop in target) {
            cloneObj[prop] = deepCopy(target[prop], map);
        }
        return cloneObj;
    } else {
        return target;
    }
}

function deepCopy(target,map = new Map()){
    if(typeof target === 'object'){
        var cloneObj = Array.isArray(target)? []:{}
        if(map.get(target)){
            return map.get(target)
        }
        map.set(target,cloneObj)
        for(const key in target){
            cloneObj[key] = deepCopy(target[key],map)
        }
        return cloneObj
    }else{
        return target
    }
}
function deepCopy(target,map = new Map()){
    if(typeof target === 'object'){
        var obj = Array.isArray(target) ? []:{}
        if(map.get(target)){
            return map.get(target)
        }
        map.set(target,obj)
        for(const key in target){
            obj[key] = deepCopy(target[key],map)
        }
        return obj
    }else{
        return target
    }
}

const obj1 = {
    a: '111',
}
obj1.obj2 = obj1;

const aa = deepCopy(obj1);
console.log(aa);
// { a: '111', obj2: [Circular] }
