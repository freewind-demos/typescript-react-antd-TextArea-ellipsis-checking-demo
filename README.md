TypeScript React AntDesign TextArea Demo
=================================

演示如何检测Ant Design的TextArea组件内容是否超出maxRows限制。

关键点：
1. 使用通用的`useIsOverflow` hook检测任何HTML元素的内容是否溢出
2. 使用`useAntdTextArea` hook处理antd TextArea的特殊性，将原生textarea的引用暴露给`useIsOverflow`
   - 使用`??`操作符确保在找不到textarea时返回`null`
3. 通过比较`scrollHeight`和`offsetHeight`来判断内容是否溢出
4. 使用`TextAreaRef`类型（从`antd/es/input/TextArea`导入）来正确定义ref的类型
5. 在`useEffect`中进行初始检测，React会在合适的时机执行它

运行：
```
npm install
npm start
```

It will open page on browser automatically.
