let baseUrl = 'http://localhost/'

class $http {
  constructor(url = '', data = {}) {
    this.data = data
    this.API_VERSION = '1.1.1'
    this.url = url.indexOf('http') > -1 ? url : baseUrl + url
    this.$options = {}
  }
  
  options(options) {
    this.$options = {...options}
    return this
  }
  
  $get() {
    return this.$request('GET')
  }
  
  $post() {
    return this.$request('POST')
  }
  
  $request(method) {
    const _this = this
    const token = wx.getStorageSync('token');
    const groupId = wx.getStorageSync('groupId')
    wx.showLoading({
      mask: true
    })
    return new Promise((reslove, reject) => {
      wx.request({
        url: _this.url,
        header: {
          'Cache-Control': 'no-cache',
          'XX-Token': token,
          'XX-Device-Type': 'wxapp',
          'XX-Api-Version': this.API_VERSION,
          'XX-GroupId': groupId,
          ..._this.$options
        },
        method,
        data: {..._this.data},
        success(res) {
          if (res.statusCode === 200) {
            reslove(res.data)
          } else {
            reject(new Error)
          }
        },
        fail(err) {
          reject(err)
        },
        complete() {
          wx.hideLoading()
        }
      })
    })
  }
  
  $upload(files, process,competed) {
    for (let i = 0; i < files.length; i++) {
      this.$uploadIndex(files, i, process,competed)
    }
  }
  
  $uploadIndex(files, index, process,competed) {
    const _this = this
    const token = wx.getStorageSync('token');
    const groupId = wx.getStorageSync('groupId')
    const len = files.length
    let uploadTimer = wx.uploadFile({
      url: _this.url,
      filePath: files[index],
      name: 'file',
      header: {
        'Cache-Control': 'no-cache',
        'XX-Token': token,
        'XX-Device-Type': 'wxapp',
        'XX-Api-Version': this.API_VERSION,
        'XX-GroupId': groupId,
        ..._this.$options
      },
      formData: {
        'user': 'upload'
      },
      success(res) {
        let data = JSON.parse(res.data)
        competed && competed(data, index)
      }
    })
    uploadTimer.onProgressUpdate((res) => {
      process && process(res, index)
    })
  }
}

function $req(url, data) {
  return new $http(url, data)
}

export default {
  $req
}
