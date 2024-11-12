import request from '@/utils/request'
import config from './config'
export function getTalkList(data) {
  return request({
    url: `${config.BASE_URL}/talk/talk-list`,
    method: 'get',
    params: data
  })
}
export function disableTalk(data) {
  return request({
    url: `${config.BASE_URL}/talk/disable-talk`,
    method: 'get',
    params: data
  })
}

export function deleteTalk(data) {
  return request({
    url: `${config.BASE_URL}/talk/delete-talk`,
    method: 'get',
    params: data
  })
}
