---
outline: deep
---

## 1、终端操作MySQL数据库

--------------

### 1.1如何登陆数据库服务器：

`C:Usersusername>mysql -uroot -proot`

### 1.2如何查询数据库服务器中的数据库

```
mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| sys                |
| test1              |
+--------------------+
5 rows in set (0.03 sec)
```

### 1.3如何选中某一个数据库进行操作

```
mysql> use test1
Database changed
```

### 1.4SQL语句中的查询

```
mysql> select * from person;
+-----------+------+
| name      | sex  |
+-----------+------+
| 张三      | 男   |
| 李四      | 女   |
| 王麻子    | 男   |
+-----------+------+
3 rows in set (0.00 sec)

mysql> select * from person where name="张三";
+--------+------+
| name   | sex  |
+--------+------+
| 张三   | 男   |
+--------+------+
1 row in set (0.00 sec)
```

### 1.5如何退出数据库服务器

```
mysql> exit;
Bye 
```

2、如何创建数据库数据表
------------

### 2.1如何在数据库服务器中创建我们的数据库

```
mysql> create database test2;
Query OK, 1 row affected (0.05 sec)

mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| sys                |
| test1              |
| test2              |
+--------------------+
6 rows in set (0.00 sec)

mysql> use test2;
Database changed
```

### 2.2如何查看某个数据库中的所有数据表

```
mysql> show tables;
Empty set (0.00 sec)
```

### 2.3如何创建一个数据表

```
mysql> create table pet(
    -> name VARCHAR(20),
    -> owner VARCHAR(20),
    -> species VARCHAR(20),
    -> sex CHAR(1),
    -> birth DATE,
    -> death DATE);
Query OK, 0 rows affected (0.09 sec)
```

创建了一个宠物数据表

查看数据表是否创建成功

```
mysql> show tables;
+-----------------+
| Tables_in_test2 |
+-----------------+
| pet             |
+-----------------+
1 row in set (0.00 sec)
```

### 2.4查看创建好的数据表的结构

```
mysql> describe pet;
+---------+-------------+------+-----+---------+-------+
| Field   | Type        | Null | Key | Default | Extra |
+---------+-------------+------+-----+---------+-------+
| name    | varchar(20) | YES  |     | NULL    |       |
| owner   | varchar(20) | YES  |     | NULL    |       |
| species | varchar(20) | YES  |     | NULL    |       |
| sex     | char(1)     | YES  |     | NULL    |       |
| birth   | date        | YES  |     | NULL    |       |
| death   | date        | YES  |     | NULL    |       |
+---------+-------------+------+-----+---------+-------+
6 rows in set (0.00 sec)

```

3、insert增加数据记录
--------------

### 3.1查看数据表中的记录

```
mysql> select * from pet;
Empty set (0.00 sec)
```

### 3.2如何往数据表中添加数据记录

```
mysql> insert into pet
    -> values('Tom','LiMing','hamster','f','2020-11-11',null);
Query OK, 1 row affected (0.01 sec)
```

再一次查询

```
mysql> select * from pet;
+------+--------+---------+------+------------+-------+
| name | owner  | species | sex  | birth      | death |
+------+--------+---------+------+------------+-------+
| Tom  | LiMing | hamster | f    | 2020-11-11 | NULL  |
+------+--------+---------+------+------------+-------+
1 row in set (0.00 sec)
```


```
mysql> insert into pet
    -> values('旺财','周星星','狗','公','2020-11-11',null);
Query OK, 1 row affected (0.01 sec)
```

查看

```
mysql> select * from pet;
+--------+-----------+---------+------+------------+-------+
| name   | owner     | species | sex  | birth      | death |
+--------+-----------+---------+------+------------+-------+
| Tom    | LiMing    | hamster | f    | 2020-11-11 | NULL  |
| 旺财   | 周星星    | 狗      | 公   | 2020-11-11 | NULL  |
+--------+-----------+---------+------+------------+-------+
2 rows in set (0.00 sec)
```

### 3.3MySQL常用数据类型

MySQL支持多种类型，大致可以分为三类：数值、日期/时间和字符串(字符)类型。

* 数值类型


如果数值超出数值类型的范围就会报错：

```
mysql>  create table testType(
    ->  number tinyint);
Query OK, 0 rows affected (0.10 sec)

mysql> describe testType;
+--------+---------+------+-----+---------+-------+
| Field  | Type    | Null | Key | Default | Extra |
+--------+---------+------+-----+---------+-------+
| number | tinyint | YES  |     | NULL    |       |
+--------+---------+------+-----+---------+-------+
1 row in set (0.00 sec)

mysql> insert into testType
    -> values(128);
ERROR 1264 (22003): Out of range value for column 'number' at row 1

```

