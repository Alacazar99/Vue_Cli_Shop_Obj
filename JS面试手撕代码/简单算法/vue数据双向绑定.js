// 发布者
function Subject() {
    this.observers = [];
    this.attach = function(callback) {
      this.observers.push(callback);
    };
    this.notify = function(value) {
      this.observers.forEach(callback => callback(value));
    };
  }
  
  // 订阅者
  function Observer(queue, key, callback) {
    queue[key].attach(callback);
  }
  
  // ====
  
  // 数据拦截器 - 代理方式
  function ProxyWatcher(data, queue) {
    return new Proxy(data, {
      get: (target, key) => target[key],
      set(target, key, value) {
        target[key] = value;
  
        // 通知此值的所有订阅者，数据发生了更新
        queue[key].notify(value);
      }
    });
  }
  
  // ====
  
  // 模板解析
  function Compile(el, data) {
  
    // 关联自定义特性
    if (el.attributes) {
      [].forEach.call(el.attributes, attribute => {
        if (attribute.name.includes('v-')) {
          Update[attribute.name](el, data, attribute.value);
        }
      });
    }
  
    // 递归解析所有DOM
    [].forEach.call(el.childNodes, child => Compile(child, data));
  }
  
  // 自定义特性对应的事件
  const Update = {
    "v-text"(el, data, key) {
  
      // 初始化DOM内容
      el.innerText = data[key];
  
      // 创建一个数据的订阅，数据变化后更新展示内容
      Observer(messageQueue, key, value => {
          el.innerText = value;
      });
    },
    "v-model"(input, data, key) {
  
      // 初始化Input默认值
      input.value = data[key];
  
      // 监听控件的输入事件，并更新数据
      input.addEventListener("keyup", e => {
        data[key] = e.target.value;
      });
  
      // 创建一个订阅
      Observer(messageQueue, key, value => {
        input.value = value;
      });
    }
  };
  
  // ====
  
  // 消息队列
  const messageQueue = {};
  
  // 数据
  const myData = ProxyWatcher({ value: "hello world." }, messageQueue);
  
  // 将每个数据属性都添加到观察者的消息队列中
  for (let key in myData) {
      messageQueue[key] = new Subject();
  }
  
  // ====
  
  // 解析+关联
  Compile(document.querySelector("#app"), myData);
  