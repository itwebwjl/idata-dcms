<template>
  <div class="add-params">
    <el-dialog title="新增用户" :visible.sync="centerDialogVisible">
      <el-row type="flex" justify="center">
        <el-col :span="20">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="150px"
            class="demo-ruleForm"
          >
            <el-form-item label="参数名称" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="参数类型" prop="name1">
              <el-select v-model="ruleForm.name1" placeholder="请选择活动区域">
                <el-option label="SQL" value="shanghai"></el-option>
                <!-- <el-option label="区域二" value="beijing"></el-option> -->
              </el-select>
            </el-form-item>
            <el-form-item label="示例值" prop="name1">
              <el-select v-model="ruleForm.name1" placeholder="请选择活动区域">
                <el-option label="SQL" value="shanghai"></el-option>
                <!-- <el-option label="区域二" value="beijing"></el-option> -->
              </el-select>
            </el-form-item>
            <el-form-item label="必填" prop="name2">
              <el-select v-model="ruleForm.name1" placeholder="请选择活动区域">
                <el-option label="SQL" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="参数描述" prop="name5">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item>
              <!-- <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>-->
              <el-row>
                <el-col :span="8">
                  <a href="javascript:;" class="default-btn">重置</a>
                </el-col>
                <el-col :span="8">
                  <a href="javascript:;" class="confirm-btn" @click="save1Fn('ruleForm')">保存</a>
                </el-col>
              </el-row>
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
        centerDialogVisible: true,
        ruleForm: {
          name: "",
          name1: "",
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
          ]
        }
      };
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
      }
    }
  };
</script>

<style>
</style>
