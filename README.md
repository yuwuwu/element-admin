### 环境依赖于 node 10.x.x  , 1.0<vue < 3.0 ,antd-vue 1.3.8, axios
##CSS

    命名：模板名_xxx.css
    全局样式、模板通用样式 CSS文件夹
    独立样式 页面自身文件夹
##JS文件头部注释规范
    /*
    * @Description: In User Settings Edit
    * @Author: your name
    * @LastEditors: your name
    * @Date: 2019-04-17 10:18:14
    * @LastEditTime: 2019-04-17 10:20:50
    */

``` bash

# Clone project
git clone

# Install dependencies
npm install

# 建议不要用cnpm  安装有各种诡异的bug 可以通过如下操作解决npm速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# serve with hot reload at localhost:9528
npm run dev

# build for production with minification 打包
# 发布修改utils/auth.js baseURL name值为空，本地为apiserve
npm run build

# build for production and view the bundle analyzer report 
npm run build --report
```
