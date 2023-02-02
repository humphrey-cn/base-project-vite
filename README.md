<!--
 * @Author: Humphrey humphrey_cn@163.com
 * @Date: 2023-01-31 14:06:56
 * @LastEditors: Humphrey humphrey_cn@163.com
 * @LastEditTime: 2023-02-02 13:52:45
 * @Description: 项目说明文档
-->

# Vue 3 + TypeScript + Vite 构建的基础项目框架

## 项目启动

```shell
npm install # 安装依赖
npm run dev # 运行项目
npm run build # 打包项目
npm run preview # 运行打包后的项目
```

## 目录结构说明

## 环境变量

[Vite](https://cn.vitejs.dev/guide/env-and-mode.html) 在一个特殊的 `import.meta.env` 对象上暴露了环境变量。有一些默认的内置变量

```ts
import.meta.env.MODE: {string} 应用运行的模式。
import.meta.env.BASE_URL: {string} 部署应用时的基本 URL。他由 base 配置项决定。
import.meta.env.PROD: {boolean} 应用是否运行在生产环境。
import.meta.env.DEV: {boolean} 应用是否运行在开发环境 (永远与 import.meta.env.PROD相反)。
import.meta.env.SSR: {boolean} 应用是否运行在 server 上。
```

其余环境变量在 `.env` | `.env.*` 中声明定义，使用 `import.meta.env.XXX` 去获取

> 定义的每一个环境变量都需要在 `src/env.d.ts` 中声明一下类型

## 代码提交规范

[Git - Commit message 提交规范](https://blog.csdn.net/weixin_46652769/article/details/128828716)

**Git 每次提交代码，都要写 Commit message（提交说明），否则就不允许提交。**

> Commit message 需要包括三个字段：`type`（必需）、`scope`（可选）和 `subject`（必需）

- type: 用于说明 commit 的类别，只允许使用下面 7 个标识。

  ```
  feat：新功能（feature）
  fix：修补 bug
  docs：文档（documentation）
  style： 格式（不影响代码运行的变动）
  refactor：重构（即不是新增功能，也不是修改 bug 的代码变动）
  test：增加测试
  chore：构建过程或辅助工具的变动
  ```

- scope: 用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。

- subject: 是 commit 目的的简短描述，不超过 50 个字符。

> 还有一种特殊情况，如果当前 commit 用于撤销以前的 commit，则必须以 revert: 开头，后面跟着被撤销 Commit message

```shell
# 示例
git commit # 回车
# 进入vi编辑器，可以写多行。
revert: feat(pencil): add xxx
# 空一行
This reverts commit 667ecc1654a317a13331b17617d973392f415f02.
```

## JSX、TSX

[文档](https://github.com/vuejs/babel-plugin-jsx)
