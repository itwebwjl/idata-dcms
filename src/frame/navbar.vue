<template>
  <div class="home">
    <div class="header clearfix">
      <el-row type="flex" align="middle">
        <el-col :span="3">
          <div class="one">平安银行数据服务中台</div>
        </el-col>
        <el-col :span="9">
          <div class="two">
            <el-menu
              :default-active="activeIndex"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
              active-text-color="#ff7635"
              text-color="#333"
            >
              <el-menu-item index="0">
                <span>icon</span> 首页
              </el-menu-item>
              <el-menu-item index="1">我的服务</el-menu-item>
              <el-menu-item index="2">服务管理</el-menu-item>
            </el-menu>
          </div>
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
        activeIndex: sessionStorage.getItem("activeIndex") || '0'
      };
    },
    methods: {
      loginOut(){
        let that = this
        service.user.userLogout({}).then(res=>{
          this.$message({
            message:"退出成功",
            type:"success"
          },()=>{
            that.$router.push('/login')
          })
        })
      },
      handleSelect(key, keyPath) {
        if (key == 0) {
          sessionStorage.setItem("activeIndex", '0')
          this.$router.push("/index");
        } else if (key == 1) {
          sessionStorage.setItem("activeIndex", '1')
          this.$router.push("/myServe");
        } else if (key == 2) {
          sessionStorage.setItem("activeIndex", '2')
          this.$router.push("/serve");
        }
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
      z-index: 999;
      box-shadow: 0px 2px 10px 0px rgba(157, 157, 157, 0.2);

      .one {
        line-height: 80px;
      }

      .two {
        padding-left: 150px;
        height: 80px;

        ul {
          li {
            height: 80px;
          }
        }
      }

      .three {
        // line-height: 80px;
      }

      .four {
        padding-right: 24px;
        line-height: 80px;

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
      padding: 96px 16px 16px 16px;
      border-radius: 4px;
      // height: 99.5%;
      height: 100%;
      overflow-y: scroll;
    }
  }
</style>
