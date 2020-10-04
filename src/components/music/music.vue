<template>
  <el-container>
    <!-- 头部区域 -->
    <el-header>
      <div>
        <img src="../../assets/logo.png" alt @click="toHome" />
        <span>Buling音乐</span>
      </div>
      <el-button type="info" @click="toWelcome">退回</el-button>
    </el-header>
    <el-tabs type="border-card">
      <el-tab-pane label="发现音乐">
        <el-card>
          <el-row>
            <el-col :span="8">
              <!-- 搜索歌曲 -->
              <el-input placeholder="您想要的歌,这里都有哦" v-model="queryInfo.query" clearable>
                <el-button @click="searchMusic" slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </el-col>
          </el-row>

          <!-- 订单列表数据 -->
          <el-table :data="queryInfo.musiclist" border stripe>
            <el-table-column type="index"></el-table-column>
            <el-table-column label="单曲" prop></el-table-column>
            <el-table-column label="歌手" prop></el-table-column>
            <el-table-column label="专辑" prop></el-table-column>
            <el-table-column label="视频MV" prop></el-table-column>
            <el-table-column label="歌词" prop></el-table-column>
            <el-table-column label="歌单" prop></el-table-column>
            <el-table-column label="用户" prop></el-table-column>
          </el-table>
        </el-card>
      </el-tab-pane>

      <el-tab-pane label="我的音乐">
        <el-card>
          <el-row>
            <el-col :span="8">
              <!-- 搜索歌曲 -->
              <el-input placeholder="您想要的歌,都在这里" v-model="queryInfo.query" clearable>
                <el-button @click="searchMusic" slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </el-col>
          </el-row>
        </el-card>
      </el-tab-pane>
      <el-tab-pane label="朋友">
        <el-card>
          <el-row>
            <el-col :span="8">
              <!-- 搜索歌曲 -->
              <el-input placeholder="您想要的朋友,这里都有哦" v-model="friend" clearable>
                <el-button @click="searchMusic" slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </el-col>
          </el-row>
        </el-card>
      </el-tab-pane>
      <el-tab-pane label="音乐人">
        <el-card>
          <el-row>
            <el-col :span="8">
              <!-- 搜索音乐人 -->
              <el-input placeholder="您想要的音乐人,这里都有哦" clearable>
                <el-button @click="searchMusic" slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </el-col>
          </el-row>
        </el-card>
      </el-tab-pane>
    </el-tabs>

    <el-container class="home-container">
      <el-aside class></el-aside>
      <el-main></el-main>
    </el-container>
  </el-container>
</template>


<script>
import axios from "axios"
import $ from 'jquery'

export default {
  data() {
    return {
      queryInfo: {
        // 关键词
        query: "zhangjie",
        // 歌单列表
        musiclist: [],
      },
      friend: "",
      musicurl: "",
      musicCover: "",
      hotComments: [],
      isPlaying: false,
      isShow: false,
      mvUrl: "",
    }
  },
  methods: {
    toWelcome() {
      this.$router.push("/Welcome")
      console.log("页面跳转")
    },
    toHome(){
      this.$router.push('/Home')
    },
    // 歌曲搜索；
    async searchMusic() {
      this.$message.success("正在搜索中，请稍等...")
      var that = this
      const { data: res } = await this.$http.get(
        "music/search?keywords=" + this.queryInfo.query
      )

      console.log(res)

      // axios.get("music/search?keywords=" + this.queryInfo.query).then(
      //   response=>{
      //     let res = response.data
      //     // console.log(res)
      //     // this.$message.waring(res.meta.msg)
      //   }
      // )
      // $.ajax({
      //   url:'/search?keywords='+ this.queryInfo.query,
      //   type:'GET',
      //   dataType: 'application/json',
      //   success: function(res){
      //     console.log(res)
      //   }
      // })

      // if(res.meta.status != 200){
      //   return  this.$message.error(res.meta.msg)
      // }
      // .then(
      //   function (response) {
      //     console.log(response.data);
      //     that.queryInfo.musiclist = response.data.result
      //   },
      //   function (_err) {}
      // )
    },
    // 歌曲播放；
    playMusic(musicId) {
      console.log(musicId)

      // var that = this
      // axios.get("https://autumnfish.cn/song/url?id=" + musicId).then(
      //   function (response) {
      //     // console.log(response.data.data[0].url);
      //     that.musicurl = response.data.data[0].url
      //   },
      //   function (_err) {}
      // )

      // 歌曲背景；
      // axios.get("https://autumnfish.cn/song/detail?ids=" + musicId).then(
      //   function (response) {
      //     console.log(response.data.songs[0].al.picUrl)
      //     that.musicCover = response.data.songs[0].al.picUrl
      //   },
      //   function (_err) {}
      // )
      // 实现图片旋转；

      // 歌曲评论获取；
      // axios.get("https://autumnfish.cn/comment/hot?type=0&id=" + musicId).then(
      //   function (response) {
      //     // console.log(response.data.hotComments);
      //     that.hotComments = response.data.hotComments
      //   },
      //   function (err) {}
      // )
    },
    // 播放
    play: function () {
      this.isPlaying = true
    },
    // 暂停
    pause: function () {
      this.isPlaying = false
    },
    // 播放MV
    playMv: function (mvid) {
      var that = this
      axios.get("mv/url?id=" + mvid).then(
        function (response) {
          console.log(response.data.data.url)
          that.isShow = true
          that.mvUrl = response.data.data.url
        },
        function (err) {}
      )
    },
    hide: function () {
      this.isShow = false
      this.isPlaying = false
    },
  },
  directives: {
    trigger: {
      inserted(el, binging) {
        el.click()
        //$(el).trigger('click')
      },
    },
  },
}
</script>


<style lang="less" scoped>
.home-container {
  height: 100%;
}
.el-header {
  background-color: #4a545a;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #fff;
  font-size: 20px;
  > div {
    display: flex;
    align-items: center;
    img {
      height: 50px;
      margin-left: 20px;
    }
    span {
      margin-left: 15px;
    }
  }
}
</style>