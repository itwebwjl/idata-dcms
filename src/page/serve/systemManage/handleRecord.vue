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
              :default-time="['00:00:00', '23:59:59']"
            ></el-date-picker>
          </el-col>
          <el-col :span="18" align="right">
            <el-input placeholder="请输入关键词搜索">
              <span slot="suffix" class="el-icon-search custom" @click="searchFn"></span>
            </el-input>
          </el-col>
        </el-row>
      </div>
    </div>
    <div style="height:16px;background:#ececec"></div>
    <div class="bottom">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="日志编号">
          <template slot-scope="scope">
            <span>{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="用户名称">
          <template slot-scope="scope">
            <span>{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作菜单">
          <template slot-scope="scope">
            <span>{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作内容">
          <template slot-scope="scope">
            <span>{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作时间">
          <template slot-scope="scope">
            <span>{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="总耗时">
          <template slot-scope="scope">
            <span>{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <!-- <el-table-column label="IP地址">
          <template slot-scope="scope">
            <span>{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="MAC地址">
          <template slot-scope="scope">
            <span>{{ scope.row.date }}</span>
          </template>
        </el-table-column> -->
        <el-table-column label="操作状态">
          <template slot-scope="scope">
              <span>{{ scope.row.name }}</span>
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
  export default {
    data() {
      return {
        currentPage: 2,
        choseData: "",
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
    methods: {
      searchFn(){
        console.log(123)
      },
      addUserFn() {
        this.$router.push("/serve/addRole");
      },
      handleSizeChange() {},
      handleCurrentChange() {}
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
