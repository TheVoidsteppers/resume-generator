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
          ></el-option>
        </el-select>
        <el-button size="small" type="primary" @click="handleSave"
          >保存</el-button
        >
        <el-button size="small" type="primary" @click="handleExportPdf"
          >导出为pdf</el-button
        >
      </el-header>
      <el-main>
        <div ref="resume">
          <div class="base-info">
            <el-image :src="dataObj.personalInfo.img" fit="cover"></el-image>
          </div>
        </div>
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
          value: "blue"
        }
      ],
      dataObj: {
        theme: "",
        personalInfo: {
          img: "./avatar.png"
        }
      }
    };
  },
  mounted() {
    this.fetchResumeData();
  },
  methods: {
    // 导出为 pdf
    handleExportPdf() {
      const ele = this.$refs.resume;
      html2pdf(ele.$el);
    },
    async fetchResumeData() {
      const res = await this.axios.get("/api/resume");
      const { code, msg, systemMsg, object } = res.data;
      if (code === 0) {
        this.dataObj = JSON.parse(object);
      } else {
        this.$notify({
          title: "错误",
          message: systemMsg || msg,
          type: "error"
        });
      }
    },
    // 保存数据
    async handleSave() {
      const res = this.axios.post("/api/resume", this.dataObj);
      const { code, msg, systemMsg, object } = res.data;

      if (code === 0) {
        console.log(object);
      } else {
        this.$notify({
          title: "错误",
          message: systemMsg || msg,
          type: "error"
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>