<template>
  <div id="talk-session-page">
    <content-page-template
      :videoSrc="videoSrc"
      :contentGenre="contentGenre"
      :contentTitle="contentTitle"
      :contentDescriptions="contentDescriptions"
    >
      <template #body>
        <collaboration-list :collaborators="collaborators" />
      </template>
    </content-page-template>
  </div>
</template>

<script>
import ContentPageTemplate from '@/components/template/ContentPageTemplate.vue'
import CollaborationList from '@/components/contents/CollaborationList.vue'
export default {
  components: {
    ContentPageTemplate,
    CollaborationList
  },
  setup() {
    const videoSrc = ""
    const contentGenre = "Talk Session"
    const contentTitle = "eスポーツから考えるこれからのスポーツの在り方"
    const contentDescriptions = ["今年度のオリンピックの総括も踏まえ、これからのオリンピックやスポーツ文化がどうあるべきかについて議論する。eスポーツの専門家に加えて、プロeスポーツ選手が一同を介す事で他に見ることのできない議論に注目!"]
    const collaborators = [
      {
        imageSize: 160,
        imageName: 'suinoko.jpg',
        link: 'https://twitter.com/Suinoko0614?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor',
        name: 'すいのこ',
        sentence: '1990年、鹿児島県生まれ。本名・桑元康平。鹿児島大学大学院で焼酎製造学を専攻。卒業後、大手焼酎メーカー勤務を経て2017年に上京、eスポーツのイベント運営等を行うウェルプレイド株式会社に企画職として就職。2019年5月より、同社のスポンサードを受け、「大乱闘スマッシュブラザーズ」シリーズのプロ選手として活動中。'
      },
      {
        imageSize: 160,
        imageName: 'matsui.jpg',
        link: 'https://trios.tsukuba.ac.jp/researcher/0000003690',
        name: '松井 崇',
        sentence: '筑波大学体育系助教。スポーツ科学の研究の一環としてe スポーツの研究に従事。'
      },
      {
        imageSize: 160,
        imageName: 'unknown.png',
        link: 'https://nrid.nii.ac.jp/ja/nrid/1000000900086/',
        name: '渡辺 謙',
        sentence: 'NTTコミュニケーション科学基礎研究研究員を経て現在は早稲田大学理工学術院総合研究所客員研究員を務める。e スポーツに関する研究に従事。'
      }
    ]
    
    return { videoSrc, contentGenre, contentTitle, contentDescriptions, collaborators }
  }
}
</script>
