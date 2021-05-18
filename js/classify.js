window.addEventListener('load', function () {

    var focus = document.querySelector('.focus');

    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('.circle');
    for (var i = 0; i < ul.children.length; i++) {
     // 创建一个小li
     var li = document.createElement('li');
            // 把小li插入到ol里面
    ol.appendChild(li);
    // 记录当前小圆圈的索引号 通过自定义属性来做
        li.setAttribute('index', i)
        
     var focusWidth = focus.offsetWidth;
    li.addEventListener('click', function () {
            // 将所有的li 清除current 类名
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        this.className = 'current';

        var index = this.getAttribute('index');
        
        
        // 当我们点击了某个小圆圈时，就要把这个小圆圈的索引号给num和circle
        num = index;
        circle = index;

        animate(ul,-index * focusWidth);
        })
    }
    // 把ol里面的第一个小li设置类名为current
    ol.children[0].className = 'current';

    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    // 自动轮播图
    var num = 0;
    var circle = 0;
    var auto = document.querySelector('.auto')
    auto.addEventListener('click', function () {
        if (num == ul.children.length - 1) {
            ul.style.left = 0;
            num = 0;
        }
        num++;
        if (circle == ol.children.length - 1) {
            circle = 0;
        }
        circle++;
        // 先清除其余小圆圈的current类名
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        // 留下当前小圆圈的current类名
        ol.children[circle].className = 'current';
        animate(ul, -num * focusWidth);

    })
    var timer = setInterval(function () {
        auto.click();
    }, 2500);
    
    
    focus.addEventListener('mouseenter', function () {
        clearInterval(timer);
        timer = null;  //清除定时器变量
    })
    focus.addEventListener('mouseleave', function () {
        timer = setInterval(function () {
        auto.click();
    }, 2500); 
    })

    var search = document.querySelector('.search');
    var input = search.querySelector('input');
    input.addEventListener('focus', function () {
        if (this.value == '请搜索') {
            this.value = '';
        }
    })
    input.addEventListener('blur', function () {
        if (this.value == '') {
            this.value = '请搜索';
        }
    })

    var content = document.querySelector('.content');
    var ul1 = content.querySelector('ul');
    var li1 = ul1.querySelectorAll('li');
    var img = ul1.querySelectorAll('img');
    var star = ul1.querySelectorAll('.star');
    var title = ul1.querySelectorAll('.title');
    var author = ul1.querySelectorAll('.author');

    var main = document.querySelector('.main');
    var bg = document.querySelector('.bg');
    var triangle = document.querySelector('.triangle');
    var img1 = triangle.querySelector('img');

    for (i = 0; i < 8; i++) {
         li1[i].addEventListener('click', function () {
        main.style.display = 'block';
        bg.style.display = 'block';
    });
    }
   
    img1.addEventListener('click', function () {
      main.style.display = 'none';
      bg.style.display = 'none';
    });
    

    var url = 'http://vtmer.cn/search';
    // 1.创建对象
    var xhr = new XMLHttpRequest();
    // 2.初始化 设置请求方法和 url
    xhr.open("GET", url, true);
    // 3.发送
    xhr.send();
    // 4. 事件绑定 处理服务端返回的结果
            // on when 当...的时候
            // readystate 是 xhr 对象中的属性， 表示状态 0 1 2 3 4
            // change 改变
    xhr.onreadystatechange = function () {
        // 判断(服务端返回了所有的结果)
        if (xhr.readyState === 4) {
            // 判断响应状态码 200 404 403 401 500
            // 2xx 成功
            if (xhr.status >= 200 && xhr.status < 300) {
                //处理结果 行 头 空行 体
                //1．响应行
                // console.log(xhr.status); //状态码
                // console.log(xhr.statusText); //状态字符串
                // console.log(xhr.getAllResponseHeaders()); //所有响应头
                // console.log(xhr.response); //响应体
                var data1 = JSON.parse(xhr.response);
                var list = data1.bookclass[0];
                console.log(list);
                console.log(list.bookInfo[0].ahthor);
              
                
                for (i = 0; i < 8; i++) {
                        
                    img[i].src = list.bookInfo[i].cover;
                    star[i].src = list.bookInfo[i].socre;
                    title[i].innerHTML = list.bookInfo[i].title;
                    author[i].innerHTML = list.bookInfo[i].author;
                }
            }
        }
    }
})