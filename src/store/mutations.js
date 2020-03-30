export default {
  touchText (state, item) {
    item.checked = !item.checked
    item.checked ? state.running++ : state.running--
  },
  changeCard (state, idx) {
    state.bgIndex = idx
  },
  deleteItem (state, idx) {
    if (state.list[idx].checked) {
      state.running--
    }
    state.list.splice(idx, 1)
    state.total--
  },
  addItem (state, title) {
    state.list.push({
      id: ++state.id,
      checked: false,
      title: title
    })
    state.total++
  }
}