* 日期和时间类型



* 字符串类型


**数据类型如何选择**

日期：按照日期格式

数值和字符串：按照大小

4、数据记录增删查改操作
------------

### 4.1插入：

```
mysql> insert into pet values('Buffy','Job','cat','m','2020-11-10',null);
Query OK, 1 row affected (0.01 sec)

mysql> insert into pet values('Slim','邓紫棋','dog','f','2019-11-11',null);
Query OK, 1 row affected (0.01 sec)

mysql> insert into pet
    -> values('Fang','成龙','cat','m','2018-11-11','2020-10-10');
Query OK, 1 row affected (0.01 sec)

mysql> select * from pet;
+--------+-----------+---------+------+------------+------------+
| name   | owner     | species | sex  | birth      | death      |
+--------+-----------+---------+------+------------+------------+
| Tom    | LiMing    | hamster | f    | 2020-11-11 | NULL       |
| 旺财   | 周星星    | 狗      | 公   | 2020-11-11 | NULL       |
| Buffy  | Job       | cat     | m    | 2020-11-10 | NULL       |
| Slim   | 邓紫棋    | dog     | f    | 2019-11-11 | NULL       |
| Fang   | 成龙      | cat     | m    | 2018-11-11 | 2020-10-10 |
+--------+-----------+---------+------+------------+------------+
5 rows in set (0.00 sec)

```

### 4.2如何删除数据


```
mysql> delete from pet where name='Tom';
Query OK, 1 row affected (0.01 sec)
```

再次查看

```
mysql> select * from pet;
+--------+-----------+---------+------+------------+------------+
| name   | owner     | species | sex  | birth      | death      |
+--------+-----------+---------+------+------------+------------+
| 旺财   | 周星星    | 狗      | 公   | 2020-11-11 | NULL       |
| Buffy  | Job       | cat     | m    | 2020-11-10 | NULL       |
| Slim   | 邓紫棋    | dog     | f    | 2019-11-11 | NULL       |
| Fang   | 成龙      | cat     | m    | 2018-11-11 | 2020-10-10 |
+--------+-----------+---------+------+------------+------------+
4 rows in set (0.00 sec)
```

### 4.3如何修改数据

```
mysql> update pet set name='旺财财' where owner='周星星';
Query OK, 1 row affected (0.01 sec)

```

再次查看：

```
mysql> select * from pet;
+-----------+-----------+---------+------+------------+------------+
| name      | owner     | species | sex  | birth      | death      |
+-----------+-----------+---------+------+------------+------------+
| 旺财财    | 周星星    | 狗      | 公   | 2020-11-11 | NULL       |
| Buffy     | Job       | cat     | m    | 2020-11-10 | NULL       |
| Slim      | 邓紫棋    | dog     | f    | 2019-11-11 | NULL       |
| Fang      | 成龙      | cat     | m    | 2018-11-11 | 2020-10-10 |
+-----------+-----------+---------+------+------------+------------+
4 rows in set (0.00 sec)
```

### 4.4总结：数据记录常见操作

增加：`insert`

删除：`delete`

修改：`update`

查询：`select`

5、MySQL建表约束
-----------

### 5.1主键约束 primary key

它能够唯一确定一张表中的一条记录，也就是我们通过给某个字段添加约束，就可以使得该字段**不重复且不为空。**

```
mysql> create table user(
    -> id int primary key,
    -> name varchar(20));
Query OK, 0 rows affected (0.08 sec)

mysql> describe user;
+-------+-------------+------+-----+---------+-------+
| Field | Type        | Null | Key | Default | Extra |
+-------+-------------+------+-----+---------+-------+
| id    | int         | NO   | PRI | NULL    |       |
| name  | varchar(20) | YES  |     | NULL    |       |
+-------+-------------+------+-----+---------+-------+
2 rows in set (0.00 sec)
```

再次插入id=1的记录

```
mysql> insert into user values(1,'李四');
ERROR 1062 (23000): Duplicate entry '1' for key 'user.PRIMARY'
```

id为空的时候

```
mysql>  insert into user values(null,'李四');
ERROR 1048 (23000): Column 'id' cannot be null

```

### 5.2联合主键

