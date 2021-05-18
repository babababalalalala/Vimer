window.addEventListener('load', function () {
    var login = document.querySelector('.login');
    var close = login.querySelector('.close');
    var header = document.querySelector('.header');
    var register = document.querySelector('.register');
    var name = login.querySelector('.name');
    var password = login.querySelector('.password');
    var loginer = login.querySelector('.loginer');

    header.addEventListener('click', function () {
        login.style.display = 'block';
    });
    close.addEventListener('click', function () {
        login.style.display = 'none';
    });

    var search = document.querySelector('.search');
    var input = search.querySelector('input');
    var a = search.querySelector('a');
    var bg = document.querySelector('.bg');
    a.addEventListener('click', function () {
        bg.style.display = 'block';
        setTimeout(function () {
            bg.style.display = 'none';
            a.href = 'search.html';
            a.click();
    },2500)
    })
    
    input.addEventListener('focus', function () {
        if (this.value == '搜索') {
            this.value = '';
        }
    })
    input.addEventListener('blur', function () {
        if (this.value == '') {
            this.value = '搜索';
        }
    })
    
    

    register.addEventListener('click', function () {
        var url = 'http://vtmer.cn/login';
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
                    var data = JSON.parse(xhr.response);
                    name.value = data.user.name;
                    password.value = data.user.password;
                }
            }
    
        
        };
    })
    loginer.addEventListener('click', function () {
            header.innerHTML = name.value;
         login.style.display = 'none';
    })


    document.onkeydown = function (e) {
        var e = window.event ? window.event : e;
        if (e.keyCode == 13) {
            var btn = document.getElementById("loginBtn");
            btn.onclick();
        }
    }

    // var id = 1;

    // $.ajax({
    // url : "js/index.html",

    // data : {id : input.innerHTML},

    // success: function () {
    //     location.href = "js/index.html?id=" + id;
    // }

    // })
})