<template>
  <div class="myServe-index">
    <div class="el-breadcrumb-wrap">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">我的服务</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="two">
      <el-button type="primary">+ 申请新服务</el-button>
    </div>
    <div class="three">
      <el-table :data="tableData" style="width: 100%" class="three-tabble">
        <el-table-column label="服务名称">
          <template slot-scope="scope">
            <span>{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="服务地址">
          <template slot-scope="scope">
            <span>{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="申请应用">
          <template slot-scope="scope">
            <span>{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="关联系统">
          <template slot-scope="scope">
            <span>{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="申请时间">
          <template slot-scope="scope">
            <span>{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="状态">
          <template slot-scope="scope">
            <span>{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="状态">
          <template slot-scope="scope">
            <span>{{ scope.row.name}}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="300">
          <template slot-scope="scope">
            <el-row>
              <el-col :span="12">
                <a href="javascsript:;" class="table-btn" @click="handleEdit(scope)">查看服务详情</a>
              </el-col>
              <el-col :span="12">
                <a href="javascsript:;" class="table-btn" @click="checkIdeaFn(scope)">查看审批意见</a>
              </el-col>
            </el-row>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="el-pagination-wrap">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="100"
        layout="total, next,pager,prev"
        prev-text="上一页"
        next-text="下一页"
        :total="400"
      ></el-pagination>
    </div>

    <Approve ref="Approve"></Approve>
  </div>
</template>

<script>
  import Approve from "../../components/dialog/Approve.vue";
  export default {
    data() {
      return {
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
        ],
        currentPage: 1
      };
    },
    components: {
      Approve
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
        this.$router.push("/serveDetail");
      },
      checkIdeaFn(index, row) {
        this.$refs.Approve.open();
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .myServe-index {
    height: 100%;
    background-color: #fff;
    .two {
      background: #fff;
      height: 80px;
      line-height: 80px;
      padding-left: 20px;
    }
    .three {
      .three-tabble {
        padding: 0 20px;
      }
    }
  }
</style>
