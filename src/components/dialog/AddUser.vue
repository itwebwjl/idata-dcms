<template>
  <div>
    <el-dialog title="新增用户" :visible.sync="centerDialogVisible">
      <el-row type="flex" justify="center">
        <el-col :span="16">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <!-- <el-form-item label="用户名:" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="专业公司:" prop="region">
              <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                <el-option label="平安银行" value="shanghai"></el-option>
                <el-option label="中信银行" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="部门:" prop="name">
              <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                <el-option label="信息科技" value="shanghai"></el-option>
                <el-option label="一家科技" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="姓名:" prop="name" placeholder="请输入姓名">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item> -->
            <el-form-item label="UM号:" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <!-- <el-form-item label="密码:" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="确认密码:" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="角色:" prop="name">
              <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                <el-option label="管理员" value="shanghai"></el-option>
                <el-option label="超级管理员" value="beijing"></el-option>
              </el-select>
            </el-form-item> -->
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">取消</el-button>
              <el-button  @click="submitForm('ruleForm')">确定</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        centerDialogVisible: false,
        ruleForm: {
          name: "",
          region: "shanghai",
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
        }
      };
    },
    methods:{
      open(){
        this.centerDialogVisible = true;
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    }
  };
</script>

<style>
</style>
