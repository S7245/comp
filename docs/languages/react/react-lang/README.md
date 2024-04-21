# React

## 开始

- [Remix](https://react.docschina.org/learn/start-a-new-react-project#remix)：是一个具有嵌套路由的全栈式 React 框架。
它可以把你的应用分成嵌套部分，该嵌套部分可以并行加载数据并响应用户操作进行刷新。
- [Gatsby](https://react.docschina.org/learn/start-a-new-react-project#gatsby)：是一个快速的支持 CMS(`内容管理系统，Content Management System`) 的网站的 React 框架。
- [Expo](https://react.docschina.org/learn/start-a-new-react-project#expo) ：是一个 React 框架，可以让你创建具有真正原生 UI 的应用，包括 Android、iOS，以及 Web 应用。

**代码检查(Linting)**

- [ESLint](https://eslint.org/)：是一款流行且开源的 JavaScript 代码检查工具。

## 基础教程

### 创建 Next.js App


```sh
# 安装 [react-devtools](https://www.npmjs.com/package/react-devtools)包
pnpm install -g react-devtools
```

创建[Next.js](https://nextjs.org/)框架。`Next.js` 是一个全栈式的 React 框架。

```sh
# 创建Next.js项目
npx create-next-app@latest
# Starts the development server.
npm run dev
# Builds the app for production.
npm run build
# Runs the built app in production mode.
npm start
```

> [Next.js 教程](https://nextjs.org/learn/foundations/about-nextjs) \
> [Next.js 应用](https://nextjs.org/docs/app/building-your-application/deploying) 部署到 `Node.js`、`serverless` 和`自己的服务器`。\
> [静态Next.js 应用](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports) 部署在任何支持静态服务的地方。

### 页面之前导航

[\<Link\>](https://nextjs.org/docs/api-reference/next/link)

```js
// index.js

import Link from "next/link";
export default function FirstPost() {
    return (
        <>
        <h1>First page</h1>
        <h2>
            <Link href="/">Back Home</Link>
        </h2>
        </>
    );
}

// /posts/first-post.js

<h1 className={styles.title}>
	Read <Link href="/posts/first-post"> this page!</Link>
</h1>
```

### Assets,Metadata,CSS

- 在`next.js`中添加静态文件。
- 在[pages/_app.js](https://nextjs.org/docs/pages/building-your-application/routing/custom-app)中添加[全局CSS](https://nextjs.org/docs/basic-features/built-in-css-support#adding-a-global-stylesheet)

```
.
├── README.md
├── package-lock.json
├── package.json
├── pages
│   ├── index.js
│   └── posts
│       └── first-post.js
├── public
│   ├── favicon.ico
│   ├── images
│   │   └── profile.jpg <=== 资源文件在/public/文件夹里
│   └── vercel.svg
└── styles   <===== 这里创建CSS
    ├── Home.module.css
    └── global.css <===== 全局CSS
```

创建Image的组件：

```js
import Image from "next/image";
const YourComponent = () => (
    <Image src="/images/profile.jpg"
        height={144}
        width={144}
        alt="Your Name"></Image>
);
```

- 每个页面中自定义`<head>`。
- 用[CSS Modules](https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css)创建自定义React组件。


`Next.js`页面中接入第三方JS：

```js
// pages/posts/first-post.js

import Head from "next/head";
import Script from "next/script";

export default function FirstPost() {
    return (
        <>
            <Head>
            </Head>
            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() =>
                    console.log(`script loaded correctly, window.FB has been populated`)
                }
            />
        </>
    );
}

```

#### Layout Component

> 要使用[CSS Modules](https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css)，CSS文件命名结尾规则：`XXX.module.css`。\
> `CSS Module`会自动生成唯一的`ClassName`，所以不用担心`ClassName`命名冲突。


创建：`layout.js`、`layout.module.css`:

```
.
├── components
│   ├── layout.js
│   └── layout.module.css
└── pages
    ├── index.js
    └── posts
        └── first-post.js
```

```js
// 在 layout.js 中创建 Layout Component。
export default function Layout({ children }) {
  return <div>{children}</div>;
}

// 在 first-post.js 中，添加 Layout Component
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
    </Layout>
  );
}
```

在`layout.module.css`中添加：

```css
.container {
  max-width: 36rem;
  padding: 0 1rem;
  margin: 3rem auto 6rem;
}
```

把 css 添加到 `layout.js`中：

```js
import styles from './layout.module.css';

export default function Layout({ children }) {
  return <div className={styles.container}>{children}</div>;
}
```

#### Global Styles

`CSS Modules` are useful for component-level styles. To load [Global CSS](https://nextjs.org/docs/basic-features/built-in-css-support#adding-a-global-stylesheet) 
to application

The reason that global CSS can't be imported outside of `pages/_app.js` is that global CSS affects all elements on the page.

If you were to navigate from the homepage to the `/posts/first-post` page, global styles from the homepage would affect `/posts/first-post` unintentionally.


#### CSS工具类

```
// Create styles/utils.module.css, Second, 
// let’s create a set of CSS utility classes (for text styles) 
// that can be re-used across multiple components.

.
└── styles
    ├── Home.module.css
    ├── global.css
    └── utils.module.css
```

### Pre-rendering and Data-fetching


- Pre-rendering： 静态渲染、服务端渲染
- 静态渲染：有数据、无数据
- [getStaticProps](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation)

We recommend using `Static Generation (with and without data)` whenever 
possible because your page can be built once and served by CDN, 
which makes it much faster than having a server render the page on every request.

You should ask yourself: "Can I pre-render this page ahead of a user's request?" 
If the answer is yes, then you should choose Static Generation.

On the other hand, Static Generation is not a good idea if you cannot pre-render 
a page ahead of a user's request. Maybe your page shows frequently updated data, 
and the page content changes on every request.

In that case, you can use Server-side Rendering. It will be slower, 
but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering 
and use client-side JavaScript to populate frequently updated data.

**getStaticProps**

If you do not need to pre-render the data, you can also use Client-side Rendering.

![](https://nextjs.org/static/images/learn/data-fetching/client-side-rendering.png)

This approach works well for user dashboard pages.

**getServerSideProps**

If you need to fetch data at `request time` instead of at `build time`.

![](https://nextjs.org/static/images/learn/data-fetching/server-side-rendering-with-data.png)

### Dynamic Routes(动态路由)

![](https://nextjs.org/static/images/learn/dynamic-routes/page-path-external-data.png)

![](https://nextjs.org/static/images/learn/dynamic-routes/how-to-dynamic-routes.png)

**Catch-all Routes**

Dynamic routes can be extended to catch all paths by adding three dots (...) inside the brackets. 

`pages/posts/[...id].js`: matches `/posts/a`, but also `/posts/a/b`, `/posts/a/b/c` and so on.

**API Routes**



## React 组件

- [\<Head\>](https://nextjs.org/docs/api-reference/next/head)
- [\<Script\>](https://nextjs.org/docs/basic-features/script)

## Useful Libs

- [gray-matter](https://github.com/jonschlinkert/gray-matter): 
- [SWR](https://swr.vercel.app/)：用于数据请求的 React Hooks 库。
- [date-fns](https://date-fns.org/)：format the date.

## Node.js

- [fs](https://nodejs.org/api/fs.html#fsreaddirsyncpath-options) is a Node.js module that lets you read files from the file system.
- [path](https://nodejs.org/api/path.html#pathjoinpaths) is a Node.js module that lets you manipulate file paths.
- [matter](https://www.npmjs.com/package/gray-matter) is a library that lets you parse the metadata in each markdown file.











