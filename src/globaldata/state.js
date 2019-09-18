let defaultcity = '北京'
try {
  // 先取缓存数据
  if (localStorage) {
    defaultcity = localStorage.city
  }
} catch (e) {
  alert(e)
}

export default {
  city: defaultcity
}
