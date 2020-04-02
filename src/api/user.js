import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

export function getUserByUserCode(userCode) {
  return request({
    url: '/user/get',
    method: 'get',
    params: {userCode},
    baseURL: '/api'
  })

}

export function registerUser(user) {
  return request({
    url: '/user/add',
    method: 'post',
    data: user,
    baseURL: '/api'
  })

}


