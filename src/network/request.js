import axios from 'axios'

export function request(config){    //这里用function 而不是用default，因为这里可以导入多个函数
    //1.创建axios的实例
    const instance=axios.create({
      baseURL:'http://152.136.185.210:8000/api/w6',
      timeout:5000,
      header:{

      }
    })

  //2.axios的拦截器
    //2.1 请求拦截
  instance.interceptors.request.use(config => {   //请求拦截   interceptors拦截器
    //console.log(config);
    //1.比如config中一些信息不符合服务器的要求

    //2.比如每次发送网络请求时，都希望在界面中显示一个请求的图标

    //3.某些网络请求（比如登录(token)),必须携带一些特殊的信息

    return config  //拦截后还要return回去，否则下面接收不到
  },err =>{
   // console.log(err);
  })
    //2.2响应拦截
  instance.interceptors.response.use(res=>{   //响应拦截
    //console.log(res);
    return res.data //这里也要拦截之后也要返回去，否则后面接收不到
  },err =>{
    console.log(err);
  })

    //3.发送真正的网络请求
     return instance(config)   //这里只需要return 即可，因为instance就是返回一个Promise，所以这里也不需要new Promise
}

