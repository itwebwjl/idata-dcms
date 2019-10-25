export default {
  filterNull: function (o) {
    for (let key in o) {
      if (o[key] === null) {
        delete o[key]
      }
      if (this.toType(o[key]) === 'string') {
        o[key] = o[key].trim()
      } else if (this.toType(o[key]) === 'object') {
        o[key] = this.filterNull(o[key])
      } else if (this.toType(o[key]) === 'array') {
        o[key] = this.filterNull(o[key])
      }
    }
    return o
  },
  toType: function (obj) {
    return {}.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
  },

}