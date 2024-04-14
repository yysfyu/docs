---
outline: deep
---

## 1. 简介

axios是一个基于`Promise` ，作用于nodejs和浏览器中的网络请求库。

具有以下特性：

- 从浏览器创建 XMLHttpRequests
- 从 node.js 创建 http 请求
- 支持 Promise API
- 拦截请求和响应
- 转换请求和响应数据
- 取消请求
- 超时处理
- 查询参数序列化支持嵌套项处理
- 自动将请求体序列化为：
  `JSON (application/json)`
  `Multipart / FormData (multipart/form-data)`
  `URL encoded form (application/x-www-form-urlencoded)`
- 将 HTML Form 转换成 JSON 进行请求
- 自动转换JSON数据
- 获取浏览器和 node.js 的请求进度，并提供额外的信息（速度、剩余时间）
- 为 node.js 设置带宽限制
- 兼容符合规范的 FormData 和 Blob（包括 node.js）
- 客户端支持防御XSRF



## 2. json server

###  2.1简介

`json-server`是一款` json `数据服务器，它运行 Express 服务器，可以对json文件、js脚本生成的json数据、远程json数据进行restful风格的增删改查操作，通过 **指定一个json文件作为api数据源** ，可以进行分页、排序、关联查询、范围查询等各种查询操作，是一套完整的模拟 REST API 接口

>  使用json-server需要注意：
>
> - 查询数据使用 GET
> - 新增数据使用 POST
> - 删除数据使用 DELETE
> - 修改数据使用 PUT 和 PATCH

### 2.2 安装

`npm install -g json-server`

### 2.3 db.json

在项目目录创建一个`db.json`文件

```json
{
  "users": [
    {
      "id":1,
      "name": "codeyu",
      "age": 20,
      "addr": "江苏南京"
    },
    {
      "id":2,
      "name": "xiaoming",
      "age": 22,
      "addr": "江苏苏州"
    }
  ]
}
```

### 2.4 启动服务

进入项目目录，打开终端输入 `json-server --watch db.json`

![](https://gitee.com/codeyu98/bed/raw/master/vitepress/20240413192340.png)

## 3. axios快速上手

### 3.1 在html中使用

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>axios</title>
  <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
</head>
<body>
  <script>
    axios.get("http://localhost:3000/users").then(res => {
      console.log(res.data);
    })
  </script>
</body>
</html>
```

![](https://gitee.com/codeyu98/bed/raw/master/vitepress/20240413193220.png)

### 3.2 在vue3项目中使用

准备一个vue3项目：

`npm create vue@latest`

安装axios：

` npm install axios`

```js
<template>
  <div>
    <h1>welcome to axios</h1>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios';

axios.get('http://localhost:3000/users').then(res => {
  console.log(res.data);
})
</script>
```

## 4. Axios API

1. 可以想axios传递相关配置创建请求：`axios(config)`

   ```js
   axios({
       method: 'post',
       url: '/test/1',
       data: {
           firstName: 'a'
           lastName: "b"
   	}
   });
   // 在nodejs中发get请求
   axios({
       method: 'get',
       url: "http://localhost:3000/users"
   }).then( res=> {
       console.log(res.data)
   })
   ```

2. 请求方式别名：

   `axios.request(config)`
   `axios.get(url[, config])`
   `axios.delete(url[, config])`
   `axios.head(url[, config])`
   `axios.options(url[, config])`
   `axios.post(url[, data[, config]])`
   `axios.put(url[, data[, config]])`
   `axios.patch(url[, data[, config]])`
   `axios.postForm(url[, data[, config]])`
   `axios.putForm(url[, data[, config]])`
   `axios.patchForm(url[, data[, config]])`

   > 在使用别名方法时， `url`、`method`、`data` 这些属性都不必在配置中指定。

## 5. Axios实例

### 创建一个实例

可以使用自定义配置新建一个实例：`axios.create([config])`

```js
const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});
```

### 实例方法

以下是可用的实例方法。指定的配置将与实例的配置合并。

```js
 axios#request(config)
 axios#get(url[, config])
 axios#delete(url[, config])
 axios#head(url[, config])
 axios#options(url[, config])
 axios#post(url[, data[, config]])
 axios#put(url[, data[, config]])
 axios#patch(url[, data[, config]])
 axios#getUri([config])
