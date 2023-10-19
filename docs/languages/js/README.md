# JavaScript

- `.js`：这是一个 JavaScript 文件。
- `.jsx`：表示这是一个 JavaScript XML 文件。

> `JavaScript XML` 是React组件内部构建标签的类XML语法。
> 可以理解为React提供的语法糖，可以让编译器更方便快速的选择编译方式。\
> JavaScript 是能够被浏览器直接识别的，
> `JavaScript XML`需要经过编译器（webpack等）转换成 JavaScript。


- `.tx`： 表示这是一个 TypeScript 文件。
- `.tsx`：表示这是一个 TypeScript 文件，但它同时还包含了 `JavaScript XML（JSX）`。

> `.ts` 的文件，内容上不支持 `<div>` 这种HTML语法，会报错的，
> 而且VS Code这类代码编辑器也不会提供相关代码提示和补全的功能。
> 反之 `.tsx` 的文件，在遵循TypeScript的基础上，支持 JSX 语法。\
> 辅助的函数文件使用`.ts`即可；React组件方面，还是必须使用`.tsx`。

[TypeScript官方文档](https://www.typescriptlang.org/zh/)