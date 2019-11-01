<template>
  <div class="apply-use">
    <el-dialog
      title="选择应用"
      :visible.sync="centerDialogVisible"
      custom-class="apply-use-popup"
      width="40%"
    >
      <el-row type="flex" justify="center">
        <el-col :span="16">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="120px"
            class="demo-ruleForm"
          >
            <el-form-item label="请选择主系统:" width="200" prop="sysFarther">
              <el-select v-model="ruleForm.region" placeholder="请选择主系统">
                <el-option label="主系统A" value="shanghai"></el-option>
                <el-option label="主系统B" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="请选择子系统:" prop="sysSon">
              <el-select v-model="ruleForm.region" placeholder="请选择子系统">
                <el-option label="赢家" value="shanghai"></el-option>
                <el-option label="团进E" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="审批意见:" prop="region">
              <el-input
                type="textarea"
                :autosize="{ minRows: 4, maxRows:6}"
                placeholder="请输入申请描述"
                v-model="ruleForm.region"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button @click="reset('ruleForm')">取消</el-button>
              <el-button type="primary" @click="submitForm('ruleForm')">确认</el-button>
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
        textarea: "",
        ruleForm: {
          name: "",
          sysFarther: "",
          sysSon:"",

        },
        rules: {
          sysFarther: [
            { required: true, message: "请选择主系统", trigger: "blur" }
          ],
          sysSon:[ { required: true, message: "请选择子系统", trigger: "blur" }]
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
          } else {
            console.log("error submit!!");
            return false;
          }
        });
      },
      reset(formName) {
        this.centerDialogVisible = false;
        this.$refs[formName].resetFields();
      },
    }
  };
</script>

<style lang="scss" scoped>
</style>
