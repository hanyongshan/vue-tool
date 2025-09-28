#hystool
一个elment-ui二次封装的组件库

- 全局导入

```js
import HysTool from 'hystool';
import 'hystool/dist/hystool.css';

Vue.use(HysTool);
```

- 在 scripts 中新增一条 打包命令

```js
"lib": "vue-cli-service build --target lib packages/index.js"

```

- 发布到 npm

修改 package.json 文件

```js
"private": false,
"main": "dist/hystool.umd.min.js",
"author": {
  "name": ""
},

```

增加 ``.npmignore`文件

```js
# 忽略目录
examples/
packages/
public/

# 忽略指定文件
vue.config.js
babel.config.js
*.map

```

- npm 发布

```js
npm login
npm publish

```
