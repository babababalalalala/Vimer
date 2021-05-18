# jQuery



### 1.1 初认识



#### 1.1.1 入口函数



作用相当于`onload`事件,等dom结构渲染完毕即可执行



但又有所不同



`onload` 事件是等页面文档、外部的 js 文件、css文件、图片加载完毕才执行内部代码。



```
// 第一种
$(function () {   
    ...  // 内容
}) ; 

// 第二种
$(document).ready(function(){
   ...  //  内容
});
```



#### 1.1.2 顶级对象$



可以用`jQuery`来代替，相当于原生js中的window



#### 1.1.3 jQuery 对象和 DOM 对象



1. 用原生 JS 获取来的对象是 DOM 对象

1. jQuery 方法获取的元素是 jQuery 对象。

1. jQuery 对象是经过包装的dom对象（伪数组形式存储）



jQuery对象才能使用jQuery方法,不能混用



#### 1.1.4 jQuery对象和Dom对象转换



```
// DOM对象转换成jQuery对象
var box = document.getElementById('box');  // 获取DOM对象
var jQueryObject = $(box);  // 把DOM对象转换为 jQuery 对象

// jQuery 对象转换为 DOM 对象两种方法：
//  jQuery对象[索引值]
var domObject1 = $('div')[0]
// jQuery对象.get(索引值)
var domObject2 = $('div').get(0)
```



### 2.1 jQuery选择器



#### 2.1.1 基础选择器

| 名称       | 用法             | 描述                     |
| ---------- | ---------------- | ------------------------ |
| ID选择器   | $('#id')         | 获取指定ID的元素         |
| 全选选择器 | $('*"')          | 匹配所有元素             |
| 类选择器   | $(".class")      | 获取同一类class的元素    |
| 标签选择器 | $("div")         | 获取同一类标签的所有元素 |
| 并集选择器 | $("div,p,li")    | 选取多个元素             |
| 交集选择器 | $s("Ii.current") | 交集元素                 |



#### 2.1.2 层级选择器

| 名称       | 用法        | 描述                                                         |
| ---------- | ----------- | ------------------------------------------------------------ |
| 子代选择器 | $("ul>li"); | 使用>号，获取亲儿子层级的元素;注意，并不会获取孙子层级的元素 |
| 后代选择器 | $("ul li"); | 使用空格，代表后代选择器，获取ul下的所有li元素，包括孙子等   |



#### 2.1.3 筛选选择器

| 名称       | 用法          | 描述                                                        |
| ---------- | ------------- | ----------------------------------------------------------- |
| :first     | $('li:first') | 获取第一个li元素                                            |
| :last      | $('li:last')  | 获取最后一个li元素                                          |
| :eq(index) | $("li:eq(2)") | 获取到的li元素中，选择索引号为2的元素，索引号index从0开始。 |
| :odd       | $("li:odd")   | 获取到的li元素中，选择索引号为奇数的元素                    |
| :even      | $("li:even")  | 获取到的li元素中，选择索引号为偶数的元素                    |



#### 2.1.4 其他选择器

