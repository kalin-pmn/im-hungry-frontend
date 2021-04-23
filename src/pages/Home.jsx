import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Footer from '../components/Layout/Footer'
import Content from '../components/Layout/Content'
import Header from '../components/Layout/Header'
import { Card, Col, Image, Row, Typography, Rate, Input, Select } from 'antd'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { restaurantImages } from '../data/restaurantImages'

// const data = {
//   // id: n + 1,
//   name: 'โจ๊กสามย่าน',
//   address: '691 ถนน บรรทัดทอง Wang Mai, Pathum Wan District, Bangkok 10330',
//   slogan: 'โจ๊กสามย่าน บรรทัดทอง เปิดแล้วจ้า ณ จุฬา ซอย 6 ถนนบรรทัดทอง',
//   phoneNumber: '091-719-7836',
//   imageUrl:
//     'https://img.wongnai.com/p/1920x0/2019/05/01/d86d767027384da19fc884ddf54e953e.jpg'
// }
const { Title, Paragraph } = Typography
const { Option } = Select

const { Search } = Input

function Home() {
  const [restaurants, setRestaurants] = useState([])

  const history = useHistory()
  useEffect(() => {
    fetchRestaurants()
  }, [])

  async function fetchRestaurants() {
    const resp = await axios.get('http://localhost:8080/restaurants')
    setRestaurants(resp.data)
  }
  function handleSearchRestaurant(value) {
    console.log(value)
  }

  function handleChangeFoodType(value) {
    console.log(`selected ${value}`)
  }
  function handleChangePriceRange(value) {
    console.log(`selected ${value}`)
  }

  return (
    <Layout>
      <Header />
      <Content className="home-page">
        <Title level={1}>Home Page</Title>
        <Select
          defaultValue="Rice"
          style={{ width: 120 }}
          onChange={handleChangeFoodType}
        >
          <Option value="Noodle">Noodle</Option>
          <Option value="Rice">Rice</Option>
        </Select>
        <Select
          defaultValue="less than 50฿"
          style={{ width: 120 }}
          onChange={handleChangePriceRange}
        >
          <Option value="Less than 50฿">Less than 50฿</Option>
          <Option value="50-100฿">50-100฿</Option>
          <Option value="100-500฿">100-500฿</Option>
          <Option value="500-1000฿">500-1000฿</Option>
          <Option value="More than 1000฿">More than 1000</Option>
        </Select>
        <Search
          placeholder="input search text"
          onSearch={handleSearchRestaurant}
          enterButton
        />
        <Row gutter={[16, 16]}>
          {restaurants.map((restaurant) => {
            return (
              <Col key={restaurant.id} span={8}>
                <Card
                  hoverable
                  style={{ height: '100%' }}
                  onClick={() => history.push(`/restaurant/${restaurant.id}`)}
                  cover={
                    <Image
                      preview={false}
                      alt={restaurant.name}
                      // src={restaurant.imageUrl}
                      src={restaurantImages[restaurant.id]}
                      style={{ objectFit: 'cover' }}
                      height={248}
                    />
                  }
                >
                  <div>
                    <Title level={5}>{restaurant.name}</Title>
                    <div>
                      {/* <h6>STARS</h6> */}

                      <Rate allowClear={false} defaultValue={3} />

                      <h6>REVIEW_RATE</h6>
                    </div>
                  </div>

                  <div>
                    <Paragraph>{restaurant.slogan}</Paragraph>
                    <h6>OPENNING TIME: 9.00-18.00 </h6>
                  </div>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Content>
      <Footer />
    </Layout>
  )
}

export default Home
