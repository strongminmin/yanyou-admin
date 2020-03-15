import request from '@/utils/request'

export function uploadBanner(data) {
  return request({
    url: '/api/yanyou/banner/upload-banner',
    method: 'post',
    data
  })
}

export function deleteBanner(data) {
  return request({
    url: '/api/yanyou/banner/upload-banner',
    method: 'get',
    params: { data }
  })
}
export function getBannerList() {
  return request({
    'url': '/api/yanyou/banner/banner-list',
    method: 'get'
  })
}
