<template>
  <div class="approve">
    <el-dialog
      title="审批结论"
      :visible.sync="show"
      :before-close="close"
      custom-class="apply-use-popup"
      width	="40%"
    >
      <el-row type="flex" justify="center">
        <el-col :span="16">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="请选择应用:" prop="region">
              <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                <el-option label="审批通过" value="shanghai"></el-option>
                <el-option label="审批不通过" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="审批意见:" prop="region">
              <el-input
                type="textarea"
                :autosize="{ minRows: 4, maxRows:6}"
                placeholder="请输入审批意见"
                v-model="ruleForm.region"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
              <el-button @click="resetForm('ruleForm')">取消</el-button>
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
        show: true,
        click_type: 1,
        textarea: "",
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
    methods: {
      open() {
        this.show = true;
      },
      close() {
        this.show = false;
      },
      confirm() {}
    }
  };
</script>

<style>
</style>
