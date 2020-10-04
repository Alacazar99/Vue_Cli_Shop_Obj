
var app = new Vue({
    el:".wrap",
    data:{
        query:'张杰',
        musiclist:[],
        musicurl:"",
        musicCover:"",
        hotComments:[],
        isPlaying:false,
        isShow:false,
        mvUrl:""
    },
    methods:{
        // 歌曲搜索；
        searchMusic:function(){
            var that = this;
            axios.get("https://autumnfish.cn/search?keywords="+this.query).then(function(response){
                // console.log(response.data.result.songss);
                that.musiclist = response.data.result.songs;
                console.log(response)
                
            },function(_err){})
        },
        // 歌曲播放；
        playMusic:function(musicId){
            console.log(musicId);

            var that = this;
            axios.get("https://autumnfish.cn/song/url?id="+musicId).then(function(response){
                // console.log(response.data.data[0].url);
                that.musicurl = response.data.data[0].url;
            },function(_err){})

            // 歌曲背景；
            axios.get("https://autumnfish.cn/song/detail?ids="+musicId).then(function(response){
                console.log(response.data.songs[0].al.picUrl);
                that.musicCover = response.data.songs[0].al.picUrl;
            },function(_err){})
             // 实现图片旋转；
            
             
            // 歌曲评论获取；
            axios.get("https://autumnfish.cn/comment/hot?type=0&id="+musicId).then(function(response){
                // console.log(response.data.hotComments);
                that.hotComments = response.data.hotComments;
            },function(err){})
        },
        play:function(){
            this.isPlaying = true;
        },
        pause:function(){
            this.isPlaying = false;
        },
        playMv:function(mvid){
            var that = this;
            axios.get("https://autumnfish.cn/mv/url?id="+mvid).then(function(response){
                console.log(response.data.data.url);
                that.isShow = true;
                that.mvUrl = response.data.data.url;

            },function(err){})
        },
        hide:function(){
            this.isShow = false;
            this.isPlaying = false;
        }
        
    },
    directives:{
        trigger:{
         inserted(el,binging){
            el.click();
           //$(el).trigger('click')
          }
       }
    }
})