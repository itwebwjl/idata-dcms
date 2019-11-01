<template>
  <div class="serve-approve"  style="display:flex;flex-direction:column">
    <div class="top">
      <div class="one">
        <el-row type="flex" align="bottom">
          <el-col :span="24">
            <el-input placeholder="请输入关键词搜索">
              <span slot="suffix" class="el-icon-search custom" @click="searchFn"></span>
            </el-input>
          </el-col>
        </el-row>
      </div>
      <div class="list">
        <div class="item" v-for="(item,index) in serveApprove" :key="index">
          <a
            @click="chooseType(item,subItem,index,subIndex)"
            href="javasript:;"
            :class="{'item-type':subIndex!=0,'label-type':subIndex == 0,'active':subItem.isCho}"
            v-for="(subItem,subIndex) in item "
            :key="subIndex"
          >{{subItem.type}}</a>
        </div>
      </div>
    </div>
    <!-- <div style="height:16px;background:#ececec"></div> -->
    <div class="bottom">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="服务器名称">
          <template slot-scope="scope">
            <span>{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="服务类型">
          <template slot-scope="scope">
            <span>{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="费用">
          <template slot-scope="scope">
            <span>{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="业务负责人">
          <template slot-scope="scope">
            <span>{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="服务状态">
          <template slot-scope="scope">
            <span>{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="审批状态">
          <template slot-scope="scope">
            <span>{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="text" @click="handleCheck(scope.row)">查看详情</el-button>
            <el-button type="text" @click="handleCheck(scope.row)">审批</el-button>
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
  import { serveApprove } from "../../../constans/index";
  export default {
    data() {
      return {
        serveApprove,
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
    components: {},
    methods: {
      chooseType(item, subItem, index, subIndex) {
        if (subIndex) {
          item.forEach(e => {
            e.isCho = false;
          });
          subItem.isCho = true;
          this.serviceList[index] = item;
          this.$set(this.serviceList, index, item);
        }
      },
      searchFn() {
        console.log("123");
      },
      addUserFn() {},
      handleCheck() {},
      handleSizeChange() {},
      handleCurrentChange() {}
    }
  };
</script>

<style lang="scss" scoped>
  .serve-approve {
    height: 100%;
    .top {
      padding: 20px 32px;
      background: #fff;
      border-radius: 4px;
    }
    .bottom {
      flex: 1;
      margin-top: 20px;
      border-radius: 4px;
      padding: 20px 20px 0 20px;
      background: #fff;
    }
  }
</style>
