<template>
    <el-dialog title="分配角色" :visible.sync="selectRole">
      <el-row type="flex" justify="center">
        <el-col :span="16">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="150px"
            class="demo-ruleForm"
          >
            <el-form-item label="分配角色:" prop="roleId">
              <el-select v-model="ruleForm.roleId" placeholder="请分配角色">
                <el-option v-for="(item,index) in allRole"  :key="index" :label="item.roleName" :value="item.roleId"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="resetForm('ruleForm')">取消</el-button>
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
    props:{
      choseName:{
        type:String
      },
      allRole:{
        type:Array,
      }
    },
    data() {
      return {
        selectRole: false,
        ruleForm: {
          roleId: ""
        },
        rules: {
          roleId: [
            { required: true, message: "请选择角色", trigger: "blur" },
          ]
        },
        
      };
    },
    methods: {
      open() {
        this.selectRole = true;
      },
      submitForm(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            // console.log(this.ruleForm.role,this.choseName)
            service.user.grantRole({
              username:this.choseName,
              roleId:this.ruleForm.roleId
            }).then(res=>{
              if(res.code == 0) {
                this.selectRole = false,
                this.$emit("action")
                this.$message({
                  type:"success",
                  message:"分配角色成功"
                })
              }
            })
          } else {
            console.log("error submit!!");
            return false;
          }
        });
      },
      resetForm(formName) {
        this.selectRole = false;
      }
    }
  };
</script>

<style>
</style>
