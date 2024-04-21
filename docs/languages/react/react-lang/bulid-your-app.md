# 创建项目

## Routing

### [Custom App](https://nextjs.org/docs/pages/building-your-application/routing/custom-app)

### [API Routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes)

API Routes can be deployed as Serverless Functions (also known as Lambdas).

**Do Not Fetch an `API Route` from `getStaticProps` or `getStaticPaths`**

`getStaticProps` and `getStaticPaths` run only on the server-side and will never run on the client-side. 
Moreover, these functions will not be included in the JS bundle for the browser. 
That means you can write code such as direct database queries without sending them to browsers.

## Data Fetching
[Data Fetching](https://nextjs.org/docs/pages/building-your-application/data-fetching)

**getStaticProps**

- In development (`npm run dev`), `getStaticProps` runs on every request.
- In production, `getStaticProps` runs at build time. 
However, this behavior can be enhanced using the `fallback key` returned by [getStaticPaths](https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation)

`getStaticProps` can only be exported from a [page](https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts). You can’t export it from non-page files.

`getStaticProps` **only runs on the server-side**. It will never run on the client-side.

