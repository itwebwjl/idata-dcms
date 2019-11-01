<template>
  <div class="home">
    <div class="header clearfix">
      <el-row type="flex" align="middle">
        <el-col :span="3">平安银行数据服务中台</el-col>
        <el-col :span="9">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            active-text-color="#ff7635"
            text-color="#333"
            router
          >
            <el-menu-item index="/serveList">
               首页
            </el-menu-item>
            <el-menu-item index="/myServe">我的服务</el-menu-item>
            <el-menu-item index="/serve">服务管理</el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="6">
          <div class="three">
            <el-input placeholder="请输入关键词搜索">
              <!-- <slot slot="suffix" class="el-icon-search"></slot> -->
              <span slot="suffix" class="el-icon-search custom" @click="searchFn"></span>
            </el-input>
          </div>
        </el-col>
        <el-col :span="6" align="right">
          <div class="four">
            <img class="logo" src="../assets/imgs/logo.png" alt>
            <span class="welcome">欢迎你，管理员</span>
            <a href="javascript:;" class="loginout" @click="loginOut"></a>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import service from "../axios/index";
  export default {
    data() {
      return {
        activeIndex: this.$route.matched[1].path,
      };
    },
    watch: {
      "$route": function(val) {
        // console.log(val.matched[1].path)
        if (val) {
          this.activeIndex  = val.matched[1].path;
        }
      }
    },
    methods: {
      loginOut() {
        let that = this;
        service.user.userLogout({}).then(res => {
          this.$message(
            {
              message: "退出成功",
              type: "success"
            },
            () => {
              that.$router.push("/login");
            }
          );
        });
      },
      searchFn() {
        console.log(123);
      }
    }
  };
</script>

<style scoped lang="scss">
  .home {
    height: 100%;

    .header {
      position: fixed;
      top: 0;
      width: 100%;
      height: 80px;
      background-color: #fff;
      z-index: 99;
      box-shadow: 0px 2px 10px 0px rgba(157, 157, 157, 0.2);
      .four {
        padding-right: 24px;

        .logo {
          display: inline-block;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          vertical-align: middle;
        }

        .welcome {
          display: inline-block;
          color: #666666;
          margin: 0 40px 0 10px;
          // line-height: 80px;
        }

        .out {
        }
      }
    }

    .content {
      background: #ececec;
      padding: 20px 16px 16px 16px;
      border-radius: 4px;
      padding-top: 100px;
      height: 100%;
      overflow: hidden;
      // overflow-y: scroll;
    }
  }
</style>
