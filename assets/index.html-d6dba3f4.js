import{_ as o,M as i,p as l,q as c,R as n,t as s,N as e,a1 as t}from"./framework-8c5a1526.js";const p={},r=n("h1",{id:"rust",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#rust","aria-hidden":"true"},"#"),s(" Rust")],-1),u={href:"https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn+main%28%29+%7B%0A++++println%21%28%22Hello%2C+world%21%22%29%3B%0A%7D",target:"_blank",rel:"noopener noreferrer"},d=t(`<p>安装</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># [Mac、Linux](https://www.rust-lang.org/zh-CN/tools/install)</span>
<span class="token function">curl</span> <span class="token parameter variable">--proto</span> <span class="token string">&#39;=https&#39;</span> <span class="token parameter variable">--tlsv1.2</span> <span class="token parameter variable">-sSf</span> https://sh.rustup.rs <span class="token operator">|</span> <span class="token function">sh</span>

<span class="token comment"># 升级 Rust，[Rust文档](https://rust-lang.github.io/rustup/)</span>
rustup update

<span class="token comment"># 卸载 Rust</span>
rustup self uninstall
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cargo-rust-的构建工具和包管理器" tabindex="-1"><a class="header-anchor" href="#cargo-rust-的构建工具和包管理器" aria-hidden="true">#</a> Cargo：Rust 的构建工具和包管理器</h2><ul><li><code>cargo build</code>： 可以构建项目。</li><li><code>cargo run</code>： 可以运行项目。</li><li><code>cargo test</code>： 可以测试项目。</li><li><code>cargo doc</code>： 可以为项目构建文档。</li><li><code>cargo publish</code>： 可以将库发布到 crates.io。</li></ul><h2 id="基础入门" tabindex="-1"><a class="header-anchor" href="#基础入门" aria-hidden="true">#</a> 基础入门</h2><p><strong>新建项目</strong></p><p>在<code>Rust</code>开发环境中编写一个小应用。首先用 <code>Cargo</code> 创建一个新项目。<br> 在您的终端中执行: <code>cargo new hello-rust</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.
├── Cargo.lock
├── Cargo.toml // 为 Rust 的清单文件。其中包含了项目的元数据和依赖库。
└── src
 	└── main.rs // 为编写应用代码的地方。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>添加依赖</strong></p>`,9),k=n("code",null,"crates",-1),v={href:"https://crates.io/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://crates.io/crates/ferris-says",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"Cargo.toml",-1),h=t(`<div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token punctuation">[</span>dependencies<span class="token punctuation">]</span>
ferris<span class="token operator">-</span>says <span class="token operator">=</span> <span class="token string">&quot;0.3.1&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>运行<code>cargo build</code>安装该依赖。要使用该依赖库，在<code>main.rs</code>文件中添加下面这行代码：</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">use</span> <span class="token namespace">ferris_says<span class="token punctuation">::</span></span>say<span class="token punctuation">;</span> <span class="token comment">//这样我们就可以使用 ferris-says crate 中导出的 say 函数了。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="demo" tabindex="-1"><a class="header-anchor" href="#demo" aria-hidden="true">#</a> Demo</h3><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">use</span> <span class="token namespace">ferris_says<span class="token punctuation">::</span></span>say<span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>io<span class="token punctuation">::</span></span><span class="token punctuation">{</span>stdout<span class="token punctuation">,</span><span class="token class-name">BufWriter</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> stdout <span class="token operator">=</span> <span class="token function">stdout</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> message <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> width <span class="token operator">=</span> message<span class="token punctuation">.</span><span class="token function">chars</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> <span class="token keyword">mut</span> writer <span class="token operator">=</span> <span class="token class-name">BufWriter</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span>stdout<span class="token punctuation">.</span><span class="token function">lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">say</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>message<span class="token punctuation">,</span> width<span class="token punctuation">,</span> <span class="token operator">&amp;</span><span class="token keyword">mut</span> writer<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*
    Finished dev [unoptimized + debuginfo] target(s) in 0.26s
     Running \`target/debug/hello-rust-20231017\`
 ______________
&lt; Hello World! &gt;
 --------------
        \\
         \\
            _~^~^~_
        \\) /  o o  \\ (/
          &#39;_   -   _&#39;
          / &#39;-----&#39; \\
 *  终端将被任务重用，按任意键关闭。
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="资料" tabindex="-1"><a class="header-anchor" href="#资料" aria-hidden="true">#</a> 资料</h2>`,6),g={href:"https://doc.rust-lang.org/rust-by-example/",target:"_blank",rel:"noopener noreferrer"},_={href:"https://doc.rust-lang.org/book/index.html",target:"_blank",rel:"noopener noreferrer"};function f(x,y){const a=i("ExternalLinkIcon");return l(),c("div",null,[r,n("ul",null,[n("li",null,[n("a",u,[s("Rust PlayGround"),e(a)])])]),d,n("blockquote",null,[n("p",null,[s("在 Rust 中，我们通常把包称作"),k,s("。可以从"),n("a",v,[s("crates.io"),e(a)]),s("中获取其他依赖。")])]),n("p",null,[s("添加"),n("a",m,[s("ferris-says"),e(a)]),s("库，我们在 "),b,s(" 文件中添加以下信息：")]),h,n("ul",null,[n("li",null,[n("a",g,[s("Rust示例"),e(a)])]),n("li",null,[n("a",_,[s("The Rust Programming Language"),e(a)])])])])}const R=o(p,[["render",f],["__file","index.html.vue"]]);export{R as default};
