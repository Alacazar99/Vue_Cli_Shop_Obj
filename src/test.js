
var add = (function() {
    // 声明一变量,由于下面 return所以变量只会声明一次
    var count = 0;
    return function() {
      return console.log(count++);
    };
  })();
  
  add(); // 0
  add(); // 1
  add(); // 2
  
  setInterval( (function() {
    // 声明一变量,由于下面 return所以变量只会声明一次
    var count = 0;
    return function() {
      return console.log(count++);
    };
  })() , 1000);
  