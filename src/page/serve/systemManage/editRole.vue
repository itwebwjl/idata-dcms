<template>
  <div class="add-role">
    <el-row type="flex" justify="center">
      <el-col :span="14">
        <el-form :model="formData" :rules="rules" ref="formData" label-width="100px">
          <el-form-item label="角色名称:" prop="roleName">
            <el-input v-model="formData.roleName" :disabled="isPreview()"></el-input>
          </el-form-item>
          <el-form-item label="角色描述:" prop="roleDsc" placeholder="请输入姓名">
            <el-input
              type="textarea"
              :autosize="{ minRows: 3, maxRows: 5}"
              placeholder="请输入角色描述"
              v-model="formData.roleDsc"
              prop="roleDsc"
              :disabled="isPreview()"
            ></el-input>
          </el-form-item>
          <el-form-item label="权限分配:" prop="name">
            <el-tree
              :data="powerList"
              show-checkbox
              :default-checked-keys="formData.powerIds"
              node-key="powerId"
              ref="tree"
              highlight-current
              @check-change="handleCheckChange"
              :props="defaultProps"
            ></el-tree>
          </el-form-item>
          <el-form-item v-if="!isPreview()">
            <el-button type="primary" @click="submitForm('formData')">保存</el-button>
            <el-button @click="resetForm('formData')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import service from "../../../axios/index";
  export default {
    data() {
      const that = this 
      return {
        roleId: "",
        powerList: [],
        formData: {
          roleName: "",
          roleDsc: "",
          powerIds: []
        },
        rules: {
          roleName: [
            { required: true, message: "请输入角色名称", trigger: "blur" }
          ],
          roleDsc: [
            { required: true, message: "请输入角色描述", trigger: "blur" }
          ]
        },

        defaultProps: {
          children: "powerList",
          label: "powerName",
          disabled: function(data, node) {
            return that.isPreview()
          }
        },
        // disabled: "false"
      };
    },
    created() {
      this.roleId = this.$route.query.roleId || "";
      // this.disabled = this.$route.query.disabled;
      if (this.roleId) {
        this.findOneByRoleIdFn();
      } else {
        // 新增角色
        this.findAllPowerFn();
      }
    },
    methods: {
      handleCheckChange(data, checked, indeterminate) {
        this.formData.powerIds = this.$refs.tree.getCheckedKeys();
      },
      isPreview(){
        return this.$route.query.disabled ? true : false
      },
      submitForm(formName) {
        this.$refs[formName].validate(valid => {
          if (valid && this.formData.powerIds.length) {
            if (this.roleId) {
              service.role
                .upDateRole({
                  roleId: this.roleId,
                  roleName: this.formData.roleName,
                  roleDsc: this.formData.roleDsc,
                  pwoerIds: this.formData.powerIds.join(",")
                })
                .then(res => {
                  if (res.code == 0) {
                    this.$message({
                      type: "success",
                      message: "更新角色成功"
                    });
                  }
                });
            } else {
              service.role
                .addRole({
                  roleId: this.roleId,
                  roleName: this.formData.roleName,
                  roleDsc: this.formData.roleDsc,
                  pwoerIds: this.formData.powerIds.join(",")
                })
                .then(res => {
                  if (res.code == 0) {
                    this.$message({
                      type: "success",
                      message: "新增角色成功"
                    });
                  }
                });
            }
          } else {
            console.log("error submit!!");
            return false;
          }
        });
      },
      findOneByRoleIdFn() {
        service.role
          .findOneByRoleId({
            roleId: this.roleId
          })
          .then(res => {
            this.powerList = res.data.powerList;
            this.formData = res.data.role;
          })
          // .then(() => {
          //   this.$nextTick(() => {
          //     if (this.formData) {
          //       this.$refs.tree.setCheckedKeys(this.formData.powerIds);
          //     }
          //   });
          // });
      },
      findAllPowerFn() {
        service.role.findAllPower({}).then(res => {
          this.powerList = res.data;
        });
      },
      resetForm(formName) {
        // 情况表单
        this.$refs[formName].resetFields();
        // 清空选中
        this.$refs.tree.setCheckedKeys([]);
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
