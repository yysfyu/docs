---
outline: deep
---

# 0. 简介

JavaScript 对网页行为进行编程

javascript 是脚本语言，是一种轻量级的编程语言

JavaScript 是动态类型语言，而 Java 是静态类型语言

JavaScript 是弱类型的，Java 属于强类型

## 1. 命名规范

- 区分大小写
- 第一个字符必须是一个字母、下划线（_）或一个美元符号（$）;其他字符可以是字母、下划线、美元符号或数字
- 不能含有空格和其他标点符号。
- 不能以关键字或保留字命名

## 2.书写规范

1. 缩进的最小单位是4个空格
2. 所有的变量应该在使用前声明
3. 命名应该由26个大小写字母(A .. Z, a .. z)，10个数字(0 .. 9)和_(下划线)组成。不要在名字里使用$(美元符号)或(反斜线符号)。

## 3. 使用

1、JavaScript 代码必须位于 < script > 与 </ script > 标签之间。

```html
html
复制代码<script>
  document.getElementById("demo").innerHTML = "我的第一段 JavaScript";
</script>
```

2、JavaScript 文件放置外部脚本引用。

```html
html
复制代码<script src="myScript.js"></script>
```

> 外部 JavaScript 的优势:
>
> > 1、分离了 HTML 和代码
> >  2、使 HTML 和 JavaScript 更易于阅读和维护
> >  3、已缓存的 JavaScript 文件可加速页面加载

## 4. 注释

> //	单行注释 
>  /*   */	多行注释

## 5. 输出

### 输出

代码|详解 -|-|- window.alert()|【弹出警告框】 document.write()|【将内容写到HTML文档中】 innerHTML|【写入到HTML中】 console.log()|【写入到浏览器控制台】

> 附（PS：console有很多有意思的玩法） 
>  console.log('文字信息'); 
>  console.info('提示信息'); 
>  console.warn('警告信息'); 
>  console.error('错误信息');

### 语句标识符（关键词）

关键词|详解 -|-|- break|用于跳出循环。 catch|语句块，在 try 语句块执行出错时执行 catch 语句块。 continue|跳过循环中的一个迭代。 do ... while|执行一个语句块，在条件语句为 true 时继续执行该语句块。 for|在条件语句为 true 时，可以将代码块执行指定的次数。 for ... in|用于遍历数组或者对象的属性（对数组或者对象的属性进行循环操作）。 function|定义一个函数 if ... else|用于基于不同的条件来执行不同的动作。 return|退出函数 switch|用于基于不同的条件来执行不同的动作。 throw|抛出（生成）错误 。 try|实现错误处理，与 catch 一同使用。 var|声明一个变量。 while|当条件语句为 true 时，执行语句块。

# 变量

## 1. 变量

变量是用于存储某种/某些数值的存储器。

## 2. 命名方法

### 2.1 匈牙利命名法

变量名 = 类型 + 对象描述

| 命名类型       | 命名前缀 |
| -------------- | -------- |
| array 数组     | a        |
| boolean 布尔值 | b        |
| float 浮点数   | l        |
| function 函数  | fn       |
| int 整型       | i        |
| object 对象    | o        |
| regular 正则   | r        |
| string 字符串  | s        |

> 举例：

```js
js
复制代码var s_webname = 'hello world'
```

### 2.2 驼峰式命名法

当标识符由一个或多个单词连接在一起，第一个单词的首字母小写，后面的单词首字母大写，其它字母全部小写。

> 举例：

```js
js
复制代码var webName = 'hello world'
```

### 2.3 帕斯卡命名法

与骆驼式命名法类似，不过第一个单词首字母也大写

> 举例：

```js
js
复制代码var WebName = 'hello world'
```

## 3.变量声明

var - 声明全局变量

let - 声明块级变量，即局部变量。(即：所声明的变量，只在let命令所在的代码块内有效。)

const - 用于声明常量，也具有块级作用域 ，也可声明块级。(const声明的变量不得改变值， 这意味着，const一旦声明变量，就必须立即初始化，不能留到以后赋值。不可重复声明。)

## 4.变量类型

此处不作介绍，详情可看 [2.数据类型]() →

## 5.变量作用域

在 JavaScript 中, 作用域是可访问变量的集合。

JavaScript 函数作用域: 作用域在函数内修改。

一个变量的作用域（scope)是程序源代码中定义这个变量的区域。

> JavaScript 变量生命周期在它声明时初始化。
>
> > 局部变量在函数执行完毕后销毁。
> >  全局变量在页面关闭后销毁。

### 5.1 全局变量

变量在函数外定义，即为全局变量。

全局变量有 全局作用域: 网页中所有脚本和函数均可使用。

### 5.2 局部变量

变量在函数内声明，变量为局部作用域。

局部变量的优先级高于同名的全局变量

局部变量在函数开始执行时创建，函数执行完后局部变量会自动销毁。

# 数据类型

## 1. 数据类型

JavaScript 的数据类型，共有 **七** 种（其中 Symbol 是ES6新增），分为“基本类型”和“引用类型”

**基本类型：** 字符串(String)、数字(Number)、布尔(Boolean)、空(Null)、未定义(Undefined)

**引用类型：** 对象(Object)、数组(Array)

**原始类型：** 符号(Symbol)

null 和 undefined 通常被认为是特殊值，这两种类型的值唯一，就是其本身。

数据类型|说明 --|:--:|--: 字符串（String）|使用双引号 " 或单引号 ' 括起来的一个或多个字符 数字(Number)|包括整数和浮点数（包含小数点的数或科学记数法的数） 布尔(Boolean)|表示 true 或 false 这两种状态 空（Null）|变量或内容值为空（null），可以通过给一个变量赋 null 值来清除变量的内容 未定义（Undefined）|变量被创建后，未给该变量赋值，该类型只有一个取值：undefined 数组(Array)|var cars=new Array(); 对象(Object)|JavaScript 操作的对象 符号(Symbol)|Symbol 值通过Symbol函数生成。凡是属性名属于 Symbol 类型，就都是独一无二的，可以保证不会与其他属性名产生冲突。（PS：Symbol函数前不能使用new命令，否则会报错。）

## 2. js弱类型语言

**JavaScript 拥有动态类型，这意味着相同的变量可用作不同的类型**

**js是弱类型语言**，不重视类型的定义，但js会根据为变量赋值的情况自定判断该变量是何种类型。

## 3. 数据类型转换

JavaScript 拥有动态类型，可以不需要指定数据类型，在执行时会自动转换

JavaScript 变量可以转换为新变量或其他数据类型：

- 通过使用 JavaScript 函数
- 通过 JavaScript 自身自动转换

Number() 转换为数字， String() 转换为字符串， Boolean() 转化为布尔值。

## 4.数据类型判断

### 4.1 typeof 操作符

typeof 操作符用来检测变量的数据类型。

1. 写法

- typeof() 括号
- typeof object 中间加空格

1. 返回的数据类型

- number
- string
- boolean
- object
- undefined
- function
- Symbols

### 4.2 instanceof

instanceof 其实适合用于判断自定义的类实例对象, 而不是用来判断原生的数据类型

