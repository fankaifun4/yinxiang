// components/areaList/index.js
import {address} from '../../address.js'
const app=getApp()
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        fullIndex:{
           type:Array,
           value:[0,0,3]
        },
        isAll:{
           type:Boolean,
           value:false
        },
        address:{
           type:Object,
           value:{}
        }
    },
    /**
     * 组件的初始数据
     */
    externalClasses: ['picker-class'],
    data: {
        area: address,
        failProvince:{},
        failCity:{},
        failCounty:{},
        fullAreaPicker:[],
        columnItem:{
            id: 0,
            name: "全部"
        }
    },
    //在组件实例进入页面节点树时执行
    attached(){
        //初始化，省市县
        let tpladdress=this.data.area
        let parray = []
        let carray = []
        let tarray = []
        if ( this.data.isAll ){
            parray.push(this.data.columnItem )
            carray.push(this.data.columnItem )
            tarray.push(this.data.columnItem )
        }
        for (let key in tpladdress) {
            let province = {
                id: key,
                name: address[key].name,
                child: address[key].child
            }
            parray.push(province)
        }
      
        let provinceIndex = this.data.fullIndex[0] || 0
        let cityIndex = this.data.fullIndex[1] || 0
        let countyIndex=this.data.fullIndex[2] || 0
        
        this.setData({
            province: parray,
            failProvince: parray[provinceIndex]
        })
        if (parray[provinceIndex].child) {
            for (let key in parray[provinceIndex].child) {
                let item = parray[provinceIndex].child[key]
                let city = {
                    id: key,
                    name: item.name,
                    child: item.child
                }
                carray.push(city)
            }
        }
        this.setData({
            city: carray,
            failCity: carray[cityIndex]
        })

        
        if (carray[cityIndex].child) {
            for (let key in carray[cityIndex].child) {
                let item = carray[cityIndex].child[key]
                let city = {
                    id: key,
                    name: item,
                    child: item.child
                }
                tarray.push(city)
            }
        }
        this.setData({
            county: tarray,
            failCounty: tarray[countyIndex]
        })
        let pro={
            id: this.data.province[provinceIndex].id,
            name: this.data.province[provinceIndex].name
        }
        let pcity={
            id:this.data.city[cityIndex].id,
            name: this.data.city[cityIndex].name
        }
        let pcounty={
            id: this.data.county[countyIndex].id,
            name:this.data.county[countyIndex].name
        }
        this.setData({
            fullAreaPicker: [this.data.province, this.data.city, this.data.county],
            address:{
                province: pro,
                city: pcity,
                county: pcounty,
                fullName: this.data.province[provinceIndex].name + ',' + this.data.city[cityIndex].name + ',' + this.data.county[countyIndex].name
            }
        })
        this.triggerEvent('changeAddress', this.data.address)
    },
    /**
     * 组件的方法列表
     */
    methods: {
        changeFullArea(e) {
            let index = e.detail.value
            let fullAddress = this.data.fullAreaPicker
            let province = {
                id: fullAddress[0][index[0]].id,
                name: fullAddress[0][index[0]].name
            }
            let city = {
                id: fullAddress[1][index[1]].id,
                name: fullAddress[1][index[1]].name
            }
            let county = {
                id: fullAddress[2][index[2]].id,
                name: fullAddress[2][index[2]].name
            }
            let address = {
                province: province,
                city: city,
                county: county,
                fullName: province.name + ',' + city.name + ',' + county.name
            }
            this.setData({
                address: address
            })
            this.triggerEvent('changeAddress', this.data.address)
        },
        changeColum(e){
            let model=e.detail
            let column = model.column
            let value=model.value
            switch (column) {
                case 0:{
                    this.changeProvince(value)
                    break
                }
                case 1: {
                    this.changeCity(value)
                    break
                }
            }
        },
        changeProvince(val){
            let province= this.data.province[val]
            let cityList=[]
            let countyList=[]
            if (this.data.isAll ){
                cityList.push(this.data.columnItem)
                countyList.push(this.data.columnItem)
            }
            if( province.child ){
                for (let key in province.child ){
                    let item = province.child[key]
                    let citys={
                        id:key,
                        name: item.name,
                        child: item.child
                    }
                    cityList.push( citys )
                }
                this.setData({
                    'fullAreaPicker[1]': cityList
                })
                let countys=cityList[0].child
                if (countys ){
                    for (let key in countys ){
                        let item = countys[key]
                        let county={
                            id:key,
                            name: item
                        }
                        countyList.push(county)
                    }
                    this.setData({
                        'fullAreaPicker[2]': countyList
                    })
                }
                this.setData({
                    fullIndex: [val, 0, 0]
                })
            }
            
        },
        changeCity(val){
            let tplCity = this.data.fullAreaPicker[1]
            let city=tplCity[val]
            let countyList=[]
            if (this.data.isAll) {
                countyList.push(this.data.columnItem)
            }
            if( city.child) {
                for(let key in city.child){
                    let item = city.child[key]
                    let county={
                        id:key,
                        name:item
                    }
                    countyList.push( county )
                }
                this.setData({
                    'fullAreaPicker[2]': countyList
                })
                let indexValue = this.data.fullIndex
                indexValue[1] = val
                indexValue[2] = 0
                this.setData({
                    fullIndex: indexValue
                })
            }
        }
    },
    setAddressIndex(val){
    
    }
})
