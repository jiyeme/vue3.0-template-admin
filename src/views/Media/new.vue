<template>
  <div>
    <el-upload
      class="upload-demo"
      drag
      action="/api/media/upload"
      multiple
      accept="image/*"
      list-type="picture"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">
        将文件拖到此处，或
        <em>点击上传</em>
      </div>
      <template #tip>
        <div class="el-upload__tip">只能上传 图片 文件，且不超过 500kb</div>
      </template>
    </el-upload>
  </div>
</template>

<script>
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style>
</style>