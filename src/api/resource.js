import request from '@/utils/request'
import config from './config'
export function releaseResource(data) {
  return request({
    url: `${config.BASE_URL}/resource/release-resource`,
    method: 'post',
    data
  })
}
export function updateResource(data) {
  return request({
    url: `${config.BASE_URL}/resource/update-resource`,
    method: 'post',
    data
  })
}
export function getResourceList(data) {
  return request({
    url: `${config.BASE_URL}/resource/resource-list`,
    method: 'get',
    params: data
  })
}

export function deleteResource(data) {
  return request({
    url: `${config.BASE_URL}/resource/delete-resource`,
    method: 'get',
    params: data
  })
}