```
mysql> create table user2(
    -> id int,
    -> name varchar(20),
    -> password varchar(20),
    -> primary key(id,name)
    -> );
Query OK, 0 rows affected (0.06 sec)
```

插入记录

```
mysql> insert into user2 values(1,'zhangsan','123');
Query OK, 1 row affected (0.01 sec)

mysql> insert into user2 values(1,'zhangsan','234');
ERROR 1062 (23000): Duplicate entry '1-zhangsan' for key 'user2.PRIMARY'

mysql>  insert into user2 values(2,'zhangsan','234');
Query OK, 1 row affected (0.01 sec)
```

**联合主键只要主键字段之间加起来不重复就可以，但任何一个主键字段都不可以为空。**

### 5.3自增约束auto_increment

```
mysql> create table user3(
    -> id int primary key auto_increment,
    -> name varchar(20)
    -> );
Query OK, 0 rows affected (0.05 sec)
```

插入数据

```
mysql> insert into user3 (name) values('zhangsan');
Query OK, 1 row affected (0.01 sec)

查看
mysql> select * from user3;
+----+----------+
| id | name     |
+----+----------+
|  1 | zhangsan |
+----+----------+
1 row in set (0.00 sec)
```


自增约束和主键约束搭配在一起使用时，它会自动给我们管去控值，例如：自动增加`id。`

### 5.4如果创建表的时候忘记创建主键约束怎么办？

```
mysql> create table user4(
    -> id int,
    -> name varchar(20));
Query OK, 0 rows affected (0.06 sec)

mysql> desc user4;
+-------+-------------+------+-----+---------+-------+
| Field | Type        | Null | Key | Default | Extra |
+-------+-------------+------+-----+---------+-------+
| id    | int         | YES  |     | NULL    |       |
| name  | varchar(20) | YES  |     | NULL    |       |
+-------+-------------+------+-----+---------+-------+
2 rows in set (0.00 sec)
```

**修改表结构，增加主键约束 alter ... add**

```
mysql> alter table user4 add primary key(id);
Query OK, 0 rows affected (0.12 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> desc user4;
+-------+-------------+------+-----+---------+-------+
| Field | Type        | Null | Key | Default | Extra |
+-------+-------------+------+-----+---------+-------+
| id    | int         | NO   | PRI | NULL    |       |
| name  | varchar(20) | YES  |     | NULL    |       |
+-------+-------------+------+-----+---------+-------+
2 rows in set (0.00 sec)
```

**如何删除呢？alter ...drop**

```
mysql> alter table user4 drop primary key;
Query OK, 0 rows affected (0.10 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> desc user4;
+-------+-------------+------+-----+---------+-------+
| Field | Type        | Null | Key | Default | Extra |
+-------+-------------+------+-----+---------+-------+
| id    | int         | NO   |     | NULL    |       |
| name  | varchar(20) | YES  |     | NULL    |       |
+-------+-------------+------+-----+---------+-------+
2 rows in set (0.00 sec)
```

**使用modify，修改字段，添加约束**


```
mysql> alter table user4 modify id int primary key;
Query OK, 0 rows affected (0.08 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> describe user4;
+-------+-------------+------+-----+---------+-------+
| Field | Type        | Null | Key | Default | Extra |
+-------+-------------+------+-----+---------+-------+
| id    | int         | NO   | PRI | NULL    |       |
| name  | varchar(20) | YES  |     | NULL    |       |
+-------+-------------+------+-----+---------+-------+
2 rows in set (0.00 sec)
```


### 5.5唯一约束

约束修饰的字段的值不可以重复。

```
mysql> create table user5(
    -> id int,
    -> name varchar(20));
Query OK, 0 rows affected (0.06 sec)

mysql> desc user5;
+-------+-------------+------+-----+---------+-------+
| Field | Type        | Null | Key | Default | Extra |
+-------+-------------+------+-----+---------+-------+
| id    | int         | YES  |     | NULL    |       |
| name  | varchar(20) | YES  |     | NULL    |       |
+-------+-------------+------+-----+---------+-------+
2 rows in set (0.00 sec)

mysql> alter table user5 add unique(name);
Query OK, 0 rows affected (0.04 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> desc user5;
+-------+-------------+------+-----+---------+-------+
| Field | Type        | Null | Key | Default | Extra |
+-------+-------------+------+-----+---------+-------+
| id    | int         | YES  |     | NULL    |       |
| name  | varchar(20) | YES  | UNI | NULL    |       |
+-------+-------------+------+-----+---------+-------+
2 rows in set (0.00 sec)

mysql> insert into user5 values(1,'zhangsan');
Query OK, 1 row affected (0.03 sec)

mysql> insert into user5 values(1,'zhangsan');
ERROR 1062 (23000): Duplicate entry 'zhangsan' for key 'user5.name'

```

