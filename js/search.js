window.addEventListener('load', function () {
function animate(obj, target, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var step = (target - obj.offsetTop) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetTop == target) {
            clearInterval(obj.timer);
            if (callback) {
                callback();
            }
        }
        obj.style.top = obj.offsetTop + step + 'px';
    },15);
}

    var sidebar = document.querySelector('.sidebar');
    var dl = sidebar.querySelector('dl');
    var classify = sidebar.querySelector('.classify');
    var search = document.querySelector('.search');


    sidebar.addEventListener('mouseenter', function () {
        animate(dl, 30);
        dl.style.display = 'block';
    });
    sidebar.addEventListener('mouseleave', function () {
        animate(dl, -120);
        dl.style.display = 'none';
    });

    var search1 = document.querySelector('.search');
    var input = search1.querySelector('input');
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

    // $.ajax({
    //     type: "post",
    //     url: "http://127.0.0.1:8000/jQery-server",
    //     data: { a=100, b=200 },
    //     dataType: "json",
    //     success: function (data1) {
    //       console.log(dada1);
    //     },
    // });
    
    var column = document.querySelector('.column');
    var search2 = column.querySelector('.search');
    var content = document.querySelector('.content');
    var ul = content.querySelector('ul');
    var li = ul.querySelectorAll('li');
    var img = ul.querySelectorAll('img');
    var star = ul.querySelectorAll('.star');
    var title = ul.querySelectorAll('.title');
    var author = ul.querySelectorAll('.author');
    var main = document.querySelector('.main');
    var bg = document.querySelector('.bg');
    var triangle = document.querySelector('.triangle');
    var img1 = triangle.querySelector('img');

    for (i = 0; i < 8; i++) {
         li[i].addEventListener('click', function () {
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
                // console.log(data1.bookInfo/[1].socre);
                
                for (i = 0; i < 8; i++) {
                        
                    // ul.appendChild(document.write('<li><div class="image"><img src =  /></div><div class="star"></div><h4></h4><h4></h4></li>'))
                    // '<li><div class="image"><img src =  /></div><div class="star"></div><h4></h4><h4></h4></li>'
                        // console.log(data1);
                        // const html = template("productList", data1);
                        // $('.list').html(html);
                    img[i].src = list.bookInfo[i].cover;
                   star[i].src = list.bookInfo[i].socre;
                    title[i].innerHTML = list.bookInfo[i].title;
                   author[i].innerHTML = list.bookInfo[i].author;
                }
            }
        }
    }
    

    })
