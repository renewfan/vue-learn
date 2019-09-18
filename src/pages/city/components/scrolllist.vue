<template>
  <div class="list" ref="wrapper">
    <div>
      <!-- 当前城市 -->
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{nowcity}}</div>
          </div>
        </div>
      </div>
      <!-- 热门城市 -->
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hotcities" :key="item.id" @click="tabcityname(item.name)">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <!-- 列表滚动区域 -->
      <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom" v-for="innerItem of item" :key="innerItem.id" @click="tabcityname(innerItem.name)">
            {{innerItem.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 引入 BetterScroll
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'citylist',
  props: {
    hotcities: Array,
    cities: Object,
    letter: String
  },
  computed: {
    ...mapState({
      nowcity: 'city'
    })
  },
  methods: {
    tabcityname (city) {
      this.changecity(city)
      // this.$store.commit('changecity',city)
      this.$router.push('/')
    },
    ...mapMutations(['changecity'])
  },
  watch: {
    // 监听字母变化滚动列表到对应位置
    letter () {
      if (this.letter) {
        // 获取传递的字母对应的城市列表数据的dom元素
        const element = this.$refs[this.letter][0]
        // 滚动到字母对应的城市列表数据的内容区域
        this.scroll.scrollToElement(element)
      }
    }
  },
  mounted () {
    // 实例化 BetterScroll
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/global.styl';

.border-topbottom {
  &:before {
    border-color: #ccc;
  }

  &:after {
    border-color: #ccc;
  }
}

.border-bottom {
  &:before {
    border-color: #ccc;
  }
}

.list {
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;

  .title {
    line-height: 0.54rem;
    background: #eee;
    padding-left: 0.2rem;
    color: #666;
    font-size: 0.26rem;
  }

  .button-list {
    display: flex;
    flex-wrap: wrap;
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;

    .button-wrapper {
      width: 33.33%;

      .button {
        margin: 0.1rem;
        padding: 0.1rem 0;
        text-align: center;
        border: 0.02rem solid #ccc;
        border-radius: 0.06rem;
      }
    }
  }

  .item-list {
    .item {
      line-height: 0.76rem;
      padding-left: 0.2rem;
    }
  }
}
</style>