```js
js
复制代码function judgeType2 (obj) {
  if (obj === null) return "null";
  if (obj instanceof Array)  return "array";
  return (typeof obj);
} 
judgeType2("123")   // "string"
```

### 4.3 Object.prototype.toString.call()

使用 Object.prototype.toString.call() 方法, 可以获取到变量的准确的类型.

```js
js
复制代码console.log(Object.prototype.toString.call('asd'));  // [object String]
```

## 5. null、undefined、NaN

**1. null**

null 表示“空值”，代表一个空对象指针，使用typeof运算得到 “object”，所以你可以认为它是一个特殊的对象值。

**2. undefined**

undefined 表示“未定义”，可以把undefined看作是空的变量。

**3. NaN**

NaN，即非数字值，是一个特殊的数值，属于Number类型。

**NaN的特点:**

1. 任何设计NaN的操作都会返回NaN，这个特点在多步计算中有可能导致问题。
2. NaN与任何值都不相等，包括其本身。

> ps：针对NaN的这两个特点，ECMAScript定义了isNaN() 函数。

# 运算符

## 1. 算数运算符

+（加法）、-（减法）、*（乘法）、/（除法）、%（取余）、++（自加）、--（自减）

```js
js
复制代码// +（加法）
console.log( 1 + 1) // 2

// -（减法）
console.log( 2 - 1) // 1

// *（乘法）
console.log( 2 * 2) // 4

// /（除法）
console.log( 4 / 2) // 2

// %（取余）
console.log( 5 % 2) // 1
```

## 2. 赋值运算符

=（等于）、+=、-=、*=、/=、%=

```js
js
复制代码// =（等于）
var a = 10 
console.log(a)  // 10

// +=
var a = 10 
console.log(a+=1) // 11

// -=
var a = 10 
console.log(a-=1) // 9

// *=
var a = 10 
console.log(a*=2) // 20

// /=
var a = 10 
console.log(a/=2) // 5

// %=
var a = 10 
console.log(a%=3) // 1
```

## 3. 字符串运算符

+、+=

\+ 运算符也可用于对字符串进行相加

+= 赋值运算符也可用于相加（级联）字符串

## 4. 关系(比较)运算符

（大于）、<（小于）、>=（大于等于）、<=（小于等于）、!=（不等于）、==（等于）、===（全等）、！===（真不等）

> PS：==只比较数值不比较类型  ===比较包括类型

## 5. 逻辑运算符

&&（逻辑与/并且）：当两边表达式均为真运算结果才为真，否则为假

||（逻辑或/或者）：当两边有一个表达式为真则结果即为真

！（逻辑非/取反）：取反

## 6. 位运算符

| 运算符 | 描述 |
| ------ | ---- |
| &      | 和   |
| \|     | 或   |
| ~      | 取反 |
| 异或   |      |
| <<     | 左移 |
| >>     | 右移 |

## 7. 其他运算符

### 7.1 三元运算符( ? : )

条件？条件成立执行：条件不成立执行；

```js
js
复制代码2>1?console.log("true"):console.log("false")  // true
```

### 7.2 typeof

[数据类型中已写过，点此跳转到对应位置]()

### 7.3 逗号(,)

逗号运算符的作用是将若干表达式连接起来。它的优先级别在所有运算符中是最低的，结合方向是"自左至右"的。 （即：逗号运算符：是按顺序执行表达式，并且获得右边表达式的值。）

逗号表达式的一般形式是：表达式1，表达式2，表达式3……表达式n

```js
js
复制代码x=2*2,x*2;
console.log(x)  // 4
```

### 7.4 void

void 运算符对任何值返回 undefined。该运算符通常用于避免输出不应该输出的值

作用一：返回undefined

```js
js
复制代码function tan(){
  return 33;
}
console.log(void tan());  // undefined
```

作用二:防止不必要的行为。在页面中有个a标签，但是该a标签又不是为了指向跳转页面的话，这个时候void运算符就派上大大的用场了。

```html
html
复制代码<a href='javascript:void(0)'>点我将不会执行任何行为</a>
```

# 流程语句

## 1. 循环语句

### 1.1 while

1. **语法：**

```js
js
复制代码while(条件表达式){
  循环执行的代码块
}
```

1. **流程：**

- 当指定的条件为 true 时循环指定的代码块
- 当指定的条件为 false 时退出循环体

1. **特性：**

- 先检查条件，再执行循环，条件不满足则循环一次也不执行

1. **例子**

```js
js
复制代码var i = 0;
while(i < 2){
  console.log(i)
  i++;
}
// 0
// 1
```

### 1.2 do...while

1. **语法：**

```js
js
复制代码do{
  循环执行的代码块
}while(条件表达式);
```

1. **流程：**

- 先执行循环体内代码块再进行判断
- 如果表达式的值为 true ，循环执行代码块
- 如果表达式的值为 false ，退出循环体

1. **特性：**

- 先执行循环体，再进行条件判断，循环体内代码至少执行一次

1. **例子**

```js
js
复制代码var i = 0;
do{
  console.log(i)
  i++;
}while(i < 2)
// 0
// 1
```

### 1.3 for

1. **语法：**

```js
js
复制代码for(循环变量=初值;循环条件;递增/递减计数器){
  循环执行的代码块
}
```

1. **流程：**

- 用循环变量初始值与循环条件相比较，确定返回值
- 如果返回值为 true ，执行循环体
- 执行完后进行递增/递减云算
- 将运算结果与循环条件相比较
- 如果返回值为 true 则继续执行，为 false 则退出循环

1. **例子**

```js
js
复制代码for(var i = 0;i < 2;i++){
  console.log(i)
}
// 0
// 1
```

### 1.4 for...in

1. **语法：**

```js
js
复制代码for(声明变量 in 对象){
  代码块
}
```

> 循环输出的属性顺序不可预知，对象的值不能是 null 或 undefined

1. **例子**

```js
js
复制代码var arr= ['a','b','c'];
for(var x in arr ){
  console.log(arr[x]);
}
// a
// b
// c
```

## 2.跳转语句

### 2.1 return

终止循环体的运行，并返回一个值

### 2.2 break

终止整个循环，不再进行判断，只能用在循环或 switch 中。

### 2.3 continue

continue 语句中断循环中的迭代，如果出现了指定的条件，然后继续循环中的下一个迭代。(即：结束本次循环，接着去判断是否执行下次循环)

## 3.条件判断语句

### 3.1 if

1. **语法：**

```js
js
复制代码if(条件表达式1){
  代码块 1
}else if(条件表达式2){
  代码块 2
}else{
  代码块 3
}
```

1. **流程：**

- 判断条件1，如果返回值为 true ，执行代码块1
- 判断条件1的返回值为 false 则跳过语句块并检测条件表达式2
- 如果所有表达式的值均为 false 则执行 else 后面的语句

1. **例子**

```js
js
复制代码var a = 1
var b = 2
if(a > b){
  console.log("true")
}else{
  console.log("false")
}
// false
```

### 3.2 switch

1. **语法：**

```js
js
复制代码switch(条件表达式){
  case 标签1 ：
    代码块 1;
    break;
    …… ……
  default:
    代码块n;
}
```

1. **流程：**

