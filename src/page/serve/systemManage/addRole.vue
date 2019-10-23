<template>
  <div class="add-role">
    <el-row type="flex" justify="center">
      <el-col :span="14">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="角色编号:" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="角色类型:" prop="region">
            <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
              <el-option label="平安银行" value="shanghai"></el-option>
              <el-option label="中信银行" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="角色名称:" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="角色描述:" prop="name" placeholder="请输入姓名">
            <el-input
              type="textarea"
              :autosize="{ minRows: 3, maxRows: 5}"
              placeholder="请输入内容"
              v-model="ruleForm.region"
              prop="name"
            ></el-input>
          </el-form-item>
          <el-form-item label="权限分配:" prop="name">
  

            <el-collapse>
              <el-row>
                <el-col :span="6">
                  <div>菜单名称</div>
                </el-col>
                <el-col :span="18" align="right">
                  <div>权限节点</div>
                </el-col>
              </el-row>

              <el-row v-for="(item,i) in 3" :key="i">
                <el-col :span="24">
                  <el-collapse-item>
                    <template slot="title">
                      <el-checkbox
                        :indeterminate="isIndeterminate"
                        v-model="checkAll"
                        @change="handleCheckAllChange"
                      >控制面板</el-checkbox>
                    </template>

                    <el-row>
                      <el-col :span="6" :push="1">
                        <el-checkbox
                          :indeterminate="isIndeterminate"
                          v-model="checkAll"
                          @change="handleCheckAllChange"
                        >首页</el-checkbox>
                      </el-col>
                      <el-col :span="18">
                        <el-checkbox-group
                          v-model="checkedCities"
                          @change="handleCheckedCitiesChange"
                        >
                          <el-checkbox v-for="city in index" :label="city" :key="city">{{city}}</el-checkbox>
                        </el-checkbox-group>
                      </el-col>
                    </el-row>

                    <el-row>
                      <el-col :span="6" :push="1">
                        <el-checkbox
                          :indeterminate="isIndeterminate"
                          v-model="checkAll"
                          @change="handleCheckAllChange"
                        >我的服务</el-checkbox>
                      </el-col>
                      <el-col :span="18">
                        <el-checkbox-group
                          v-model="checkedCities"
                          @change="handleCheckedCitiesChange"
                        >
                          <el-checkbox v-for="city in index" :label="city" :key="city">{{city}}</el-checkbox>
                        </el-checkbox-group>
                      </el-col>
                    </el-row>
                  </el-collapse-item>
                </el-col>
              </el-row>

              
            </el-collapse>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        ruleForm: {
          name: "",
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
            { required: true, message: "请输入活动名称", trigger: "blur" },
            { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
          ],
          region: [
            { required: true, message: "请选择活动区域", trigger: "change" }
          ],
          date1: [
            {
              type: "date",
              required: true,
              message: "请选择日期",
              trigger: "change"
            }
          ],
          date2: [
            {
              type: "date",
              required: true,
              message: "请选择时间",
              trigger: "change"
            }
          ],
          type: [
            {
              type: "array",
              required: true,
              message: "请至少选择一个活动性质",
              trigger: "change"
            }
          ],
          resource: [
            { required: true, message: "请选择活动资源", trigger: "change" }
          ]
        },

        checkAll: false,
        checkedCities: [],
        index: ["服务列表", "申请服务", "查看服务详情"],
        myServe: ["申请列表", "查看审批意见"],
        isIndeterminate: false,

        data: [
          {
            id: 1,
            label: "控制面板",
            children: [
              {
                id: 1 - 1,
                label: "首页",
                children: [
                  {
                    id: 1 - 1 - 1,
                    label: "服务列表"
                  },
                  {
                    id: 1 - 1 - 2,
                    label: "申请服务"
                  },
                  {
                    id: 1 - 1 - 3,
                    label: "申请服务"
                  }
                ]
              },
              {
                id: 1 - 2,
                label: "我的服务",
                children: [
                  {
                    id: 1 - 2 - 1,
                    label: "服务列表"
                  },
                  {
                    id: 1 - 2 - 2,
                    label: "申请服务"
                  },
                  {
                    id: 1 - 2 - 3,
                    label: "申请服务"
                  }
                ]
              }
            ]
          },
          {
            id: 2,
            label: "一级 2",
            children: [
              {
                id: 2 - 1,
                label: "二级 2-1"
              },
              {
                id: 2 - 2,
                label: "二级 2-2"
              }
            ]
          },
          {
            id: 2,
            label: "一级 2",
            children: [
              {
                id: 2 - 1,
                label: "二级 2-1"
              },
              {
                id: 2 - 2,
                label: "二级 2-2"
              }
            ]
          },
          {
            id: 2,
            label: "一级 2",
            children: [
              {
                id: 2 - 1,
                label: "二级 2-1"
              },
              {
                id: 2 - 2,
                label: "二级 2-2"
              }
            ]
          },
          {
            id: 2,
            label: "一级 2",
            children: [
              {
                id: 2 - 1,
                label: "二级 2-1"
              },
              {
                id: 2 - 2,
                label: "二级 2-2"
              }
            ]
          }
        ],
        defaultProps: {
          children: "children",
          label: "label"
        }
      };
    },
    methods: {
      handleCheckAllChange(val) {

        this.checkedCities = val ? this.index : [];
        this.isIndeterminate = false; //true按钮为 - 选项
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.index.length;
        this.isIndeterminate =
          checkedCount > 0 && checkedCount < this.index.length;
      }
    }
  };
</script>

<style lang="scss" scoped>
  .add-role {
    padding: 40px 0;
    height: 100%;
    background: #fff;
    // overflow-y:scroll;
  }
</style>
