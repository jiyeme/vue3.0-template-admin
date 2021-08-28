<template>
  <div>
    <el-row>
      <el-col v-for="item in list" :key="item.id" :span="8" class="item">
        <el-card :body-style="{ padding: '0px' }" shadow="hover">
          <img :src="item.path" class="image" />
          123456
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { defineComponent } from '@vue/runtime-core'
import { getMediaList } from './api'

export default defineComponent({
  data() {
    return {
      list: []
    }
  },
  mounted() {
    console.log('mounted media/list.vue')
    this.loadMediaList()
  },
  activated() {
    console.log('activated media/list.vue')
    this.loadMediaList()
  },
  methods: {
    loadMediaList() {
      getMediaList().then((res) => {
        // console.log(res)
        this.list = res.data.list
      })
    }
  }
})
</script>

<style>
.item {
  margin: 1rem;
}
.image {
  display: block;
  width: 100%;
}
</style>