- 计算表达式的值，并与各标签比较
- 若找到与之匹配的标签，则执行其后的代码块
- 若没有找到与之匹配的标签，则直接执行 default 之后的代码块

1. **例子**

```js
js
复制代码var day;
switch (new Date().getDay()) {
  case 0:
    day = "周日";
    break;
  case 1:
    day = "周一";
    break;
  case 2:
    day = "周二";
    break;
  case 3:
    day = "周三";
    break;
  case 4:
    day = "周四";
    break;
  case 5:
    day = "周五";
    break;
  case  6:
    day = "周六";
}
console.log("今天是" + day)

//假设 new Date().getDay() 得到的值是5 那么最后输出是
//今天是周五
```

## 4.异常处理语句

### 4.1 throw

主动抛出异常

### 4.2 try

指明需要处理的代码块

### 4.3 catch

捕获异常

### 4.4 finally

后期处理

# 数组

## 1. 创建方法

> 数组长度是弹性的，可自由伸缩； 数组下标从0开始 数组元素可添加到对象中

**1. 空数组**

```js
js
复制代码var Obj = new Array();
```

**2. 指定长度数组**

```js
js
复制代码var Obj = new Array( Size );
```

**3. 指定元素数组**

```js
js
复制代码var Obj = new Array( 元素1,元素2,元素3,...,元素N );
```

**4. 单维数组**

```js
js
复制代码var Obj = [元素1,元素2,元素3,...,元素N];
```

**5. 多维数组**

```js
js
复制代码var Obj = new Array( [数组序列1],[数组序列2],[数组序列3],...,[数组序列N] );
```

## 2. 数组属性

### 2.1 constructor

constructor 属性返回对象的构造函数

### 2.2 length

length 返回数组的长度

### 2.3 prototype

prototype 通过增加属性和方法扩展数组定义

## 3. 遍历数组

### 3.1 使用 for 循环

```js
js
复制代码for(var i = 0;i < 5;i++){
  console.log(i)
}
// 0
// 1
// 2
// 3
// 4
```

### 3.2 使用 for...in

```js
js
复制代码var arr = ['a','b','c'];
for(i in arr){
  console.log(arr[i])
}
// a
// b
// c
```

### 3.3 使用 forEach

```js
js
复制代码var arr = ['a','b','c'];
arr.forEach(function(item) {
  console.log(item);
});
// a
// b
// c
```

## 4. 数组方法

| 方法             | 描述                                                         |
| ---------------- | ------------------------------------------------------------ |
| concat()         | 连接两个或更多的数组，并返回结果。                           |
| join()           | 把数组的所有元素放入一个字符串。元素通过指定的分隔符进行分隔。 |
| pop()            | 删除并返回数组的最后一个元素                                 |
| push()           | 向数组的末尾添加一个或更多元素，并返回新的长度。             |
| reverse()        | 颠倒数组中元素的顺序。                                       |
| shift()          | 删除并返回数组的第一个元素                                   |
| slice()          | 从某个已有的数组返回选定的元素                               |
| sort()           | 对数组的元素进行排序                                         |
| splice()         | 删除元素，并向数组添加新元素。                               |
| toSource()       | 返回该对象的源代码。                                         |
| toString()       | 把数组转换为字符串，并返回结果。                             |
| toLocaleString() | 把数组转换为本地数组，并返回结果。                           |
| unshift()        | 向数组的开头添加一个或更多元素，并返回新的长度。             |
| valueOf()        | 返回数组对象的原始值                                         |

### 4.1 concat()

连接两个或更多的数组，并返回结果。

**语法**

```
arrayObject.concat(arrayX,arrayX,......,arrayX)
```

**例子**

```js
js
复制代码var a = [1,2,3];
var b = a.concat(4,5)
console.log(b)
// [1,2,3,4,5]
```

### 4.2 join()

把数组的所有元素放入一个字符串。元素通过指定的分隔符进行分隔。

**语法**

```
arrayObject.join(separator)
```

**例子**

```js
js
复制代码var a = [1,2,3];
var b = a.join(",")
console.log(b)
// 1,2,3
```

### 4.3 pop()

删除并返回数组的最后一个元素

pop() 方法将删除 arrayObject 的最后一个元素，把数组长度减 1，并且返回它删除的元素的值。如果数组已经为空，则 pop() 不改变数组，并返回 undefined 值。

**语法**

```
arrayObject.pop()
```

**例子**

```js
js
复制代码var a = [1,2,3];
var b = a.pop()
console.log(b)  // 3
console.log(a)  //[1,2]
```

### 4.4 push()

向数组的末尾添加一个或更多元素，并返回新的长度。

push() 方法可把它的参数顺序添加到 arrayObject 的尾部。它直接修改 arrayObject，而不是创建一个新的数组。push() 方法和 pop() 方法使用数组提供的先进后出栈的功能。

> PS：该方法会改变数组的长度。

**语法**

```
arrayObject.push(newelement1,newelement2,....,newelementX)
```

**例子**

```js
js
复制代码var a = [1,2,3];
var b = a.push(4)
console.log(b)  // 4
console.log(a)  //[1,2,3,4]
```

### 4.5 reverse()

颠倒数组中元素的顺序。

> PS：该方法会改变原来的数组，而不会创建新的数组。

**语法**

```
arrayObject.reverse()
```

**例子**

```js
js
复制代码var a = [1,2,3];
var b = a.reverse()
console.log(b)  // 3,2,1
console.log(a)  // 3,2,1
```

### 4.6 shift()

删除并返回数组的第一个元素

如果数组是空的，那么 shift() 方法将不进行任何操作，返回 undefined 值。请注意，该方法不创建新数组，而是直接修改原有的 arrayObject。

> PS：该方法会改变数组的长度。

**语法**

```
arrayObject.shift()
```

**例子**

```js
js
复制代码var a = [1,2,3];
var b = a.shift()
console.log(b)  // 1
console.log(a)  // [2,3]
```

### 4.7 slice()

从某个已有的数组返回选定的元素

> PS：该方法并不会修改数组，而是返回一个子数组。如果想删除数组中的一段元素，应该使用方法 Array.splice()。
>  您可使用负值从数组的尾部选取元素。
>  如果 end 未被规定，那么 slice() 方法会选取从 start 到数组结尾的所有元素。

**语法**

```
arrayObject.slice(start,end)
```

**例子**

```js
js
复制代码var a = [1,2,3];
var b = a.slice(1,2)
console.log(b)  // [2]
console.log(a)  // [1,2,3]
```

### 4.8 sort()

对数组的元素进行排序

如果调用该方法时没有使用参数，将按字母顺序对数组中的元素进行排序，说得更精确点，是按照字符编码的顺序进行排序。要实现这一点，首先应把数组的元素都转换成字符串（如有必要），以便进行比较。

**语法**

```
arrayObject.sort(sortby)
```

**例子**

```js
js
复制代码var a = ['c','d','a','f'];
a.sort()
console.log(a)  // ["a", "c", "d", "f"]
```

### 4.9 splice()

删除元素，并向数组添加新元素。

splice() 方法可删除从 index 处开始的零个或多个元素，并且用参数列表中声明的一个或多个值来替换那些被删除的元素。

如果从 arrayObject 中删除了元素，则返回的是含有被删除的元素的数组。

