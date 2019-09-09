<template>
<div>
  <Header></Header>
  <section id="iss-index">
    <el-row>
      <el-col :span="20" :offset="2">
        <!-- index jumbotron start -->
        <section class="index-jumbotron pt-5">
          <el-row class="index-jumbotron-wrapper">
            <div class="iss-title">Welcome! 服務科學研究所</div>
            <div class="main">
              <el-col class="left" :span="12">
                <div class="intro">
                  <p>本所成立於2008年，是全台灣第一個服務科學研究所。本所願景如下：</p>
                  <ul>
                    <li>融合科學、工程、管理以及設計四個領域的專業知識，發展服務科學的研究方法。</li>
                    <li>培養具有科技與人文素養，及服務創新與創業能力的菁英領袖人才。</li>
                    <li>結合學術與產業資源，增進社會福祉與提升國家競爭力。</li>
                    <li>積極參與國際學術社群，成為服務科學學術研究重鎮。</li>
                  </ul>
                </div>
              </el-col>
              <el-col class="right" :span="12">
                <div class="youtube-wrapper">
                  <iframe class="youtube" width="480" height="360" src="https://www.youtube.com/embed/igzJNzurwVQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
              </el-col>
            </div>
          </el-row>
        </section>
        <!-- index jumbotron end -->

        <!-- index modules start -->
        <section class="index-modules">
          <el-card class="modules-card">
            <div class="card-title">服務科學四大模組</div>
            <el-row class="card-row" :gutter="20">
              <el-col class="card-item" :span="6" v-for="(item, index) in modulesCardItems" :key="index+1">
                <div class="item-img">
                  <img :src="item.imgUrl" alt="">
                </div>
                <div class="item-desc">
                  {{ item.desc }}
                </div>
              </el-col>
            </el-row>
          </el-card>
          <!-- <div class="modules-"></div> -->
        </section>
        <!-- index modules end -->
      </el-col>
    </el-row>

    <!-- modules wrapper start -->
    <div class="modules-wrapper"></div>
    <!-- modules wrapper end -->


    <!-- news and events start -->
    <section class="news-and-events-section">
      <el-row class="main">
        <el-col :span="20" :offset="2">
          <p class="news-title">公告暨演講學術活動</p>

          <el-row class="news-card-row" :gutter="30">
            <el-col :span="8" class="news-card-col">
              <el-card class="card-item" :body-style="{ padding: '0px' }" shadow="never">
                <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                <div style="padding: 14px;">
                  <a class="title hyperlink">【招生公告】109學年度「碩⼠班考試⼊學」考試項⽬調整 </a>
                  <div class="bottom clearfix">
                    <span class="digest">seminar talk on June 12(Wed) 12:30 by Prof. Lorna Uden (Faculty of Computing, Engineering, and Science, Staffordshire University). Sincerely invite you to join this event</span>
                    <time class="time">Posted Jul 2, 2019, 11:24 AM</time>
                    <!-- <el-button type="text" class="button">操作按钮</el-button> -->
                  </div>
                </div>
              </el-card>
            </el-col>

            <el-col :span="8" class="news-card-col">
              <el-card class="card-item" :body-style="{ padding: '0px' }" shadow="never">
                <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                <div style="padding: 14px;">
                  <a class="title hyperlink">【招生公告】109學年度「碩⼠班考試⼊學」考試項⽬調整 </a>
                  <div class="bottom clearfix">
                    <span class="digest">seminar talk on June 12(Wed) 12:30 by Prof. Lorna Uden (Faculty of Computing, Engineering, and Science, Staffordshire University). Sincerely invite you to join this event</span>
                    <time class="time">Posted Jul 2, 2019, 11:24 AM</time>
                    <!-- <el-button type="text" class="button">操作按钮</el-button> -->
                  </div>
                </div>
              </el-card>
            </el-col>

            <el-col :span="8" class="news-card-col">
              <el-card class="card-item" :body-style="{ padding: '0px' }" shadow="never">
                <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                <div style="padding: 14px;">
                  <a class="title hyperlink">【招生公告】109學年度「碩⼠班考試⼊學」考試項⽬調整 </a>
                  <div class="bottom clearfix">
                    <span class="digest"></span>
                    <time class="time">Posted Jul 2, 2019, 11:24 AM</time>
                    <!-- <el-button type="text" class="button">操作按钮</el-button> -->
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
          
          <div class="more">
            <span class="text">只顯示最新3則，點我查看更多資訊</span>
          </div>
        </el-col>
      </el-row>
    </section>
    <!-- news and events end -->

    <!--  -->
  </section>
</div>
</template>

<script>
import Header from '@/components/Portal/Header'

export default {
  components: {
    Header  
  },
  data() {
    return {
      modulesCardItems: [{
        imgUrl: '/static/modules/responsive.svg',
        desc: '服務導向資訊科技'
      }, {
        imgUrl: '/static/modules/service.svg',
        desc: '服務行銷與管理'
      }, {
        imgUrl: '/static/modules/layers.svg',
        desc: '服務創新與設計'
      }, {
        imgUrl: '/static/modules/statistics.svg',
        desc: '商業分析'
      }]
    }
  }
}
</script>