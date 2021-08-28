<template>
  <div>
    <el-button
      v-if="actionType === 'edit'"
      type="primary"
      icon="el-icon-edit"
      circle
      @click="editInitHandle"
    ></el-button>
    <el-button v-else type="primary" @click="addInitHandle">新增</el-button>

    <el-dialog v-model="outerVisible" title="添加幻灯片">
      <el-form :model="item" label-width="80px">
        <el-form-item label="文本">
          <el-input v-model="item.text"></el-input>
        </el-form-item>
        <el-form-item label="图片">
          <img :src="item.path" class="slide-img" />
          <ImageSelector @handle-img-data="handleSelectedImgData($event)" />
        </el-form-item>
      </el-form>

      <template #footer>
        <div class="dialog-footer">
          <el-button @click="outerVisible = false">取 消</el-button>
          <el-button type="primary" @click="add">{{actionType === 'edit'?'修 改':'添 加'}}</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import ImageSelector from './selectImage.vue'

export default defineComponent({
  components: { ImageSelector },
  props: {
    actionType: {
      type: String,
      default: '',
      required: false
    },
    editData: {
      type: Object,
      default: null,
      required: false
    }
  },
  emits: {
    handleSlideItem(e: any) {
      console.log('handleSlideItem', e)
      return true
    }
  },
  data() {
    return {
      outerVisible: false,
      item: {
        path: '',
        text: ''
      }
    }
  },
  methods: {
    editInitHandle() {
      this.outerVisible = true
      console.log(this.editData)
      this.item.path = this.editData.path
      this.item.text = this.editData.text
    },
    addInitHandle() {
      this.outerVisible = true
      this.item = {
        path: '',
        text: ''
      }
    },
    handleSelectedImgData(e: any) {
      this.item.path = e.path
    },
    add() {
      this.outerVisible = false
      this.$emit('handleSlideItem', this.item)
    }
  }
})
</script>

<style scoped>
.slide-img {
  height: 100px;
}
</style>