> PS：请注意，splice() 方法与 slice() 方法的作用是不同的，splice() 方法会直接对数组进行修改。

**语法**

```
arrayObject.splice(index,howmany,item1,.....,itemX)
```

**例子**

```js
js
复制代码var a = [1,2,3];
var b = a.splice(1,2)
console.log(b)  // [2,3]
console.log(a)  // [1]
```

### 4.10 toSource()

返回该对象的源代码。

该原始值由 Array 对象派生的所有对象继承。

toSource() 方法通常由 JavaScript 在后台自动调用，并不显式地出现在代码中。

**语法**

```
object.toSource()
```

**例子**

```js
js
复制代码function employee(name,sex,born){
  this.name=name;
  this.sex=sex;
  this.born=born;
}
var bill = new employee("miluluyo","girl",1997);
document.write(bill.toSource());
//({name:"miluluyo", sex:"girl", born:1997}) 
```

### 4.11 toString()

把数组转换为字符串，并返回结果。

当数组用于字符串环境时，JavaScript 会调用这一方法将数组自动转换成字符串。但是在某些情况下，需要显式地调用该方法。

**语法**

```
arrayObject.toString()
```

**例子**

```js
js
复制代码var a = [1,2,3];
var b = a.toString()
console.log(b)  // 1,2,3
console.log(a)  // [1,2,3]
```

### 4.12 toLocaleString()

把数组转换为本地数组，并返回结果。

首先调用每个数组元素的 toLocaleString() 方法，然后使用地区特定的分隔符把生成的字符串连接起来，形成一个字符串。

**语法**

```
arrayObject.toLocaleString()
```

**例子**

```js
js
复制代码var a = [1,2,3];
var b = a.toLocaleString()
console.log(b)  // 1,2,3
console.log(a)  // [1,2,3]
```

### 4.13 unshift()

向数组的开头添加一个或更多元素，并返回新的长度。

unshift() 方法将把它的参数插入 arrayObject 的头部，并将已经存在的元素顺次地移到较高的下标处，以便留出空间。该方法的第一个参数将成为数组的新元素 0，如果还有第二个参数，它将成为新的元素 1，以此类推。

> unshift() 方法不创建新的创建，而是直接修改原有的数组。
>  unshift() 方法无法在 Internet Explorer 中正确地工作！

**语法**

```
arrayObject.unshift(newelement1,newelement2,....,newelementX)
```

**例子**

```js
js
复制代码var a = [1,2,3];
var b = a.unshift(0,4,5)
console.log(b)  // 6
console.log(a)  // [0,4,5,1,2,3]
```

### 4.14 valueOf()

返回数组对象的原始值

该原始值由 Array 对象派生的所有对象继承。

valueOf() 方法通常由 JavaScript 在后台自动调用，并不显式地出现在代码中。

**语法**

```
arrayObject.valueOf()
```

**例子**

```js
js
复制代码var boo = new Boolean(false)
document.write(boo.valueOf())
// false
```

# 函数

## 1. 定义方法

**1. 静态方法**

```js
js
复制代码function 函数名([虚参列表]){
  函数体;
  [return[函数返回值;]]
}
```

**2. 动态匿名方法**

```js
js
复制代码var 函数名 = new function(["虚参列表"],"函数体")
```

**3. 直接量方法**

```js
js
复制代码函数名 = function([虚参列表]){函数体;}
```

## 2. 调用方法

**2.1 直接调用**

```js
js
复制代码函数名(实参列表)
```

**2.2 链接中调用**

```html
html
复制代码<a href="javascript:函数名()">a标签</a>
```

**2.3 在事件中调用**

```js
js
复制代码事件类型 = "函数名()"
```

**2.4 递归调用**

在函数体内部调用函数自身

```js
js
复制代码function 函数名(){
  代码
  函数名();
}
```

## 3.方法

### apply

将函数作为对象的方法来调用，将参数以数组形式传递给该方法

**语法**

```
function.apply(thisObj,[arg1,arg2,....argN])
```

### call

将函数作为对象的方法来调用，将指定参数传递给该方法

**语法**

```
function.call(thisObj, arg1,arg2,...argN)
js
复制代码var foo = {
  value: 1
};
function bar() {
  console.log(this.value);
}
bar.call(foo); // 1
//call 改变了 this 的指向，指向到 foo
//bar 函数执行了
```

### toString

返回函数的字符串表示

## 4. arguments 对象

arguments是一个对应于传递给函数的参数的类数组对象。

arguments对象是所有（非箭头）函数中都可用的局部变量。

**属性**

**4.1 length**

获取函数实参的长度

**4.2 arguments.callee**

返回当前正在指向的函数

> 严格模式下，无法使用。

```js
js
复制代码function test() {
  console.log(arguments.callee) 
}
test();  //fn test
```

**4.3 caler**

返回调用当前正在执行函数的函数名

## 5. 函数参数

**参数类型**

**5.1 形参**

定义函数时使用的参数，接收调用该函数时传递的参数

**5.2 实参**

调用函数时传递给函数的实际参数

**特性**

1. 参数个数没有限制；

**实参 < 形参：** 多余形参 = undefined

**实参 > 形参：** 多余形参被忽略

1. 参数的数据类型没有限制；
2. 通过 arguments 对象访问参数数组
3. 参数始终按值传递

**基本类型：**传值

**引用类型：**传址

## 6. 指针标识

### 6.1 this

指向当前操作对象

### 6.2 callee

指向参数集合所属函数

### 6.3 prototype

指向函数附带的原型对象

### 6.4 constructor

指向创建该对象的构造函数

## 7. 箭头函数 （ES6）

**和普通函数的区别**

1. 不绑定this,arguments
2. 更简化的代码语法。

> 不绑定this
>
> > 箭头函数的 this 始终未定义的 this

> 不绑定arguments
>
> > 如果你在箭头函数中使用arguments参数不能得到想要的内容。

```js
js
复制代码function(){
    console.log('hello')
}
//写成箭头函数后如下：
()=> conosle.log('hello')
```

## 8. 闭包

JavaScript 变量属于本地或全局作用域。

全局变量能够通过闭包实现局部（私有）。

闭包是一种保护私有变量的机制，在函数执行时形成私有的作用域，保护里面的私有变量不受外界干扰。

直观的说就是形成一个不销毁的栈环境。

```js
js
复制代码var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();

console.log(add());  // 1
console.log(add());  // 2
console.log(add());  // 3
```

变量 add 的赋值是自调用函数的返回值。

这个自调用函数只运行一次。它设置计数器为零（0），并返回函数表达式。

这样 add 成为了函数。最“精彩的”部分是它能够访问父作用域中的计数器。

这被称为 JavaScript 闭包。它使函数拥有“私有”变量成为可能。

计数器被这个匿名函数的作用域保护，并且只能使用 add 函数来修改。

闭包指的是有权访问父作用域的函数，即使在父函数关闭之后。

# 字符串函数

## 1. 查找方法

### 1.1 字符串方法

**chartAt()**

chartAt() 返回字符串中第N个字符

**chartCodeAt()**

chartCodeAt() 返回字符串中第N个字符的代码

**fromCharCode()**

fromCharCode() 根据字符编码创建字符串

