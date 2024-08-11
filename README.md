# NA Copilot

社团内部管理与辅助决策系统

## 快速开始

1. 下载项目依赖

    ```bash
    npm install
    # or
    yarn
    ```

2. 编辑`.env`文件，配置数据库连接

3. 生成数据库模型

    ```bash
    npx prisma db pull
    # or
    yarn prisma db pull
    ```

4. 启动项目

    ```bash
    npm run dev
    # or
    yarn dev
    ```

5. 在浏览器中打开 [http://localhost:3000](http://localhost:3000) 即可查看页面预览

## 目录解释

- **prisma** -- 数据库模型目录
- **public** -- 静态资源目录
- **src** -- 项目源代码目录
  - **app** -- page 页面与 api 接口路由挂载目录
    - **layout.js** -- 入口文件
    - **page.js** -- 主页面
    - **其他自定义目录** -- 如 user 目录，为新页面
      - **page.js** -- 其他页面的页面文件，如 user 下面的 `page.js` ，直接访问 `/user` 即可
      - 继续嵌套
    - **api** -- api 接口定义目录
      - **其他 api 接口目录** -- 如 user 目录，为 user 的接口
        - **route.js** -- 其他接口的接口定义文件，如 `./api/user` 下面的 `route.js` ，可直接通过 `/api/user` 访问接口，类似于传统后端的 controller 层
  - **components** -- 组件目录
  - **style** -- 页面样式目录
  - **utils** -- 前端中间件目录
  - **middleware.js** -- 后端中间件文件
  - **service** -- 类似传统后端的 service 层目录
  - **dao** -- 类似传统后端的 dao 层目录
