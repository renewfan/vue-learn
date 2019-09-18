export default {
  changecity (state, cityname) {
    // 修改城市
    state.city = cityname
    try {
      // 更改后存入缓存
      if (localStorage) {
        localStorage.city = cityname
      }
    } catch (e) {
      alert(e)
    }
  }
}
