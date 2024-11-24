TypeScript React AntDesign TextArea Demo
=================================

演示如何检测Ant Design的TextArea组件内容是否超出maxRows限制。

关键点：
1. 使用`ref.current.resizableTextArea.textArea`获取原生textarea元素
2. 通过比较`scrollHeight`和`offsetHeight`来判断内容是否溢出
3. 在`useEffect`中进行初始检测，React会在合适的时机执行它
4. 使用`TextAreaRef`类型（从`antd/es/input/TextArea`导入）来正确定义ref的类型

运行：
```
npm install
npm start
```

It will open page on browser automatically.
