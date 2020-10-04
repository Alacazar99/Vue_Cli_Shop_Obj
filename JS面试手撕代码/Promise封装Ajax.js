function ajax(url, methods, data) {
    return new Promise((resolve, reject) => {
        // 创建XHR对象
        let xhr = new XMLHttpRequest()
        // 调用open方法，它接受三个参数（发送的请求的类型（'get','post'等），请求的url和是否异步发送的布尔值）
        xhr.open(methods, url, true)
        // 请求就会被发送到服务器
        xhr.send(data)
        // readystatechange事件绑定事件处理程序
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                resolve(xhr.responseText)
            } else {
                reject(xhr.status)
            }
        }
    })
}

function ajax(url, methods, data) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest()
        xhr.open(methods, url, true)
        xhr.send(data)
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                resolve(xhr.responseText)
            } else {
                reject(xhr.status)
            }
        }
    })
}

function ajax(url, methods, data) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest()
        xhr.open(methods,url, true)
        xhr.send(data)
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                resolve(xhr.responseText)
            } else {
                reject(xhr.status)
            }
        }
    })
}
function ajax (url,methods,data){
    return new Promise((resolve,reject) =>{
        let xhr = new XMLHttpRequest()
        xhr.open(methods,url,true)
        xhr.send(data)
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4 && xhr.status === 200){
                resolve(xhr.responseText)
            }else{
                reject(xhr.status)
            }
        }
    })
}
function ajax(url,methods,data){
    return new Promise((resolve,reject) =>{
        let xhr = new XMLHttpRequest()
        xhr.open(methods,url,true)
        xhr.send(data)
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4 && xhr.status === 200){
                resolve(xhr.responseText)
            }else{
                reject(xhr.status)
            }
        }
    })
}

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
            alert(xhr.responseText);
        } else {
            alert('Request was unsuccessful: ' + xhr.status);
        }
    }
};
xhr.open('get', 'example.php', true);
xhr.send(null);
