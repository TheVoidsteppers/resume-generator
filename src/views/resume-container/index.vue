<template>
  <div>
    <el-container>
      <el-header>
        <el-select
          v-model="dataObj.theme"
          size="small"
          placeholder="请选择主题"
        >
          <el-option
            v-for="item in themes"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-button size="small" type="primary">保存</el-button>
        <el-button size="small" type="primary" @click="exportPdf"
          >导出为pdf</el-button
        >
      </el-header>
      <el-main>
        <div ref="resume"></div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { html2pdf } from "@/utils";

export default {
  data() {
    return {
      themes: [
        {
          label: "蓝",
          value: "blur"
        }
      ],
      dataObj: {
        theme: ""
      }
    };
  },
  methods: {
    // 导出为 pdf
    exportPdf() {
      const ele = this.$refs.resume;
      html2pdf(ele.$el);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>