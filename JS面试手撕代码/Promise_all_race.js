

Promise.all = function(arr){
    return new Promise((resolve,reject)=>{
        let res = [];
        let index = 0;
        for(let i = 0; i< arr.length;i++){
            let p = arr[i];
            p.then(data=>{
                res[i] = data;
                if(++index === arr.length){
                    return res;
                }
            },reject);
        }
    })
}
Promise.all = function(arr){
    return new Promise((resolve,reject) =>{
        let res = []
        let index = 0
        for(let i = 0;i< arr.length;i++){
            let p = arr[i]
            p.then(data=>{
                res[i] = data
                if(++index === arr.length){
                    return res
                }
            },reject)
        }
    })
}
Promise.all = function(arr){
    return new Promise((resolve,reject)=>{
        let res = []
        let index = 0
        for (let i = 0;i < arr.length;i++){
            let p = arr[i]
            p.then(data =>{
                res[i] = data;
                if(++index === arr.length){
                    return res
                }
            },reject)
        }
    })
}
Promise.all = function(arr){
    return new Promise((resolve,reject) => {
        let res = []
        let index = 0
        for(let i = 0;i < arr.length;i++){
            let p = arr[i]
            p.then(data => {
                res[i] = data
                if(++index === arr.length){
                    return res
                }
            },reject)
        }
    })
}

Promise.race = function(arr){
    return new Promise(() => {
        for (let i = 0;i < arr.length;i++){
            arr[i].then(resolve,reject);
        }
    })
}


// 测试用例；
let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(1);
    },2000);
    // setTimeout(()=>{
    //     resolve(1);
    // },2000)
});
let p2 = new Promise((resolve)=>{
    resolve(2);
},2000)
let p3 = new Promise(()=>{
    setTimeout(()=>{
        resolve(3);
    })
},2000)

Promise.all([p3,p2,p1]).then(data=>{
    // 按照传入的顺序打印数组；
    console.log(data);
});
Promise.race([p3,p2,p1]).then(data=>{
    // 按照传入的顺序打印数组；
    console.log(data);
})