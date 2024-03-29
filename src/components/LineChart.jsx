import React from 'react'
import {Chart as ChartJS} from 'chart.js/auto'
import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';

const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
    //create arrays to store coin price
    const coinPrice = [];
    const coinTimestamp = [];
    for (let i=0; i < coinHistory?.data?.history?.length; i+=1) {
        coinPrice.unshift(coinHistory?.data?.history[i].price)
        coinTimestamp.unshift(new Date(coinHistory?.data?.history[i].timestamp * 1000).toLocaleDateString());
    }

    // data for the chart
    const data = {
        labels: coinTimestamp,
        datasets: [
            {
                label: 'Price in USD',
                data: coinPrice,
                fill: false,
                backgroundColor: '#0071bd',
                borderColor: '#0071bd'
            }
        ]
    }

    // configuring the chart
    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true
                    }
                }
            ]
        }
    }

    return (
        <>
            <Row className="chart-header">
                <Title leverl={2} className="chart-title">{coinName} Price Chart</Title>
                <Col className="price-container">
                    <Title level={5} className="price-change">{coinHistory?.data?.change}%</Title>
                    <Title level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</Title>
                </Col>
            </Row>
            <Line data={data} />
        </>
    )
}

export default LineChart