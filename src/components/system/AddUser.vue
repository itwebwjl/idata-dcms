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
            <el-form-item label="UM号:" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="reset('ruleForm')">取消</el-button>
              <el-button @click="submitForm('ruleForm')">确定</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </el-dialog>
  </div>
</template>

<script>
  import service from "../../axios/index";
  export default {
    data() {
      return {
        centerDialogVisible: false,
        ruleForm: {
          name: ""
        },
        rules: {
          name: [
            { required: true, message: "请输入活动名称", trigger: "blur" },
            { min: 0, max: 10, message: "长度在 0 到 10 个字符", trigger: "blur" }
          ]
        }
      };
    },
    methods: {
      open() {
        this.centerDialogVisible = true;
      },
      submitForm(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            // alert('submit!');
            service.user
              .addUser({
                username: this.ruleForm.name
              })
              .then(res => {
                if (res.code == 0) {
                  this.reset(formName)
                  this.$emit("action");
                }
                // 异常处理直接提示
              });
          } else {
            console.log("error submit!!");
            return false;
          }
        });
      },
      reset(formName) {
        this.centerDialogVisible = false;
        this.$refs[formName].resetFields();
      }
    }
  };
</script>

<style>
</style>
