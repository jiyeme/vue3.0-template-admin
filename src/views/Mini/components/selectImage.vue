<template>
  <div>
    <el-button @click="openSelect">选择图片</el-button>
    <el-dialog v-model="dialogVisible" title="选择图片">
      <el-row>
        <el-col v-for="(item, index) in list" :key="item.id" :span="8" class="item">
          <el-card
            :body-style="{ padding: '0px' }"
            shadow="hover"
            :class="'card ' + (index !== selectIndex?'':'select-mark')"
            @click="selectImg(index)"
          >
            <img :src="item.path" class="image" />
            介绍
            <span v-if="index === selectIndex">
              <!--  -->
              X
            </span>
          </el-card>
        </el-col>
      </el-row>
      <el-button @click="dialogVisible = false">取消</el-button>
      <el-button type="primary" :disabled="selectIndex === -1" @click="doSelectBtn">选择</el-button>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { getMediaList } from './api'

export default defineComponent({
  name: 'ImageSelector',
  emits: {
    handleImgData(data) {
      console.log(data)
      return true
    }
  },
  setup() {},
  data() {
    return {
      dialogVisible: false,
      list: [],
      selectIndex: -1
    }
  },
  methods: {
    openSelect() {
      // 点击选择图片
      this.dialogVisible = true
      this.loadMediaList()
      this.selectIndex = -1
    },
    selectImg(index: number) {
      this.selectIndex = index
    },
    doSelectBtn() {
      this.dialogVisible = false
      this.$emit('handleImgData', this.list[this.selectIndex])
    },
    loadMediaList(append = false) {
      getMediaList().then((res) => {
        const { list } = res.data

        if (append) this.list = this.list.concat(list)
        else this.list = list
      })
    }
  }
})
</script>

<style scoped>
.item {
  margin: 1rem;
}
.image {
  display: block;
  width: 100%;
}
.card {
  cursor: pointer;
  position: relative;
}
.select-mark,
.select-mark:hover {
  box-shadow: #47b3ae 0px 0px 14px 4px;
}
.select-mark span {
  background-color: green;
  width: 36px;
  position: absolute;
  right: 0;
  bottom: 0;
}
</style>