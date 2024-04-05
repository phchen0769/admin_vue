import request from '@/utils/request'

/**
 * 获取角色列表数据
 */
export const roleListAPI = () => {
  return request({
    url: '/roles',
    method: 'GET'
  })
}
