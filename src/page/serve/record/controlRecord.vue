<template>
  <div class="control-record"  style="display:flex;flex-direction:column">
    <div class="top">
      <div class="one">
        <el-row type="flex" align="bottom">
          <el-col :span="22">
            <el-input placeholder="请输入关键词搜索" v-model="searchVal" @keyup.enter.native="searchFn">
              <span slot="suffix" class="el-icon-search custom" @click="searchFn"></span>
            </el-input>
          </el-col>
          <el-col :span="2" align="right">
            <el-button type="primary" @click="addUserFn">导出</el-button>
          </el-col>
        </el-row>
      </div>
      <div class="two">
        <div class="list">
          <div class="item" v-for="(item,index) in controllRecord" :key="index">
            <a
              @click="chooseType(item,subItem,index,subIndex)"
              href="javasript:;"
              :class="{'item-type':subIndex!=0,'label-type':subIndex == 0,'active':subItem.isCho}"
              v-for="(subItem,subIndex) in item "
              :key="subIndex"
            >{{subItem.type}}</a>
          </div>
          <div class="item">
            <span class="label-type">调用日期：</span>
            <span style="margin-right:25px"></span>
            <el-date-picker
              v-model="choseData"
              type="daterange"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              value-format="yyyy-MM-dd"
              @change="choseDataFn"
            ></el-date-picker>
          </div>
        </div>
      </div>
    </div>
    <!-- <div style="height:16px;background:#ececec"></div> -->
    <div class="bottom">
      <el-table :data="monList" style="width: 100%">
        <el-table-column label="日志编号" width="150" type="index"></el-table-column>
        <el-table-column label="应用ID">
          <template slot-scope="scope">
            <span>{{ scope.row.appId }}</span>
          </template>
        </el-table-column>
        <el-table-column label="服务类型">
          <template slot-scope="scope">
            <span>{{ scope.row.serviceType }}</span>
          </template>
        </el-table-column>
        <el-table-column label="服务名称">
          <template slot-scope="scope">
            <span>{{ scope.row.serviceName }}</span>
          </template>
        </el-table-column>
        <el-table-column label="子服务名称">
          <template slot-scope="scope">
            <span>{{ scope.row.serviceName }}</span>
          </template>
        </el-table-column>
        <el-table-column label="费用">
          <template slot-scope="scope">
            <span>{{ scope.row.cost }}</span>
          </template>
        </el-table-column>
        <el-table-column label="调用时间">
          <template slot-scope="scope">
            <span>{{ scope.row.operateTime }}</span>
          </template>
        </el-table-column>
        <el-table-column label="状态">
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
import {controllRecord} from "../../../constans/index"
  import service from "../../../axios/index";
  export default {
    data() {
      return {
        searchVal: "",
        currentPage: 1,
        choseData: "",
        monList: [],
        totalElements: 0,
        // typeList: [
        //   [
        //     { type: "服务类型：" },
        //     { type: "全部", value: 1, isCho: true },
        //     { type: "接口服务", value: 2, isCho: false },
        //     { type: "推荐服务", value: 3, isCho: false },
        //     { type: "H5服务" },
        //     { type: "聚合服务" }
        //   ],
        //   [
        //     { type: "调用类型：" },
        //     { type: "全部", value: 1, isCho: true },
        //     { type: "成功", value: 2, isCho: false },
        //     { type: "失败", value: 3, isCho: false }
        //   ],
        //   [
        //     { type: "费用：" },
        //     { type: "全部", value: 1, isCho: true },
        //     { type: "免费", value: 2, isCho: false },
        //     { type: "收费", value: 3, isCho: false }
        //   ]
        // ],
        controllRecord,
        page: {
          pageNumber: 1,
          pageSize: 10
        }
      };
    },
    created() {
      this.getMonitLogsFn();
    },
    methods: {
      getMonitLogsFn(beginDate="",endDate="") {
        service.log
          .getMonitLogs({
            pageNumber: this.page.pageNumber,
            pageSize: this.page.pageSize,
            keyWord:this.searchVal,
            beginDate,
            endDate,
          })
          .then(res => {
            this.totalElements = res.data.totalElements;
            this.monList = res.data.content;
          });
      },
      chooseType(item, subItem, index, subIndex) {
        if (subIndex) {
          item.forEach(e => {
            e.isCho = false;
          });
          subItem.isCho = true;
          this.controllRecord[index] = item;
          this.$set(this.controllRecord, index, item);
        }
      },
      choseDataFn() {
        // console.log(this.choseData[0], this.choseData[1]);
        this.page.pageNumber = 1;
        this.getMonitLogsFn(this.choseData[0], this.choseData[1]);
      },
      addUserFn() {
        this.$router.push("/serve/addRole");
      },
      searchFn() {
        this.page.pageNumber = 1;
        this.getMonitLogsFn();
      },
      handleSizeChange(val) {
        this.page.pageNumber = 1;
        this.page.pageSize = val;
        this.getMonitLogsFn();
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.page.pageNumber = val;
        this.getMonitLogsFn();
        console.log(`当前 ${val} 页`);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .control-record {
    height: 100%;
    .top {
      padding: 20px 32px;
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