name=lisi不能重复

```
mysql> insert into user5 values(1,'lisi');
Query OK, 1 row affected (0.01 sec)

mysql> create table user6(
    -> id int,
    -> name varchar(20),
    -> unique(name));
Query OK, 0 rows affected (0.07 sec)
```


**可以对id和name都添加唯一约束，这时候只要id+name不重复就可以添加记录。**

```
mysql> create table user7(
    -> id int,
    -> name varchar(20),
    -> unique(id,name));
Query OK, 0 rows affected (0.06 sec)

mysql> insert into user7 values(1,'zhangsan');
Query OK, 1 row affected (0.01 sec)

mysql> insert into user7 values(2,'zhangsan');
Query OK, 1 row affected (0.04 sec)

mysql> select * from user7;
+------+----------+
| id   | name     |
+------+----------+
|    1 | zhangsan |
|    2 | zhangsan |
+------+----------+
2 rows in set (0.00 sec)

```

**如何删除唯一约束**

```
mysql>  alter table user6 drop index name;
Query OK, 0 rows affected (0.03 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> desc user6;
+-------+-------------+------+-----+---------+-------+
| Field | Type        | Null | Key | Default | Extra |
+-------+-------------+------+-----+---------+-------+
| id    | int         | YES  |     | NULL    |       |
| name  | varchar(20) | YES  |     | NULL    |       |
+-------+-------------+------+-----+---------+-------+
2 rows in set (0.00 sec)
```

**通过modify添加唯一约束**

```
mysql> alter table user6 modify name varchar(20) unique;
Query OK, 0 rows affected (0.03 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> desc user6;
+-------+-------------+------+-----+---------+-------+
| Field | Type        | Null | Key | Default | Extra |
+-------+-------------+------+-----+---------+-------+
| id    | int         | YES  |     | NULL    |       |
| name  | varchar(20) | YES  | UNI | NULL    |       |
+-------+-------------+------+-----+---------+-------+
2 rows in set (0.00 sec)
```

**总结：**

*   建表的时候添加约束
*   可以用alter... add添加
*   可以用alter... modify添加约束
*   删除用alter...drop

### 5.6非空约束

修饰的字段不能为空null

```
mysql> create table user8(
    -> id int,
    -> name varchar(20) not null);
Query OK, 0 rows affected (0.05 sec)

mysql> desc user8;
+-------+-------------+------+-----+---------+-------+
| Field | Type        | Null | Key | Default | Extra |
+-------+-------------+------+-----+---------+-------+
| id    | int         | YES  |     | NULL    |       |
| name  | varchar(20) | NO   |     | NULL    |       |
+-------+-------------+------+-----+---------+-------+
2 rows in set (0.00 sec)
```

测试：如果name为空

```
mysql> insert into user8 (id)values(1);
ERROR 1364 (HY000): Field 'name' doesn't have a default value
```

正确添加不为空时

```
mysql> insert into user8 values(1,'lisi');
Query OK, 1 row affected (0.01 sec)

mysql> select *from user8;
+------+------+
| id   | name |
+------+------+
|    1 | lisi |
+------+------+
1 row in set (0.00 sec)
```

如果只传name是可以的

```
mysql> insert into user8 (name)values('zhangsan');
Query OK, 1 row affected (0.01 sec)

mysql> select *from user8;
+------+----------+
| id   | name     |
+------+----------+
|    1 | lisi     |
| NULL | zhangsan |
+------+----------+
2 rows in set (0.00 sec)
```

同样可以用`alter ... add，alter ... modify`来添加唯一约束。

### 5.7默认约束default

**就是当我们插入字段值的时候，如果没有传值，就会使用默认值。**

```
mysql> create table user9(
    -> id int,
    -> name varchar(20),
    -> age int default 10
    -> );
Query OK, 0 rows affected (0.06 sec)

```

查看表结构

```
mysql> desc user9;
+-------+-------------+------+-----+---------+-------+
| Field | Type        | Null | Key | Default | Extra |
+-------+-------------+------+-----+---------+-------+
| id    | int         | YES  |     | NULL    |       |
| name  | varchar(20) | YES  |     | NULL    |       |
| age   | int         | YES  |     | 10      |       |
+-------+-------------+------+-----+---------+-------+
3 rows in set (0.00 sec)
```

