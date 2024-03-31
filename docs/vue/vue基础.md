---
outline: deep
---

# vue基础

## 简介

Vue.js（读音 /vjuː/, 类似于 view）是一个构建数据驱动的 web 界面的渐进式框架。Vue.js
的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。

> 渐进式 是指可以按需引入vue的部分功能，而不必引入整个框架

MVVM 模式（Model-View-ViewModel）

- Model：数据层（存储数据及对数据的处理如增删改查）
- View：视图层（页面展示）
- ViewModel：视图模型（数据绑定，同步数据）

## 创建一个vue应用

```sh
pnpm create vue@latest

cd <your-project-name>
pnpm install
pnpm format
pnpm dev
```

示例：

```sh
PS D:\workspace\vue3\projects> pnpm create vue@latest
../../../.pnpm-store/v3/tmp/dlx-8656     |   +1 +
../../../.pnpm-store/v3/tmp/dlx-8656     | Progress: resolved 1, reused 0, downloaded 1, added 1, done

Vue.js - The Progressive JavaScript Framework

√ 请输入项目名称： ... vue3-demo
√ 是否使用 TypeScript 语法？ ... 否 / 是
√ 是否启用 JSX 支持？ ... 否 / 是
√ 是否引入 Vue Router 进行单页面应用开发？ ... 否 / 是
√ 是否引入 Pinia 用于状态管理？ ... 否 / 是
√ 是否引入 Vitest 用于单元测试？ ... 否 / 是
√ 是否要引入一款端到端（End to End）测试工具？ » 不需要
√ 是否引入 ESLint 用于代码质量检测？ ... 否 / 是
√ 是否引入 Prettier 用于代码格式化？ ... 否 / 是
√ 是否引入 Vue DevTools 7 扩展用于调试? (试验阶段) ... 否 / 是

正在初始化项目 D:\workspace\vue3\projects\vue3-demo...

项目初始化完成，可执行以下命令：

  cd vue3-demo
  pnpm install
  pnpm format
  pnpm dev

PS D:\workspace\vue3\projects>
```
