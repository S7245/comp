# ChatGPT

**ChatGPT应用场景：**

- ChatGPT对于语言的翻译。
- 让GPT给出学习路线（如何学习一门语言并且给出学习的时间线）。
- GPT可以支持理解文档，可以对大公司的知识库进行理解学习，当员工需要了解某一块业务的时候，就可以通过对话来进行识别查找。
- 客服机器人。
- 少数语言保护，比如说沪语、藏语。
- 做多语音标注，比如说藏族人想要学习汉语，可以通过藏语标注来进行学习。
- 把GPT的翻译能力给应用起来。

**中国为什么做不出自己的GPT？**

* 中文互联网产生的数据也很多，但质量还有差距，加之国内的数据大量储存于移动端app中，数据比较难抓取，而互联网巨头之间的数据又是相互封闭的，数据孤岛化的情况也比较严重。
* 算力是另一个巨大的挑战，ChatGPT需要至少3万张英伟达a100卡的算力，这是巨大的一笔投入。
* 政治制度区别，整体的大环境影响。
* 国内竞争层次比较低，不够激烈。

**GPT难点在哪？**

- `语料库`的获取和理解。
- `模型算法`。
- `运算量`：大的运算量就需要多的贵的显卡 *（PS：就是需要钱，但是高端的显卡美国准备对中国进行封禁）*。

## 什么是大模型

大模型是一个系统工程，算法、数据和算力这三个因素至关重要。

![](https://blogs7245-1256587996.cos.ap-guangzhou.myqcloud.com/img/WX20230321-1.webp)

## Docusaurus 博客安装

```text
Module parse failed: Unexpected token (961:17)
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
|       'special-attr': [],
|       'attr-value': {
>         pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
|         inside: {
|           'punctuation': [{
client (webpack 5.89.0) compiled with 1 error
```

```sh
# https://github.com/facebook/docusaurus/issues/9459
npm i acorn@8.10.0
```