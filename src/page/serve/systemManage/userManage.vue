<template>
  <div class="user-manage"  style="display:flex;flex-direction:column">
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
        <div class="item" v-for="(item,index) in userManager" :key="index">
          <a
            @click="chooseType(item,subItem,index,subIndex)"
            href="javasript:;"
            :class="{'item-type':subIndex!=0,'label-type':subIndex == 0,'active':subItem.isCho}"
            v-for="(subItem,subIndex) in item "
            :key="subIndex"
          >{{subItem.type||subItem.roleName}}</a>
        </div>
      </div>
    </div>
    <!-- <div style="height:16px;background:#ececec"></div> -->
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
            <el-button
              v-if="scope.row.isEfftctive == '无效'"
              type="text"
              @click="handleChange(scope.row)"
            >启用</el-button>
            <el-button
              v-if="scope.row.isEfftctive == '有效'"
              type="text"
              @click="handleChange(scope.row)"
            >关闭</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页器 -->
      <div class="el-pagination-wrap">
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="page.pageNumber"
          layout="total,sizes,next,pager,prev,jumper"
          prev-text="上一页"
          next-text="下一页"
          :total="totalElements"
        ></el-pagination>
      </div>
    </div>

    <AddUser ref="AddUser" @action="addUserDoneFn"></AddUser>
    <SelectRole
      ref="SelectRole"
      :choseName="choseName"
      :allRole="allRole"
      @action="selectRoleDoneFn"
    ></SelectRole>
  </div>
</template>

<script>
  // import { userManager } from "../../../constans/index";
  import service from "../../../axios/index";
  import SelectRole from "../../../components/user/SelectRole.vue";
  import AddUser from "../../../components/user/AddUser.vue";
  export default {
    data() {
      return {
        searchVal: "",
        userList: [],
        totalElements: 0,
        page: {
          pageNumber: 1,
          pageSize: 10
        },
        // userManager,
        userManager: [],
        choseName: "", //用于分配角色用户名字
        allRole: [],
        effectSymbol: "", // 01有效  02无效
        roleId: "" //筛选的角色Id
      };
    },
    components: {
      AddUser,
      SelectRole
    },
    created() {
      //获取用户列表
      this.getUserListFn();
      this.getRoleAll();
    },
    methods: {
      getUserListFn() {
        service.user
          .userList({
            pageNumber: this.page.pageNumber,
            pageSize: this.page.pageSize,
            keyword: this.searchVal,
            effectSymbol: this.effectSymbol,
            roleId: this.roleId
          })
          .then(res => {
            // console.log(res);
            if (res.code == 0) {
              this.userList = res.data.content;
              if (this.searchVal && !res.data.content) {
                this.$message({
                  type: "success",
                  message: "没有改用户"
                });
              }
            }
          });
      },
      handleChange(val) {
        service.user
          .changeSymbol({
            username: val.username
          })
          .then(res => {
            if (res.code == 0) {
              this.$message({
                type: "success",
                message: "修改状态成功"
              });
              this.getUserListFn();
            }
          });
      },
      // 获取所有角色渲染弹窗下拉及筛选
      getRoleAll() {
        service.role.findAllRole({}).then(res => {
          if (res.code == 0) {
            this.allRole = res.data;
            let arr = res.data
            arr.forEach(e=>{
              e.isCho = false
            })
            let userManager = [
              [
                { type: "状态" },
                { type: "全部", value: "", isCho: true },
                { type: "有效", value: "01", isCho: false },
                { type: "无效", value: "02", isCho: false }
              ],
              [
                { type: "角色：" },
                { type: "全部", value: "", isCho: true },
                ...arr
              ]
            ];
            this.userManager = userManager
            // console.log(userManager)
          }
        });
      },
      chooseType(item, subItem, index, subIndex) {
        if (subIndex) {
          item.forEach(e => {
            e.isCho = false;
          });
          subItem.isCho = true;
          this.userManager[index] = item;
          this.$set(this.userManager, index, item);
        }
        this.effectSymbol =  subItem.value ? subItem.value:"";
        this.roleId = subItem.roleId ? subItem.roleId :"";
        this.getUserListFn();
      },
      handleFenPei(val) {
        this.$refs.SelectRole.open();
        this.choseName = val.username;
      },
      searchFn() {
        this.page.pageNumber = 1;
        this.getUserListFn();
      },
      addUserFn() {
        // console.log(this.$ref)
        this.$refs.AddUser.open();
      },
      // 增加um弹窗
      addUserDoneFn() {
        this.getUserListFn();
      },
      selectRoleDoneFn() {
        this.getUserListFn();
      },
      handleDelete(val) {
        service.user
          .delUserByName({
            username: val.username
          })
          .then(res => {
            if (res.code == 0) {
              this.getUserListFn();
              this.$message({
                type: "success",
                message: "删除成功"
              });
            }
          });
      },
      handleSizeChange(val) {
        this.page.pageNumber = 1;
        this.page.pageSize = val;
        this.getUserListFn();
        // console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.page.pageNumber = val;
        this.getUserListFn();
      }
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
      // height: 100%;
      border-radius: 4px;
      padding: 20px 20px 0 20px;
      background: #fff;
    }
  }
</style>
