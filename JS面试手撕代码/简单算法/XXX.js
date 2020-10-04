

function dupicateWord(arr) {
    let obj = {}
    arr.forEach((ele) => {
        let keys = Object.keys(obj);
        
        if (!keys.includes(ele)) {
            obj[ele]=false
        } else {
            obj[ele]= true
        }
    })
    return obj
}

function duplicatedWord(chars) {
    var map = new Map();
    for (var i = 0; i < chars.length; i++) {
        if (map.has(chars[i])) {
            map.set(chars[i], 'true');
            continue;
        } else {
            map.set(chars[i], 'false');
        }

    }
    return map;
}

// quchong 
function dup(chars){
    var map = new Map();
    for(var i=0;i < chars.length;i++){
        if(map.has(chars[i])){
            map.set(chars[i],'true');
            continue;
        }else{
            map.set(chars[i],'false');
        }
    }
}