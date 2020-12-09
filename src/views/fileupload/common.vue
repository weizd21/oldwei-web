<template>
  <el-row>

    <el-row>
      <el-col :span="24">
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          multiple
          :limit="3"
          :on-exceed="handleExceed"
          :file-list="fileList"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>

      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <img :src="'data:image/png;base64,'+imgurl" alt="" />
      </el-col>
      <el-col :span="12">
        <el-button
          plain
          @click="randomImg">
          刷新
        </el-button>
      </el-col>
    </el-row>
  </el-row>



</template>

<script>

  import request from '@/utils/request'

  export default {
  data() {
    return {
      fileList: [],
      imgurl: "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"
    }
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    },
    randomImg() {
      request({
        url: 'http://localhost:8006/v1/dataset/originals/randomImage?projectId=1&datasetName=dataset1',
        method: 'get'
      }).then(response=>{
        if(response.status === 0){
          this.imgurl = response.data;
        }
      });

    }
  }
}
</script>
