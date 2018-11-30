// components/addComment/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        addCommentMask: {
            type: Boolean,
            value: false
        }
    },
    
    /**
     * 组件的初始数据
     */
    data: {
        setCommentText:""
    },
    
    ready () {
    },
    /**
     * 组件的方法列表
     */
    methods: {
        /**
         * 缓存评论字符
         */
        setCommentText(e) {
            this.setData({
                commentText: e.detail.value
            })
        },
        Addcomment (e) {
           this.triggerEvent('sendComment',this.data.commentText)
        },
        closeCommentMask(){
            this.setData({
                addCommentMask:false
            })
        }
    }
})
