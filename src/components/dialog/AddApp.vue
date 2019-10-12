<template>
  <div class="add-app">
    <el-dialog title="新增用户" :visible.sync="centerDialogVisible" width="40%">
      <el-row type="flex" justify="center">
        <el-col :span="16">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="120px"
            class="demo-ruleForm"
          >
            <el-form-item label="应用ID:" placeholder="请输入应用ID" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="应用名称:" placeholder="请输入应用名称" prop="region">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="所属专业公司:" prop="name">
              <el-select v-model="ruleForm.region" placeholder="请输入所属专业公司">
                <el-option label="平安银行" value="shanghai"></el-option>
                <el-option label="中信银行" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button @click="submitForm('ruleForm')">取消</el-button>
              <el-button   type="primary" @click="submitForm('ruleForm')">确定</el-button>
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

<style lang="scss" scoped>
.add-app {

}
</style>
