/**
 * @description register mock data right here
 */
import Mock from 'mockjs'
// 设置拦截请求的响应时间 ajax 请求；
Mock.setup({
  timeout: '200-600',
})

// mock 一组角色数据；
// const genRoles = () => ({
//   code: 200,
//   data: [
//     {id:1, name: '超级管理员', remark: '拥有删除和创建等操作的权限', state: 1 },
//     {id:2, name: '管理员', remark: '拥有创建和权限分配的权限', state: 1 },
//     {id:3, name: '游客', remark: '只拥有操作部分菜单的权限', state: 2 }
//   ],
//   msg: '成功'
// })

const getSwiperInfo = () => ({
  status: 0,
  data: [
    {
      name: 'vue-next',
      itemSrc: 'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c588b8ab65a74d59aa379801136df4e0~tplv-k3u1fbpfcp-watermark.image',
      targetLink: 'https://github.com/vuejs/docs-next-zh-cn'
    },
    {
      name: 'vitejs',
      itemSrc: 'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a7351d2dcd7846158604ac8bd57222b5~tplv-k3u1fbpfcp-watermark.image',
      targetLink: 'https://github.com/vitejs'
    },
    {
      name: 'element-plus',
      itemSrc: 'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/48a7fd198df44cca9c0dc10a8047bbef~tplv-k3u1fbpfcp-watermark.image',
      targetLink: 'https://github.com/element-plus/element-plus'
    },
    {
      name: 'tslang',
      itemSrc: 'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/610fc57450884ceaae9578689663fe2f~tplv-k3u1fbpfcp-watermark.image',
      targetLink: 'https://github.com/Microsoft/TypeScript'
    }
  ],
  message: '成功'
})

Mock.mock('/api/auth/user/login', 'post', (option) => {
  const { email, password } = JSON.parse(option.body)
  console.log(email, password)
  if (email === 'super@outlook.com' && password === '1zsJJYx5/srrQaMycn5MYA==') {
    return {
      status: 0,
      data: {
        accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjIyODA1MjAxMjhAcXEuY29tIiwic3ViIjo5LCJpYXQiOjE2MjU4MzQ3MTksImV4cCI6MTYyODQyNjcxOX0.YQLVi-zw4XWQEd8Hy2YZGlFaqX8c7xyRPrYuxcFywFE'
      },
      success: true,
      message: '成功'
    }
  }
  if (email === 'admin@outlook.com' && password === '1zsJJYx5/srrQaMycn5MYA==') {
    return {
      status: 0,
      data: {
        accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjIyODA1MjAxMjhAcXEuY29tIiwic3ViIjo5LCJpYXQiOjE2MjU4MzQ3MTksImV4cCI6MTYyODQyNjcxOX0.YQLVi-zw4XWQEd8Hy2YZGlFaqX8c7xyRPrYuxcFywFE'
      },
      success: true,
      message: '成功'
    }
  }
  return {
    status: 0,
    data: null,
    message: '账户或者密码错误'
  }
})
// 登录成功，查询用户信息，包括角色
Mock.mock('/api/auth/user/userInfo', 'post', (option) => {
  const { email } = JSON.parse(option.body)

  if (email === 'super@outlook.com') {
    return {
      status: 0,
      data: {
        roleName: '超级管理员'
      },
      success: true,
      message: '成功'
    }
  }
  if (email === 'admin@outlook.com') {
    return {
      status: 0,
      data: {
        roleName: '管理员'
      },
      success: true,
      message: '成功'
    }
  }
  return {
    status: 0,
    data: null,
    message: '账户或者密码错误'
  }
})

Mock.mock('/api/auth/user/register', 'post', () => ({
  status: 0,
  data: {},
  success: true,
  message: '成功'
}))

//
Mock.mock('/api/auth/permission/routes', 'post', (option) => {
  const { roleName } = JSON.parse(option.body)
  if (roleName === '超级管理员') {
    return {
      status: 0,
      data: {
        authedRoutes: ['/dashboard', '/mini', '/media', '/guide', '/copy', '/zip', '/role', '/menu', '/excel', '/table', '/form', '/qrcode', '/dragable', '/editor', '/upload', '/cropper', '/personal']
      },
      success: true,
      message: '成功'
    }
  }
  if (roleName === '管理员') {
    return {
      status: 0,
      data: {
        authedRoutes: ['/dashboard', '/role', '/menu', '/personal']
      },
      success: true,
      message: '成功'
    }
  }
  return {
    status: 0,
    data: {
      authedRoutes: ['/dashboard', '/guide', '/copy', '/zip', '/excel', '/table', '/form', '/qrcode', '/dragable', '/editor', '/upload', '/cropper', '/personal']
    },
    success: true,
    message: '成功'
  }
})

