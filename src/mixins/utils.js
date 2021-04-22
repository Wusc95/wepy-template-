/**
 * 安全地获取嵌套对象的属性
 * 特别注意：为了简化判断流程，undefined 和 null 均返回 undefined
 * @param {object} target - 目标对象
 * @param {string} path - 属性路径
 * @param {any} defaultValue - 默认值
 * @return {any} 目标属性
 */
export function path(target, path, defaultValue) {
  // 判断是否为无值，即 undefined 或者 null
  const isNil = value => value === null || value === undefined
  const value = path
    .split('.')
    .reduce(
      (last, key) => (key && last && !isNil(last[key]) ? last[key] : undefined),
      target
    )

  return isNil(value) ? defaultValue : value
}

// 轻提示
export function toast(title = '', duration = 2500, mask = false, icon = 'none') {
  // 要先隐藏
  wx.hideToast()
  wx.showToast({
    title,
    duration,
    mask,
    icon
  })
}

// 加载提示
export function loading(title = '', mask = true) {
  // 要先隐藏
  wx.hideLoading()
  wx.showLoading({
    title,
    mask
  })
}

// 隐藏加载提示
export function hideLoading() {
  wx.hideLoading()
}

// 判断用户授权情况
// type: 授权类型
/**
 * result的值可能为： undefined、 false、 true
 * undefined： 是用户第一次进入页面中询问用户是否需要开通某功能权限
 * false： 是用户曾经拒绝过选择某功能授权后的情况
 * true： 是用户授权选择某功能权限
 */
export async function checkAuthSetting(type) {
  return new Promise((resolve, reject) => {
    wx.getSetting({
      success(res) {
        // 判断权限是否拒绝，拒绝的话，需要用户点击获取授权
        resolve(res['authSetting']['scope.' + type])
      }
    })
  })
}

// modal
export function showModal(options) {
  return new Promise((resolve, reject) => {
    wx.showModal({
      ...options,
      confirmColor: '#87b178',
      success: resolve,
      fail: reject
    })
  })
}