```



## 6. 请求配置

这些是创建请求时可以用的配置选项。只有 `url` 是必需的。如果没有指定 `method`，请求将默认使用 `GET` 方法

```json
{
  // `url` 是用于请求的服务器 URL
  url: '/user',

  // `method` 是创建请求时使用的方法
  method: 'get', // 默认值

  // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
  // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
  baseURL: 'https://some-domain.com/api/',

  // `transformRequest` 允许在向服务器发送前，修改请求数据
  // 它只能用于 'PUT', 'POST' 和 'PATCH' 这几个请求方法
  // 数组中最后一个函数必须返回一个字符串， 一个Buffer实例，ArrayBuffer，FormData，或 Stream
  // 你可以修改请求头。
  transformRequest: [function (data, headers) {
    // 对发送的 data 进行任意转换处理

    return data;
  }],

  // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
  transformResponse: [function (data) {
    // 对接收的 data 进行任意转换处理

    return data;
  }],

  // 自定义请求头
  headers: {'X-Requested-With': 'XMLHttpRequest'},

  // `params` 是与请求一起发送的 URL 参数
  // 必须是一个简单对象或 URLSearchParams 对象
  params: {
    ID: 12345
  },

  // `paramsSerializer`是可选方法，主要用于序列化`params`
  // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
  paramsSerializer: function (params) {
    return Qs.stringify(params, {arrayFormat: 'brackets'})
  },

  // `data` 是作为请求体被发送的数据
  // 仅适用 'PUT', 'POST', 'DELETE 和 'PATCH' 请求方法
  // 在没有设置 `transformRequest` 时，则必须是以下类型之一:
  // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - 浏览器专属: FormData, File, Blob
  // - Node 专属: Stream, Buffer
  data: {
    firstName: 'Fred'
  },
  
  // 发送请求体数据的可选语法
  // 请求方式 post
  // 只有 value 会被发送，key 则不会
  data: 'Country=Brasil&City=Belo Horizonte',

  // `timeout` 指定请求超时的毫秒数。
  // 如果请求时间超过 `timeout` 的值，则请求会被中断
  timeout: 1000, // 默认值是 `0` (永不超时)

  // `withCredentials` 表示跨域请求时是否需要使用凭证
  withCredentials: false, // default

  // `adapter` 允许自定义处理请求，这使测试更加容易。
  // 返回一个 promise 并提供一个有效的响应 （参见 lib/adapters/README.md）。
  adapter: function (config) {
    /* ... */
  },

  // `auth` HTTP Basic Auth
  auth: {
    username: 'janedoe',
    password: 's00pers3cret'
  },

  // `responseType` 表示浏览器将要响应的数据类型
  // 选项包括: 'arraybuffer', 'document', 'json', 'text', 'stream'
  // 浏览器专属：'blob'
  responseType: 'json', // 默认值

  // `responseEncoding` 表示用于解码响应的编码 (Node.js 专属)
  // 注意：忽略 `responseType` 的值为 'stream'，或者是客户端请求
  // Note: Ignored for `responseType` of 'stream' or client-side requests
  responseEncoding: 'utf8', // 默认值

  // `xsrfCookieName` 是 xsrf token 的值，被用作 cookie 的名称
  xsrfCookieName: 'XSRF-TOKEN', // 默认值

  // `xsrfHeaderName` 是带有 xsrf token 值的http 请求头名称
  xsrfHeaderName: 'X-XSRF-TOKEN', // 默认值

  // `onUploadProgress` 允许为上传处理进度事件
  // 浏览器专属
  onUploadProgress: function (progressEvent) {
    // 处理原生进度事件
  },

  // `onDownloadProgress` 允许为下载处理进度事件
  // 浏览器专属
  onDownloadProgress: function (progressEvent) {
    // 处理原生进度事件
  },

  // `maxContentLength` 定义了node.js中允许的HTTP响应内容的最大字节数
  maxContentLength: 2000,

  // `maxBodyLength`（仅Node）定义允许的http请求内容的最大字节数
  maxBodyLength: 2000,

  // `validateStatus` 定义了对于给定的 HTTP状态码是 resolve 还是 reject promise。
  // 如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，
  // 则promise 将会 resolved，否则是 rejected。
  validateStatus: function (status) {
    return status >= 200 && status < 300; // 默认值
  },

  // `maxRedirects` 定义了在node.js中要遵循的最大重定向数。
  // 如果设置为0，则不会进行重定向
  maxRedirects: 5, // 默认值

  // `socketPath` 定义了在node.js中使用的UNIX套接字。
  // e.g. '/var/run/docker.sock' 发送请求到 docker 守护进程。
  // 只能指定 `socketPath` 或 `proxy` 。
  // 若都指定，这使用 `socketPath` 。
  socketPath: null, // default

  // `httpAgent` and `httpsAgent` define a custom agent to be used when performing http
  // and https requests, respectively, in node.js. This allows options to be added like
  // `keepAlive` that are not enabled by default.
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),

  // `proxy` 定义了代理服务器的主机名，端口和协议。
  // 您可以使用常规的`http_proxy` 和 `https_proxy` 环境变量。
  // 使用 `false` 可以禁用代理功能，同时环境变量也会被忽略。
  // `auth`表示应使用HTTP Basic auth连接到代理，并且提供凭据。
  // 这将设置一个 `Proxy-Authorization` 请求头，它会覆盖 `headers` 中已存在的自定义 `Proxy-Authorization` 请求头。
  // 如果代理服务器使用 HTTPS，则必须设置 protocol 为`https`
  proxy: {
    protocol: 'https',
    host: '127.0.0.1',
    port: 9000,
    auth: {
      username: 'mikeymike',
      password: 'rapunz3l'
    }
  },

  // see https://axios-http.com/zh/docs/cancellation
  cancelToken: new CancelToken(function (cancel) {
  }),

  // `decompress` indicates whether or not the response body should be decompressed 
  // automatically. If set to `true` will also remove the 'content-encoding' header 
  // from the responses objects of all decompressed responses
  // - Node only (XHR cannot turn off decompression)
  decompress: true // 默认值

}
```

## 7. 响应结构

一个请求的响应结构包含如下字段：

```json
{
  // `data` 由服务器提供的响应
  data: {},

  // `status` 来自服务器响应的 HTTP 状态码
  status: 200,

  // `statusText` 来自服务器响应的 HTTP 状态信息
  statusText: 'OK',

  // `headers` 是服务器响应头
  // 所有的 header 名称都是小写，而且可以使用方括号语法访问
  // 例如: `response.headers['content-type']`
  headers: {},

  // `config` 是 `axios` 请求的配置信息
  config: {},

  // `request` 是生成此响应的请求
  // 在node.js中它是最后一个ClientRequest实例 (in redirects)，
  // 在浏览器中则是 XMLHttpRequest 实例
  request: {}
}
```

![](https://gitee.com/codeyu98/bed/raw/master/vitepress/20240414100159.png)

成功的请求响应可在then方法中接收：

```js
axios.get('/user/12345')
  .then(function (response) {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  });
