//配置请求加密

const appKey= 876245
const second ="6157faf1efb0a0952ca5b785222568da"
const APPSECRET ="65c9f12e3aefa3af00c4e43451ba3ed9"
const secret= "ie823k8f3ifm3i92m3r9i233rfdw3332"
const appId = 'wxe5b401dca6fb4e28'

/**
 * 老版本加密函数对
 */
import md5 from './md5/md5'
const app=getApp()
function isArray(o) {
    return Object.prototype.toString.call(o) == '[object Array]';
}
function isObjcet(o) {
    return Object.prototype.toString.call(o) == '[object Object]';
}
function isAnther(o){
    return (Object.prototype.toString.call(o) != '[object Array]' && Object.prototype.toString.call(o) != '[object Object]')
}

//设置数组排序
function sortArray(list){
    let ar=[]
    list.sort().forEach(item=>{
        if(isArray(item)){
            ar.push( sortArray(item ) )
        }else if( isObjcet(item) ) {
            ar.push( sortObject(item) )
        }else{
            ar.push( item  )
        }
    })
    return ar.sort()
}
//对象排序
function sortObject(map){
    let list = Object.keys(map).sort()
    let obj={}
    list.forEach(item=>{
        let el = map[item]
        if ( isArray(el) ){
            obj[item]= sortArray(el)
        }else if( isObjcet(el) ){
            obj[item] = sortObject(el)
        }else{
            obj[item] = map[item]
        }
    })
    return obj
}
//排序
function parseInt(obj){
    let objct
    if( isObjcet(obj) ){
        objct=sortObject(obj)
    }else if( isArray(obj) ){
        objct=sortArray(obj)
    }
    return objct
}
//生成数组字符串
function strAr(arg){
    let str=''
    arg.forEach(item=>{
        if (isArray(item)) {
            str += strAr(item) +'&'
        } else if (isObjcet(item)) {
            str += strOb(item)+'&'
        } else {
            str+=item+'&'
        }
    })
    return str
}
//生成对象字符串
function strOb(arg){
    let str=''
    for(let key in arg){
        str+=key+'='
        let item=arg[key]
        if (isArray(item)) {
            str += strAr(item)+'&'
        } else if (isObjcet(item)) {
            str += strOb(item)+'&'
        } else {
            str += item+'&'
        }
    }
    return str
}
//转移对象
function strObject(params){
    let str = ''
    for(let key in params){
        str += key + '='
        let item=params[key]
        if( isArray(item) ){
           str+= strAr(item)+'&'
        }else if( isObjcet(item) ){
           str+= strOb(item)+'&'
        } else{
            str+=item+'&'
        }
    }
    return str
}
//转义数组
function strArray(params){
    let str = ''
    params.forEach(item=> {
        if (isArray(item)) {
            str += strAr(item)+'&'
        } else if (isObjcet(item)) {
            str += strOb(item)+'&'
        } else {
            str += item+'&'
        }
    })
    return str
}
//判断数据类型转字符串
function parseString(arg){
    let str=''
    if (isArray(arg) ){
        str+=strArray(arg)
    }else if( isObjcet(arg) ){
        str+=strObject(arg)
    }
    return str
}

//转字符串
function parseintSign(params){
    //先排序算法
    let isAr = parseInt(params)
    //加密算法
    let isStr = parseString( isAr )
    
    isStr=isStr.replace(/\&{1}$/,'')
    
    //md5
   
    return  md5( isStr )
}

function _getCurrentPage() {
    const pages = getCurrentPages();
    const last = pages.length - 1;
    return pages[last];
}

export  {
    strAr,
    strOb,
    parseInt,
    parseintSign
}
