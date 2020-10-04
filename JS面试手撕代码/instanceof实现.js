


function instanceof_1(L, R) { //L是表达式左边，R是表达式右边
    const O = R.prototype;
    L = L.__proto__;
    while(true) {
        if (L === null)
            return false;
        if (L === O) // 这里重点：当 L 严格等于 0 时，返回 true 
            return true;
        L = L.__proto__;
    }
}