Mock.mock('/api/auth/permission/permissions', 'post', () => ({
  status: 0,
  data: {
    permissions: ['test:permission-btn', 'test:permission-btn2', 'test:permission-btn3']
  },
  success: true,
  message: '成功'
}))

// /api/auth/user/reset-password
Mock.mock('/api/auth/user/reset-password', 'post', () => ({
  status: 0,
  data: {},
  success: true,
  message: '成功'
}))
//  /api/auth/email/forgot-password
Mock.mock('/api/auth/email/forgot-password', 'post', () => ({
  status: 0,
  data: {},
  success: true,
  message: '成功'
}))
// /api/auth/user/reset-password
Mock.mock('/api/auth/user/reset-password', 'post', () => ({
  status: 0,
  data: {},
  success: true,
  message: '成功'
}))

Mock.mock('/api/setting/basicInfo', 'post', (option) => {
  const { email, nickname, desc, mobile } = JSON.parse(option.body)
  return {
    status: 0,
    data: {
      email,
      nickname,
      desc,
      mobile
    },
    message: '更新成功'
  }
})

Mock.mock('/api/personal/tags', 'get', () => ({
  status: 0,
  data: {
    tags: ['积极阳光', '专注', '认真负责', '花痴']
  },
  message: '成功'
}))
Mock.mock('/api/data/world-population', 'get', () => ({
  status: 0,
  data: {
    dataSets: [
      { category: 'frontEnd', value: 13832220000, x: 'Vue-next' },
      { category: 'frontEnd', value: 13832210000, x: 'Vuex' },
      { category: 'frontEnd', value: 1383232300, x: 'vue-router' },
      { category: 'frontLib', value: 13832210000, x: 'ElementPlus' },
      { category: 'frontEnd', value: 1383232200, x: 'react' },
      { category: 'frontEnd', value: 13831322200, x: 'antd' },
      { category: 'frontEnd', value: 13831322200, x: 'antv' },
      { category: 'lowcode', value: 1383232400, x: 'lowcode' },
      { category: 'frontEnd', value: 1383232400, x: 'micro-frontend' },
      { category: 'frontEnd', value: 1383232400, x: 'flutter' },
      { category: 'frontEnd', value: 1383232300, x: '微信小程序' },
      { category: 'frontEnd', value: 1383232000, x: 'Taro' },
      { category: 'frontEnd', value: 1383231000, x: '抖音小程序' },
      { category: 'frontEnd', value: 1383236000, x: '快手小程序' },
      { category: 'frontEnd', value: 138322000, x: 'UniApp' },
      { category: 'frontEnd', value: 138322000, x: 'NodeJS' },
      { category: 'frontEnd', value: 138322000, x: 'Koa' },
      { category: 'frontEnd', value: 130922000, x: 'Vite' },
      { category: 'frontEnd', value: 130922009, x: 'VitePress' },
      { category: 'frontEnd', value: 130989000, x: 'TypeScript' },
      { category: 'frontEnd', value: 130989003, x: 'stylus' },
      { category: 'frontEnd', value: 130989003, x: 'less' },
      { category: 'frontEnd', value: 130989003, x: 'sass' },
      { category: 'frontEnd', value: 130989010, x: 'fidder' },
      { category: 'frontEnd', value: 130989015, x: 'G2' },
      { category: 'frontEnd', value: 130989010, x: 'mockjs' }
    ]
  },
  message: '更新成功'
}))
Mock.mock('/api/personal/tasks', 'get', () => ({
  status: 0,
  data: {
    tasks: [
      ['2021-05-19', [{ task: '读书看报' }]],

      ['2021-05-20', [{ task: '吃饭打屁' }]]
    ]
  },
  message: '更新成功'
}))
// Mock.mock('/api/auth/roles', 'get', genRoles)
Mock.mock('/api/home/swiperInfo', 'get', getSwiperInfo)

Mock.mock('/api/media/list', 'get', {"code":200,"msg":null,"data":{"current":1,"totalPages":3,"list":[{"path":"/upload/2021/08/20210824220629997.jpg","id":1},{"path":"/upload/2021/08/20210825055716812.jpg","id":2},{"path":"/upload/2021/08/20210825070335950.jpg","id":3}]}})