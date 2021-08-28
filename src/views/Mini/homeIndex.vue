<template>
  <div>
    <h2>小程序首页配置</h2>
    <el-card shadow="always" style="margin:1rem;">
      <div>
        <h3>预览区域</h3>
        <br />
        <div class="slide-preview">
          <el-carousel :interval="5000" arrow="always">
            <el-carousel-item v-for="item in slide" :key="item.id">
              <span class="text">{{ item.text }}</span>
              <img :src="item.path" />
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <br />
      <div>
        <br />
        <br />
        <h3>数据修改区域</h3>
        <br />
        <div style="display:flex;">
          <AddNewItem @handle-slide-item="addSlideItem($event)" />
          <el-button @click="updateConfig">保存</el-button>
        </div>
        <draggable
          v-model="slide"
          group="slideItems"
          item-key="text"
          @start="drag=true"
          @end="drag=false"
        >
          <template #header>
            <div class="slide-item">
              <el-row>
                <el-col :span="8">文本</el-col>
                <el-col :span="8">图片</el-col>
                <el-col :span="8">操作</el-col>
              </el-row>
              <el-divider style="margin:0;"></el-divider>
            </div>
          </template>
          <template #item="{element, index}">
            <div class="slide-item">
              <el-row>
                <el-col :span="8" class="ele">{{element.text}}</el-col>
                <el-col :span="8" class="ele">{{element.path}}</el-col>
                <el-col :span="8" class="ele">
                  <div style="display:flex;justify-content: center;">
                    <AddNewItem
                      :action-type="'edit'"
                      :edit-data="element"
                      @handle-slide-item="editSlideItem($event, index)"
                    />
                    <el-button
                      type="danger"
                      icon="ic ic-delete"
                      circle
                      @click="deleteSlideItem(index)"
                    ></el-button>
                  </div>
                </el-col>
              </el-row>
              <el-divider style="margin:0;"></el-divider>
            </div>
          </template>
        </draggable>

        <br />
        <br />
      </div>
    </el-card>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import draggable from 'vuedraggable'
import AddNewItem from './components/editSlideItem.vue'
import { getMiniIndexConfig, updateMiniIndexConfig } from './api'

export default defineComponent({
  components: {
    AddNewItem,
    draggable
  },
  data() {
    return {
      slide: [],
      outerVisible: false,
      innerVisible: false,
      listSortable: null
    }
  },
  mounted() {
    console.log('homeindex mounted')
  },
  activated() {
    console.log('homeindex activated')
    this.loadConfig()
  },
  unmounted() {},
  methods: {
    addSlideItem(e) {
      console.log('homeIndex.vue', e)
      this.slide.push(e)
    },
    editSlideItem(e, index) {
      console.log(e, index)
      this.slide[index] = e
    },
    deleteSlideItem(index) {
      this.slide.splice(index, 1)
    },
    loadConfig() {
      getMiniIndexConfig().then((res) => {
        console.log(res)
        this.slide = res.data
      })
    },
    updateConfig() {
      updateMiniIndexConfig({ value: this.slide }).then((res) => {
        console.log(res)
        this.$message({
          message: '成功',
          type: 'success'
        })
      })
    }
  }
})
</script>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.slide-item .el-row {
  margin: 10px 0 10px 0;
}
.slide-item .el-col {
  display: flex;
  justify-content: center;
  align-items: center;
}

.slide-preview .text {
  position: absolute;
  width: 100%;
  bottom: 20px;
  left: 0;
}
</style>