# wepy-template


## 安装

```
git clone https://github.com/Hanson/wepy-template.git my-project
cd my-project
npm install

// 开发环境
npm run dev

// 正式环境
npm run build
```

## 功能

* 自动登录（每次进小程序都会进行登录）`store/user.js`
* 使用自定义 `tabbar`，效果很好 `custom-tab-bar/index.wpy`
* token 失效接口出现 401 状态码时，自动登录并重试上一个接口



## 重要提醒

1. 使用`微信开发者工具`-->`添加项目`，`项目目录`请选择`weapp`目录。

2. `微信开发者工具`-->`项目`-->关闭`ES6转ES5`。 **重要：漏掉此项会运行报错。**

3. `微信开发者工具`-->`项目`-->`关闭上传代码时样式自动补全`。 **重要：某些情况下漏掉此项也会运行报错。**

4. `微信开发者工具`-->`项目`-->`关闭代码压缩上传`。 **重要：开启后，会导致真机computed, props.sync 等等属性失效。**（注：压缩功能可使用WePY提供的build指令代替，详见后文相关介绍以及Demo项目根目录中的`wepy.config.js`和`package.json`文件。）

5. 本地项目根目录运行`npm run dev`，开启实时编译。（注：如果同时在`微信开发者工具`-->`设置`-->`编辑器`中勾选了`文件保存`时自动编译小程序，将可以`实时预览`，非常方便。）

6. `遇到：VM322:1 TypeError: Cannot read property 'invoke' of undefined，降低小程序版本库2.16.0（项目详情 --> 本地项目 --> 调试基础库）`
