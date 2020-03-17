import request from '@/utils/request'
import config from './config'
export function uploadBanner(data) {
  return request({
    url: `${config.BASE_URL}/banner/upload-banner`,
    method: 'post',
    data
  })
}

export function deleteBanner(data) {
  return request({
    url: `${config.BASE_URL}/banner/delete-banner`,
    method: 'get',
    params: data
  })
}
export function getBannerList() {
  return request({
    url: `${config.BASE_URL}/banner/banner-list`,
    method: 'get'
  })
}