| 语法               | 用法                              | 说明                                                   |
| ------------------ | --------------------------------- | ------------------------------------------------------ |
| parent()           | $("li").parent();                 | 查找父级                                               |
| children(selector) | $("ul").children(""li")           | 相当于$("ul>li")，最近一级（亲儿子)                    |
| find(selector)     | $("ul").find("li");               | 相当于$("ul li"),后代选择器                            |
| siblings(selector) | $( ".first").siblings("li");      | 查找兄弟节点，不包括自己本身                           |
| nextAll([expr])    | $(".first").nextAll()             | 查找当前元素之后所有的同辈元素                         |
| prevtAll([expr])   | $(".last"). prevAll()             | 查找当前元素之前所有的同辈元素                         |
| hasclass(class)    | $( 'div ' ).hasClass("protected") | 检查当前的元素是否含有某个特定的类，如果有，则返回true |
| eq(index)          | $("li").eq(2);                    | 相当于$("li:eq(2)" ) ,index从0开始                     |



### 2.2 基础知识



#### 2.2.1 排他思想



```
$(this).css(“color”,”red”);//自己变色
$(this).siblings(). css(“color”,””);//兄弟除色
```



#### 2.2.2 隐式迭代



在jQuery内部会遍历dom对象的过程叫做隐式迭代



```
$('div').hide(); //页面中所有的div都会被隐藏
```



#### 2.2.3 链式编程



```
$(this).css('color', 'red').sibling().css('color', '');
```



### 3.1 样式操作



#### 3.1.1 操作css



```
var strColor = $(this).css('color');

$(this).css(''color'', ''red'');

//参数可以是对象形式，方便设置多组样式。属性名和属性值用冒号隔开， 属性可以不用加引号
$(this).css({ "color":"white","font-size":"20px"});
```



一般来说通过在style中编写样式，通过添加类的方式添加样式



#### 3.1.2 设置类名方法



```
// 1.添加类
$("div").addClass("current");

// 2.删除类
$("div").removeClass("current");

// 3.切换类
$("div").toggleClass("current");
```



在原生js中className会覆盖类名，在jQuery中指操作指定类名，不影响原先的类名



### 3.2 jQuery效果



注意：

 

动画或者效果一旦触发就会执行，如果多次触发，就造成多个动画或者效果排队执行。

 

停止动画排队：stop() ;



这样就可以在动画执行的时候停止动画



#### 3.2.1 显示隐藏



- 显示隐藏：show() / hide() / toggle() ;



关于参数



参数都可以省略，无动画直接显示

 

第一个参数speed : 三种预定速度（show，normal，fast）或者是动画时长的毫秒数

 

第二个参数 easing：指定切换效果，默认是'swing' 还可设为'linear'

 

第三个参数 fn :回调函数，在动画完成时执行的函数



#### 3.2.2 滑入滑出



- 滑入滑出：slideDown() / slideUp() / slideToggle() ;



#### 3.2.3 淡入淡出



- 淡入淡出：fadeIn() / fadeOut() / fadeToggle() / fadeTo() ;



tips: `fadeTo()`必须要写速度和透明度，透明度表示淡入后的最大透明度



```
<script>
    $(function() {
        $('button').eq(0).click(function() {
            $('div').stop().fadeIn();
        })
        $('button').eq(1).click(function() {
            $('div').stop().fadeOut();
        })
        $('button').eq(2).click(function() {
            $('div').stop().fadeToggle();
        })
        $('button').eq(3).click(function() {
            $('div').stop().fadeTo(100,.3);
        })
    })
</script>
```



#### 3.2.4 自定义动画



- 自定义动画：animate() ;



第一个参数传入更改的样式属性,以对象形式传递，注意复合属性用驼峰命名,后面3个参数可以省略



```
<script>
    $(function() {
        $('button').click(function() {
            $('div').animate({
                left: 500,
                top: 300,
                opacity: .5,
                hight: 300
            })
        })
    })
</script>
```



注意设置`top`,`left`的时候要给`div`加定位，否则无效



#### 3.2.5 事件切换



jQuery中有`hover()`事件，功能类似于css中的hover



```
hover(function,function)
```



传入2个参数，第一个参数是鼠标移入是触发的函数，第二个是鼠标移出时触发的函数



只写一个参数时，鼠标移入移出都会触发它



### 4.1 jQuery属性操作



#### 4.1.1 元素固有属性值 prop()



获取元素本身自带的属性,有利于对表单操作



- 表单属性：`disabled` `checked`这类属性操作很顺畅



```
//获取
prop('属性名');

//更改
prop('属性名','属性值');
```



#### 4.1.2 元素自定义属性值 attr()



```
//获取
attr('属性名');

//更改
attr('属性名','属性值');
```



#### 4.1.3 数据缓存 data()



可以在指定的元素上存取数据，但不会修改DOM元素结构。页面刷新缓存清除



```
data('myName','ljc');//向元素添加数据

data('myName');//向元素读取数据
```



#### 4.1.4 全选按钮



通过`:checked`选择器，可以以数组形式返回被选中的元素



```
$(function() {
    $('.all').change(function() {
        $('.child').prop('checked',$('.all').prop('checked'));//全选按钮
    })
    $('.child').change(function() {
        if($('.child:checked').length == $('.child').length) {
            $('.all').prop('checked',true);// 如果小按钮全部被选中，全选勾上
        }else {
            $('.all').prop('checked',false);
        }
    })
})
```



### 4.2 文本属性



#### 4.2.1 文本内容



- 普通元素内容



这样获取到的会带有标签

 

可以通过传入参数来更改内容



```
<div>
    <span>123</span>
</div>

<script>
    console.log($('div').html());// <span>123</span>
    $('div').html('ljc'); //div中只剩ljc
</script>
```



- 普通元素文本内容



只会获取文本的内容，不会获取标签



- 表单的值 val()



```
console.log($("input").val());//获取表单的内容
$("input").val("123");//改表单的内容
```



保留2位小数 toFixed(2)



### 4.3 元素操作



#### 4.3.1 遍历元素



隐式迭代是对同一类元素做同一件事情，但是要做不同事情的话还是需要使用遍历



```
$('div').each(function(index, domEle) {});
```



- 是dom对象不是jQuery对象，需要转换成jquery对象才能使用方法



```
$.each(obj,function(index,domele){})
```



可以用来遍历任何对象，主要用来做数据处理，



```
var sum = 0;
var arr = ['red','blue','yellow'];
$('div').each(function(index, domEle) {
    //index是索引号 domEle是dom元素对象
    $(domEle).css('color', arr[index]);
    //转化为整数，否则输出0123，以字符串来拼接
    sum += parseInt($(domEle).text());
})
console.log(sum);//6

$.each({
    name: 'ljc',
    age: 20
},function(i,ele) {
    console.log(i); // name age
    console.log(ele); // 'ljc' 20
})
```



#### 4.3.2 操作元素



- **创建元素**



```
var li = $('<li>新创建的元素</li>');
```



- **添加元素(**在后面添加)



```
$('ul').append(li);
```



- 添加元素(在前面添加)



```
$('ul').prepend(li);
```



- 外部添加(在前面添加)



```
 $('div').before(div);
```



- 外部添加(在后面添加)



```
 $('div').after(div);
```



- **删除元素**



```
$('ul').remove();//整个ul删除
```



- 删除元素集合中的子节点



```
$('ul').empty();//相当于清空ul里的内容
```



- 通过html来清空



```
$('ul').html();
```



### 4.4 尺寸，位置操作



#### 4.4.1 jQuery尺寸操作

| 语法                                 | 用法                                                  |
| ------------------------------------ | ----------------------------------------------------- |
| width() / height()                   | 取得匹配元素宽度和高度值 只包括width / height         |
| innerWidth() /innerHeight()          | 取得匹配元素宽度和高度值 包括 padding                 |
| outerWidth() / outerHeight()         | 取得匹配元素宽度和高度值 包括padding，border          |
| outerWidth(true) / outerHeight(true) | 取得匹配元素宽度和高度值 包括 padding、border、margin |



- 返回值是数字型的

- 如果参数是数字，则修改样式

- 参数不写单位



#### 4.4.2 jQuery 位置操作



1. `offset()`设置获取元素偏移



获取的位置是**相对于文档**的偏移坐标，与父级没有关系



传入的参数是一个对象



```
//获取偏移量
$('div').offset()
//更改位置
$('div').offset({
      top: 200,
      left: 100
})
```



1. `position()`获取带有定位的偏移



获取的位置是相对于**带有定位**的父级元素



这个方法只能获取，不能修改



```
$('div').position()
```



1. `scrollTop()` `scrollLeft` 设置元素被卷去的头部和左侧



不跟参数是获取，跟参数是设置



### 5.1 jQuery 事件



#### 5.1.1 on() 绑定事件



`on()`绑定事件的好处



1. 可以绑定多个事件，多个处理事件函数



```
$('div').on({
    mouseover : function() {},
    click : function() {}
})
$('div').on('mouseenter mouseleave',function() {
    $(this).toggleClass('currrnt');
})//如果执行的程序相同可以采用这种方法
```



1. 事件委托



```
$('ul').on('click','li',function() {
       alert('hello world');
 })
```



1. 对于新创建的元素，`click`无法绑定，但是`on`可以



```
$('div').on('click','p',function() {
    alert('别点我');
})

$('div').append($('<p>新来的</p>'))
```



#### 5.1.2 off()解绑事件



- 解除全部事件



```
$('div').off()
```



- 解除特定事件



```
$('div').off('click')
```



- 解除事件委托



```
$('div').off('click','li')
```



- 只触发一次的事件



```
$('div').one('click',function(){})
```



#### 5.1.3 tigger()自动触发事件



```
// 会触发元素的默认行为
$("div").click();
// 会触发元素的默认行为
$("div").trigger("click");
//不会触发默认行为，比如自动获取焦点
$("input").triggerHandler("focus");//不会获取焦点
```



### 6.1 jQuery 事件对象



和原生js的事件对象基本相同



阻止默认行为 ： `event.preventDefault()`,`return false`

 

阻止冒泡 : `event.stopPropagation()`



#### 6.1.1 拷贝对象



```
$.extend([deep], target, obj1)
```



1. [deep]，深拷贝为true，默认为false 浅拷贝

1. target要拷贝的对象

1. obj被拷贝的对象



```
$(function() {
    var targetObj = {
        sex : 'male'
    };
    var obj = {
        id: 1,
        name: 'andy'
    };
    $.extend(targetObj,obj);// v把obj 拷贝给 targetObj
    console.log(targetObj);// {sex: "male", id: 1, name: "andy"}
    console.log(obj); // {id: 1, name: "andy"}
})
```



如果传入多个对象，则在后面的对象会覆盖前面的对象



#### 6.1.2 多库共存



用来解决命名冲突的问题



**jQuery解决方法**



 

1. 把$换成jQuery。`jQuery('div')`

1. 自定义名字。 var xx = $.noConflict();

 



```
<script>
	$(function() {
  		// 让jquery 释放对$ 控制权 让用自己决定
  		var ljc = jQuery.noConflict();
  		console.log(ljc("span"));
	})
</script>
```



### 7.1 jQuery 插件



1. 引入css.

1. 引入JS

1. 引入html。