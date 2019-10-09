<template>
  <div class="apply-approve">
    <div class="top">
      <div class="one">
        <el-row type="flex" align="bottom">
          <el-col :span="24">
            <el-input placeholder="请输入关键词搜索" suffix-icon="el-icon-search"></el-input>
          </el-col>
        </el-row>
      </div>
      <div class="list">
        <div class="item">
          <span class="label-type">服务类型：</span>
          <a href="javascript:;" class="item-type active">全部</a>
          <a href="javascript:;" class="item-type">接口服务</a>
          <a href="javascript:;" class="item-type">推荐服务</a>
          <a href="javascript:;" class="item-type">H5 服务</a>
          <a href="javascript:;" class="item-type">聚合服务</a>
        </div>
        <div class="item">
          <span class="label-type">审批状态：</span>
          <a href="javascript:;" class="item-type active">全部</a>
          <a href="javascript:;" class="item-type">待审批</a>
          <a href="javascript:;" class="item-type">审批通过</a>
          <a href="javascript:;" class="item-type">审批拒绝</a>
        </div>
      </div>
    </div>
    <div style="height:16px;background:#ececec"></div>
    <div class="bottom">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="服务器名称">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="服务类型">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="费用">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="业务负责人">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="服务状态">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="审批状态">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="text" @click="handleCheck(scope.row)">审批</el-button>
            <el-button type="text" @click="handleCheck(scope.row)">查看详情</el-button>
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
    <Approve ref="Approve"></Approve>
  </div>
</template>

<script>
  import Approve from "../../../components/dialog/Approve.vue";
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
    components: {
      Approve
    },
    methods: {
      addUserFn() {},
      handleSizeChange() {},
      handleCurrentChange() {},
      handleCheck() {
        this.$refs.Approve.open();
      }
    }
  };
</script>

<style lang="scss" scoped>
  .apply-approve {
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
