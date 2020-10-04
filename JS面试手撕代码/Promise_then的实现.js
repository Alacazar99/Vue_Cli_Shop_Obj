class Promise {
    constructor(executor) {
        this.status = "pending"; // 默认promise状态
        this.value;  // resolve成功时的值
        this.error;  // reject失败时的值
        this.resolveQueue = []; // 成功时回调队列
        this.rejectQueue = []; // 失败时回调队列

        let resolve = value => {
            if(this.status === "pending") {
                this.value = value;
                this.status = "resolved";
                this.resolveQueue.forEach(fn => fn())
            }
        }

        let reject = value => {
            if(this.status === "pending") {
                this.error = value;
                this.status = "rejected";
                this.rejectQueue.forEach(fn => fn())
            }
        }

        executor(resolve, reject)
    }

    then(onFullfilled, onRejected) {
        let promise2;
        promise2 = new Promise((resolve, reject) => {
            if(this.status === "resolved") {
                let x = onFullfilled(this.value);
                // resolvePromise函数，处理自己return的promise和默认的promise2的关系
                resolvePromise(promise2, x, resolve, reject);
            }
            if(this.status === "rejected") {
                let x = onRejected(this.value);
                resolvePromise(promise2, x, resolve, reject);
            }
            if(this.status === "pending") {
                this.resolveQueue.push(() => {
                    let x = onFullfilled(this.value);
                    resolvePromise(promise2, x, resolve, reject);
                })
                this.rejectQueue.push(() => {
                    let x = onRejected(this.error);
                    resolvePromise(promise2, x, resolve, reject);
                })
            }
        });
        
        // 返回 promise，达成链式效果
        return promise2;
    }
}
