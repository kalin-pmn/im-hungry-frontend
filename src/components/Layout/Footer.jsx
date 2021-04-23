import React from 'react'
import { Layout } from 'antd'

const { Footer: FooterAntD } = Layout
function Footer() {
  return (
    <FooterAntD style={{ height: 80 }}>
      <h1>FOOTER</h1>
    </FooterAntD>
  )
}

export default Footer
