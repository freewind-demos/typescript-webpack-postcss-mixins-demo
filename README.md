Webpack Config "postcss-import"  Demo
======================================

注意：
1. `@import`只能写在一个pcss文件的最顶端，写在某个rule的内部不会被解析（比如`#main { @import './hello.pcss' }`)
2.  如果跟其它postcss插件一起使用，该插件应该排在最前面

```
npm install
npm run demo
```
