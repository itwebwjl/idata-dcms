<template>
  <div class="serve-manage">
      <div class="top">
        <el-row type="flex" justify="space-between" align="middle">
          <el-col :span="20">
            <el-input placeholder="请输入内容" v-model="inputVal">
               <span slot="suffix" class="el-icon-search custom" @click="searchFn"></span>
            </el-input>
          </el-col>
          <el-col :span="2">
            <el-dropdown @command="handleCommand">
              <el-button type="primary">
                创建服务
                <i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown" >
                <el-dropdown-item command="a">数据服务</el-dropdown-item>
                <el-dropdown-item command="b">代理服务</el-dropdown-item>
                 <el-dropdown-item command="c">聚合服务</el-dropdown-item>
                <el-dropdown-item command="e">推荐服务</el-dropdown-item>
                <el-dropdown-item command="d">H5 服务</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </el-row>
        <div class="list">
          <div class="item">
            <span class="label-type">专业公司：</span>
            <a href="javascript:;" class="item-type active">全部</a>
            <a href="javascript:;" class="item-type">平安银行</a>
            <a href="javascript:;" class="item-type">平安租赁</a>
          </div>
          <div class="item">
            <span class="label-type">角色：</span>
            <a href="javascript:;" class="item-type active">全部</a>
            <a href="javascript:;" class="item-type">平安银行</a>
            <a href="javascript:;" class="item-type">平安租赁</a>
          </div>
        </div>
      </div>
       <div style="height:16px;background:#ececec"></div>
      <div class="bottom">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column label="服务器名称" >
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
          </el-table-column>
          <el-table-column label="服务类型" >
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
          </el-table-column>
          <el-table-column label="费用" >
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
          </el-table-column>
          <el-table-column label="业务负责人" >
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
          </el-table-column>
          <el-table-column label="服务状态" >
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
          </el-table-column>
          <el-table-column label="审批状态" >
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button type="text" @click="handleDelete(scope.row)">查看详情</el-button>
              <el-button type="text" @click="handleDelete(scope.row)">修改</el-button>
              <el-button type="text" @click="handleDelete(scope.row)">删除</el-button>
              <el-button type="text" @click="handleDelete(scope.row)">关闭服务</el-button>
              <el-button type="text" @click="handleDelete(scope.row)">开启服务</el-button>
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
        inputVal: ""
      };
    },
    created() {},
    methods: {
      searchFn(){
        console.log(123)
      },
      handleCommand(command) {
        console.log(command)
        if(command == 'a') {
          this.$router.push('/serve/createDataServe')
        }
        // this.$message('click on item ' + command);
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
        this.$confirm('确认关闭【产品持有数量】服务吗？','提示',{
          type: 'warning',
          center: true
        }).then(() => {
          
        }).catch((

        ) => {})
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
  .serve-manage {
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
