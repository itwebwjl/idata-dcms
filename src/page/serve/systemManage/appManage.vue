<template>
  <div class="app-manage" style="display:flex;flex-direction:column">
    <div class="top">
      <div class="one">
        <el-row type="flex" align="bottom">
          <el-col :span="18">
            <el-input placeholder="请输入关键词搜索" v-model="searchVal" @keyup.enter.native="searchFn">
              <span slot="suffix" class="el-icon-search custom" @click="searchFn"></span>
            </el-input>
          </el-col>
          <el-col :span="3" align="right">
            <el-button type="primary" @click="addAppFn">新增应用</el-button>
          </el-col>
          <el-col :span="3" align="right">
            <el-button type="default" @click="addAppFn">批量导入</el-button>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="bottom">
      <el-table :data="appList" style="width: 100%">
        <el-table-column label="子系统名称">
          <template slot-scope="scope">
            <span>{{ scope.row.applicationName }}</span>
          </template>
        </el-table-column>
        <el-table-column label="所属系统">
          <template slot-scope="scope">
            <span>{{ scope.row.parentName }}</span>
          </template>
        </el-table-column>
        <el-table-column label="归属业务条线">
          <template slot-scope="scope">
            <span>{{ scope.row.homebusinesslineName }}</span>
          </template>
        </el-table-column>
        <el-table-column label="主营业务部门">
          <template slot-scope="scope">
            <span>{{ scope.row.businessleaderName }}</span>
          </template>
        </el-table-column>
        <el-table-column label="业务负责人">
          <template slot-scope="scope">
            <span>{{ scope.row.homebusinesslineName }}</span>
          </template>
        </el-table-column>
        <el-table-column label="开发负责人">
          <template slot-scope="scope">
            <span>{{ scope.row.developerName }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
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
          :current-page="page.pageNumber"
          layout="total,sizes,next,pager,prev,jumper"
          prev-text="上一页"
          next-text="下一页"
          :total="totalElements"
        ></el-pagination>
      </div>
    </div>

    <AddApp ref="AddApp" @action="addFnDone"></AddApp>
  </div>
</template>

<script>
  import service from "../../../axios/index";
  import AddApp from "../../../components/app/AddApp.vue";
  export default {
    data() {
      return {
        searchVal: "",
        currentPage: 1,
        appList: [],
        totalElements: 0,
        page: {
          pageNumber: 1,
          pageSize: 10
        }
      };
    },
    created() {
      this.getAppListfn();
    },
    components: {
      AddApp
    },
    methods: {
      getAppListfn() {
        service.app
          .getAppList({
            pageNumber: this.page.pageNumber,
            pageSize: this.page.pag1eSize,
            applicationName: this.searchVal
          })
          .then(res => {
            if (res) {
              this.appList = res.data.content;
            }
          });
      },
      addFnDone(){
        this.page.pageNumber = 1;
        this.getAppListfn();
      },
      searchFn() {
        this.page.pageNumber = 1;
        this.getAppListfn();
      },
      addAppFn() {
        // console.log(this.$ref)
        this.$refs.AddApp.open();
      },
      handleDelete(val) {
        // console.log(val.applicationId)
        service.app.deleteApp({
          applicationId:val.applicationId
        }).then(res=>{
          if(res.code == 0) {
            this.getAppListfn();
            this.$message({
              type:"success",
              message:"删除应用成功"
            })
          }
        })

      },
      handleSizeChange(val) {
        this.page.pageNumber = 1;
        this.page.pageSize = val;
        this.getAppListfn();
        // console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.page.pageNumber = val;
        this.getAppListfn();
      }
    }
  };
</script>

<style lang="scss" scoped>
  .app-manage {
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
