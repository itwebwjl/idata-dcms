<template>
  <div class="serve-index">
    <el-row type="flex">
      <el-col :span="3">
        <div class="slider">
          <el-menu
            class="sidebar-el-menu"
            background-color="#fff"
            text-color="#99999"
            :default-active="$route.path"
            @open="handleOpen"
            @close="handleClose"
            router
          >
            <template v-for="(item,index) in items">
              <template v-if="item.subs">
                <el-submenu :index="index+''" :key="index">
                  <template slot="title">
                    <i :class="item.icon"></i>
                    <span slot="title">{{ item.title }}</span>
                  </template>

                  <el-menu-item
                    v-for="(subItem,i) in item.subs"
                    :index="subItem.index"
                    :key="i"
                  >{{ subItem.title }}</el-menu-item>
                </el-submenu>
              </template>
              <template v-else>
                <el-menu-item :index="item.index" :key="item.index">
                  <i :class="item.icon"></i>
                  <span slot="title">{{ item.title }}</span>
                </el-menu-item>
              </template>
            </template>
          </el-menu>
        </div>
      </el-col>
      <el-col :span="21">
        <div class="content">
          <div class="el-breadcrumb-wrap">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item
                v-for="(item,index) in routerInfo"
                :key="index"
                :to="{ path: item.src}"
              >{{item.title}}</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <div class="content-box">
            <router-view></router-view>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            icon: "el-icon-monitor",
            index: "1",
            title: "数据服务",
            subs: [
              {
                index: "/serve/serveManage",
                title: "服务管理"
              },
              {
                index: "/serve/createDataServe",
                title: "创建数据服务"
              },
              {
                index: "/serve/serveApprove",
                title: "服务审批"
              },
              {
                index: "/serve/applyApprove",
                title: "申请审批"
              }
            ]
          },
          {
            icon: "el-icon-monitor",
            index: "/serve/controlRecord",
            title: "监控日志"
          },
          {
            icon: "el-icon-monitor",
            index: "3",
            title: "系统管理",
            subs: [
              {
                index: "/serve/userManage",
                title: "用户管理"
              },
              {
                index: "/serve/roleManage",
                title: "角色管理"
              },
              {
                index: "/serve/appManage",
                title: "应用管理"
              },
              {
                index: "/serve/handleRecord",
                title: "操作日志"
              }
            ]
          }
        ]
      };
    },
    watch: {},
    computed: {
      routerInfo() {
        const matched = this.$route.matched;
        console.log(matched);
        const newArr = matched.map(v => {
          // console.log(v.path);
          if (v.path == "" || v.path == "/") {
            return {
              src: "no",
              title: "首页"
            };
          } else {
            return {
              src: v.path,
              title: v.meta.title
            };
          }
        });
        newArr.shift();
        // console.log(newArr)
        return newArr;
      }
    },
    created() {},
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .serve-index {
    height: 100%;
    overflow-y: scroll;
    .slider {
      width: 100%;
      height: 100%;
      background: #fff;
      border-radius: 8px;
    }
    .content {
      margin-left: 30px;
      background-color: #ffffff;
      height: 100%;
    }
  }
</style>
