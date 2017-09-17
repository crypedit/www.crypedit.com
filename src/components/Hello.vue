<template>
  <div class="hello">
    <vue-particles
      color="#aedede"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="4"
      linesColor="#aedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
    <div id="hello">
      <div>
        <h1>{{ title }}</h1>
        <h2 id="slogan">{{ slogan }}</h2>
        <h2 id="slogan_cn">{{ slogan_cn }}</h2>
      </div>
      <Carousel id="cards"
        autoplay
        :autoplay-speed=5000
        arrow="always">
        <CarouselItem>
          <a href="https://github.com/crypedit/ponzi-TTT">
          <Card style="width:320px" class="card">
            <h3 slot="title">Ponzi TTT</h3>
            <div style="text-align:center">
              <img src="../assets/ponzi-TTT.png">
              <p>基于 Ethereum 的知识分享激励合约</p>
            </div>
          </Card>
          </a>
        </CarouselItem>
        <CarouselItem>
          <a href="https://github.com/crypedit/foundate">
          <Card style="width:320px" class="card">
            <h3 slot="title">Foundate</h3>
            <div style="text-align:center">
              <img src="../assets/foundation.png">
              <p>基于 Ethereum 的规约资助基金合约</p>
            </div>
          </Card>
          </a>
        </CarouselItem>
      </Carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      title: 'crypedit, credit, crypted',
      slogan: 'make trust worthy',
      slogan_cn: '让信任值得'
    }
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}

h1 {
  font-size: 2.3rem;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

#hello {
  height: 100%;
  padding-top: 100px;
  color: #eeeeee;
}

#slogan_cn {
  padding-top: 1rem;
  padding-bottom: 3rem;
}

#slogan {
  font-size: 1.3rem;
}

#cards {
  margin: auto;
  width: 480px;
}

.card {
  margin: 50px auto;
  color: #4f4f4f;
  opacity: .9;
}

#particles-js {
  position: absolute;
  background-size: cover;
  width: 100%;
  height: 100%;
}
</style>
