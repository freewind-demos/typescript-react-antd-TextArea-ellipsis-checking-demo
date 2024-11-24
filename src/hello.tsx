import { Input } from 'antd';
import type { TextAreaRef } from 'antd/es/input/TextArea';
import React, { useEffect, useRef, useState } from 'react';

function useIsOverflow<T extends HTMLElement>(elementRef: React.RefObject<T>) {
    const [isOverflowing, setIsOverflowing] = useState(false);

    const checkOverflow = () => {
        const element = elementRef.current;
        if (element) {
            const isTextOverflowing = element.scrollHeight > element.offsetHeight;
            console.log('Checking overflow:', {
                scrollHeight: element.scrollHeight,
                offsetHeight: element.offsetHeight,
                isOverflowing: isTextOverflowing
            });
            setIsOverflowing(isTextOverflowing);
        }
    };

    useEffect(checkOverflow, []);

    return {
        isOverflowing,
        checkOverflow
    };
}

function useAntdTextArea() {
    const textAreaRef = useRef<TextAreaRef>(null);
    const textAreaElementRef = useRef<HTMLTextAreaElement | null>(null);

    useEffect(() => {
        // 更新原生textarea元素的引用
        const textArea = textAreaRef.current?.resizableTextArea?.textArea ?? null;
        if (textArea !== textAreaElementRef.current) {
            textAreaElementRef.current = textArea;
        }
    }, [textAreaRef]);

    return {
        textAreaRef,
        textAreaElementRef
    };
}

export default function Hello() {
    const { textAreaRef, textAreaElementRef } = useAntdTextArea();
    const { isOverflowing, checkOverflow } = useIsOverflow(textAreaElementRef);

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
