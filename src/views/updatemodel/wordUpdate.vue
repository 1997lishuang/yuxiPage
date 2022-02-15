<template>
  <div class="app-container">

    <el-form label-width="120px">

      <el-form-item label="选择模板word">

        <el-upload

          ref="upload"

          :auto-upload="false"

          :on-success="fileUploadSuccess"

          :on-error="fileUploadError"

          :disabled="importBtnDisabled"

          :limit="1"

          :action="BASE_API+'/Upload/UploadWord'"

          name="file"

          accept=".docx">

          <el-button slot="trigger" size="small" type="primary">选取文件</el-button>

          <el-button

            :loading="loading"

            style="margin-left: 10px;"

            size="small"

            type="success"

            @click="submitUpload">{{ fileUploadBtnText }}</el-button>

        </el-upload>

      </el-form-item>

    </el-form>

  </div>
</template>

<script>
export default {
  data() {
    return {

      BASE_API: process.env.VUE_APP_BASE_API, // 接口API地址

      fileUploadBtnText: '上传到服务器', // 按钮文字

      importBtnDisabled: false, // 按钮是否禁用,

      loading: false
    }
  },
  created() {

  },
  methods: {
    submitUpload() {

      this.fileUploadBtnText = '正在上传'

      this.importBtnDisabled = true

      this.loading = true

      this.$refs.upload.submit()

    },


    fileUploadSuccess(response) {

      if (response.success === true) {

        this.fileUploadBtnText = '模板上传成功'

        this.loading = false

        this.$message({

          type: 'success',

          message: response.message

        })

        this.$router.push({path:'/example/table'})

      }

    },
    fileUploadError(response) {
      this.fileUploadBtnText = '模板上传失败'

      this.loading = false

      this.$message({

        type: 'error',

        message: '模板上传失败'

      })
    }
  }
}
</script>

<style scoped>

</style>
