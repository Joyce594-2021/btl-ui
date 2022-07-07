import React from 'react';
import { Badge, dot } from '..';
import { DemoBlock } from '../../../demo';
import './index.less';


export default () => {
  return (
    <>
      <DemoBlock title="基础用法">
        <Badge content="5">
          <div className="box" />
        </Badge>
        <Badge content="新">
          <div className="box" />
        </Badge>
        <Badge content={dot}>
          <div className="box" />
        </Badge>
      </DemoBlock>

      <DemoBlock title="带边框">
        <Badge content="更新" bordered>
          <div className="box" />
        </Badge>
        <Badge content={dot} bordered>
          <div className="box" />
        </Badge>
      </DemoBlock>

      <DemoBlock title="独立展示">
        <Badge content="独立展示" style={{ margin: '12px' }}></Badge>
      </DemoBlock>

      <DemoBlock title="自定义颜色与偏移量">
        <Badge content={dot}>
          <div className="box" />
        </Badge>
        <Badge content={dot} color="yellow" style={{ '--top': '100%' }}>
          <div className="box" />
        </Badge>
        <Badge content={dot} color="blue" style={{ '--right': '100%', '--top': '100%' }}>
          <div className="box" />
        </Badge>
        <Badge content={dot} color="green" style={{ '--right': '100%' }}>
          <div className="box" />
        </Badge>
      </DemoBlock>
    </>
  );
}