插入值时直插入id和name那么age使用默认值10，如果age也插入值那么就使用插入的值不使用默认值。

```
mysql> insert into user9(id,name) values (1,'lisi');
Query OK, 1 row affected (0.01 sec)

mysql> select *from user9;
+------+------+------+
| id   | name | age  |
+------+------+------+
|    1 | lisi |   10 |
+------+------+------+
1 row in set (0.00 sec)
```

### 5.8 外键约束

涉及到两个表：父表，子表。

班级表：


```
mysql> create table classes(
    -> id int primary key,
    -> name varchar(20)
    -> );
Query OK, 0 rows affected (0.05 sec)

mysql> desc classes;
+-------+-------------+------+-----+---------+-------+
| Field | Type        | Null | Key | Default | Extra |
+-------+-------------+------+-----+---------+-------+
| id    | int         | NO   | PRI | NULL    |       |
| name  | varchar(20) | YES  |     | NULL    |       |
+-------+-------------+------+-----+---------+-------+
2 rows in set (0.00 sec)
```

插入值

```
mysql> insert into classes values(1,'yiban');
Query OK, 1 row affected (0.01 sec)

mysql>  insert into classes values(2,'erban');
Query OK, 1 row affected (0.03 sec)

mysql> insert into classes values(3,'sanban');
Query OK, 1 row affected (0.01 sec)

mysql> select *from classes;
+----+--------+
| id | name   |
+----+--------+
|  1 | yiban  |
|  2 | erban  |
|  3 | sanban |
+----+--------+
3 rows in set (0.00 sec)

```

学生表：


```
mysql> create table students(
    -> id int primary key,
    -> name varchar(20),
    -> class_id int,
    -> foreign key(class_id) references classes(id));
Query OK, 0 rows affected (0.06 sec)
```


```
mysql> desc students;
+----------+-------------+------+-----+---------+-------+
| Field    | Type        | Null | Key | Default | Extra |
+----------+-------------+------+-----+---------+-------+
| id       | int         | NO   | PRI | NULL    |       |
| name     | varchar(20) | YES  |     | NULL    |       |
| class_id | int         | YES  | MUL | NULL    |       |
+----------+-------------+------+-----+---------+-------+
3 rows in set (0.00 sec)
```

插入值

```
mysql> insert into students values(1001,'zhangsan',1);
Query OK, 1 row affected (0.01 sec)
mysql> insert into students values(1002,'zhangsan',2);
Query OK, 1 row affected (0.01 sec)
mysql> insert into students values(1003,'zhangsan',3);
Query OK, 1 row affected (0.04 sec)

mysql> select *from students;
+------+----------+----------+
| id   | name     | class_id |
+------+----------+----------+
| 1001 | zhangsan |        1 |
| 1002 | zhangsan |        2 |
| 1003 | zhangsan |        3 |
+------+----------+----------+
3 rows in set (0.00 sec)

```

父表classes中没有的数据值，是不可以在子表students中使用的。

父表中的记录被子表引用，是不可以被删除的。


```
mysql> delete from classes where id=3;
ERROR 1451 (23000): Cannot delete or update a parent row:
a foreign key constraint fails (`test2`.`students`, 
CONSTRAINT `students_ibfk_1` FOREIGN KEY (`class_id`) REFERENCES `classes` (`id`))
```

数据库三大范式
=======

1. 第一范式 1NF

------------

数据库表中的所有字段都是不可分割的原子值。


```
mysql> create table student(
    -> id int primary key,
    -> name varchar(20),
    -> address varchar(30)
    -> );
Query OK, 0 rows affected (0.12 sec)

mysql> insert into student values(1,'zhangsan','甘肃会宁');
Query OK, 1 row affected (0.02 sec)

mysql> insert into student values(2,'lisi','甘肃会宁');
Query OK, 1 row affected (0.01 sec)

mysql> insert into student values(3,'laowang','甘肃会宁');
Query OK, 1 row affected (0.01 sec)

mysql> select * from student;
+----+----------+--------------+
| id | name     | address      |
+----+----------+--------------+
|  1 | zhangsan | 甘肃会宁     |
|  2 | lisi     | 甘肃会宁     |
|  3 | laowang  | 甘肃会宁     |
+----+----------+--------------+
3 rows in set (0.00 sec)
```


address字段值还可以继续拆分的就不满足第一范式。


```
create table student2(
    id int primary key,
    name varchar(20),
    country varchar(30),
    privence varchar(30),
    city varchar(30),
    details varchar(30)
 );
```


