<template>
  <div class="login">
    <el-row>
      <div class="title0">平安服务中台</div>
      <el-col :span="24">
        <div class="content">
          <el-form
            label-position="left"
            class="card-box loginform"
            v-loading="login_actions.disabled"
            :element-loading-text="'正在登录...'"
            :model="data"
            :rules="rule_data"
            ref="data"
          >
            <h3 class="title">
              <span>系统登录</span>
            </h3>
            <el-form-item prop="username">
              <el-input type="text" auto-complete="off" placeholder="账号" v-model="data.username"></el-input>
            </el-form-item>

            <el-form-item prop="password">
              <el-input
                type="password"
                auto-complete="off"
                placeholder="密码"
                v-model="data.password"
                @keyup.native.enter="onLogin('data')"
              ></el-input>
            </el-form-item>

            <el-form-item class="btn-group">
              <el-button type="primary" @click="onLogin('data')">登录</el-button>
              <el-button @click="resetForm('data')">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import service from "../axios/index";
  export default {
    data() {
      return {
        login_actions: {
          disabled: false
        },
        data: {
          username: "admin",
          password: "123123"
        },

        rule_data: {
          username: [
            {
              validator: (rule, value, callback) => {
                if (value === "") {
                  callback(new Error("请输入用户名"));
                } else {
                  callback();
                }
              },
              trigger: "blur, change"
            }
          ],
          password: [
            {
              validator: (rule, value, callback) => {
                if (value === "") {
                  callback(new Error("请输入密码"));
                } else {
                  callback();
                }
              },
              trigger: "blur, change"
            }
          ]
        }
      };
    },
    created() {},
    methods: {
      onLogin(ref) {
        service.user
          .securityLogoin({
            username: this.data.username,
            password: this.data.password
          })
          .then(res => {
            if (res.code == 0) {
                sessionStorage.setItem("user",JSON.stringify(res.data))
                this.$message({
                  message:"登录成功",
                  type:"success"
                })
                this.$router.push({
                  path:"/index"
                })
            }
          });
      },
      resetForm(ref) {
        this.$refs[ref].resetFields();
      }
    }
  };
</script>
<style lang="scss" scoped>
  .login {
    background: #191c2c;
    height: 100%;
    width: 100%;
    .title0,
    .title1 {
      position: absolute;
      top: 50%;
      left: 50%;
    }

    .title0,
    .title1 {
      left: 0;
      width: 100%;
      text-align: center;
      color: #2ec0f6;
      font-size: 40px;
      height: 70px;
      line-height: 70px;
      margin: -300px 0 0 0;
      z-index: 1;
    }

    .title1 {
      color: #fff;
      font-size: 20px;
      height: 30px;
      line-height: 30px;
      margin: -230px 0 0 0;
    }

    .cont_0 .title0 {
      opacity: 0;
      margin: -620px 0 0 0;
    }

    .cont_2 .title0 {
      opacity: 0;
      margin: -120px 0 0 0;
    }

    .cont_0 .title1 {
      opacity: 0;
      margin: -450px 0 0 0;
    }

    .cont_2 .title1 {
      opacity: 0;
      margin: 50px 0 0;
    }

    .card-box {
      box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);
      -webkit-border-radius: 5px;
      border-radius: 5px;
      -moz-border-radius: 5px;
      background-clip: padding-box;
      margin-bottom: 20px;
      background-color: #f9fafc;
      border: 2px solid #8492a6;
    }

    .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
      font-weight: normal;
      font-size: 16px;

      span {
        cursor: pointer;

        &.active {
          font-weight: bold;
          font-size: 18px;
        }
      }
    }

    .loginform {
      width: 350px;
      padding: 35px 35px 15px 35px;
      margin: 180px auto;

      .btn-group {
        width: 100%;

        .el-form-item__content {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
      }
    }

    .username {
      width: 48%;
    }

    .email-suffix {
      width: 50%;
    }
  }
</style>
