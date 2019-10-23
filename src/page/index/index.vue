<template>
  <div class="index-index">
    <div class="el-breadcrumb-wrap">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="top">
      <div class="list">
        <div class="item">
          <span class="label-type">服务类型：</span>
          <a href="javascript:;" class="item-type active">全部</a>
          <a href="javascript:;" class="item-type">接口服务</a>
          <a href="javascript:;" class="item-type">推荐服务</a>
          <a href="javascript:;" class="item-type">H5 服务</a>
          <a href="javascript:;" class="item-type">聚合服务</a>
        </div>
        <div class="item">
          <span class="label-type">审批状态：</span>
          <a href="javascript:;" class="item-type active">全部</a>
          <a href="javascript:;" class="item-type">待审批</a>
          <a href="javascript:;" class="item-type">审批通过</a>
          <a href="javascript:;" class="item-type">审批拒绝</a>
        </div>
      </div>
    </div>
    <div style="height:16px;background:#ececec"></div>
    <div class="bottom">
      <div class="bottom-list clearfix">
        <div class="bottom-item" v-for="(item,index) in 4" :key="index">
          <el-row type="flex" justify="space-between" align="middle">
            <el-col :span="12">
              <div class="item-one">持有产品数量</div>
              <div class="item-two">可查看企业客户持有银行、产险、养老险、租赁等专业公司的产品持有数量</div>
              <div class="item-three">服务类型：数据服务</div>
              <div class="item-four">
                费用：
                <span class="item-cost">免费</span>
              </div>
            </el-col>
            <el-col :span="2" type="flex">
              <a href="javascript:;" class="item-btn" @click="applyUseFn">申请使用</a>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>

    <ApplyUse ref="ApplyUse"></ApplyUse>

    <div class="el-pagination-wrap">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, next,pager,prev"
        prev-text="上一页"
        next-text="下一页"
        :total="400"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
  import ApplyUse from "../../components/dialog/ApplyUse.vue";
  export default {
    data() {
      return {
        currentPage: 1
      };
    },
    created(){
      // console.log(this.$router.options,this.$route)
    },
    components: {
      ApplyUse
    },
    methods: {
      applyUseFn() {
        this.$refs.ApplyUse.open();
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .index-index {
    .top {
      padding: 20px 32px;
      background: #fff;
      border-radius: 4px;
    }
    .bottom {
      .bottom-list {
        padding: 16px 0 0 16px;
        background: #fff;
        .bottom-item {
          padding-bottom: 16px;
          border-bottom: solid 1px #ececec;
          .item-one {
            padding-top: 16px;
            letter-spacing: 2px;
          }
          .item-two {
            padding-top: 10px;
            font-size: 14px;
            color: #999;
            letter-spacing: 2px;
          }
          .item-three {
            padding-top: 10px;
            font-size: 14px;
            color: #999;
            letter-spacing: 2px;
          }
          .item-four {
            padding-top: 5px;
            font-size: 14px;
            letter-spacing: 2px;
            .item-cost {
              color: #ff7635;
            }
          }
          .item-btn {
            display: block;
            width: 120px;
            height: 36px;
            text-align: center;
            line-height: 36px;
            border-radius: 4px;
            border: solid 1px #ff7635;
            color: #ff7635;
          }
        }
      }
    }
  }
</style>
