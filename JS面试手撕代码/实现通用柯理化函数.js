// add的参数不固定，看有几个数字累计相加
function add (a,b,c,d) {
    return a+b+c+d
  }
  
  function currying (fn, ...args) {
    // fn.length 回调函数的参数的总和
    // args.length currying函数 后面的参数总和 
    // 如：add (a,b,c,d)  currying(add,1,2,3,4)
    if (fn.length === args.length) {  
      return fn(...args)
    } else {
      // 继续分步传递参数 newArgs 新一次传递的参数
      return function anonymous(...newArgs) {
        // 将先传递的参数和后传递的参数 结合在一起
        let allArgs = [...args, ...newArgs]
        return currying(fn, ...allArgs)
      }
    }
  }
  
  function currying(func,...args){
    if(func.length === args.length){
      return func(...args)
    }else{
      return function fn(...newArgs){
        let allArgs = [...args,...newArgs]
        return currying(func,...allArgs)
      }
    }
  }

  function currying(func,...args){
    if(func.length === args.length){
      return func(...args)
    }else{
      return function fn(...newArgs){
        let allArgs = [...args,...newArgs]
        return currying(func,...allArgs)
      }
    }
  }
  
function curring(func,...args){
  if(func.length === args.length){
    return func(...args)
  }else{
    return function fn(newArgs){
      let allArgs = [...args,...newArgs]
      return curring(func,...allArgs)
    }
  }
}

  let fn1 = currying(add, 1, 2) // 3
  let fn2 = fn1(3)  // 6
  let fn3 = fn2(4)  // 10
  