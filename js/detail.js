window.addEventListener('load', function () {
    var middle = document.querySelector('.middle');
    var dl = middle.querySelector('dl');
  var header = document.querySelector('.header');
  var h1 = middle.querySelector('h1');
  var bookcover = middle.querySelector('.bookcover');
  var img5 = bookcover.querySelector('img');
  var autor2 = middle.querySelector('.author');
  var publish = middle.querySelector('.publish');
  var publishDate = middle.querySelector('.publishDate');
  var library = middle.querySelector('.library');
  var autor2 = middle.querySelector('.author');
  var i1 = autor2.querySelectorAll('i');
  var i2 = publish.querySelectorAll('i');
  var i3 = publishDate.querySelectorAll('i');
  var i4 = library.querySelectorAll('i');
  var p = middle.querySelectorAll('p');

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
                li1[i].addEventListener('click', function () {
             main.style.display = 'block';
                  bg.style.display = 'block';
                  
                    img5.src = this.img.src;
                    i2[1].innerHTML = this.title.innerHTML;
                    i1[1].innerHTML = this.author.innerHTML;
                    i3[1].innerHTML = list.bookInfo[0].publishDate;
                    i4[1].innerHTML = list.bookInfo[0].library;
                    i4[2].innerHTML = list.bookInfo[0].library.total;
                    i4[3].innerHTML = list.bookInfo[0].library.position;
                    p[0].innerHTML = list.bookInfo[0].ahthorIntro;
                    p[1].innerHTML = list.bookInfo[0].bookIntro;
          });
    }

        

            }
        }
    }

 
  

})