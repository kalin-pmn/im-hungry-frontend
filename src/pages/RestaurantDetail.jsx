import React, { useState } from 'react'
import Layout from '../components/Layout'
import Footer from '../components/Layout/Footer'
import Content from '../components/Layout/Content'
import Header from '../components/Layout/Header'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Avatar, Card, Col, Image, Rate, Row, Typography } from 'antd'
import { restaurantImages } from '../data/restaurantImages'
import { UserOutlined } from '@ant-design/icons'

const { Title, Text } = Typography

function RestaurantDetail() {
  const [restaurant, setRestaurant] = useState({})
  const params = useParams()

  useState(() => {
    fetchRestaurant()
  })

  async function fetchRestaurant() {
    const resp = await axios.get(
      `http://localhost:8080/restaurants/${params.id}`
    )
    setRestaurant(resp.data)
  }

  return (
    <Layout>
      <Header />
      <Content className="restaurant-detail-page">
        <Title level={1}>RestaurantDetail Page</Title>
        <Row>
          <Col span={12}>
            <div style={{ width: 600 }}>
              <Image
                src={restaurantImages[params.id]}
                alt={restaurant.name}
                preview={false}
                width="100%"
                height={360}
                style={{ objectFit: 'cover' }}
              />
            </div>
          </Col>
          <Col span={12}>
            <Card style={{ height: '100%' }}>
              <Title level={3}>{restaurant.name}</Title>
              <Rate value={3} />
              <div>
                <Text strong>Address:</Text> {restaurant.address}
              </div>
              <div>
                <Text strong>Contact:</Text> {restaurant.phoneNumber}
              </div>
              <div>
                <Text strong>Description:</Text> {restaurant.slogan}
              </div>
            </Card>
          </Col>
        </Row>
        <Row>
          <div style={{ width: '100%' }}>
            <Title level={2}>Review</Title>
            <Row gutter={[16, 16]}>
              {[1, 1, 1, 1, 1, 1].map((user) => {
                return (
                  <Col span={6}>
                    <Card>
                      <Avatar icon={<UserOutlined />} size="small" />
                      <Text style={{ marginLeft: 10 }}>{`{{USERNAME}}`}</Text>
                      <div>
                        <Text>{`{{REVIEW_DESCRIPTION}}`}</Text>
                      </div>
                      <Rate value={5} />
                    </Card>
                  </Col>
                )
              })}
            </Row>
          </div>
        </Row>
      </Content>
      <Footer />
    </Layout>
  )
}

export default RestaurantDetail
