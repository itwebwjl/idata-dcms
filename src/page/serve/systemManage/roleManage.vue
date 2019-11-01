<template>
  <div class="user-manage"  style="display:flex;flex-direction:column">
    <div class="top">
      <div class="one">
        <el-row type="flex" align="middle">
          <el-col :span="20" align="right">
            <el-input placeholder="请输入关键词搜索" v-model="searchVal" @keyup.enter.native="searchFn">
              <span slot="suffix" class="el-icon-search custom" @click="searchFn"></span>
            </el-input>
          </el-col>
          <el-col :span="4" align="center">
            <el-button type="primary" @click="addUserFn">新增角色</el-button>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- <div style="height:16px;background:#ececec"></div> -->
    <div class="bottom">
      <el-table :data="roleList" style="width: 100%">
        <el-table-column label="角色名称">
          <template slot-scope="scope">
            <span>{{ scope.row.roleName }}</span>
          </template>
        </el-table-column>
        <el-table-column label="角色描述">
          <template slot-scope="scope">
            <span>{{ scope.row.roleDsc }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="text" @click="handleCheck(scope.row)">查看</el-button>
            <el-button type="text" @click="handleEdit(scope.row)">编辑</el-button>
            <el-button type="text" @click="handleDelete(scope.row)">删除</el-button>
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
  </div>
</template>

<script>
  import service from "../../../axios/index";
  export default {
    data() {
      return {
        searchVal: "",
        currentPage: 1,
        choseData: "",
        roleList: [],
        totalElements: 0,
        page: {
          pageNumber: 1,
          pageSize: 10
        }
      };
    },
    created() {
      this.getRoleListFn();
    },
    methods: {
      handleCheck(val) {
        this.$router.push({
          path:"/serve/editRole",
          query:{
            disabled :1,
            roleId:val.roleId, 
          }
        })
      },
      getRoleListFn() {
        service.role
          .getRoleList({
            pageNumber: this.page.pageNumber,
            pageSize: this.page.pageSize,
            roleName: this.searchVal
          })
          .then(res => {
            if (res.code == 0) {
              this.roleList = res.data;
            }
          });
      },
      searchFn() {
        this.page.pageNumber = 1;
        this.getRoleListFn();
      },
      addUserFn() {
        this.$router.push("/serve/editRole");
      },
      handleEdit(val) {
        this.$router.push({
          path: "/serve/editRole",
          query: {
            roleId: val.roleId
          }
        });
      },
      handleDelete(val) {
        this.$confirm("确认删除该角色吗？", "提示", {
          type: "warning",
          center: true
        })
          .then(() => {
            // console.log(val);
            service.role
              .deleteRole({
                roleId: val.roleId
              })
              .then(res => {
                if (res.code == 0) {
                  this.$message({
                    type: "success",
                    message: "删除角色成功"
                  });
                  this.getRoleListFn()
                }
              });
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消删除"
            });
          });
      },
      handleSizeChange() {},
      handleCurrentChange() {}
    }
  };
</script>

<style lang="scss" scoped>
  .user-manage {
    height: 100%;
    .top {
        padding: 32px 20px;
      background: #fff;
      border-radius: 4px;
    }
    .bottom {
      flex: 1;
      margin-top: 20px;
      height: 100%;
      border-radius: 4px;
      padding: 20px 20px 0 20px;
      background: #fff;
    }
  }
</style>