```
insert into student2 values(1,'张三','中国','甘肃','兰州','安宁区安宁街道30号');
insert into student2 values(2,'李四','中国','甘肃','兰州','安宁区安宁街道34号');
insert into student2 values(3,'王五','中国','甘肃','兰州','安宁区安宁街道80号');
```


```
mysql> select * from student2;
+----+--------+---------+----------+--------+----------------------------+
| id | name   | country | privence | city   | details                    |
+----+--------+---------+----------+--------+----------------------------+
|  1 | 张三   | 中国    | 甘肃     | 兰州   | 安宁区安宁街道30号         |
|  2 | 李四   | 中国    | 甘肃     | 兰州   | 安宁区安宁街道34号         |
|  3 | 王五   | 中国    | 甘肃     | 兰州   | 安宁区安宁街道80号         |
+----+--------+---------+----------+--------+----------------------------+
3 rows in set (0.00 sec)
```


范式：设计的越详细，对于某些实际操作可能更好，但不一定都有好处。一般要结合实际情况设计。

1. 第二范式 2NF

------------

第二范式必须是满足第一范式的前提下，要求，除主键外的每一列都必须完全依赖于主键。
如果出现不完全依赖，只可能发生在联合主键的情况下。

```
create table myolder(
	product_id int,
	customer_id int,
	product_name varchar(30),
	customer_name varchar(30),
	primary key(product_id,customer_id)
);
```


**问题：
除主键外的其他列，只依赖于主键的部分字段。
不满足第二范式
解决办法是拆表。**

```
create table myolder(
	older_id int primary key,
	product_id int,
	customer_id int
);

create table product(
	id int primary key,
	name varchar(20)
);

create table customer(
	id int primary key,
	name varchar(20)
);
```


分成三个表之后就满足第二范式的设计！！！

3. 第三范式 3NF

------------

必须先满足第二范式， 除开主键列的其他列之间不能有传递依赖关系。
例如：

```
create table myolder(
	older_id int primary key,
	product_id int,
	customer_id int,
	customer_phone varchar(15)
);
```

在这个表中，我们可以看到`customer_phone`和`customer_id`之间存在依赖关系，这样就不满足第三范式的要求；解决办法是：我们把`customer_phone`放到`customer`表中。如下：


```
create table customer(
	id int primary key,
	name varchar(20),
    	phone varchar(15)
);
```

## sql的四种连接查询

```
内连接
inner join 或者join
外连接
左连接 left join 或者left outer join
右连接 right join 或者right outer join
完全外连接
full join 或者full outer join
```


创建两个表：


```
person表
id，name，cardID
1	张三	1
2	李四	3
3	王五	6
card表
id,name
1	饭卡
2	建行卡
3	农行卡
4	工商卡
5	邮政卡
并没有创建外键
--inner join查询（内连接）
SELECT * from person INNER JOIN card ON person.cardID=card.id;
id name  cardid id name
1	张三	1	1	饭卡
2	李四	3	3	农行卡
--内连查询，其实就是两张表中的数据，通过某个字段相等查询出相关记录数据。
--left join左外连接
SELECT * FROM person LEFT JOIN card ON person.cardID=card.id;
+------+--------+--------+------+-----------+
| id   | name   | cardID | id   | name      |
+------+--------+--------+------+-----------+
|    1 | 张三   |      1 |    1 | 饭卡      |
|    2 | 李四   |      3 |    3 | 农行卡    |
|    3 | 王五   |      6 | NULL | NULL      |
+------+--------+--------+------+-----------+
3 rows in set (0.00 sec)
---左外连接，会把左边表里所有的数据取出来，而右边表里的数据，如果有相等的，就显示出来，如果没有就补null。
----right join右外连接
SELECT * FROM person RIGHT JOIN card ON person.cardID=card.id;
+------+--------+--------+------+-----------+
| id   | name   | cardID | id   | name      |
+------+--------+--------+------+-----------+
|    1 | 张三   |      1 |    1 | 饭卡      |
| NULL | NULL   |   NULL |    2 | 建行卡    |
|    2 | 李四   |      3 |    3 | 农行卡    |
| NULL | NULL   |   NULL |    4 | 工商卡    |
| NULL | NULL   |   NULL |    5 | 邮政卡    |
+------+--------+--------+------+-----------+
5 rows in set (0.00 sec)
---右外连接，会把右边表里所有的数据取出来，而左边表里的数据，如果有相等的，就显示出来，如果没有就补null。
--------------------------------------------------------------------

----full join全外连接
---MySQL不支持全外连接
---只能通过union来实现
mysql> SELECT * FROM person LEFT JOIN card ON person.cardID=card.id
    -> UNION
    -> SELECT * FROM person RIGHT JOIN card ON person.cardID=card.id;
+------+--------+--------+------+-----------+
| id   | name   | cardID | id   | name      |
+------+--------+--------+------+-----------+
|    1 | 张三   |      1 |    1 | 饭卡      |
|    2 | 李四   |      3 |    3 | 农行卡    |
|    3 | 王五   |      6 | NULL | NULL      |
| NULL | NULL   |   NULL |    2 | 建行卡    |
| NULL | NULL   |   NULL |    4 | 工商卡    |
| NULL | NULL   |   NULL |    5 | 邮政卡    |
+------+--------+--------+------+-----------+
6 rows in set (0.00 sec)
```


