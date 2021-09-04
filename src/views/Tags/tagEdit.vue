<template>
  <div>
    <h2>编辑学院信息</h2>
    <el-form ref="form" :model="form">
      <el-form-item label="学院名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="学院标记">
        <el-input v-model="form.mark"></el-input>
      </el-form-item>
      <el-row class="btn-container">
        <el-button size="mini" type="primary" @click="submitForm()">
          <i class="fa fa-plus"></i> 确认修改
        </el-button>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import { defineComponent, toRef } from '@vue/runtime-core'
import { patchCollegeItem } from './api'

export default defineComponent({
  props: {
    collegeInfo: {
      type: Object,
      required: true
    }
  },
  emits: ['success'],
  data() {
    return {
      form: toRef(this.$props, 'collegeInfo')
    }
  },
  methods: {
    submitForm() {
      console.log('提交修改')
      patchCollegeItem(this.form).then((res) => {
        console.log(res)
        if (res.data.result) this.$emit('success')
      })
    }
  }
})
</script>

<style>
</style>