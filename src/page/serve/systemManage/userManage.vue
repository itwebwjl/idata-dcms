<template>
  <div class="user-manage">
    <div class="top">
      <div class="one">
        <el-row type="flex" align="bottom">
          <el-col :span="20">
            <el-input placeholder="请输入关键词搜索" v-model="searchVal" @keyup.enter.native="searchFn">
              <span slot="suffix" class="el-icon-search custom" @click="searchFn"></span>
            </el-input>
          </el-col>
          <el-col :span="2" align="center">
            <el-button type="primary" @click="addUserFn">新增用户</el-button>
          </el-col>
          <el-col :span="2" align="center">
            <el-button type="default" @click="addUserFn">批量导入用户</el-button>
          </el-col>
        </el-row>
      </div>
      <div class="list">
        <div class="item">
          <span class="label-type">专业公司：</span>
          <a href="javascript:;" class="item-type active">全部</a>
          <a href="javascript:;" class="item-type">有效</a>
          <a href="javascript:;" class="item-type">无效</a>
        </div>
        <div class="item">
          <span class="label-type">角色：</span>
          <a href="javascript:;" class="item-type active">全部</a>
          <a href="javascript:;" class="item-type">管理员</a>
          <a href="javascript:;" class="item-type">创建者</a>
          <a href="javascript:;" class="item-type">申请者</a>
        </div>
      </div>
    </div>
    <div style="height:16px;background:#ececec"></div>
    <div class="bottom">
      <el-table :data="userList" style="width: 100%">
        <el-table-column label="UM号">
          <template slot-scope="scope">
            <span>{{ scope.row.username }}</span>
          </template>
        </el-table-column>
        <el-table-column label="角色">
          <template slot-scope="scope">
            <span>{{ scope.row.roleName }}</span>
          </template>
        </el-table-column>
        <el-table-column label="姓名">
          <template slot-scope="scope">
            <span>{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="手机号">
          <template slot-scope="scope">
            <span>{{ scope.row.officePhone }}</span>
          </template>
        </el-table-column>
        <el-table-column label="部门">
          <template slot-scope="scope">
            <span>{{ scope.row.department }}</span>
          </template>
        </el-table-column>
        <el-table-column label="状态">
          <template slot-scope="scope">
            <span>{{ scope.row.isEfftctive }}</span>
          </template>
        </el-table-column>
        <el-table-column label="最近操作时间">
          <template slot-scope="scope">
            <span>{{ scope.row.operateTime}}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="text" @click="handleFenPei(scope.row)">分配角色</el-button>
            <el-button type="text" @click="handleDelete(scope.row)">删除</el-button>
            <el-button type="text" @click="handleDelete(scope.row)">启用</el-button>
            <el-button type="text" @click="handleDelete(scope.row)">关闭</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页器 -->
      <div class="el-pagination-wrap">
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, next,pager,prev"
          prev-text="上一页"
          next-text="下一页"
          :total="400"
        ></el-pagination>
      </div>
    </div>

    <AddUser ref="AddUser" @action="addUserDoneFn"></AddUser>
    <SelectRole ref="SelectRole" @action="selectRoleDoneFn"></SelectRole>
    
  </div>
</template>

<script>
  import service from "../../../axios/index";
  import SelectRole from "../../../components/dialog/SelectRole.vue";
  import AddUser from "../../../components/dialog/AddUser.vue";
  export default {
    data() {
      return {
        searchVal: "",
        currentPage: 2,
        userList: [],
        selectRole: true
      };
    },
    components: {
      AddUser,
      SelectRole
    },
    created() {
      //获取用户列表
      this.getUserListFn();
    },
    methods: {
      handleFenPei() {},
      getUserListFn() {
        service.user.userList().then(res => {
          this.userList = res.data.content;
        });
      },
      searchFn() {
        if (this.searchVal != "") {
          service.user
            .findOneByUsername({
              username: this.searchVal
            })
            .then(res => {
              if (res.code == 404) {
                this.$message({
                  message: "不存在该用户"
                });
              } else {
                this.userList = [res.data];
              }
            });
        } else {
          this.$message({
            message: "不能为空",
            type: "warning"
          });
        }
      },
      addUserFn() {
        // console.log(this.$ref)
        this.$refs.AddUser.open();
      },
      // 增加um弹窗
      addUserDoneFn() {
        this.getUserListFn();
      },
      selectRoleDoneFn(){
        
      },
      handleSizeChange() {},
      handleCurrentChange() {},
      handleDelete(row) {
        service.user
          .delUserByName({
            username: row.username
          })
          .then(res => {});
      }
    }
  };
</script>

<style lang="scss" scoped>
  .user-manage {
    height: 100%;
    .top {
      padding: 20px 32px;
      background: #fff;
      border-radius: 4px;
    }
    .bottom {
      height: 100%;
      border-radius: 4px;
      padding: 20px 20px 0 20px;
      background: #fff;
    }
  }
</style>
