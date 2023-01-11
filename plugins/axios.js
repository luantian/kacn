export default ({ $axios, redirect, route, store }, inject) => {
  $axios.defaults.timeout = 10000;
  // 请求拦截
  $axios.onRequest(config => {
    // const outcome = Math.round(new Date().getTime() / 1000).toString();
    // config.headers.device = 'ios'; //获取系统
    // config.headers.version = '3.0.2'; //获取版本号
    // config.headers.time = outcome; //获取当前时间戳
    // config.headers.sn = '313123333213123'; //获取设备唯一id
    // config.headers.currency = '0'; //默认币钟
    // config.headers.equipment = 'pc'; //获取设备信息
    // config.headers.token = store.state.token; //用户token
    // config.headers.identifier = 'kacn';
    // config.headers.language = 'zh-cn';
    console.log('请求拦截', config);
    return config;
  })
  // 响应拦截
  $axios.onResponse(res => {
    console.log('_______res', res)
    // if(res.data.err === 2 && route.fullPath !== '/login'){
    //     redirect('/login?path='+route.fullPath)
    // }
    console.log('响应拦截', res);
    if (res.status != 200) {
      console.log('服务器出错')
    }

    if (res.status === 200) {
      if (res?.data?.code === 1 ) {
        return res.data
      }
    }

    return res;
  })
  // 错误处理
  $axios.onError(err => {
    //处理
    console.log('错误处理', err);
    return err;
  })
}
