/*
 * @Author: yuyongxing
 * @Date: 2019-06-21 13:12:50
 * @LastEditors: yuyongxing
 * @LastEditTime: 2020-06-15 14:23:27
 * @Description:
 */
import instance from '@/utils/fetch'

export function loginByUsername(obj) {
  return instance.post(`/apiservice/a/login`, obj)
}

export function logout() {  // 退出
  return instance.post(`/apiservice/a/logout`)
}

export function getUserInfo() { // 侧边栏
  return instance.get(`/apiservice/a/sys/user/menuData`)
}
