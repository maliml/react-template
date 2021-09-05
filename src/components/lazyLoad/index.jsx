import React, { lazy, Suspense } from 'react';

export default function lazyLoad(creatorModule) {
  const Module = lazy(creatorModule);
  return function Fn(props) {
    return (
      <Suspense fallback={<div style={{textAlign:'center',paddingTop:'20px'}}>努力加载中...</div>}>
        <Module {...props} />
      </Suspense>
    );
  };
}

