<template>
  <div class="handle-record">
    <div class="top">
      <div class="one">
        <el-row type="flex" align="bottom">
          <el-col :span="6">
            <el-date-picker
              v-model="choseData"
              type="daterange"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              value-format="yyyy-MM-dd"
              @change="choseDataFn"
            ></el-date-picker>
          </el-col>
          <el-col :span="18" align="right">
            <el-input placeholder="请输入关键词搜索" v-model="searchVal" @keyup.enter.native="searchFn">
              <span slot="suffix" class="el-icon-search custom" @click="searchFn"></span>
            </el-input>
          </el-col>
        </el-row>
      </div>
    </div>
    <div style="height:16px;background:#ececec"></div>
    <div class="bottom">
      <el-table :data="logList" style="width: 100%">
        <el-table-column label="日志编号" width="150" type="index"></el-table-column>
        <el-table-column label="用户名称">
          <template slot-scope="scope">
            <span>{{ scope.row.username }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作菜单">
          <template slot-scope="scope">
            <span>{{ scope.row.operateMenu }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作内容">
          <template slot-scope="scope">
            <span>{{ scope.row.operateContent }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作时间">
          <template slot-scope="scope">
            <span>{{ scope.row.operateTime }}</span>
          </template>
        </el-table-column>
        <el-table-column label="总耗时">
          <template slot-scope="scope">
            <span>{{ scope.row.consumeTime }}H</span>
          </template>
        </el-table-column>
        <el-table-column label="操作状态">
          <template slot-scope="scope">
            <span>{{ scope.row.operateState }}</span>
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
        logList: [],
        totalElements: 0,
        page: {
          pageNumber: 1,
          pageSize: 10
        }
      };
    },
    created() {
      this.getLogsListFn();
    },
    methods: {
      getLogsListFn() {
        console.log(this.choseData);
        if (!this.choseData) {
          service.log
            .getLogsList({
              pageNumber: this.page.pageNumber,
              pageSize: this.page.pag1eSize,
              content: this.searchVal
            })
            .then(res => {
              this.totalElements = res.data.totalElements;
              if (res.data.content.length != 0) {
                this.logList = res.data.content;
              } else {
                this.logList = res.data.content;
                this.$message({
                  message: "不存在",
                  type: "warning"
                });
              }
            });
        } else {
          service.log
            .getLogsList({
              pageNumber: this.page.pageNumber,
              pageSize: this.page.pageSize,
              content: this.searchVal,
              beginDate: this.choseData[0],
              endDate: this.choseData[1]
            })
            .then(res => {
              this.totalElements = res.data.totalElements;
              if (res.data.content.length != 0) {
                this.logList = res.data.content;
              } else {
                this.logList = res.data.content;
                this.$message({
                  message: "不存在",
                  type: "warning"
                });
              }
            });
        }
      },
      choseDataFn() {
        // console.log(this.choseData[0], this.choseData[1]);
        this.page.pageNumber = 1;
        this.getLogsListFn();
      },
      searchFn() {
        this.page.pageNumber = 1;
        this.getLogsListFn();
      },
      addUserFn() {
        this.$router.push("/serve/addRole");
      },
      handleSizeChange(val) {
        this.page.pageNumber = 1;
        this.page.pageSize = val;
        this.getLogsListFn();
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.page.pageNumber = val;
        this.getLogsListFn();
      }
    }
  };
</script>

<style lang="scss" scoped>
  .handle-record {
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
