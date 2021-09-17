<template>
  <section-base
  :isWrapperFull="true"
    class="pagefooter">
    <template #content>
      <div class="page-footer">
        <img src="../../assets\images\UT-logo_150.png" class="logo-tsukuba">
        <div class="footer-right">
          <img src="../../assets\images\Nu-logo-02.png" class="logo-nuink">
          <div>
            <div class="footer-right-up">
              <h3 class="right-up-child">筑波大学学生団体 Nu ink.</h3>
              <p class="right-up-child">official website</p>
              <img src="../../assets\images\Twitter-logo.png" class="logos right-up-child">
              <img src="../../assets\images\Instagram-logo.png" class="logos right-up-child">
              <img src="../../assets\images\YouTube-logo.png" class="logos right-up-child">
            </div>
            <div class="description">
              <p>筑波大学とラジオ局J-WAVEが主催する、テクノロジーと音楽のクリエイティブフェス INNOVATION WORLD FESTA (イノフェス)の筑波大学学生運営チーム。普段なら交わらない"人"や"学問"をつないでイノベーションを起こすという目標を掲げて活動中！</p>
            </div>
          </div>
        </div>
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
  .page-footer{
    background: #fff;
    height: 300px;
    color: #000;
    padding-top: 50px;
    display: flex;
  }
  .footer-right{
    margin-left: auto;
    color: #000;
    display: flex;
    
  }
  .footer-right-up{
    display: flex;
    margin-top: 30px;
  }
  .right-up-child{
    margin-right: 70px;
  }
  .logo-tsukuba{
    height:100px;
    width: 100px;
    margin-left: 100px;
    margin-top: 20px;
  }
  .logo-nuink{
    width: 241px;
    height: 150px;
  }
  .logos{
    width: 30px;
    height: 30px;
    margin-right: 20px;
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