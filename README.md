This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## 目录解释

**prisma** -- 数据库模型文件
**src** -- 存放代码的文件
- **app** -- 页面与接口路由挂载文件
    - **layout.js** -- 入口文件
    - **page.js** -- 主页面
    - **其他自定义文件夹** -- 如user，为新页面
        - **page.js** -- 其他页面的页面文件，如user下面的page.js直接/user即可访问
        - 继续嵌套
    - **api** -- api接口定义文件夹
        - **其他api接口文件夹** -- 如user，为user的接口
            - **route.js** -- 其他接口的接口定义文件，如/api/user下面的route.js，可直接通过api/user访问接口，类似于controller层
- **components** -- 组件文件夹
- **utils** -- 前端中间件工具
- **middleware.js** -- 后端访问中间件
- **dao** -- dao层
- **service** -- service层
- **style** -- 定义一些css文件