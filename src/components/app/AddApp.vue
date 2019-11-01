<template>
  <div class="add-app">
    <el-dialog title="新增应用" :visible.sync="centerDialogVisible" width="40%">
      <el-row type="flex" justify="center">
        <el-col :span="16">
          <el-form
            :model="formData"
            :rules="rules"
            ref="ruleForm"
            label-width="120px"
            class="demo-ruleForm"
          >
            <el-form-item label="子系统名称:" placeholder="请输入子系统名称" prop="applicationName">
              <el-input v-model="formData.applicationName"></el-input>
            </el-form-item>
            <el-form-item label="所属系统:" placeholder="请输入所属系统" prop="homebusinesslineName">
              <el-input v-model="formData.homebusinesslineName"></el-input>
            </el-form-item>
            <el-form-item label="归属业务条线:" placeholder="请输入归属业务条线" prop="departmentName">
              <el-input v-model="formData.departmentName"></el-input>
            </el-form-item>
            <el-form-item label="主营业务部门:" placeholder="请输入主营业务部门" prop="businessleaderName">
              <el-input v-model="formData.businessleaderName"></el-input>
            </el-form-item>
            <el-form-item label="业务负责人:" placeholder="请输入业务负责人" prop="developerName">
               <el-input v-model="formData.developerName"></el-input>
            </el-form-item>
              <el-form-item label="开发负责人:" placeholder="请输入开发负责人" prop="parentName">
               <el-input v-model="formData.parentName"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button @click="centerDialogVisible =!centerDialogVisible">取消</el-button>
              <el-button   type="primary" @click="submitForm('ruleForm')">确定</el-button>
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
        formData: {
          applicationName: "",
          homebusinesslineName: "",
          departmentName: "",
          businessleaderName: "",
          developerName: "",
          parentName: "",
        },
        rules: {
          applicationName: [
            { required: true, message: "请输入", trigger: "blur" },
            // { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
          ],
          homebusinesslineName: [
            { required: true, message: "请输入", trigger: "blur" },
            // { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
          ],
          departmentName: [
            { required: true, message: "请输入", trigger: "blur" },
            // { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
          ],
          businessleaderName: [
            { required: true, message: "请输入", trigger: "blur" },
            // { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
          ],
          developerName: [
            { required: true, message: "请输入", trigger: "blur" },
            // { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
          ],
          parentName: [
            { required: true, message: "请输入", trigger: "blur" },
            // { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
          ],
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
            service.app.addApp({
                ...this.formData
            }).then(res=>{
              if(res.code == 0) {
                this.centerDialogVisible = false;
                this.$refs[formName].resetFields();
                this.$message({
                  type:"success",
                  message:"新增成功"
                })
                this.$emit("action");
              }
            })
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

<style lang="scss" scoped>
.add-app {

}
</style>
