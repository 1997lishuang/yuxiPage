
<!--<template>-->

<!--  <div class="app-container">-->
<!--    <el-form :model="form">-->
<!--      <el-form-item label="上传文件" :label-width="formLabelWidth">-->
<!--        <el-upload-->
<!--          ref="uploadExcel"-->
<!--          action=""-->
<!--          :limit=limitNum-->
<!--          :auto-upload="false"-->
<!--          accept=".xlsx"-->
<!--          :before-upload="beforeUploadFile"-->
<!--          :on-change="fileChange"-->
<!--          :on-exceed="exceedFile"-->
<!--          :on-success="handleSuccess"-->
<!--          :on-error="handleError"-->
<!--          :file-list="fileList">-->
<!--          <el-button size="small" plain>选择文件</el-button>-->
<!--          <div slot="tip" class="el-upload__tip">只能上传xlsx(Excel2007)文件，且不超过10M</div>-->
<!--        </el-upload>-->
<!--      </el-form-item>-->
<!--      <el-form-item>-->
<!--        <el-button size="small" type="primary" @click="uploadFile">立即上传</el-button>-->
<!--        <el-button size="small">取消</el-button>-->
<!--      </el-form-item>-->
<!--    </el-form>-->
<!--  </div>-->

<!--</template>-->

<!--<script>-->
<!--import axios from 'axios'-->
<!--export default {-->
<!--  data() {-->
<!--    return {-->
<!--      limitNum: 1,-->
<!--      formLabelWidth: '80px',-->
<!--      form: {-->
<!--        file: ''-->
<!--      },-->
<!--      fileList: []-->
<!--    }-->
<!--  },-->
<!--  methods: {-->
<!--    // 文件超出个数限制时的钩子-->
<!--    exceedFile(files, fileList) {-->
<!--      this.$notify.warning({-->
<!--        title: '警告',-->
<!--        message: `只能选择 ${this.limitNum} 个文件，当前共选择了 ${files.length + fileList.length} 个`-->
<!--      });-->
<!--    },-->
<!--    // 文件状态改变时的钩子-->
<!--    fileChange(file, fileList) {-->
<!--      console.log('change')-->
<!--      console.log(file)-->
<!--      this.form.file = file.raw-->
<!--      console.log(this.form.file)-->
<!--      console.log(fileList)-->
<!--    },-->
<!--    // 上传文件之前的钩子, 参数为上传的文件,若返回 false 或者返回 Promise 且被 reject，则停止上传-->
<!--    beforeUploadFile(file) {-->
<!--      console.log('before upload')-->
<!--      console.log(file)-->
<!--      let extension = file.name.substring(file.name.lastIndexOf('.')+1)-->
<!--      let size = file.size / 1024 / 1024-->
<!--      if(extension !== 'xlsx') {-->
<!--        this.$notify.warning({-->
<!--          title: '警告',-->
<!--          message: `只能上传Excel2017（即后缀是.xlsx）的文件`-->
<!--        });-->
<!--      }-->
<!--      if(size > 10) {-->
<!--        this.$notify.warning({-->
<!--          title: '警告',-->
<!--          message: `文件大小不得超过10M`-->
<!--        });-->
<!--      }-->
<!--    },-->
<!--    // 文件上传成功时的钩子-->
<!--    handleSuccess(res, file, fileList) {-->
<!--      this.$notify.success({-->
<!--        title: '成功',-->
<!--        message: `文件上传成功`-->
<!--      });-->
<!--    },-->
<!--    // 文件上传失败时的钩子-->
<!--    handleError(err, file, fileList) {-->
<!--      this.$notify.error({-->
<!--        title: '错误',-->
<!--        message: `文件上传失败`-->
<!--      });-->
<!--    },-->
<!--    uploadFile() {-->
<!--     -->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style lang="scss" scoped>-->

<!--</style>-->


<template>

  <div class="app-container">

    <el-form label-width="120px">

      <el-form-item label="选择Excel">

        <el-upload

          ref="upload"

          :auto-upload="false"

          :on-success="fileUploadSuccess"

          :on-error="fileUploadError"

          :disabled="importBtnDisabled"

          :limit="1"

          :action="BASE_API+'/redcaveconvergence/UpFile'"

          name="file"

          accept=".xlsx">

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

        this.fileUploadBtnText = '导入成功'

        this.loading = false

        this.$message({

          type: 'success',

          message: response.message

        })

        this.$router.push({path:'/example/table'})

      }

    },

    fileUploadError(response) {
      this.fileUploadBtnText = '导入失败'

      this.loading = false

      this.$message({

        type: 'error',

        message: '导入失败'

      })
    }
  }
}
</script>
