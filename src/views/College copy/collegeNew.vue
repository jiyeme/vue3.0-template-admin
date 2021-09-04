<template>
  <div>
    <h2>添加学院信息</h2>
    <el-form ref="form" :model="form">
      <el-form-item label="学院名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="学院标记">
        <el-input v-model="form.mark"></el-input>
      </el-form-item>
      <el-row class="btn-container">
        <el-button size="mini" type="primary" @click="submitForm()">
          <i class="fa fa-plus"></i> 确认添加
        </el-button>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import { defineComponent } from '@vue/runtime-core'
import { postCollegeItem } from './api'

export default defineComponent({
  props: {},
  emits: ['success'],
  data() {
    return {
      form: {
        name: '',
        mark: ''
      }
    }
  },
  methods: {
    submitForm() {
      console.log('提交添加')
      postCollegeItem(this.form).then((res) => {
        console.log(res)
        if (res.data.result) this.$emit('success')
      })
    }
  }
})
</script>

<style>
</style>