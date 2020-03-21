
// 通过axios-mock-adapter生成代理api地址
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import api from '../http/common';
import dataList from './dataList'
let APIHOST = 'https://cnodejs.org/api/v1'
axios.defaults.baseURL = APIHOST
axios.defaults.timeout = 10000
export default {
  init () {
    let mock = new MockAdapter(axios);
    // console.log(mock)
    // 模拟成功请求
    mock.onGet('/success').reply(200, {
      msg: 'success'
    });
    // 模拟失败请求
    mock.onGet('/error').reply(500, {
      msg: 'failure'
    })
    // 登录
    mock.onPost(api.login).reply(config => {
      // 解析axios传过来的数据
      // console.log(config.data)
      let { username, password } = JSON.parse(config.data);
      return new Promise((resolve, reject) => {
        // 先创建一个用户为空对象
        let user = null;
        setTimeout(() => {
          // 判断填写用户账号和密码是否与Mock数据中的所匹配
          let hasUser = dataList.usersInfo.some(item => {
            if (item.username === username && item.password === password) {
              user = JSON.parse(JSON.stringify(item));
              user.password = undefined;
              return true;
            } else {
              return false
            }
          });
          // 判断该用户是否存在并且返回成功或者失败的信息
          if (hasUser) {
            resolve([200, { code: 200, msg: '登录成功', user }]);
          } else {
            resolve([200, { code: 500, msg: '账号错误' }])
          }
        }, 500);
      })
    });
    // 音乐类型
    mock.onGet(api.music_types).reply(config => {
      return new Promise((resolve, reject) => {
        if (config.params) {
          // console.log(config.params)
          resolve([200, { code: 200, msg: 'success', data: dataList.music.types }]);
        } else {
          reject([200, { code: 200, msg: 'failure' }]);
        }
      })
    });
    // 音乐列表
    mock.onGet(api.music_songs).reply(config => {
      return new Promise((resolve, reject) => {
        if (config.params) {
          resolve([200, { code: 200, msg: 'success', data: dataList.music.songs }]);
        } else {
          reject([200, { code: 200, msg: 'failure' }]);
        }
      })
    });
    // 歌手列表
    mock.onGet(api.music_singer).reply(config => {
      return new Promise((resolve, reject) => {
        if (config.params) {
          resolve([200, { code: 200, msg: 'success', data: dataList.music.singer }]);
        } else {
          reject([200, { code: 200, msg: 'failure' }]);
        }
      })
    });

  }
}