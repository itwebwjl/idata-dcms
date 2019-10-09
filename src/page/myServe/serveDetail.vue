<template>
  <div class="serve-detail">
    <div class="one">
      <el-row type="flex" justify="space-between" align="middle">
        <el-col :span="12">
          <div class="one-title">持有产品数量</div>
          <el-row>
            <el-col :span="3">
              <p>服务类型：</p>
            </el-col>
            <el-col :span="21">
              <p>接口服务</p>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="3">
              <p>服务描述：</p>
            </el-col>
            <el-col :span="21">
              <p>可查看企业客户持有银行、产险、养老险、租赁等专业公司的产品持有数量。</p>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="3">
              <p>费用：</p>
            </el-col>
            <el-col :span="21">
              <p>￥100.00元/1月</p>
            </el-col>
          </el-row>
          <div class="one-tab">API接口</div>
        </el-col>
        <el-col :span="12" align="right">
          <a class="apply-btn" href="javascript:;">申请使用</a>
        </el-col>
      </el-row>
    </div>
    <div class="two">
      <div class="title">请求信息</div>
      <div class="two-wrap">
        <el-row type="flex" align="middle">
          <el-col :span="12">
            <el-row>
              <el-col :span="3">
                <p>请求方式：</p>
              </el-col>
              <el-col :span="21">
                <p>GET</p>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="3">
                <p>服务地址：</p>
              </el-col>
              <el-col :span="21">
                <p>https://123.sogou.com/</p>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="3">
                <p>请求示例：</p>
              </el-col>
              <el-col :span="21">
                <p>https://api.tdata.cn/tysjk/qyjbxx?keyNo=9cce0780ab7644008b73bc2120479d31&dtype=json&appKey={授权key}</p>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="three">
      <div class="title">请求参数说明</div>
      <div class="table-wrap">
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
        </el-table>
      </div>
    </div>
    <div class="four">
      <div class="title">返回参数说明</div>
      <div class="table-wrap">
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
        </el-table>
      </div>
    </div>
    <div class="five">
      <div class="title">返回参数示例</div>
      <div class="table-wrap">123123</div>
    </div>
    <div class="six">
      <div class="title">下发审批结论</div>
      <div class="table-wrap">
        <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="审批结论:">
            <el-select v-model="ruleForm.region" placeholder>
              <el-option label="审批通过" value="shanghai"></el-option>
              <el-option label="中信银行" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="审批意见:">
            <el-input
              type="textarea"
              :autosize="{ minRows: 4, maxRows:6}"
              placeholder="请输入审批意见"
              v-model="ruleForm.region"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
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
        ruleForm: {
          name: "",
          region: "shanghai",
          date1: "",
          date2: "",
          delivery: false,
          type: [],
          resource: "",
          radio: "1"
        }
      };
    }
  };
</script>

<style lang="scss" scoped>
  .serve-detail {
    .title {
      height: 40px;
      line-height: 40px;
      border-bottom: 1px solid #ececec;
      text-indent: 30px;
    }
    .one {
      background-color: #fff;
      padding: 16px 30px 12px 30px;
      .one-title {
        padding: 15px 0;
      }
      p {
        color: #666666;
        font-size: 14px;
        padding-bottom: 13px;
        white-space: nowrap;
      }
      .one-tab {
        color: #ff7635;
        position: relative;
        &::after {
          content: "";
          position: absolute;
          bottom: -12px;
          left: 0;
          width: 61px;
          height: 2px;
          background-color: #ff7635;
        }
      }
      .apply-btn {
        display: inline-block;
        width: 120px;
        height: 36px;
        line-height: 36px;
        text-align: center;
        border-radius: 4px;
        border: solid 1px #ff7635;
        color: #ff7635;
      }
    }
    .two {
      margin-top: 16px;
      background-color: #fff;
      .two-wrap {
        padding: 16px 30px 12px 30px;
        p {
          color: #666666;
          font-size: 14px;
          padding-bottom: 13px;
          white-space: nowrap;
        }
      }
    }
    .three {
      margin-top: 16px;
      background-color: #fff;
      .table-wrap {
        padding: 30px 20px;
      }
    }
    .four {
      margin-top: 16px;
      background-color: #fff;
      .table-wrap {
        padding: 30px 20px;
      }
    }
    .five {
      margin-top: 16px;
      background-color: #fff;
    }
    .six {
      margin-top: 16px;
      background-color: #fff;
      .table-wrap {
        padding: 30px 20px;
      }
    }
  }
</style>
