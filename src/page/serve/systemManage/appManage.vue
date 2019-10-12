<template>
  <div class="app-manage">
    <div class="top">
      <div class="one">
        <el-row type="flex" align="bottom">
          <el-col :span="22">
              <el-input placeholder="请输入关键词搜索">
                   <span slot="suffix" class="el-icon-search custom" @click="searchFn"></span>
            </el-input>
          </el-col>
          <el-col :span="2" align="right">
            <el-button type="primary" @click="addAppFn">新增应用</el-button>
          </el-col>
        </el-row>
      </div>
      <div class="list">
        <div class="item">
          <span class="label-type">专业公司：</span>
          <a href="javascript:;" class="item-type active">全部</a>
          <a href="javascript:;" class="item-type">平安银行</a>
          <a href="javascript:;" class="item-type">平安租赁</a>
          <a href="javascript:;" class="item-type">平安产检</a>
          <a href="javascript:;" class="item-type">平安养老险</a>
        </div>
      </div>
    </div>
    <div style="height:16px;background:#ececec"></div>
    <div class="bottom">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="应用ID">
          <template slot-scope="scope">
            <span>{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="应用名称">
          <template slot-scope="scope">
            <span>{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="所属专业公司">
          <template slot-scope="scope">
            <span>{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="text" @click="handleDelete(scope.row)">修改</el-button>
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

    <AddApp ref="AddApp"></AddApp>
  </div>
</template>

<script>
import AddApp from "../../../components/dialog/AddApp.vue";
  export default {
    data() {
      return {
        currentPage: 2,
        tableData: [
          {
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-04",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1517 弄"
          },
          {
            date: "2016-05-01",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1519 弄"
          },
          {
            date: "2016-05-03",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1516 弄"
          }
        ]
      };
    },
    components:{
      AddApp,
    },
    methods:{
      searchFn(){
        console.log('123')
      },
      addAppFn(){
        // console.log(this.$ref)
        this.$refs.AddApp.open()
      },
      handleSizeChange(){

      },
      handleCurrentChange(){

      }
    }
  };
</script>

<style lang="scss" scoped>
  .app-manage {
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
