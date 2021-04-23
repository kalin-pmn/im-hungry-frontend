import React from 'react'
import { Layout } from 'antd'

const { Content: ContentAntD } = Layout
function Content({ className, children }) {
  return (
    <ContentAntD
      className={`${className ? className : ''} content`}
      // 64px = HeaderHeight // 80px = Footer Height
      style={{ height: 'calc(100vh - 64px - 80px)', backgroundColor: 'white' }}
    >
      {children}
    </ContentAntD>
  )
}

export default Content
