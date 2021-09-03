<template>
  <div v-loading="loading" class="wrapper">
    <el-card class="transfer">
      <template #header>
        <span>
          <div class="card-header">
            <el-form label-position="left" inline class="info-table">
              <el-form-item label="名称">
                <span>{{ role.name }}</span>
              </el-form-item>
            </el-form>
          </div>
        </span>
      </template>
      <el-transfer
        v-model="menu.form"
        v-loading="menu.loading"
        :data="menu.data"
        :titles="['菜单', '已授权']"
      ></el-transfer>
    </el-card>
    <br />
    <el-row class="btns">
      <el-button size="mini" type="primary" :disabled="role.state == 0" @click="saveData">
        <i class="fa fa-check"></i> 确认修改
      </el-button>
    </el-row>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, watchEffect, reactive, toRef, toRefs, onActivated } from 'vue'
import { useStore } from '@/store'
import { getRoleMenuList, getMenuList, patchRoleMenus } from './api/index'

interface stateTypes {
  url: String
  purl: String
  loading: Boolean
  form: { key: String; label: String }
  menu: {
    loading: Boolean
    url: String
    data: { key: String; label: String }[]
    form: String[]
    original: String[]
  }
}
export default defineComponent({
  name: 'RolesEdit',
  props: {
    currentRole: {
      type: Object,
      default: () => ({ name: '', state: 1 })
    }
  },
  emits: ['success'],

  setup(props, { emit }) {
    // 析构获取 props 属性 basePath
    const currentRole = toRef(props, 'currentRole')
    const store = useStore()
    const lang = computed(() => store.getters['settingsModule/getLangState'])

    const state = reactive<stateTypes>({
      url: `/role/allow`,
      purl: `/role/permissions`,
      loading: false,
      form: { key: '', label: '' },
      menu: {
        loading: false,
        url: `/menu/list`,
        data: [],
        form: [],
        original: []
      }
    })

    const role = computed(() => currentRole.value.role)
    // 可访问
    // const routes = computed(() => store.state.permissionModule.routes)

    /**
     * @description 异步获取已经授权的菜单
     */
    const fetchData = async () => {
      // 后端根据角色名称，查询授权菜单
      getRoleMenuList(role.value.id).then((res) => {
        if (res?.data) {
          const { authedRoutes } = res.data
          state.menu.form = authedRoutes
          state.menu.original = JSON.parse(JSON.stringify(authedRoutes))
        }
      })
    }
    /**
     * @description 异步获取所有的菜单
     */
    const fetchMenuData = () => {
      // 获取所有菜单数据；
      getMenuList().then((res) => {
        const menus = res.data
        menus.forEach((menu: any) => {
          state.menu.data.push({
            key: menu?.id,
            label: menu?.name as String
          })
        })
      })
    }

    /**
     * @description 保存当前角色授权菜单
     */
    const saveData = () => {
      console.log('original is ', state.menu.original)
      console.log('new is ', state.menu.form)
      const post: any[] = []
      // 取出删除的
      state.menu.original.forEach((mid) => {
        if (!state.menu.form.includes(mid)) {
          post.push({
            roleId: role.value.id,
            menuId: mid,
            type: 2
          })
        }
      })
      // 取出新增的
      state.menu.form.forEach((mid) => {
        if (!state.menu.original.includes(mid)) {
          post.push({
            roleId: role.value.id,
            menuId: mid,
            type: 1
          })
        }
      })
      //  省略接口：向后端接口传递已经授权菜单名称；  state.menu.form
      patchRoleMenus(post).then((res) => {
        console.log(res)
        emit('success')
      })
    }
    onMounted(() => {
      // 获取 auth Menu Info
      fetchMenuData()
    })
    onActivated(() => {
      // 获取 auth Menu Info
      fetchMenuData()
    })
    // 使用watchEffect 监听所用到的变化时做出的副作用反应；
    watchEffect(() => {
      fetchData()
    })
    return {
      ...toRefs(state),
      lang,
      role,
      fetchMenuData,
      saveData
    }
  }
})
</script>
<style lang="stylus" scoped>
.btns
  text-align right
.el-transfer
  display inline-block
  text-align left
.transfer
  text-align center
.card-header
  text-align left
</style>
