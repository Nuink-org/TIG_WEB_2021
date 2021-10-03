<template>
  <section-base
    :isWrapperFull="true"
    class="pagefooter"  
  >
    <template #content>
      <div class="footer-bg">
        <box class="page-footer">
          <div>
            <img src="@/assets\images\Nu-logo-02.png" class="logo-nuink">
          </div>
          <div>
            <div class="footer-upper">
              <h3 class="right-up-child">筑波大学学生団体 Nu ink.</h3>
              <div>
                <a class="dist web_link" href="https://nuink-tsukuba.wixsite.com/innovation-world" target="_blank" rel="noopener noreferrer"><p >official website</p> </a>
              </div>
              <div class="dist">
                <a href="https://twitter.com/nuinktsukuba"  target="_blank" rel="noopener noreferrer">
                <img src="@/assets\images\Twitter-logo.png" class="logos logo-tw" >
                </a>
              </div>
              <div class="dist">
                <a href="https://www.instagram.com/nuinktsukuba/?hl=ja" target="_blank" rel="noopener noreferrer">
                  <img src="@/assets\images\Instagram-logo.png" class="logos ">
                </a>
              </div>
              <div >
              <a href="https://www.youtube.com/channel/UCCthlOqY7CCTtZ4gzQDvzmg/featured" target="_blank" rel="noopener noreferrer">
                <img src="@/assets/images/YouTube-logo.png" class="logos logo-yt">
              </a>
              </div>
            </div>
            <div class="description">
              <p>筑波大学とラジオ局J-WAVEが主催する、テクノロジーと音楽のクリエイティブフェス INNOVATION WORLD FESTA (イノフェス)の筑波大学学生運営チーム。普段なら交わらない"人"や"学問"をつないでイノベーションを起こすという目標を掲げて活動中！</p>
            </div>
          </div>
        </box>
        <div class="copyright">
          <p>©2021. Nu ink. All rights reserved.</p>
        </div>
      </div>
    </template>
  </section-base>
</template>

<script>
import SectionBase from '../common/SectionBase.vue'
export default {
  components: { 
    SectionBase 
  }
}
</script>

<style scoped lang='scss'>
  .footer-bg{
    background: #fff;
    height: 300px;
    padding-top: 50px;
  }
  .page-footer{
    color: #000;
    display: inline-flex;
  }
  .footer-upper{
    display: flex;
    padding-top: 50px;
  }
  .right-up-child{
    margin-right: 230px;
  }
  .web_link{
    color: #000;
    text-decoration: none;
    display: block;
    height: 0px;
    background: #f00;
    margin-top: 4px;
  }
  .logo-nuink{
    width: 337px;
    height: 210px;
  }
  .logos{
    width: 30px;
    height: 30px;
    
  }
  .dist{
    margin-right: 25px;
  }
  .logo-tw{
    border-radius: 7px;
    border-color: #fff;
  }
  .logo-yt{
    width: 40px;
    height: 40px;
    margin-top: -4px;
    margin-left: -5px;
  }
  .description{
    width: 750px;
    margin-right: 100px;
    text-align: justify;
    letter-spacing: -0.08em;
  }
  .copyright{
    clear: both;
    text-align: center;
    color: #000;
    margin-top: 10px;
    padding-bottom: 50px;
  }
</style>