<template>
  <div class="create-dataServe"  style="display:flex;flex-direction:column">
    <div class="one-steps">
      <el-steps :active="active" align-center>
        <el-step title="基础信息"></el-step>
        <el-step title="客服端配置"></el-step>
        <!-- <el-step title="代理端配置"></el-step> -->
        <el-step title="数据定义"></el-step>
        <el-step title="安全配置"></el-step>
      </el-steps>
    </div>
    <!-- <div style="height:16px;background:#ececec"></div> -->
    <div class="from-wrap">
      <div v-if="(active==1)">
        <!-- 基础信息 -->
        <el-row type="flex" justify="center">
          <el-col :span="12">
            <el-form
              :model="ruleForm"
              :rules="rules"
              ref="ruleForm"
              label-width="150px"
              class="demo-ruleForm"
            >
              <el-form-item label="服务名称" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
              </el-form-item>
              <el-form-item label="数据源类型" prop="name1">
                <el-select v-model="ruleForm.name1" placeholder="请选择活动区域">
                  <el-option label="SQL" value="shanghai"></el-option>
                  <!-- <el-option label="区域二" value="beijing"></el-option> -->
                </el-select>
              </el-form-item>
              <el-form-item label="服务描述" prop="name2">
                <el-input v-model="ruleForm.name"></el-input>
              </el-form-item>
              <el-form-item label="业务对接人" prop="name3">
                <el-input v-model="ruleForm.name"></el-input>
              </el-form-item>
              <el-form-item label="业务对接人UM号" prop="name4">
                <el-input v-model="ruleForm.name"></el-input>
              </el-form-item>
              <el-form-item label="开发对接人" prop="name5">
                <el-input v-model="ruleForm.name"></el-input>
              </el-form-item>
              <el-form-item label="开发对接人UM号" prop="name6">
                <el-input v-model="ruleForm.name"></el-input>
              </el-form-item>
              <el-form-item label="是否收费" prop="name7">
                <!-- <el-input v-model="ruleForm.name"></el-input> -->
                <el-radio v-model="ruleForm.radio" label="1">免费</el-radio>
                <el-radio v-model="ruleForm.radio" label="2">收费</el-radio>
              </el-form-item>
              <el-form-item>
                <!-- <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>-->

                <el-row>
                  <el-col :span="8">
                    <a href="javascript:;" class="confirm-btn" @click="save1Fn('ruleForm')">保存</a>
                  </el-col>
                  <el-col :span="8">
                    <a href="javascript:;" class="default-btn" @click="nextStep">下一步</a>
                  </el-col>
                </el-row>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
      </div>
      <div v-else-if="(active == 2)">
        <!-- 客户端配置 -->
        <el-row type="flex" justify="center">
          <el-col :span="24">
            <el-form
              :model="ruleForm2"
              :rules="rules2"
              ref="ruleForm2"
              label-width="150px"
              class="demo-ruleForm"
            >
              <el-form-item label="请求方式:" prop="region">
                <el-select v-model="ruleForm2.region" placeholder="请选择请求方式">
                  <el-option label="get" value="shanghai"></el-option>
                  <el-option label="post" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
        <div class="enter-param">
          <el-row type="flex" justify="space-between" align="middle" >
            <el-col :span="2">入口参数说明</el-col>
            <el-col :span="2">
              <a href="javascript:;" class="add-btn">新增参数</a>
            </el-col>
          </el-row>
        </div>
        <div>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column label="参数名">
              <template slot-scope="scope">
                <span>{{ scope.row.date }}</span>
              </template>
            </el-table-column>
            <el-table-column label="参数类型">
              <template slot-scope="scope">
                <span>{{ scope.row.date }}</span>
              </template>
            </el-table-column>
            <el-table-column label="示例值">
              <template slot-scope="scope">
                <span>{{ scope.row.date }}</span>
              </template>
            </el-table-column>
            <el-table-column label="必填">
              <template slot-scope="scope">
                <span>{{ scope.row.date }}</span>
              </template>
            </el-table-column>
            <el-table-column label="优先级">
              <template slot-scope="scope">
                <span>{{ scope.row.date }}</span>
              </template>
            </el-table-column>
            <el-table-column label="参数描述">
              <template slot-scope="scope">
                <span>{{ scope.row.date }}</span>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-row>
                  <el-col :span="12">
                    <a href="javascript:;" class="table-btn" @click="handleEdit(scope)">编辑</a>
                  </el-col>
                  <el-col :span="12">
                    <a href="javascript:;" class="table-btn" @click="handleDelete(scope)">删除</a>
                  </el-col>
                </el-row>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div style="padding: 50px 300px 0 300px">
          <el-row type="flex" justify="center">
            <el-col align="center" :span="8">
              <a href="javascript:;" class="confirm-btn">保存</a>
            </el-col>
            <el-col align="center" :span="8">
              <a href="javascript:;" class="default-btn" @click="preStep">上一步</a>
            </el-col>
            <el-col align="center" :span="8">
              <a href="javascript:;" class="default-btn" @click="nextStep">下一步</a>
            </el-col>
          </el-row>
        </div>
      </div>
      <!-- <div v-else-if="(active == 3)">
        <el-col :span="24">
          <el-form
            :model="ruleForm3"
            :rules="rules3"
            ref="ruleForm3"
            label-width="150px"
            class="demo-ruleForm"
          >
            <el-form-item label="URL:" prop="url">
              <el-select v-model="ruleForm2.url" placeholder="请选择请求方式">
                <el-option label="get" value="shanghai"></el-option>
                <el-option label="post" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="请求方式:" prop="method">
              <el-select v-model="ruleForm2.method" placeholder="请选择请求方式">
                <el-option label="get" value="shanghai"></el-option>
                <el-option label="post" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="超时时间:" prop="time">
              <el-select v-model="ruleForm2.time" placeholder="请选择请求方式">
                <el-option label="get" value="shanghai"></el-option>
                <el-option label="post" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
        </el-col>
        <div>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column label="代理端参数名">
              <template slot-scope="scope">
                <span class="table-description">{{ scope.row.date }}</span>
              </template>
            </el-table-column>
            <el-table-column label="代理端参数位置">
              <template slot-scope="scope">
                <el-dropdown trigger="click">
                  <span class="table-description">
                    {{scope.row.date.time }}
                    <i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item
                      v-for="(item,index) in scope.row.date.list"
                      :key="index"
                    >{{item}}</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </template>
            </el-table-column>
            <el-table-column label="客户端参数名">
              <template slot-scope="scope">
                <span>{{ scope.row.date }}</span>
              </template>
            </el-table-column>
            <el-table-column label="客户端参数类型">
              <template slot-scope="scope">
                <span>{{ scope.row.date }}</span>
              </template>
            </el-table-column>
            <el-table-column label="示例值">
              <template slot-scope="scope">
                <span>{{ scope.row.date }}</span>
              </template>
            </el-table-column>
            <el-table-column label="客户端参数描述">
              <template slot-scope="scope">
                <span>{{ scope.row.date }}</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column label="参数名称">
              <template slot-scope="scope">
                <span>{{ scope.row.date }}</span>
              </template>
            </el-table-column>
            <el-table-column label="参数位置">
              <template slot-scope="scope">
                <span>{{ scope.row.date }}</span>
              </template>
            </el-table-column>
            <el-table-column label="值">
              <template slot-scope="scope">
                <span>{{ scope.row.date }}</span>
              </template>
            </el-table-column>
            <el-table-column label="参数描述">
              <template slot-scope="scope">
                <span>{{ scope.row.date }}</span>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-row>
                  <el-col :span="12">
                    <a href="javascript:;" class="table-btn" @click="handleEdit(scope)">编辑</a>
                  </el-col>
                  <el-col :span="12">
                    <a href="javascript:;" class="table-btn" @click="handleDelete(scope)">删除</a>
                  </el-col>
                </el-row>
              </template>
            </el-table-column>
          </el-table>
          <div style="padding: 50px 300px 0 300px">
            <el-row type="flex" justify="center">
              <el-col align="center" :span="8">
                <a href="javascript:;" class="default-btn" @click="preStep">上一步</a>
              </el-col>
              <el-col align="center" :span="8">
                <a href="javascript:;" class="confirm-btn">保存</a>
              </el-col>
              <el-col align="center" :span="8">
                <a href="javascript:;" class="default-btn" @click="nextStep">下一步</a>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>-->
      <div v-else-if="(active == 3)">
        <!-- 数据定义 -->
        <div>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column label="参数名称">
              <template slot-scope="scope">
                <span class="table-description">{{ scope.row.date }}</span>
              </template>
            </el-table-column>
            <el-table-column label="参数类型">
              <template slot-scope="scope">
                <el-dropdown trigger="click">
                  <span class="table-description">
                    {{scope.row.date.time }}
                    <i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item
                      v-for="(item,index) in scope.row.date.list"
                      :key="index"
                    >{{item}}</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </template>
            </el-table-column>
            <el-table-column label="示例值">
              <template slot-scope="scope">
                <span>{{ scope.row.date }}</span>
              </template>
            </el-table-column>
            <el-table-column label="参数描述">
              <template slot-scope="scope">
                <span>{{ scope.row.date }}</span>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-row>
                  <el-col :span="12">
                    <a href="javascript:;" class="table-btn" @click="handleEdit(scope)">编辑</a>
                  </el-col>
                  <el-col :span="12">
                    <a href="javascript:;" class="table-btn" @click="handleDelete(scope)">添加key</a>
                  </el-col>
                </el-row>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div style="padding: 50px 300px 0 300px">
          <el-row type="flex" justify="center">
            <el-col align="center" :span="8">
              <a href="javascript:;" class="confirm-btn">保存</a>
            </el-col>
            <el-col align="center" :span="8">
              <a href="javascript:;" class="default-btn" @click="preStep">上一步</a>
            </el-col>
            <el-col align="center" :span="8">
              <a href="javascript:;" class="default-btn" @click="nextStep">下一步</a>
            </el-col>
          </el-row>
        </div>
      </div>
      <div v-else-if="(active == 4)">
        <!-- 安全配置 -->
        <el-row type="flex" justify="center">
          <el-col :span="12">
            <el-form
              :model="ruleForm"
              :rules="rules"
              ref="ruleForm"
              label-width="150px"
              class="demo-ruleForm"
            >
              <el-form-item label="SLAT" prop="name">
                <el-input v-model="ruleForm.name" placeholder="请输入签名salt"></el-input>
              </el-form-item>
              <el-form-item label="缓存超时" prop="name">
                <el-row>
                  <el-col :span="20">
                    <el-input v-model="ruleForm.name"></el-input>
                  </el-col>
                  <el-col :span="4" align="right">
                    <el-dropdown>
                      <el-button type="default">
                        秒
                        <i class="el-icon-arrow-down el-icon--right"></i>
                      </el-button>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>黄金糕</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                  </el-col>
                </el-row>
              </el-form-item>
              <el-form-item label="熔断触发阈值：" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
              </el-form-item>
              <el-form-item label prop="name">
                <el-row>
                  <el-col :span="20">
                    <el-input v-model="ruleForm.name"></el-input>
                  </el-col>
                  <el-col :span="4" align="right">
                    <el-dropdown>
                      <el-button type="default">
                        秒
                        <i class="el-icon-arrow-down el-icon--right"></i>
                      </el-button>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>黄金糕</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                  </el-col>
                </el-row>
              </el-form-item>
              <el-form-item label="限流配置" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
              </el-form-item>
              <el-form-item label prop="name">
                <el-row>
                  <el-col :span="20">
                    <el-input v-model="ruleForm.name"></el-input>
                  </el-col>
                  <el-col :span="4" align="right">
                    <el-dropdown>
                      <el-button type="default">
                        秒
                        <i class="el-icon-arrow-down el-icon--right"></i>
                      </el-button>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>黄金糕</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                  </el-col>
                </el-row>
              </el-form-item>
              <el-form-item>
                <el-row>
                  <el-col :span="8">
                    <a href="javascript:;" class="confirm-btn">保存</a>
                  </el-col>
                  <el-col :span="8">
                    <a href="javascript:;" class="default-btn" @click="preStep">上一步</a>
                  </el-col>
                </el-row>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
      </div>
    </div>

    <AddParams ref="AddParams"></AddParams>
  </div>