> **关系**

> > charAt与charCodeAt共性：根据下标查找指定字符
> >  charCodeAt与fromCharCode:互为反向操作

### 1.2 位置方法

**indexOf()**

indexOf() 从前向后检索字符串，看其是否含有指定字符串

**lastIndexOf()**

从后向前检索字符串，看其是否含有指定字符串

### 1.3 匹配方法

**match()**

match()找到一个或多个正则表达式的匹配

**search()**

search()检索字符串中与正则表达式匹配的字符串

**replace()**

replace()替换一个与正则表达式匹配的字符串

**split()**

split()根据指定分隔符将字符串分割成多个字符串，并返回数组

## 2. 操作方法

### 2.1 拼接方法

**concat()**

将指定字符串连接到此字符串的结尾

**语法**

```
string.concat(value..)
js
复制代码String str = "abc";
str = str.concat("123");
System.out.println(str);//abc123
```

### 2.2 获取方法

> **根据下标截取字符串**
>
> > **slice()**
> >
> > slice()与字符长度相加
> >
> > **substring()**
> >
> > substring()转换为0 **根据长度截取字符串** **substr()** substr()返回字符的个数

### 2.3 空格处理

**trim** 清除前置及后缀空格

**timLeft** 清除前置空格

**trimRight** 清除后缀空格

### 2.4 比较方法

localCompare() 用本地特定顺序比较两个字符串

## 3. 编码方法

**字符串常规编码与解码** escape()、unescape()

**URI字符串编码与解码** encodeURI()、decodeURI()

## 4. 转换方法

### 4.1 大小写转换

**转为大写** toUpperCase()、toLocaleUpperCase()

**转为小写** toLowerCase()、toLocaleLowerCase()

**URI组件编码与解码** encodeURIComponent()、decodeURIComponent()

# 正则表达式

## 0. 正则表达式

正则表达式（英语：Regular Expression，在代码中常简写为regex、regexp或RE）使用单个字符串来描述、匹配一系列符合某个句法规则的字符串搜索模式。

## 1. 方式：

**字面量**

```js
js
复制代码var 变量名 = /表达式/模式修饰符
```

**构造函数**

```js
js
复制代码var 变量名 = new RegExp("表达式","模式修饰符")
```

## 2. 表达式

### 单个字符与数字

| 编码      | 详解                       |
| --------- | -------------------------- |
| .         | 匹配除换行符之外的任意字符 |
| [a-z0-9]  | 匹配方括号中的任意字符     |
| [^a-z0-9] | 匹配不在方括号中的任意字符 |
| \d        | 匹配数字                   |
| \D        | 匹配非数字                 |
| \w        | 匹配字母                   |
| \W        | 匹配非字母                 |

### 空白字符

| 编码 | 详解                               |
| ---- | ---------------------------------- |
| \0   | 匹配 null 字符                     |
| \b   | 匹配空格字符                       |
| \f   | 匹配进纸符                         |
| \n   | 匹配换行符                         |
| \r   | 匹配回车符                         |
| \s   | 匹配空白字符、空格、制表符或换行符 |
| \S   | 匹配非空白字符                     |
| \t   | 匹配制表符                         |

### 定位符

| 编码 | 详解                       |
| ---- | -------------------------- |
| ^    | 行首匹配                   |
| $    | 行尾匹配                   |
| \A   | 只匹配字符串的开始处       |
| \b   | 匹配单词边界，词在[]内无效 |
| \B   | 匹配非单词边界             |
| \G   | 匹配当前搜索的开始位置     |
| \Z   | 匹配字符串结束处或行尾     |
| \z   | 只匹配字符串结束处         |

### 限定符

| 编码   | 详解                  |
| ------ | --------------------- |
| x?     | 匹配0个或1个x         |
| x*     | 匹配0个或任意多个x    |
| x+     | 匹配至少1个x          |
| x{m n} | 匹配最少m个，最多n个x |

### 分组

| 编码   | 详解                  |
| ------ | --------------------- |
| (?:x)  | 匹配x但不记录匹配结果 |
| x(?=y) | 当x后接y时匹配x       |
| x(?!y) | 当x后不是y时匹配x     |

### 引用

| 编码  | 详解                                                 |
| ----- | ---------------------------------------------------- |
| \1…\9 | 1…1…1…9 返回九个在模式匹配期间找到的、最近保存的部分 |

### 或迷失

| 编码 | 详解 |      |             |
| ---- | ---- | ---- | ----------- |
| x`   | y    | `z   | 匹配x或y或z |

## 3. 模式修饰符

| 编码 | 详解                       |
| ---- | -------------------------- |
| g    | 全局模式，应用于所有字符串 |
| i    | 区分大小写模式             |
| m    | 多行匹配模式               |

## 4. 属性

### 实例属性

| 编码       | 详解                                       |
| ---------- | ------------------------------------------ |
| global     | 检测是否设置g标记                          |
| ignoreCase | 检测是否设置i标记                          |
| multiline  | 检测是否设置了m标记                        |
| lastIndex  | 开始检索下一个匹配项的字符位置             |
| source     | 返回正则表达式的字符串表示                 |
| lastIndex  | 返回被查找字符串中下一次成功匹配的开始位置 |

### 构造函数属性

