class LocalCache {
  setCache(key: string, value: any, isLocalStorge: boolean = true) {
    if (isLocalStorge) {
      window.localStorage.setItem(key, JSON.stringify(value))
    } else {
      window.sessionStorage.setItem(key, JSON.stringify(value))
    }
  }

  getCache(key: string, isLocalStorge: boolean = true) {
    if (isLocalStorge) {
      const value = window.localStorage.getItem(key)
      if (value) {
        return JSON.parse(value)
      }
    } else {
      const value = window.sessionStorage.getItem(key)
      if (value) {
        return JSON.parse(value)
      }
    }
  }

  deleteCache(key: string, isLocalStorge: boolean = true) {
    if (isLocalStorge) {
      window.localStorage.removeItem(key)
    } else {
      window.sessionStorage.removeItem(key)
    }
  }

  clearCache(isLocalStorge: boolean = true) {
    if (isLocalStorge) {
      window.localStorage.clear()
    } else {
      window.sessionStorage.clear()
    }
  }
}

export default new LocalCache()
