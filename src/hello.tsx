import { Input } from 'antd';
import React from 'react';

export default function Hello() {
    return <Input.TextArea style={{ width: 400 }} defaultValue={'sdf'} autoSize={{ minRows: 1, maxRows: 6 }} />
};