</template>

<script>
import { saveServicesBaseInfo } from "../../../axios/index";
import AddParams from "../../../components/dialog/AddParams.vue";
  export default {
    data() {
      return {
        active: 1,
        ruleForm: {
          name: "",
          name1:"",
          region: "",
          date1: "",
          date2: "",
          delivery: false,
          type: [],
          resource: "",
          radio: "1"
        },
        rules: {
          name: [
            { required: true, message: "请输入服务名称", trigger: "change" },
            { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "change" }
          ],
          name1: [
            { required: true, message: "请选择数据源类型", trigger: "blur" }
          ],
          name2: [
            { required: true, message: "请输入服务描述", trigger: "change" }
          ],
          name3: [
            { required: true, message: "请输入业务对接人", trigger: "change" }
          ],
          name4: [
            { required: true, message: "请输入业务对接人UM号", trigger: "change" }
          ],
          name5: [
            { required: true, message: "请输入开发对接人姓名", trigger: "change" }
          ],
          name6: [
            { required: true, message: "请输入开发对接人UM号", trigger: "change" }
          ],
          name7: [
            // { required: true, message: "", trigger: "change" }
          ],
        },
        ruleForm2: {
          region: ""
        },
        rules2: {
          region: [
            { required: true, message: "请选择活动区域", trigger: "change" }
          ]
        },
        tableData: [
          {
            date: {
              time: "2016-05-04",
              list: ["123", "321"]
            },
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-04",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1517 弄"
          }
        ],

        ruleForm3: {
          url: "",
          method: "",
          time: ""
        },
        rules3: {
          url: [{ required: true, message: "请选择活动区域", trigger: "change" }],
          method: [
            { required: true, message: "请选择活动区域", trigger: "change" }
          ],
          time: [{ required: true, message: "请选择活动区域", trigger: "change" }]
        }
      };
    },
    components:{
      AddParams
    },
    methods: {
      save1Fn(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            alert("submit!");
          } else {
            console.log("error submit!!");
            return false;
          }
        });
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      preStep() {
        let active = this.active;
        active--;
        this.active = active;
      },
      nextStep() {
        let active = this.active;
        active++;
        this.active = active;
      }
    }
  };
</script>

<style lang="scss" scoped>
  .create-dataServe {
    height: 100%;
    .one-steps {
      background: #fff;
      border-radius: 4px;
      padding: 50px 0 30px 0;
    }
    .from-wrap {
      flex: 1;
      margin-top: 20px;
      border-radius: 4px;
      background: #fff;
      padding: 40px 32px;
      .enter-param {
        height: 55px;
        line-height: 55px;
        border-top: 1px solid #f9f9f9;
        .add-btn {
          display: inline-block;
          width: 95px;
          height: 32px;
          border-radius: 4px;
          border: solid 1px #ff7635;
          text-align: center;
          line-height: 32px;
          color: #ff7635;
        }
      }
    }
  }
</style>
