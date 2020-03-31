<template>
  <uploader :options="options" class="uploader-example" @file-error="onFileError" @file-success="onFileSuccess" @file-added="onFileAdded" @file-progress="onFileProgress">
    <uploader-unsupport />
    <uploader-drop>
      <p>拖拽文件(夹)</p>
      <uploader-btn>多文件</uploader-btn>
      <uploader-btn :attrs="attrs">选择图片</uploader-btn>
      <uploader-btn :directory="true">选择文件夹</uploader-btn>
    </uploader-drop>
    <uploader-list />
  </uploader>
</template>

<script>
export default {
  data() {
    return {
      upload_key: new Date(),
      options: {
        // https://github.com/simple-uploader/Uploader/tree/develop/samples/Node.js
        target: 'http://localhost:8081/chunk/upload',
        testChunks: false
      },
      attrs: {
        accept: 'image/*'
      }
    }
  },
  methods: {
    onFileProgress(rootFile, file, chunk) {
      // console.log(rootFile);
      // console.log(file.name);
      // console.log(chunk);
      // console.log('上传中 ${file.name}，chunk：${chunk.startByte / 1024 / 1024} ~ ${chunk.endByte / 1024 / 1024}');
    },
    onFileAdded(file) {
      // console.log(file);
      // console.log('选择文件 ${file.name}');
    },
    onFileSuccess(rootFile, file, response, chunk) {
      // console.log(rootFile);
      // console.log(file);
      // console.log(response);
      // console.log(chunk);
      console.log(file.name + 'upload success ')

      console.log(response)
    },
    onFileError(rootFile, file, response, chunk) {
      console.log(file)
    }
  }
}
</script>

<style>
  .uploader-example {
    width: 880px;
    padding: 15px;
    margin: 40px auto 0;
    font-size: 12px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .4);
  }
  .uploader-example .uploader-btn {
    margin-right: 4px;
  }
  .uploader-example .uploader-list {
    max-height: 440px;
    overflow: auto;
    overflow-x: hidden;
    overflow-y: auto;
  }
</style>

