# vue-ts-demo

从零构建 vue2 项目，实现基本的登录退出功能, 和后台数据的增删改查

主要技术栈使用: vue2 vuex vue-router element typescript scss

其他技术使用: axios echarts moment seniverse(和风天气) 阿里图标

查看 [后台项目](https://github.com/5neverstop/node-koa)

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### 部署

scp -r ./vue.rar root@vue.beiyunjiang.top:/code/

ssh -l root 182.254.158.59 "cd /code && rm -rf vue && unrar x vue.rar && rm -rf vue.rar"