| 编码 | 代码         | 详解                                                         |
| ---- | ------------ | ------------------------------------------------------------ |
| $_   | input        | 返回最近一次匹配的字符串                                     |
| $&   | lastMatch    | 返回最近一次的匹配项                                         |
| $+   | lastParen    | 返回最近一次匹配的捕获组                                     |
| $`   | leftContext  | 返回被查找的字符串中从字符串开始位置到最后匹配之前的位置之间的字符 |
| $'   | rightContext | 返回被搜索的字符串中从最后一个匹配位置开始到字符串结尾之间的字符 |
| $*   | multiline    | 检测表达式是否采用多行模式匹配m                              |

## 5. 方法

### 实例方法

**exec**

exec 在字符串中执行匹配检索，返回结果数组

> 派生属性
>
> > index 匹配项在字符串中的位置 input 应用正则表达式的字符串 length 返回数组元素个数

**test**

test 在字符串中测试模式匹配，返回true或false

### 字符串方法

| 编码    | 详解                           |
| ------- | ------------------------------ |
| match   | 找到一个或多个正则表达式的匹配 |
| replace | 替换与正则表达式匹配的子串     |
| search  | 检索与正则表达式相匹配的值     |
| split   | 把字符串分割为字符串数组       |

# DOM 基本操作

## 0. DOM

通过 HTML DOM，可访问 JavaScript HTML 文档的所有元素。

HTML DOM (文档对象模型) 当网页被加载时，浏览器会创建页面的文档对象模型（Document Object Model）。

## 1. 获取节点

### document

| 编码                | 语法                                   |
| ------------------- | -------------------------------------- |
| getElementById      | document.getElementById(元素ID)        |
| getElementByName    | document.getElementByName(元素name)    |
| getElementByTagName | document.getElementByTagName(元素标签) |

### 节点指针

| 编码            | 语法                     | 功能                     |
| --------------- | ------------------------ | ------------------------ |
| firstChild      | 父节点.firstChild        | 获取元素的首个子节点     |
| lastChild       | 父节点.lastChild         | 获取元素的最后一个子节点 |
| childNodes      | 父节点.childNodes        | 获取元素的子节点列表     |
| previousSibling | 兄弟节点.previousSibling | 获取已知节点的前一个节点 |
| nextSibling     | 兄弟节点.nextSibling     | 获取已知节点的后一个节点 |
| parentNode      | 子节点.parentNode        | 获取已知节点的父节点     |

## 2. 节点操作

### 创建节点

| 编码            | 语法                               | 功能         |
| --------------- | ---------------------------------- | ------------ |
| createElement   | document.createElement(元素标签)   | 创建元素节点 |
| createAttribute | document.createAttribute(元素属性) | 创建属性节点 |
| createTextNode  | document.createTextNode(文本内容)  | 创建文本节点 |

### 插入节点

| 编码         | 语法                                       | 功能                                   |
| ------------ | ------------------------------------------ | -------------------------------------- |
| appendChild  | appendChild(所添加的新节点)                | 向节点的子节点列表的末尾添加新的子节点 |
| insertBefore | insertBefore(所要添加的新节点，已知子节点) | 在已知的子节点前插入一个新的子节点     |

### 替换节点

| 编码         | 语法                                           | 功能                     |
| ------------ | ---------------------------------------------- | ------------------------ |
| replaceChild | replaceChild(要插入的新元素，将被替换的老元素) | 将某个子节点替换为另一个 |

### 复制节点

| 编码      | 语法                                   | 功能               |
| --------- | -------------------------------------- | ------------------ |
| choneNode | 需要被复制的节点.cloneNode(true/false) | 创建指定节点的副本 |

> true ：复制当前节点及其所有子节点
>  false：仅复制当前节点

### 删除节点

| 编码        | 语法                      | 功能           |
| ----------- | ------------------------- | -------------- |
| removeChild | removeChild(要删除的节点) | 删除指定的节点 |

## 3. 属性操作

### 获取属性

| 编码         | 语法                              | 功能                           |
| ------------ | --------------------------------- | ------------------------------ |
| getAttribute | 元素节点.getAttribute(元素属性名) | 获取元素节点中指定属性的属性值 |

### 设置属性

| 编码         | 语法                                 | 功能                     |
| ------------ | ------------------------------------ | ------------------------ |
| setAttribute | 元素节点.setAttribute(属性名,属性值) | 创建或改变元素节点的属性 |

### 删除属性

| 编码            | 语法                             | 功能                 |
| --------------- | -------------------------------- | -------------------- |
| removeAttribute | 元素节点.removeAttribute(属性名) | 删除元素中的指定属性 |

## 4. 文本操作

| 编码                          | 功能                             |
| ----------------------------- | -------------------------------- |
| insertData(offset,String)     | 从offset指定的位置插入string     |
| appendData(string)            | 将string插入到文本节点的末尾处   |
| deleteDate(offset,count)      | 从offset起删除count个字符        |
| replaceData(off,count,string) | 从off将count个字符用string替代   |
| splitData(offset)             | 从offset起将文本节点分成两个节点 |
| substring(offset,count)       | 返回由offset起的count个节点      |

# Window 对象

## 1. navigator 导航器对象

| 编码          | 详解                                       |
| ------------- | ------------------------------------------ |
| appCodeName   | 返回浏览器的代码名                         |
| appName       | 返回浏览器的名称                           |
| appVersion    | 返回浏览器的平台和版本信息                 |
| cookieEnabled | 返回指明浏览器中是否启用cookie的布尔值     |
| platform      | 返回运行浏览器的操作系统平台               |
| userAgent     | 返回由客户机发送服务器的user-agent头部的值 |

## 2. screen 显示器对象

| 编码        | 详解                   |
| ----------- | ---------------------- |
| availHeight | 返回显示屏幕的可用高度 |
| availWidth  | 返回显示屏幕的可用宽度 |
| height      | 返回屏幕的像素高度     |
| width       | 返回屏幕的像素宽度     |
| colorDepth  | 返回屏幕颜色的位数     |

## 3. history 历史对象

| 编码      | 详解             |
| --------- | ---------------- |
| back()    | 返回前一个URL    |
| forward() | 返回下一个URL    |
| go()      | 返回某个具体页面 |

## 4. location 位置对象

**属性**

| 编码     | 详解                              |
| -------- | --------------------------------- |
| hash     | 设置或返回从井号(#)开始的URL      |
| host     | 设置或返回主机名和当前URL的端口号 |
| hostname | 设置或返回当前URL的主机名         |
| href     | 设置或返回完整的URL               |
| pathname | 设置或返回当前URL的路径部分       |
| port     | 设置或返回当前URL的端口号         |
| protocol | 设置或返回当前URL的协议           |
| search   | 设置或返回从问号(?)开始的URL      |

**方法**

| 编码            | 详解                   |
| --------------- | ---------------------- |
| assign(URL)     | 加载新的文档           |
| reload()        | 重新加载当前页面       |
| replace(newURL) | 用新的文档替换当前文档 |

## 5. document 文档对象

**集合**

| 编码      | 详解         |
| --------- | ------------ |
| anchors[] | 描点对象数组 |
| images[]  | 图片对象数组 |
| links[]   | 连接对象数组 |
| forms[]   | 表单对象数组 |

**属性**

| 编码     | 详解                                 |
| -------- | ------------------------------------ |
| cookie   | 设置或返回与当前文档有关的所有cookie |
| domain   | 返回当前文档的域名                   |
| referrer | 返回载入当前文档的文档的URL          |
| title    | 返回当前文档的标题                   |
| URL      | 返回当前文档的URL                    |

**方法**

| 编码      | 详解                                 |
| --------- | ------------------------------------ |
| open()    | 打开一个新的文档，并擦除旧文档内容   |
| close()   | 关闭文档输出流                       |
| write()   | 向当前文档追加写入文本               |
| writeIn() | 与write()相同，在`<pre>`中会追加换行 |

## 6. 窗口控制

| 编码     | 语法                            | 详解                                                         |
| -------- | ------------------------------- | ------------------------------------------------------------ |
| moveBy   | moveBy(水平位移量,垂直位移量)   | 按照给定像素参数移动指定窗口                                 |
| moveTo   | moveTo(x,y)                     | 将窗口移动到指定的指定坐标(x,y)处                            |
| resizeBy | resizeBy(水平,垂直)             | 将当前窗口改变指定的大小(x,y) 当x、y的值大于0时为扩大 当x、y的值小于0时为缩小 |
| resizeTo | resizeTo(水平宽度,垂直宽度)     | 将当前窗口改成(x,y)大小，x、y分别为宽度和高度                |
| scrollBy | scrollBy(水平位移量,垂直位移量) | 将窗口中的内容按给定的位移量滚动 参数为整数时，正向滚动，否则反向滚动 |
| scrollTo | scrollTo(x,y)                   | 将窗口中的内容滚动到指定位置                                 |

## 7. 焦点控制

| 编码  | 详解     |
| ----- | -------- |
| focus | 得到焦点 |
| blur  | 移出焦点 |

## 8. 打开关闭窗口

**open**

| 编码 | 语法                              | 详解                                              |
| ---- | --------------------------------- | ------------------------------------------------- |
| open | open("URL","窗口名称","窗口风格") | 打开一个新的窗口，并在窗口中装载指定URL地址的网页 |

> 窗口风格
>
> > | 编码       | 语法   | 详解                 |
> > | ---------- | ------ | -------------------- |
> > | location   | yes/no | 是否显示地址栏       |
> > | menubar    | yes/no | 是否显示菜单栏       |
> > | resizable  | yes/no | 是否可以改变窗口大小 |
> > | scrollbars | yes/no | 是否允许出现滚动条   |
> > | status     | yes/no | 是否显示状态栏       |
> > | toolbar    | yes/no | 是否显示工具栏       |

**close**

| 编码  | 语法    | 详解               |
| ----- | ------- | ------------------ |
| close | close() | 自动关闭浏览器窗口 |

## 9. 定时器

| 编码         | 语法                               | 详解                                     |
| ------------ | ---------------------------------- | ---------------------------------------- |
| setTimeout   | setTimeout(执行代码,毫秒数)        | 当到了指定多的毫秒数后，自动执行功能代码 |
| clearTimeout | clearTimeout(定时器)               | 取消由setTimeout()设置的定时器           |
| setInterval  | setInterval(重复执行的代码,毫秒数) | 按指定周期重复执行功能代码               |
| clerInterval | clearInterval(时间间隔器)          | 取消由setInterval()设置的时间间隔器      |

## 10. 对话框

| 编码    | 语法                            | 详解                                                         |
| ------- | ------------------------------- | ------------------------------------------------------------ |
| alert   | alert("提示字符串")             | 弹出警告框，在警告框内显示提示字符串文本                     |
| confirm | confirm("确认字符串")           | 显示一个确认框，在确认框内显示提示字符串 当用户单击“确认”按钮时该方法返回true,单击“取消”返回false |
| prompt  | prompt("提示字符串","缺省文本") | 显示一个输入框，在输入框内显示提示字符串 在输入文本框显示缺省文本，并等待用户输入 当用户单击“确认”按钮时，返回输入的字符串，点击“取消”时返回null |

## 11. 属性

**状态栏**

| 编码          | 详解                       |
| ------------- | -------------------------- |
| defaultStatus | 改变浏览器状态栏的默认显示 |
| status        | 临时改变浏览器状态栏的显示 |

**窗口位置**

> IE
>
> > screenLeft 声明窗口的左上角的X坐标 
> >  screeTop 声明窗口的左上角的Y坐标 
> >  document.body.scrollLeft 声明当前文档向右滚动过的像素数 
> >  document.body.scrollTop 声明当前文档向下滚动过的像素数

> !IE
>
> > screenX 声明窗口的左上角的X坐标 
> >  screenY 声明窗口的左上角的Y坐标 
> >  pageXOffset 声明当前文档向右滚动过的像素数 
> >  pageYOffset 声明当前文档向下滚动过的像素数

> FF
>
> > innerHeight 返回窗口的文档显示区的高度 
> >  innerWidth 返回窗口的文档显示区的宽度 
> >  outerHeight 返回窗口的外部高度 
> >  outerWidth 返回窗口的外部宽度

**其他属性**

| 编码   | 详解                                                         |
| ------ | ------------------------------------------------------------ |
| opener | 可以实现同域名下跨窗体之间的通讯 一个窗体要包含另一个窗体的opener |
| closed | 当前窗口关闭时返回true                                       |
| name   | 设置或返回窗口的名称                                         |
| self   | 返回对当前窗口的引用                                         |

# JS 对象

## 1. javascript 对象

JavaScript 中的所有事物都是对象：字符串、数字、数组、日期，等等。

在 JavaScript 中，对象是数据（变量），拥有属性和方法。

> 属性和方法
>
> > 属性是与对象相关的值。方法是能够在对象上执行的动作。
> >  在面向对象的语言中，属性和方法常被称为对象的成员。

## 2. 创建 javascript 对象

**方法一：**

```js
js
复制代码let Person = new Object(); // 声明一个空对象
```

**方法二：**

```js
js
复制代码let Person = {};   // 声明一个空对象
```

## 3. 对象属性及对象方法

**JavaScript 属性** 属性指的是与 JavaScript 对象相关的值。

JavaScript 对象是无序属性的集合。

属性通常可以被修改、添加和删除，但是某些属性是只读的。

**访问语法** `objectName.propertyName`

**JavaScript 方法**

方法是存储为对象属性的函数。

**访问语法** `objectName.methodName()`

```js
js
复制代码let Person = new Object();
Person.name = "麋鹿鲁哟"  //设置对象属性
Person.age = 22
Person.getDate = function(){  //设置对象方法
  return new Date();
}

