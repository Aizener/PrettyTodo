export default {
  progress: state => {
    return Math.floor((state.running * 100 / state.total))
  },
  backgroundColor (state) {
    return state.bgColor[state.bgIndex]
  }
}
