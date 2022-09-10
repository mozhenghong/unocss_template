import React from 'react';
import { LoginPage } from '@gyzn/coal-components';

export default () => (
  <LoginPage 
    title="智慧闸机管理系统" 
    tooltip="请联系管理员150XXXXXXXX进行找回" 
    backgroundUrl="https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg"
    onFinish={(values)=>console.log(values)}
  />
)