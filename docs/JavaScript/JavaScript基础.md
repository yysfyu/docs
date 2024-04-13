---
outline: deep
---
# Promise

## 1、为什么需要promise

主要解决回调地狱问题

> 一个回调地狱的例子：
>
> 通过`Ajax`请求获取一个`id`，再根据id请求用户名，然后再根据用户名获取其他信息...

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="./common/jquery.min.js"></script>
</head>
<body>
  <script>
    // 先发一个请求拿到一个id
    $.ajax({
      url: './public/id.json',
      type: 'GET',
      success: function(res1) {
        const {id} = res1
        console.log('id', id);

        // 再发一个Ajax请求，根据id去获取用户名
        $.ajax({
          type: "GET",
          url: "./public/username.json",
          data: {id},
          success: function(res2) {
            const {username} = res2;
            console.log("username:" , username);

            // 再根据用户名去拿地址
            $.ajax({
              type: "GET",
              url: "./public/address.json",
              data: {username},
              success: function(res3) {
                const {address} = res3;
                console.log("address", address);
              }
            })
          }
        })
      }
    })
  </script>
</body>
</html>

输出：
id 1
username: codeyu
address china
```

这样就陷入了回调地狱，每次都要在请求的回调函数中嵌套请求及其回调，这对于我们代码的阅读和维护是几不友好的。

## 2. promise的基本使用

`Promise` 是一个**构造函数**，通过`new`关键字实例化一个对象

### 1)语法：

```js
new Promise((resolve, reject)=>{})
```

`Promise`接受一个函数作为参数，参数函数中接受两个参数：

- `resolve`函数
- `reject`函数

promise实例有两个属性：

- `status`，初始状态是pending
- `result`

![](https://gitee.com/codeyu98/bed/raw/master/vitepress/20240413161244.png)

### 2)promise状态

- `pending`：（准备，待解决，进行中）
- `fulfilled`：（已完成）
- `rejected`（已拒绝）

`promise`状态的改变：通过调用`resolve()`和`reject()`

> 示例：

```js
const p = new Promise((resolve,reject) => {
    resolve(); 
    // reject();）
})
console.dir(p)
```

- 调用`resolve()`，将`promise`的状态从`pending`改变为`fulfilled`
- 调用`reject()`，将`promise`的状态从`pending`改变为`rejected`

> 注意：`promise`对象的状态改变是一次性的，只能从`pending`到其他两种状态

### 3)promise的结果

> 示例：

```js
    const p = new Promise((resolve,reject)=> {
      // 通过调用resolve并传递参数，改变当前promise对象的结果
      // resolve('success')
      reject('failed')
    })
    console.log(p);

```

![](https://gitee.com/codeyu98/bed/raw/master/vitepress/20240413161828.png)

![](https://gitee.com/codeyu98/bed/raw/master/vitepress/20240413161937.png)

## 3. promise的方法

![](https://gitee.com/codeyu98/bed/raw/master/vitepress/20240413162911.png)

### 1）then方法

> 参数：

```js
    const p = new Promise((resolve,reject)=> {
      resolve('success')
      // reject('failed')
    })
    // 参数：
    // 1.是一个函数
    // 2.还是一个函数
    console.dir(p);
    p.then(()=> {
      // 当promise的状态是fulfilled
      console.log("成功时调用");
    },() => {
      // 当promise的状态是rejected
      console.log("失败时调用");
    })

```

> 数据接收：

```js
	const p = new Promise((resolve,reject)=> {
      resolve('success')
      // reject('failed')
    })
    // then接收数据
    console.dir(p);
    p.then((value)=> {
      // 当promise的状态是fulfilled
      console.log("成功时调用",value);
    },(reason) => {
      // 当promise的状态是rejected
      console.log("失败时调用",reason);
    })

