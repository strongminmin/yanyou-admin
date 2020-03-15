import request from '@/utils/request'

export function getTalkList(data) {
  return request({
    url: '/api/yanyou/talk/talk-list',
    method: 'get',
    params: data
  })
}
export function disableTalk(data) {
  return request({
    url: '/api/yanyou/talk/disable-talk',
    method: 'get',
    params: data
  })
}

export function deleteTalk(data) {
  return request({
    url: '/api/yanyou/talk/delete-talk',
    method: 'get',
    params: data
  })
}
