<template>
  <div id="talk-session-page">
    <content-page-template
      :videoSrc="videoSrc"
      :contentGenre="contentGenre"
      :contentTitle="contentTitle"
      :contentDescriptions="contentDescriptions"
      :isOurs="true"
      :announceSentences="announceSentences"
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
    const contentDescriptions = [
      "プロゲーマーであるすいのこさんと大学でeスポーツの研究をしている筑波大学助教の松井崇先生、早稲田大学客員研究員の渡辺謙さんをお迎えします。「eスポーツから考えるこれかれらのスポーツの在り方」というテーマの下、プロゲーマーと研究者という普段交わる事の少ない人が一堂に会して議論する企画になっています。",
      "本トークセッションのテーマや内容については、オンラインで出演者様とミーティングを重ねる事で詰めていきました。最終的にはeスポーツの研究と社会進出というキーワードに焦点を絞りました。eスポーツを研究するとはどういうことか、eスポーツが今後社会的に認められ浸透していくにはどうすれば良いかと言ったことを話し合います。",
      "是非ご覧ください！"
    ]
    const collaborators = [
      {
        imageSize: 160,
        imageName: 'suinoko.jpg',
        link: 'https://twitter.com/Suinoko0614?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor',
        name: 'すいのこ',
        sentence: 'ウェルプレイド・ライゼスト所属。「大乱闘スマッシュブラザーズSpecial」で活躍する、鹿児島県生まれのプロゲーマー。2020年、「ｅスポーツ選手はなぜ勉強ができるのか～トッププロゲーマーの『賢くなる力』～」（小学館新書）を出版し、eスポーツライターとしても活動中。'
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
    const announceSentences = [
      "※作品はイベント終了後もアーカイブとして",
      "期間を限り閲覧可能にする予定です。"
    ]
    
    return { videoSrc, contentGenre, contentTitle, contentDescriptions, collaborators, announceSentences }
  }
}
</script>
