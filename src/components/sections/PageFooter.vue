<template>
  <section-base
  :isWrapperFull="true"
    class="pagefooter">
    <template #content>
      <div class="footer-bg">
        <box class="page-footer">
          <a href="https://nuink-tsukuba.wixsite.com/innovation-world" target="_blank" rel="noopener noreferrer">
            <img src="../../assets\images\Nu-logo-02.png" class="logo-nuink">
          </a>
            <div>
              <div class="footer-upper">
                <h3 class="right-up-child">筑波大学学生団体 Nu ink.</h3>
                <p class="right-up-child">official website</p>
                <a href="https://twitter.com/NuinkTSUKUBA" target="_blank" rel="noopener noreferrer">
                  <img src="../../assets\images\Twitter-logo.png" class="logos logo-tw" >
                </a>
                <div class="between-logos"></div>
                <a href="https://www.instagram.com/nuinktsukuba/?hl=ja" target="_blank" rel="noopener noreferrer">
                  <img src="../../assets\images\Instagram-logo.png" class="logos ">
                </a>
                <div class="between-logos"></div>
                <a href="https://www.youtube.com/channel/UCCthlOqY7CCTtZ4gzQDvzmg/featured" target="_blank" rel="noopener noreferrer">
                  <img src="../../assets\images\YouTube-logo.png" class="logos logo-yt">
                </a>
                <div class="between-logos"></div>
              </div>
              <div class="description">
                <p>筑波大学とラジオ局J-WAVEが主催する、テクノロジーと音楽のクリエイティブフェス INNOVATION WORLD FESTA (イノフェス)の筑波大学学生運営チーム。普段なら交わらない"人"や"学問"をつないでイノベーションを起こすという目標を掲げて活動中！</p>
              </div>
            </div>
        </box>
      </div>
        <div class="copyright">
          <p>© Nu ink. 20XX. All rights reserved.</p>
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
    text-align: center;
  }
  .footer-upper{
    display: flex;
    margin-top: 30px;
  }
  .right-up-child{
    margin-right: 70px;
  }
  .logo-nuink{
    width: 241px;
    height: 150px;
  }
  .logos{
    width: 30px;
    height: 30px;
  }
  .between-logos{
    margin-right: 20px;
  }
  .logo-tw{
    border-radius: 6px;
    border-color: #fff;
  }
  .logo-yt{
    width: 40px;
    height: 40px;
    margin-top: -4px;
    margin-left: -5px;
  }
  .description{
    width: 650px;
    margin-right: 100px;
    text-align: justify;
  }
  .copyright{
    clear: both;
    text-align: center;
  }
</style>