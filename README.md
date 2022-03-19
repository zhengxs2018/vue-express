# Vue Express

[![TypeScript](https://img.shields.io/badge/lang-typescript-informational?style=flat)](https://www.typescriptlang.org)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

基于 [Vue 3][vuejs] 的研发解决方案，支持多种模式研发，让前端开发更加简单规范。

**技术栈**

- [vue 3.x][vuejs]
- [vue-router 4.x](https://router.vuejs.org/)
- [pinia](https://pinia.vuejs.org/)
- [uniapp](https://uniapp.dcloud.io/)
- [tailwindcss](https://tailwindcss.com/)
- [sass-bem](https://github.com/zgabievi/sass-bem) - 即将引入
- [normalizr](https://github.com/paularmstrong/normalizr) - 即将引入

**依赖关系图**

![依赖关系图](./dependency-tree.png)

- `@zhengxs/runtime-dom` - 基于浏览器，支持 WEB 应用开发
- `@zhengxs/runtime-uni` - 基于 [uni-app][uni-app] 技术，支持跨端应用开发
- `@zhengxs/core` - 核心功能与跨平台组件
- `@zhengxs/shared` - 支持不同环境下使用的 vue3 类型和函数
- `@zhengxs/cross-env` - 用于抹平不同运行时的 API 调用
- `@zhengxs/util` - 与环境无关的工具函数

## 启动项目

你需要安装 [Node.js][nodejs] 的版本为 >= 14.8+.

克隆此仓库后运行:

```bash
# 安装依赖
$ yarn install

# 启动依赖模块打包
$ yarn dev

# 启动移动端应用
$ yarn vant-app dev

# 启动跨端应用
$ yarn uni-app dev
```

在 package.json 文件的 scripts 部分还有一些其他脚本可用.

## 关于项目

本项目采用 [monorepo](https://en.wikipedia.org/wiki/Monorepo) 的架构模式管理

- **packages** NPM 模块目录，可以直接发布到 NPM 上
- **templates** 工程样板目录，计划接入 [degit][degit] 工具

应用和模块的目录结构不一样，编译方式也不一样.

模块采用 [tsc][tsc] 进行编译和打包，项目则由使用技术决定。

### 纯 WEB 应用

纯 WEB 应用只能在 浏览器 或 webview 上运行的应用。

<details>
  
  <summary>点击展开</summary>

```sh
src/
├── assets/                          # 全局资源
├── components/                      # 全局组件
├── composables/                     # 组合函数
├── config/  
│   ├── clientAppEnhance.ts          # 应用启动前的逻辑处理
│   └── routes.ts                    # 路由配置
├── services/
│   ├── api/  
│   │   ├── data/                    # 模拟数据
│   │   ├── *.mock.ts                # 模拟函数
│   │   └── *.ts                     # 请求函数
│   ├── core/          
│   │   ├── errors.ts                # 异常类
│   │   └── http.ts                  # Axios 实例
│   ├── helpers/                     # 助手函数
│   └── types                        # 请求类型
├── shared/
│   ├── types                        # 业务类型
│   └── util                         # 公共函数
├── store/                           # 全局状态
├── views/                           # 路由视图
├── App.vue
├── main.ts
└── env.d.ts
```
 
</details>


### 跨端类应用

跨端类应用使用 [uni-app][uni-app] 的技术进行开发。

<details>
  
  <summary>点击展开</summary>
  
```sh
src/
├── components/                      # 全局组件
├── composables/                     # 组合函数
├── config/  
│   ├── clientAppEnhance.ts          # 应用启动前的逻辑处理
│   └── routes.ts                    # 路由配置
├── services/
│   ├── api/  
│   │   ├── data/                    # 模拟数据
│   │   ├── *.mock.ts                # 模拟函数
│   │   └── *.ts                     # 请求函数
│   ├── core/          
│   │   ├── errors.ts                # 异常类
│   │   └── http.ts                  # Axios 实例
│   ├── helpers/                     # 助手函数
│   └── types                        # 请求类型
├── shared/
│   ├── types                        # 业务类型
│   └── util                         # 公共函数
├── static/                          # 静态资源
├── store/                           # 全局状态
├── pages/                           # 小程序页面
├── App.vue
├── main.ts
├── manifest.json                    # 应用配置
├── pages.json                       # 页面配置
├── uni.scss                         # 主题变量
└── env.d.ts
```

</details>

### 模块目录

模块主要是抽离公共，与业务无关的公共代码和函数。

- `tsconfig.build.json` 编译配置，约定编译配置出口
- `tsconfig.cjs.json` CommonJS 风格的代码输出配置
- `tsconfig.esm.json` ESM 风格的代码输出配置

<details>
  
  <summary>点击展开</summary>
  
```sh
package/
├── src/                             # 源码目录
├── package.json
├── tsconfig.build.json              # 模块编译配置
├── tsconfig.cjs.json                # 输出 CJS 模块
└── tsconfig.esm.json                # 输出 ESM 模块
```

</details>

**tsconfig** 开头的都是提供给 [tsc][tsc] 工具使用的配置，可以点[这里][tsconfig]了解更多。


## 对于 vscode 用户

### 启用多根工作区

`code.code-workspace` 是 VSCode 的工作区配置文件，使用工具区的好处是可以将目录进行拆分显示。

```sh
# 可以直接使用 VSCode 打开
$ code ./code.code-workspace
```

同时工作区还预设了启动配置，使用 `运行和调试` 功能直接启动项目。

可以点击[这里](https://code.visualstudio.com/docs/editor/multi-root-workspaces)了解更多工作区的介绍。

### 更好的类型提示

> 推荐安装并手动启用 [volar][volar] 插件

1. 默认停用 [vetur][vetur] 插件及相关配置.
2. 推荐启用 [volar][volar] 的低能耗 (**lowPowerMode**) 功能，为节能减排做贡献
3. 推荐禁用 [volar][volar] 的 `autoCompleteRefs` 功能，防止意外导入
4. 推荐启用 [托管模式][takeover-mode]，减少干扰.

以上所有的配置都可以点[这里](./.vscode/settings.json)修改.

## 关于依赖图生成

依赖关系图 使用 [package-dependency-graph](https://github.com/plantain-00/package-dependency-graph) 模块生成.

因国内网络访问 github 问题，不再内置此模块，需要的可以使用 [cnpm](https://npmmirror.com/) 进行全局安装。

## License

[MIT](./LICENSE)

[nodejs]: https://nodejs.org/
[uni-app]: https://uniapp.dcloud.io/
[vetur]: https://marketplace.visualstudio.com/items?itemName=octref.vetur
[volar]: https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar
[takeover-mode]: https://vuejs.org/guide/typescript/overview.html#takeover-mode
[vuejs]: https://vuejs.org/
[degit]: https://github.com/Rich-Harris/degit
[tsc]: https://www.typescriptlang.org/docs/handbook/compiler-options.html
[tsconfig]: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#handbook-content