## 事务

### MySQL事务

mysql 中，事务其实是一个最小的不可分割的工作单元。事务能够保证一个业务的完整性。


```
比如我们的银行转账:
a -> -100
update user set money=money-100 where name='a' ;
b -> +100
update user set money=money+100 where name='b ';

```


实际的程序中，如果只有一条语句执行成功了，而另外一条没有执行成功，就会出现数据前后不一致。  
多条sql语句，可能会有同时成功的要求，要么就同时失败。  

### MySQL中如何控制事务

1. MySQL是默认开启事务的（自动开启）  


```
SELECT @@autocommit;
-------------
@@autocommit
	1
-------------
```



默认事务开启的作用是什么?  
当我们去执行一个sql语句的时候，效果会立即体现出来，且不能回滚。  
先创建一个表：


```
create database bank;
create table user(
	id int primary key,
	name varchar(20),
	money int
);
insert into user values( 1, 'a' ,1000);
```


事务回滚：撤销sql语句执行效果。  
`rollback;`


```
mysql> rollback;
Query OK, 0 rows affected (0.00 sec)

mysql> select *from user;
+----+------+-------+
| id | name | money |
+----+------+-------+
|  1 | a    |  1000 |
+----+------+-------+
1 row in set (0.00 sec)
```


设置mysql自动提交为false。  


```
mysql> set autocommit = 0;
Query OK, 0 rows affected (0.00 sec)

mysql> select @@autocommit;
+--------------+
| @@autocommit |
+--------------+
|            0 |
+--------------+
1 row in set (0.00 sec)
```


上面的操作，关闭了mysql的自动提交(commit)。  
我们再插入一条记录：


```
mysql> insert into user values(2,'b',1000);
Query OK, 1 row affected (0.00 sec)

mysql> select * from user;
+----+------+-------+
| id | name | money |
+----+------+-------+
|  1 | a    |  1000 |
|  2 | b    |  1000 |
+----+------+-------+
2 rows in set (0.00 sec)

mysql> rollback;
Query OK, 0 rows affected (0.01 sec)

mysql> select * from user;
+----+------+-------+
| id | name | money |
+----+------+-------+
|  1 | a    |  1000 |
+----+------+-------+
1 row in set (0.00 sec)
```


插入第二条数据其实没有插入到实际表中；  
要想插入成功，则进行如下操作：


```
再次插入
mysql> insert into user values(2,'b',1000);
Query OK, 1 row affected (0.00 sec)

手动提交数据
mysql> commit;
Query OK, 0 rows affected (0.01 sec)

撤销不可以（持久性）
mysql> rollback;
Query OK, 0 rows affected (0.00 sec)

mysql> select * from user;
+----+------+-------+
| id | name | money |
+----+------+-------+
|  1 | a    |  1000 |
|  2 | b    |  1000 |
+----+------+-------+
2 rows in set (0.00 sec)
```


**总结：**  
自动提交：`@@autocommit`  
手动提交：`commit`  
事务回滚：`rollback`  
例如转账操作：


```
mysql> update user set money=money-100 where name='a' ;
Query OK, 1 row affected (0.00 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> update user set money=money+100 where name='b ';
Query OK, 0 rows affected (0.00 sec)
Rows matched: 0  Changed: 0  Warnings: 0

mysql> select * from user;
+----+------+-------+
| id | name | money |
+----+------+-------+
|  1 | a    |   900 |
|  2 | b    |  1000 |
+----+------+-------+
2 rows in set (0.00 sec)

mysql> rollback;
Query OK, 0 rows affected (0.01 sec)

mysql> select * from user;
+----+------+-------+
| id | name | money |
+----+------+-------+
|  1 | a    |  1000 |
|  2 | b    |  1000 |
+----+------+-------+
2 rows in set (0.00 sec)
```


