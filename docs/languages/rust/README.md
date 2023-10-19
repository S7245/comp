# Rust

- [Rust PlayGround](https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn+main%28%29+%7B%0A++++println%21%28%22Hello%2C+world%21%22%29%3B%0A%7D)

安装


```sh
# [Mac、Linux](https://www.rust-lang.org/zh-CN/tools/install)
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# 升级 Rust，[Rust文档](https://rust-lang.github.io/rustup/)
rustup update

# 卸载 Rust
rustup self uninstall
```

## Cargo：Rust 的构建工具和包管理器

- `cargo build`： 可以构建项目。
- `cargo run`： 可以运行项目。
- `cargo test`： 可以测试项目。
- `cargo doc`： 可以为项目构建文档。
- `cargo publish`： 可以将库发布到 crates.io。


## 基础入门

**新建项目**

在`Rust`开发环境中编写一个小应用。首先用 `Cargo` 创建一个新项目。\
在您的终端中执行: `cargo new hello-rust`

```
.
├── Cargo.lock
├── Cargo.toml // 为 Rust 的清单文件。其中包含了项目的元数据和依赖库。
└── src
 	└── main.rs // 为编写应用代码的地方。
```


**添加依赖**

> 在 Rust 中，我们通常把包称作`crates`。可以从[crates.io](https://crates.io/)中获取其他依赖。

添加[ferris-says](https://crates.io/crates/ferris-says)库，我们在 `Cargo.toml` 文件中添加以下信息：

```rust
[dependencies]
ferris-says = "0.3.1"
```

运行`cargo build`安装该依赖。要使用该依赖库，在`main.rs`文件中添加下面这行代码：

```rust
use ferris_says::say; //这样我们就可以使用 ferris-says crate 中导出的 say 函数了。
```

### Demo

```rust
use ferris_says::say;
use std::io::{stdout,BufWriter};

fn main() {
    let stdout = stdout();
    let message = String::from("Hello World!");
    let width = message.chars().count();

    let mut writer = BufWriter::new(stdout.lock());
    say(&message, width, &mut writer).unwrap();
}

/*
    Finished dev [unoptimized + debuginfo] target(s) in 0.26s
     Running `target/debug/hello-rust-20231017`
 ______________
< Hello World! >
 --------------
        \
         \
            _~^~^~_
        \) /  o o  \ (/
          '_   -   _'
          / '-----' \
 *  终端将被任务重用，按任意键关闭。
*/
```

## 资料

- [Rust示例](https://doc.rust-lang.org/rust-by-example/)
- [The Rust Programming Language](https://doc.rust-lang.org/book/index.html)













