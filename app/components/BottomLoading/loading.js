import React, { Component } from 'react'
import './loading.less'

const BottomLoading = ({loadStatus, msg, ...props}) => {
  console.log('props', props);
  // 还差没有更多了
  return <div className={'load load-status-' + loadStatus}>
        <div className="load-msg">{"上拉加载更多"}</div>
    </div>
}

export default BottomLoading
