<template>
  <div class="container">
    <Modal
      v-model="modal1"
      title="普通的Modal对话框标题"
      @on-ok="ok"
      @on-cancel="cancel">
      <p>对话框内容</p>
      <p>对话框内容</p>
      <p>对话框内容</p>
    </Modal>
    <Row type="flex">
      <Col span="18">
      <Card class="content-item">
        <div style="text-align:left">
          <!--<img src="../../static/logo.jpg">-->
          <h3>Nodejs</h3>
          <p>
            Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.
          </p>
        </div>
      </Card>
      <Card class="content-item">
        <div style="text-align:left">
          <!--<img src="../../static/logo.jpg">-->
          <h3>一套基于 Vue.js 的高质量UI组件库</h3>
          <p>
            iView 是一套基于 Vue.js 的开源 UI 组件库，主要服务于 PC 界面的中后台产品。
            iView 是一套基于 Vue.js 的开源 UI 组件库，主要服务于 PC 界面的中后台产品。
            iView 是一套基于 Vue.js 的开源 UI 组件库，主要服务于 PC 界面的中后台产品。
            iView 是一套基于 Vue.js 的开源 UI 组件库，主要服务于 PC 界面的中后台产品。
          </p>
          <div style="display: flex;flex-direction: row;justify-content: flex-end;padding: 8px;align-items: center">
            <span style="font-size: 16px;margin-right: 16px">
              <Icon type="ios-heart-outline" style="margin-right: 4px"></Icon>28
            </span>
            <span style="font-size: 16px;font-size: 17px">
            <Icon type="ios-chatbubble-outline" style="margin-right: 4px"></Icon>16
            </span>

          </div>
        </div>
      </Card>
      <Card class="content-item">
        <div style="text-align:left">
          <!--<img src="../../static/logo.jpg">-->
            <h2>《敬畏生命》</h2>
            <span style="color: #bdbdbd;margin-left: 2em">作者:毕淑敏</span>

            <p>我是一个生命，生命的意愿是生存，在生命的中途，她愿意活着。</p>
            <p>在我的生命意识中，带着对毁灭和痛苦的惧怕，渴望着更广阔的生存和快乐；我的周遭围绕着同样的生命意识，无论她在我面前表达自己还是保持沉默。</p>
            <p>生命意识到处展现，在我自身也是同样。如果我是一个有思维的生命，我必须以同等的敬畏来尊敬其他生命，而不仅仅限于自我小圈子，因为我明白：她深深地渴望圆满和发展的意愿，跟我是一模一样的。所以，我认为毁灭、妨碍、阻止生命是极其恶劣的。</p>
            <p>尊敬生命，在实际上和精神上两个方面，我都保持真实。根据同样的理由，尽我所能，挽救和保护生命达到她的高度发展，是尽善尽美的。</p>
            <p>在我内部，生命意识懂得了其他的生命意识。她渴望透过自身达到整合，成为一个整体。我只能坚持这样一个事实，生命意识透过我展示了她自己：成为与其他生命意识相互依存的一员。</p>
            <p>我经验过向一切生命意识表达同等敬畏的不可遏止的冲动，如同尊敬自身的一样。通过这种经验形成了我的伦理观。一个人遵从这种冲动，去帮助所有他能够帮助的生命，并且畏惧伤害任何活着的生灵，这个人才是符合伦理的。</p>
            <p>如果我把一个昆虫从泥坑救出来，我的生命对另一个生命做出贡献，那么对立于生命自身的生命分隔现象就消失了。</p>
            <p>不论何时不论何种方式，我的生命对另一个生命贡献出他自身，我的生命意识就经历了一个从有限到无限的融合的愿望，在这个愿望中，所有的生命是一个整体。
            绝对伦理要求在生命中创造完美。她不可能完全实现；这一点倒无所谓。对生命敬畏的感觉是绝对的伦理。它使生命序列的保持和提升顺利运作。</p>
            <p>不论在什么情况下，毁灭和伤害生命都如同恶魔一样有罪。在实践中，我们真的被迫选择。我们经常必须武断地决定何种形式的生命，甚至何种特殊的人，我们应该挽救，何种我们应该毁灭。尽管如此，敬畏生命的原则仍然是完整的和毋庸置疑的。
            　　这种伦理并不因为人们的伦理观抵触现象而失效，农民在牧场割草喂牛割下了一千棵花，可是他必须注意，在回家的路上，不要因为沉浸在消遣心情里而划掉路旁的花朵，因为这样做是不必要，是对生命犯下罪行。
            </p>
        </div>
      </Card>
      </Col>
      <Col span="6" class="container-right">
      <Card class="item-right">
        <div style="display: flex;flex-direction: column;align-items: flex-start">
          <h3>文章分类</h3>
          <ul>
            <li v-for="(item, index) in categories">
              <a>{{index+1}}.{{item.name}} ({{item.count}})</a>
            </li>
          </ul>
        </div>
      </Card>
      <Card class="item-right">
        <div style="display: flex;flex-direction: row;color: #e84e40;align-items: center;font-size: 16px">
          <Icon type="fireball" color="#e84e40" size="20"></Icon>&nbsp;&nbsp;Hot Tags
        </div>
        <div class="hotTagContainer">
          <Tag checkable color="blue">Nodejs</Tag>
          <Tag checkable color="green">HTML</Tag>
          <Tag checkable color="red">CSS</Tag>
          <Tag checkable color="yellow">JAVA</Tag>
          <Tag checkable color="green">Python</Tag>
          <Tag checkable color="blue">Redis</Tag>
          <Tag checkable color="red">Mongodb</Tag>
          <Tag checkable color="blue">Nodejs</Tag>
          <Tag checkable color="green">HTML</Tag>
          <Tag checkable color="red">CSS</Tag>
          <Tag checkable color="yellow">JAVA</Tag>
          <Tag checkable color="green">Python</Tag>
          <Tag checkable color="blue">Redis</Tag>
          <Tag checkable color="red">Mongodb</Tag>
        </div>
      </Card>
      <Card class="item-right">
      <div style="text-align:center">
        <img src="../../static/weixin_me.jpeg" width="160px">
        <h3>微信扫一扫</h3>
      </div>
      </Card>
      </Col>
    </Row>
  </div>

</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      modal1: false,
      categories: [
         { name: 'Nodejs', count: 22 },
         { name: 'Java', count: 45 },
         { name: 'Python', count: 9 },
         { name: 'Go', count: 23 },
         { name: 'Tomcat', count: 6 },
         { name: 'PHP', count: 11 },
      ],
      hotTags: [
        {},
      ],
    };
  },
  methods: {
    ok() {

    },
    cancel() {

    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}


a {
  color: #2d8cf0;
  font-size: 15px;
  font-weight: 500
}
a:hover{
  font-weight:800;
}
  .container{
    padding: 16px;
  }
  .hotTagContainer{
    display: flex;
    flex-wrap: wrap;
    margin-top: 8px;
  }
  .content-item{
    width: 100%;
    margin: 16px 8px;
  }
  .item-right{
    margin: 16px;
  }
  p{
    text-indent: 2em;
  }
</style>
