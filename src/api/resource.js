import request from '@/utils/request'

export function releaseResource(data) {
  return request({
    url: '/api/yanyou/resource/release-resource',
    method: 'post',
    data
  })
}
export function updateResource(data) {
  return request({
    url: '/api/yanyou/resource/update-resource',
    method: 'post',
    data
  })
}
export function getResourceList(data) {
  return request({
    url: '/api/yanyou/resource/resource-list',
    method: 'get',
    params: data
  })
}

export function deleteResource(data) {
  return request({
    url: '/api/yanyou/resource/delete-resource',
    method: 'get',
    params: data
  })
}
