<template>
  <div class='page-footer'>
    <h1>footer</h1>
    <img src="../../assets\images\Nu-logo-02.png" class="logo-tsukuba">
    <img src="../../assets\images\Nu-logo-02.png" class="logo-nuink">
    <div class="footer-exprein">
      <div style="display: flex;">
        <h3>筑波大学学生団体 Nu ink.</h3>
        <p>official website</p>
      </div>
      <p>筑波大学とラジオ局J-WAVEが主催する、テクノロジーと音楽のクリエイティブフェス INNOVATION WORLD FESTA (イノフェス)の筑波大学学生運営チーム。普段なら交わらない"人"や"学問"をつないでイノベーションを起こすという目標を掲げて活動中！</p>
    </div>
    <div class="copyright">
      <p>© Nu ink. 20XX. All rights reserved.</p>
    </div>
  </div>

</template>

<script>
export default {
  setup() {}
}
</script>

<style scoped lang='scss'>
  .page-footer{
    background: #fff;
    width: 100vw;
    height: 300px;
    color: #000;
  }
  .footer-exprein{
    color: #000;
    width: 50vw;
    float: left;
  }
  .logo-tsukuba{
    width: 20vw;
    float: left;
    
  }
  .logo-nuink{
    width: 20vw;
    float: left;
  }
  .copyright{
    clear: both;
    text-align: center;
  }
</style>