事务给我们提供了一个返回的机会。  

#### 手动开启事务


```
  两种方式
  begin;  
  start transaction;
```


```
mysql> begin;
Query OK, 0 rows affected (0.00 sec)

mysql>  update user set money=money-100 where name='a';
Query OK, 1 row affected (0.00 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> update user set money=money+100 where name='b ';
Query OK, 0 rows affected (0.00 sec)
Rows matched: 0  Changed: 0  Warnings: 0

mysql> select * from user;
+----+------+-------+
| id | name | money |
+----+------+-------+
|  1 | a    |   800 |
|  2 | b    |  1000 |
+----+------+-------+
2 rows in set (0.00 sec)

mysql> rollback;
Query OK, 0 rows affected (0.01 sec)

mysql>  select * from user;
+----+------+-------+
| id | name | money |
+----+------+-------+
|  1 | a    |   900 |
|  2 | b    |  1000 |
+----+------+-------+
2 rows in set (0.00 sec)
```


事务开启之后，一旦commit提交，就不能回滚了（也就是当前的这个事务在提交的时候就结束了）。  

## 事务的一些基本概念

### 事务的四大特征ACID

A 原子性：事务是最小的单位，不可以在分割。  
C 一致性：事务要求，同一事务中的sql语句，必须保证同时成功或者同时失败。  
I 隔离性：事务1和事务2之间是具有隔离性的。  
D 持久性：事务一旦结束（commit，rollback），就不可以返回。  

### 事务开启

1。修改默认提交`set autocommit=0;  `  

2. `begin;  `  
3. `start transaction;`

### 事务手动提交

`commit;`

### 事务手动回滚

`rollback;`  

### 事务的隔离性


```
1、read uncommitted;
读未提交的  
2、read committed;
读已经提交的
3、repeatable read;
可以重复读
4、serializable;
串行化
mysql 默认隔离级别REPEATABLE-READ

解释：
如果有事务a,和事务b,
a事务对数据进行操作，在操作的过程中，事务没有被提交，但是b 可以看见a操作的结果。

eg：bank数据库的user表：
insert into user values( 3,'小明',1000);
insert into user values(4,'淘宝店' ,1000) ;

如何查看数据库的隔离级别：
系统级别：select @@global.transaction_isolation;
会话级别：select @transaction_isolation;

mysql> select @@global.transaction_isolation;
+--------------------------------+
| @@global.transaction_isolation |
+--------------------------------+
| REPEATABLE-READ                |
+--------------------------------+
1 row in set (0.00 sec)

如何修改隔离级别：
set global transaction isolation level read uncommitted;

mysql> set global transaction isolation level read uncommitted;
Query OK, 0 rows affected (0.00 sec)

mysql> select @@global.transaction_isolation;
+--------------------------------+
| @@global.transaction_isolation |
+--------------------------------+
| READ-UNCOMMITTED               |
+--------------------------------+
1 row in set (0.00 sec)
```


转账:小明在淘宝店买鞋子:800块钱,  
小明-》成都ATM  
淘宝店-》广州ATM  


```
start transaction;
update user set money=money-800 where name='小明';
update user set money=money+800 where name='淘宝店';
mysql> select * from user;
+----+-----------+-------+
| id | name      | money |
+----+-----------+-------+
|  1 | a         |   900 |
|  2 | b         |  1000 |
|  3 | 小明      |   200 |
|  4 | 淘宝店    |  1800 |
+----+-----------+-------+
4 rows in set (0.00 sec)
```



如果两个不同的地方，都在进行操作，事务a 开启之后，他的数据可以被其他事务读取到。这样就会出现(脏读)。  
**脏读**：一个事务读到了另外一个事务没有提交的数据，就叫做脏读。  
实际开发是不允许脏读出现的。  
**不可重复读**
虽然我只能读到另外一个事务提交的数据，但还是会出现问题，就是读取同一个表的数据，发现前后不一致。不可重复读现象。  
**幻读**事务a和事务b 同时操作一张表，事务a提交的数据，也不能被事务b读到，就可以造成幻读。  
**串行化**
问题是，性能特差!!!  

`READ—UNCOMMITTED > READ-COMMITTED > REPEATABLE-READ > SERIALIZABLE;`  

隔离级别越高，性能越差。  
