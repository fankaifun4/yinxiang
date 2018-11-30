var QQMapWX = require('../assets/libs/qqmap-wx-jssdk.min.js')
const app = getApp()
export const getAddress = (cb)=>{
    let qqmapsdk = new QQMapWX({
        key: 'ICYBZ-3YVKU-S52VW-BKGEF-2JOWT-N5FVQ'
    });
    wx.showLoading({
        mask:true
    })
    wx.getLocation({
        success:  res=> {
            var latitude = res.latitude
            var longitude = res.longitude
            qqmapsdk.reverseGeocoder({
                location: {
                    latitude: latitude,
                    longitude: longitude
                },
                success:  ads=> {
                    if (ads.result) {
                        let area = ads.result.ad_info
                        let adress=app.findAreaName(area.province,area.city,area.district)
                        cb&&cb(adress)
                    }
                    wx.hideLoading()
                },
                fail:err=>{
                    wx.hideLoading()
                },
                complete: function(res) {
                    wx.hideLoading()
                }
            })
        }
    })
}