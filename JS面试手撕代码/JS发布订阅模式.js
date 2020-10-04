

let pubSub = {
    list: {},
    subscribe: function (key, fn) {  //订阅
        if (!this.list[key]) {
            this.list[key] = []
        }
        this.list[key].push(fn)
    },
    publish: function (key, ...args) {  //发布
        for (let fn of this.list[key]) {
            fn.apply(this, args)
        }
    },
    unSubscribe: function (key, fn) { //取消订阅
        let fnlist = this.list[key]
        if (!fnlist) return
        if (!fn) {
            fnlist.length = 0
        } else {
            fnlist.forEach((item, index) => {
                if (item === index) {
                    fnlist.splice(index, 1)
                }
            })
        }
    }

}

pubSub.subscribe('onwork', time => {
    console.log(`上班了：${time}`);
})
pubSub.subscribe('offwork', time => {
    console.log(`下班了：${time}`);
})
pubSub.subscribe('launch', time => {
    console.log(`吃饭了：${time}`);
})

// // 发布
pubSub.publish('offwork', '18:00:00');
pubSub.publish('launch', '12:00:00');

pubSub.unSubscribe('onwork');
pubSub.publish('onwork', '1222:00:00');


// ===========================================

class EventEmitter {
    constructor() {
      // 事件对象，存放订阅的名字和事件
      this.events = {};
    }
    // 订阅事件的方法
    on(eventName,callback) {
      if (!this.events[eventName]) {
        // 注意数据，一个名字可以订阅多个事件函数
        this.events[eventName] = [callback];
      } else  {
        // 存在则push到指定数组的尾部保存
        this.events[eventName].push(callback)
      }
    }
    // 触发事件的方法
    emit(eventName) {
      // 遍历执行所有订阅的事件
      this.events[eventName] && this.events[eventName].forEach(cb => cb());
    }
  }
  
  