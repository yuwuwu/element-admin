<template>
  <div class="sidebar">
    <div class="slde-bcak-log">
      <router-link to='/dashboard'>
        <!-- <img class="imgleft" src="../../../static/icon/logo@3x.png" alt=""> -->
        <h3 class="logo">logo</h3>
      </router-link>
    </div>
    <template>
      <el-menu class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
               mode="vertical">
        <el-submenu v-for="item in menu"
                    :index="item.id"
                    :key="item.id">
          <template slot="title">
            <img
                 :src="'../../../static/icon/'+item.icon+'.png'"
                 alt=""
                 class="side-img">
            {{item.name}}
          </template>
          <el-menu-item class="liDom"
                        v-for="child in item.subMenus"
                        :index="child.id"
                        :key="child.id">
            <router-link class="menu-indent"
                         :to="{path:child.href,query:{keep:'false'}}">
              <span style="display:inline-block;width:160px;">{{child.name}}</span>
            </router-link>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </template>
  </div>
</template>
<script>
export default {
  name: 'SidebarItem',
  data() {
    return {
      // itemArr: ["dade9aee35d24dedb490559e56d07e2b","d3210b7d15034fae9a9fb5f470161952","682c66b633664db18fc69441e70399a4","d2b3a425dee84e8fa76baa5ab5e0fd52","3a5a444a9b41461d8b5f3c820d5dc343","b0a94141fce74d8e8b37c1cdb72bea7b","1abcf1e9a22545159cc5863d54541226"]
    }
  },
  computed: {
    itemArr: function() {
      var arr = []
      for (var i = 0; i < this.menu.length; i++) {
        arr.push(this.menu[i].id)
      }
      return arr
    }
  },
  props: {
    menu: {
      type: Array
    }
  },
  mounted() { },
  methods: {
    show() { }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
.svg-icon {
  margin-right: 10px;
}
.side-span {
  display: inline-block;
  width: 23px;
  // height: 1px;
  text-align: right;
}
.side-img {
  width: 22px;
  margin-bottom: 5px;
  margin-right: 10px;
}
.slde-bcak-log {
  width: 100%;
  height: 50px;

  .logo {
    text-align: center;
    display: block;
    width: 100%;
    height: 50px;
    font-size: 20px;
    color: #eee;
    line-height: 50px;
    text-shadow: 0 -1px 1px #2f323e;
    -moz-text-shadow: 0 -1px 1px #2f323e;
    -webkit-text-shadow: 0 -1px 1px #2f323e;
  }
}
.slde-bcak-log .imgleft {
  width: 190px;
  height: 55px;
}
.slde-bcak-log .imgright {
  width: 145px;
  float: left;
  .titc {
    padding-left: 5px;
    font-family: PingFangSC-Regular;
    margin-top: 10px;
    font-size: 14px;
    color: #ffffff;
    letter-spacing: 0;
  }
  .tite {
    font-family: PingFangSC-Regular;
    line-height: 0px;
    font-size: 0px;
    color: #ffffff;
    letter-spacing: 0;
  }
}
.sidebar {
  width: 190px;
}
.sidebar .el-submenu {
  color: #a5b6c8;
  background-color: #2f323e;
}
.sidebar .el-submenu .el-submenu__title {
  color: #a5b6c8;
}
.el-menu-item,
.el-submenu__title {
  color: #a5b6c8;
  // background-color: #2f323e;
}
.sidebar-container {
  background-color: #545c64 !important;
}

.el-submenu .el-menu .is-active {
  background-color: #6989f3;
}
.el-submenu .el-menu .el-menu-item:hover {
  color: #333;
}

.menu-indent span {
  padding-left: 32px;
}
</style>