```

当有错误返回时，可使用catch方法接收，或者传递一个`rejection callback`作为 then 的第二个参数

## 8. 默认配置

我们可以指定axios的默认配置，使其作用于每个请求。

### 8.1 全局axios默认值

```js
axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
```

### 8.2 自定义实例默认值

```js
// 创建实例时配置默认值
const instance = axios.create({
  baseURL: 'https://api.example.com'
});

// 创建实例后修改默认值
instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
```

### 8.3 配置的优先级

配置将会按优先级进行合并。

顺序是：

1. 在[lib/defaults.js](https://github.com/axios/axios/blob/master/lib/defaults.js#L28)中找到的库默认值，

2. 实例的 `defaults` 属性，

3. 请求的 `config` 参数。

   > 后面的优先级要高于前面的

例子：

```js
// 使用库提供的默认配置创建实例
// 此时超时配置的默认值是 `0`
const instance = axios.create();

// 重写库的超时默认值
// 现在，所有使用此实例的请求都将等待2.5秒，然后才会超时
instance.defaults.timeout = 2500;

// 重写此请求的超时时间，因为该请求需要很长时间
instance.get('/longRequest', {
  timeout: 5000
});
```

## 9.拦截器

作用：在请求或响应被 then 或 catch 处理前拦截它们，做一些处理。

请求和响应拦截器：

```js
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  });
```

移除拦截器：

```js
const myInterceptor = axios.interceptors.request.use(function () {/*...*/});
axios.interceptors.request.eject(myInterceptor);
```

自定义的 axios 实例添加拦截器。

```js
const instance = axios.create();
instance.interceptors.request.use(function () {/*...*/});
```

## 10. 错误处理

```js
axios.get('/user/12345')
  .catch(function (error) {
    if (error.response) {
      // 请求成功发出且服务器也响应了状态码，但状态代码超出了 2xx 的范围
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // 请求已经成功发起，但没有收到响应
      // `error.request` 在浏览器中是 XMLHttpRequest 的实例，
      // 而在node.js中是 http.ClientRequest 的实例
      console.log(error.request);
    } else {
      // 发送请求时出了点问题
      console.log('Error', error.message);
    }
    console.log(error.config);
  });
