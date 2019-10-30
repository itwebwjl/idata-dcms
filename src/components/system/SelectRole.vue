<template>
    <el-dialog title="分配角色" :visible.sync="selectRole">
      <el-row type="flex" justify="center">
        <el-col :span="16">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="分配角色:" prop="role">
              <el-select v-model="ruleForm.role" placeholder="请分配角色">
                <el-option label="管理员" value="shanghai"></el-option>
                <el-option label="超级管理员" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="reset('ruleForm')">取消</el-button>
              <el-button @click="submitForm('ruleForm')">确定</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </el-dialog>
</template>

<script>
  import service from "../../axios/index";
  export default {
    data() {
      return {
        selectRole: false,
        ruleForm: {
          role: ""
        },
        rules: {
          role: [
            { required: true, message: "请输入活动名称", trigger: "blur" },
          ]
        }
      };
    },
    methods: {
      open() {
        this.selectRole = true;
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
        this.selectRole = false;
      }
    }
  };
</script>

<style>
</style>
