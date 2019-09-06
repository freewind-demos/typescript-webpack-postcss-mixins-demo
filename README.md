TypeScript Webpack "postcss-initial" Demo
=========================================

这个插件是为了支持`initial`关键字。因为有的浏览器可能还不支持它，使用该插件可以自动把`initial`对应的值追加或替换到相应的css rule中。

我本来以为它有办法针对不同的element生成不同的css属性（比如input不同类型可能需要特别对待），但实际上只是生成了固定的一些属性。

现在浏览器大多数支持initial，感觉这个不是很有用了。

```
npm install
npm run demo
```