```

使用 `validateStatus` 配置选项，可以自定义抛出错误的 HTTP code。

```js
axios.get('/user/12345', {
  validateStatus: function (status) {
    return status < 500; // 处理状态码小于500的情况
  }
})
```

使用 `toJSON` 可以获取更多关于HTTP错误的信息。

```js
axios.get('/user/12345')
  .catch(function (error) {
    console.log(error.toJSON());
  });
```

![](https://gitee.com/codeyu98/bed/raw/master/vitepress/20240414101816.png)

## 11. 请求体编码

默认情况下，axios将 JavaScript 对象序列化为 `JSON` 。 要以`application/x-www-form-urlencoded`格式发送数据，可以使用以下选项之一。

### 浏览器

在浏览器中，可以使用[`URLSearchParams`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) API，如下所示：

```js
const params = new URLSearchParams();
params.append('param1', 'value1');
params.append('param2', 'value2');
axios.post('/foo', params);
```

或者, 可以使用[`qs`](https://github.com/ljharb/qs) 库编码数据:

```js
const qs = require('qs');
axios.post('/foo', qs.stringify({ 'bar': 123 }));
```

ES6方式

```js
import qs from 'qs';
const data = { 'bar': 123 };
const options = {
  method: 'POST',
  headers: { 'content-type': 'application/x-www-form-urlencoded' },
  data: qs.stringify(data),
  url,
};
axios(options);
```

### Node.js

#### Query string

在 node.js 中， 可以使用 [`querystring`](https://nodejs.org/api/querystring.html) 模块，如下所示:

```js
const querystring = require('querystring');
axios.post('http://something.com/', querystring.stringify({ foo: 'bar' }));
```

或者从['url module'](https://nodejs.org/api/url.html)中使用['URLSearchParams'](https://nodejs.org/api/url.html#url_class_urlsearchparams)，如下所示:

```js
const url = require('url');
const params = new url.URLSearchParams({ foo: 'bar' });
axios.post('http://something.com/', params.toString());
```

### 自动序列化

当请求头中的 `content-type` 是 `application/x-www-form-urlencoded` 时，Axios 将自动地将普通对象序列化成 urlencoded 的格式。

在浏览器和 `node.js` 环境中都适用：

```js
const data = {
  x: 1,
  arr: [1, 2, 3],
  arr2: [1, [2], 3],
  users: [{name: 'Peter', surname: 'Griffin'}, {name: 'Thomas', surname: 'Anderson'}],
};

await axios.post('https://postman-echo.com/post', data,
  {headers: {'content-type': 'application/x-www-form-urlencoded'}}
);
```

服务器接收到的数据就像是这样：

```js
  {
    x: '1',
    'arr[]': [ '1', '2', '3' ],
    'arr2[0]': '1',
    'arr2[1][0]': '2',
    'arr2[2]': '3',
    'arr3[]': [ '1', '2', '3' ],
    'users[0][name]': 'Peter',
    'users[0][surname]': 'griffin',
    'users[1][name]': 'Thomas',
    'users[1][surname]': 'Anderson'
  }
```

如果服务器框架的请求体解析器（例如`express.js`的`body-parser`）支持嵌套对象解码，则其接收到的数据将提交的数据一样。

以下是一个`express.js`的服务器示例，它将会把接收到的数据作为响应返回：

```js
  var app = express();
  
  app.use(bodyParser.urlencoded({ extended: true })); // support url-encoded bodies
  
  app.post('/', function (req, res, next) {
     res.send(JSON.stringify(req.body));
  });

  server = app.listen(3000);
```

