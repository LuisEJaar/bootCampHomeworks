function filter_list(l) {
    return l.filter( entry => Number.isInteger(entry) )
  }