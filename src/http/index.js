import { request } from './request' // 引入axios的封装方法
import api from './common'
export const Login = params => {
  // 用户登陆
  return request('POST', api.login, params)
}
export const music_types = params => {
  // 音乐类型
  return request('GET', api.music_types, params)
}
export const music_songs = params => {
  // 音乐列表
  return request('GET', api.music_songs, params)
}
export const music_singer = params => {
  // 歌手列表
  return request('GET', api.music_singer, params)
}
export const topics = params => {
  // CNode主题首页
  return request('GET', api.topics, params)
}