/**************************
*****包含：用户名、分类页**
**************************/

//注意要请求数据要加载mockjs
//ajax请求可用jQuery
//用户登录账号的路由为http://vtmer.cn/login
//书本信息的为http://vtmer.cn/class
//搜索页的为http：//vtmer.cn/search
//需要将搜索结果返回到url上
//如：搜索：白夜行
//链接为：http：//vtmer.cn/search=白夜行
/*********************/ 
//用户名登录表单验证：
//账号(name)都是英文 
//密码(password)都是数字，且长度为6-10

Mock.mock('http://vtmer.cn/login', {
     'user|1':[{
          	name:'@first()',
          	password:'@string(lower+number,6,10)'
          }]         
     });


Mock.mock('http://vtmer.cn/class', {
			// 书的大分类
 			'cbookclass|4':[{
 				// 书的详情
 				'cbookInfo|20-40':[{
 					// 书名
          			title:'@ctitle(1,5)',
          			// 作者
          			author:'@cname()',
          			// 出版社
          			publish:'@region()出版社',
          			// 出版时间
          			publishDate:'@date(yyyy-MM-dd)',
          			// 图书馆详情
          			library:[{
          				// 数目
          				total:'@natural(0, 100)',
          				// 位置
          				position:'@natural(2, 7)楼@natural(1,100)架@natural(0, 100)'
          			}],
          			// 书本链接
          			bookUrl:[{
          				doubanUrl:'@url()',
          				zhihuUrl:'@url()'
          			}],
          			// 书本购买链接
          			buyUrl:[{
          				jDUrl:'@url()',
          				DangUrl:'@url()',
          				AmazonUrl:'@url()'
          			}],
          			// 作者介绍
          			ahthorIntro:'@cparagraph(3)',
          			// 书本介绍
          			bookIntro:'@cparagraph(5)',
          			// 书本封面链接
          			cover: '@image(200x280,@color(),png)',
          			// 评分
          			socre:'@natural(0, 5)'
 				}]
         	}]
     });
var res = Mock.mock('http://vtmer.cn/search', {
               // 书的大分类
               'bookclass':[{
                    // 书的详情
                    'bookInfo|20-40':[{
                         // 书名
                         title:'@ctitle(1,5)',
                         // 作者
                         author:'@cname()',
                         // 出版社
                         publish:'@cregion()出版社',
                         // 出版时间
                         publishDate:'@date(yyyy-MM-dd)',
                         // 图书馆详情
                         library:[{
                              // 数目
                              total:'@natural(0, 100)',
                              // 位置
                              position:'@natural(2, 7)楼@natural(1,100)架@natural(0, 100)'
                         }],
                         // 书本链接
                         bookUrl:[{
                              doubanUrl:'@url()',
                              zhihuUrl:'@url()'
                         }],
                         // 书本购买链接
                         buyUrl:[{
                              jDUrl:'@url()',
                              DangUrl:'@url()',
                              AmazonUrl:'@url()'
                         }],
                         // 作者介绍
                         ahthorIntro:'@cparagraph(3)',
                         // 书本介绍
                         bookIntro:'@cparagraph(5)',
                         // 书本封面链接
                         cover: '@image(200x280,@color(),png)',
                         // 评分
                         socre:'@natural(0, 5)'
                    }]
     }]
 
});
     Mock.mock('http://vtmer.cn/search', 'get',()=> {
      return {
           list: res,
           total:res.length
      }
 })