console.log(Person) // {name: "麋鹿鲁哟", age: "22"}

console.log(Person.name)  // 麋鹿鲁哟      //访问对象属性
console.log(Person.getDate()) //输出当前时间   //访问对象方法

delete Person.age  // delete 关键词从对象中删除属性
```

> PS:对象的名称，对大小写敏感。

## 4. 对象访问器(get、set)

**为什么使用 Getter 和 Setter？**

- 它提供了更简洁的语法
- 它允许属性和方法的语法相同
- 它可以确保更好的数据质量
- 有利于后台工作

**JavaScript Getter（get 关键词）**

```js
js
复制代码var Person = {
  name: "麋鹿鲁哟",
  age : 22,
  get lang() {
    return this.age;
  }
};
console.log(Person.lang)  // 22 
```

**JavaScript Setter（set 关键词）**

```js
js
复制代码var Person = {
  name: "麋鹿鲁哟",
  age : 22,
  set lang(lang) {
    this.age = lang;
  }
};
// 使用 setter 来设置对象属性：
Person.lang = 3
console.log(Person.age)  // 3
```

## 5. 对象构造器

```js
js
复制代码function Person(name,age){
  this.name = name;
  this.age = age;
}
```

函数 Person() 就是对象构造器函数。

通过 new 关键词调用构造器函数可以创建相同类型的对象：

```js
js
复制代码var me = new Person("麋鹿鲁哟",22);
```

**this 关键词**

在 JavaScript 中，被称为 this 的事物是代码的“拥有者”。

this 的值，在对象中使用时，就是对象本身。

在构造器函数中，this 是没有值的。它是新对象的替代物。 当一个新对象被创建时，this 的值会成为这个新对象。

请注意 this 并不是变量。它是关键词。您无法改变 this 的值。

## 6. JavaScript 对象原型

**原型继承**

所有 JavaScript 对象都从原型继承属性和方法。

- 日期对象继承自 Date.prototype。
- 数组对象继承自 Array.prototype。
- Person 对象继承自 Person.prototype。
- Object.prototype 位于原型继承链的顶端：
- 日期对象、数组对象和 Person 对象都继承自 Object.prototype。

**prototype 属性**

JavaScript prototype 属性允许您为对象构造器添加新属性、方法

```js
js
复制代码function Person(name,age){
  this.name = name;
  this.age = age;
}
Person.prototype.github = "https://github.com/miluluyo";
```

## 7. ES5 对象方法

| 代码                                                | 详解                                |
| --------------------------------------------------- | ----------------------------------- |
| Object.defineProperty(object, property, descriptor) | 添加或更改对象属性                  |
| Object.defineProperties(object, descriptors)        | 添加或更改多个对象属性              |
| Object.getOwnPropertyDescriptor(object, property)   | 访问属性                            |
| Object.getOwnPropertyNames(object)                  | 以数组返回所有属性                  |
| Object.keys(object)                                 | 以数组返回所有可枚举的属性          |
| Object.getPrototypeOf(object)                       | 访问原型                            |
| Object.preventExtensions(object)                    | 阻止向对象添加属性                  |
| Object.isExtensible(object)                         | 如果可将属性添加到对象，则返回 true |
| Object.seal(object)                                 | 防止更改对象属性（而不是值）        |
| Object.isSealed(object)                             | 如果对象被密封，则返回 true         |
| Object.freeze(object)                               | 防止对对象进行任何更改              |
| Object.isFrozen(object)                             | 如果对象被冻结，则返回 true         |

## 7. prototype 继承

**语法**

```js
js
复制代码子类.prototype = new 父类()
```

所有的 JavaScript 对象都会从一个 prototype（原型对象）中继承属性和方法。

指向了一个对象，这个对象正式调用该构造函数而创建的实例的原型

***\*proto\****

__proto__这是每一个 javascript 对象( null 除外)都具有的属性，这个属性会指向该对象的原型

## 8. Number 对象

| 编码            | 详解                                                 |
| --------------- | ---------------------------------------------------- |
| toExponential() | 可把对象的值转换成指数计数法。                       |
| toFixed()       | 可把 Number 四舍五入为指定小数位数的数字。           |
| toPrecision()   | 方法可在对象的值超出指定位数时将其转换为指数计数法。 |
| toString()      | 可把一个逻辑值转换为字符串，并返回结果。             |
| valueOf()       | 可返回 Boolean 对象的原始值。                        |

## 9. Math (算数) 对象

执行常见的算数任务。

| 编码             | 详解                                                         |
| ---------------- | ------------------------------------------------------------ |
| abs(x)           | 返回 x 的绝对值。                                            |
| acos(x)          | 返回 x 的反余弦值。                                          |
| asin(x)          | 返回 x 的反正弦值。                                          |
| atan(x)          | 以介于 -PI/2 与 PI/2 弧度之间的数值来返回 x 的反正切值。     |
| atan2(y,x)       | 返回从 x 轴到点 (x,y) 的角度（介于 -PI/2 与 PI/2 弧度之间）。 |
| ceil(x)          | 对数进行上舍入。                                             |
| cos(x)           | 返回数的余弦。                                               |
| exp(x)           | 返回 Ex 的指数。                                             |
| floor(x)         | 对 x 进行下舍入。                                            |
| log(x)           | 返回数的自然对数（底为e）。                                  |
| max(x,y,z,...,n) | 返回 x,y,z,...,n 中的最高值。                                |
| min(x,y,z,...,n) | 返回 x,y,z,...,n中的最低值。                                 |
| pow(x,y)         | 返回 x 的 y 次幂。                                           |
| random()         | 返回 0 ~ 1 之间的随机数。                                    |
| round(x)         | 四舍五入。                                                   |
| sin(x)           | 返回数的正弦。                                               |
| sqrt(x)          | 返回数的平方根。                                             |
| tan(x)           | 返回角的正切。                                               |

# JSON

## 1. JSON

- JSON 指的是 JavaScript 对象标记法（JavaScript Object Notation）
- JSON 是一种轻量级的数据交换格式
- JSON 具有自我描述性且易于理解
- JSON 独立于语言*

JSON 是存储和传输数据的格式。

JSON 经常在数据从服务器发送到网页时使用

**交换数据**

当数据在浏览器与服务器之间进行交换时，这些数据只能是文本。

JSON 属于文本，并且我们能够把任何 JavaScript 对象转换为 JSON，然后将 JSON 发送到服务器。

我们也能把从服务器接收到的任何 JSON 转换为 JavaScript 对象。

以这样的方式，我们能够把数据作为 JavaScript 对象来处理，无需复杂的解析和转译。

### JSON.parse()

JSON 格式写的字符串转换为原生 JavaScript 对象

```js
js
复制代码JSON.parse()  
```

### JSON.stringify()

JSON.stringify() 把 JavaScript 对象转换为字符串。

```js
js
复制代码var obj = { name:"麋鹿鲁哟", age:22};
JSON.stringify(obj)  
```

## 2. JSONP

JSONP 是一种无需考虑跨域问题即可传送 JSON 数据的方法。

JSONP 不使用 XMLHttpRequest 对象。

JSONP 使用 `<script>` 标签取而代之。

**简介** JSONP 指的是 JSON with Padding。

从另一个域请求文件会引起问题，由于跨域政策。

从另一个域请求外部脚本没有这个问题。

JSONP 利用了这个优势，并使用 script 标签替代 XMLHttpRequest 对象。

就是利用script标签绕过同源策略，获得一个类似这样的数据，jsonpcallback是页面存在的回调方法，参数就是想得到的json。

> 它只支持GET请求而不支持POST等其它类型的HTTP请求；它只支持跨域HTTP请求这种情况，不能解决不同域的两个页面之间如何进行JavaScript调用的问题

# Cookie

## 1. Cookie

Cookie实际上是一小段的文本信息，客户端请求服务器，如果服务器需要记录该用户状态，就使用 response 向客户端浏览器颁发一个Cookie。客户端会把Cookie存起来，当浏览器再请求该网站时，浏览器把请求的网址连同该Cookie一同提交给服务器，服务器检查该Cookie，以此来辨认用户状态，服务器也可根据需求修改Cookie的内容

## 2. 优点

1. 极高的扩展性和可用性

可以控制保存在cookie中的session对象的大小；

通过加密和安全传输技术（SSL），减少Cookie被破解的可能性；

只在Cookie中存放不敏感数据，被盗不会有重大损失；

控制Cookie的生命期，使之不会永远有效，偷盗者可能会拿到一个过期的Cookie；

基于文本轻量结构；

Cookie存储在客户端并在发送后由服务器读取；

## 3. 缺点

1. Cookie 数量和长度的限制

每个domain最多只能有20条cookie，每个cookie的长度不能超过4KB，否则被截掉；

1. 安全性

Cookie可能被拦截、篡改。如果Cookie被人拦截了，那人就可以取得所有的session信息

1. 有些状态不可能保存在客户端

例：防止重复提交表单，在服务端保存计数器，如果将此计数器保存在客户端，无用。

## 4. 延伸

**Cookie 和 session 的区别**

1. cookie数据 ==》 客户的浏览器     session数据 ==》 服务器
2. Cookie不是很安全，别人可以分析存放在本地的Cookie并进行Cookie欺骗，考虑到安全应当使用session
3. session会在一定时间内保存在服务器上，当访问增多，会比较占用服务器的性能，考虑到减轻服务器性能方面，应当使用Cookie
4. 单个Cookie数据不能超过4K，很多浏览器都限制一个站点最多保存20个Cookie

> 建议：
>
> > - 登录信息等重要信息存放session
> > - 其他信息如果要保留，可以放在Cookie