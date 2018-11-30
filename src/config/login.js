//登录接口
import http from './http'
/**
 *
 * @param Fun 需要传入的this
 * @param data 执行参数
 * @returns {Promise<any | never | never>}
 */
const syncFun=(Fun, data)=>{
    return new Promise((reslove,reject)=>{
        Fun.call(wx,{
            ...data,
            success(res){
                reslove(res)
            },
            fail(err){
                reject(err)
            }
        })
    }).then(res=>{
        return res
    }).catch(err=>{
        return err
    })
}

const login  = (headers)=>http.req('/wxapp/public/login',headers).$post()

const login = {
    login(cb){
        syncFun(wx.login).then(res=>{
            this.getUserInfo(res.code,cb)
        })
    },
    /**
     * 获取用户信息函数
     * @param code 登录的code
     * @param cb 回调函数 callback
     */
    getUserInfo(code,cb){
        const _this =this
        syncFun(wx.getUserInfo).then(userInfo=>{
            const iv = userInfo.iv
            const encrypted_data=userInfo.encryptedData
            const signature = userInfo.signature
            const raw_data = userInfo.rawData
            const headers={
                code,
                iv,
                encrypted_data,
                signature,
                raw_data
            }
            wx.setStorageSync('userInfo',userInfo.userInfo)
            wx.removeStorageSync('token')

            /**
             * 登录接口
             * 成功则将token存入缓存
             * 失败则清除token
             */
            login(headers).then(res=>{
                if(res.data && res.code===1){
                    wx.setStorageSync('token',res.data.token)
                    cb && cb(res.data.user)
                }else{
                    wx.showToast({
                        icon:'none',
                        mask:true,
                        title:"登录失败"
                    })
                    wx.removeStorageSync('token')
                    cb && cb(null)
                }
            }).catch(er=>{
                if(er){
                    wx.showToast({
                        icon:'none',
                        mask:true,
                        title:"登录失败"
                    })
                    wx.removeStorageSync('token')
                    cb && cb(null)
                }
            })
        })
    }
}

export default login
