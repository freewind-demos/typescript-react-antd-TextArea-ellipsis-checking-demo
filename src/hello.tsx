import { Input } from 'antd';
import type { TextAreaRef } from 'antd/es/input/TextArea';
import React, { useEffect, useRef, useState } from 'react';

export default function Hello() {
    const textAreaRef = useRef<TextAreaRef>(null);
    const [isOverflowing, setIsOverflowing] = useState(false);

    const checkOverflow = () => {
        // 注意：这里必须通过resizableTextArea.textArea来获取真实的textarea DOM元素
        // 因为antd的TextArea是一个包装组件，我们需要获取内部的原生textarea
        const textarea = textAreaRef.current?.resizableTextArea?.textArea;
        if (textarea) {
            // 当内容超出maxRows限制时，scrollHeight会大于offsetHeight
            const isTextOverflowing = textarea.scrollHeight > textarea.offsetHeight;
            console.log('Checking overflow:', {
                scrollHeight: textarea.scrollHeight,
                offsetHeight: textarea.offsetHeight,
                isOverflowing: isTextOverflowing
            });
            setIsOverflowing(isTextOverflowing);
        }
    };

    useEffect(checkOverflow, []);

    return (
        <div style={{ padding: 20 }}>
            <h3>TextArea Overflow Demo (maxRows: 4)</h3>
            <Input.TextArea
                ref={textAreaRef}
                style={{ width: 400 }}
                defaultValue={'第1行内容\n第2行内容\n第3行内容\n第4行内容\n第5行内容\n第6行内容'}
                autoSize={{ minRows: 1, maxRows: 4 }}
                onChange={checkOverflow}
            />
            <div style={{ marginTop: 8 }}>
                当前状态: <span style={{ color: isOverflowing ? 'red' : 'green' }}>
                    {isOverflowing ? '内容已超出4行限制！' : '内容在限制范围内'}
                </span>
            </div>
            <div style={{ marginTop: 8, color: '#666' }}>
                提示：当前内容有6行，超过了4行的限制
            </div>
        </div>
    );
}