```

在then方法的参数函数中，通过形参接收promise对象的结果。

> 返回值：是一个新的promise实例，状态是pending

```js
    const p = new Promise((resolve,reject)=> {
      resolve('success')
      // reject('failed')
    })
    // then接收数据
    console.dir(p);
    const res = p.then((value)=> {
      // 当promise的状态是fulfilled
      console.log("成功时调用",value);
    },(reason) => {
      // 当promise的状态是rejected
      console.log("失败时调用",reason);
    })
    console.log(res);
    // 链式调用
    // new Promise((res,rej)=>{}).then().then()
  </script>
```

![](https://gitee.com/codeyu98/bed/raw/master/vitepress/20240413164329.png)

> 返回实例的状态改变：

`promise`的状态不改变，不会执行`then`方法，

**在`then`方法中 使用`return`可以将`then`返回的实例的状态改为`fulfilled` ** 

**在`then`方法中 代码出错，会将`then`返回的实例的状态改为`rejected` ** 

```js
new Promise( (res,rej) => {
  res('111')
}).then( (value)=> {
  console.log("success",value);
  // 使用return可以将then返回值实例的状态改为fulfilled
  return 123
},()=> {
  console.log("failed");
}).then( (value)=> {
  console.log("success",value);
},()=> {
  console.log("failed");
})


new Promise( (res,rej) => {
  res('111')
}).then( (value)=> {
  console.log("success",value);
  // 使用return可以将then返回值实例的状态改为fulfilled
  // return 123
  // 如果这里的代码出错，会把then返回值实例的状态改为rejected
  console.log(a);
},()=> {
  console.log("failed");
}).then( (value)=> {
  console.log("success",value);
},(reason)=> {
  console.log("failed",reason);
})
```

![](https://gitee.com/codeyu98/bed/raw/master/vitepress/20240413170041.png)

### 2）catch方法

执行时机：

`promise`的状态改为`rejected`时，
`promise`执行体中代码出错或者抛出一个错误

类似`then`方法的第二个参数函数

```js
const p = new Promise( (resolve,reject) => {
  // reject('fail')
  console.log(a);
})
// 执行时机：
// promise的状态改为rejected时，
// promise执行体中代码出错或者抛出一个错误
p.catch( ()=> {
  console.log("failed");
})
```

**常见写法**：

```js
new Promise((resolve,reject) => {

}).then((value) => {
  console.log(value);
}).catch((reason) => {
  console.log(reason);
})
```

## 4. promise解决回调地狱

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="./common/jquery.min.js"></script>
</head>
<body>
  <script>
    // 先发一个请求拿到一个id
    new Promise ( (resolve, reject) => {
      $.ajax({
        url: './public/id.json',
        type: 'GET',
        success: function(res1) {
          resolve(res1) // 修改promise的状态为fulfilled，结果为res1
        },
        error: function (err) {
          reject(err)
        }
      })
    }).then( (value)=> {
      console.log(value);
      const {id} = value;
      return new Promise((resolve, reject) => {
        $.ajax({
          url: './public/username.json',
          type: 'GET',
          data: {id},
          success: function(res1) {
            resolve(res1) // 修改promise的状态为fulfilled，结果为res1
          },
          error: function (err) {
            reject(err)
          }
        })
      })
    }).then( (data) => {
      const {username} = data;
      console.log(username);
      return new Promise((resolve, reject) => {
        $.ajax({
          url: './public/address.json',
          type: 'GET',
          data: {username},
          success: function(res1) {
            console.log(res1) // 修改promise的状态为fulfilled，结果为res1
          },
          error: function (err) {
            console.err(err)
          }
        })
      })
    })
  </script>
</body>
</html>
```

```js
代码优化

function getData(url,data = {}) {
  return new Promise ( (resolve, reject) => {
    $.ajax({
      url: url,
      type: 'GET',
      data: data,
      success: function(res1) {
        resolve(res1) // 修改promise的状态为fulfilled，结果为res1
      },
      error: function (err) {
        reject(err)
      }
    })
  })
}
getData('public/id.json')
  .then ((data) => {
    const {id} = data;
    return getData('public/username.json',{id})
  })
  .then( (data) => {
    const {username} = data;
    return getData('public/address.json', {username})
  }).then ( (data) => {
    console.log(data);
  })

```