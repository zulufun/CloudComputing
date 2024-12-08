import React, { useEffect, useState } from "react";
import { Row, Col, Card, Typography, Spin, Alert } from "antd";
import { DollarCircleOutlined, RiseOutlined, FallOutlined } from "@ant-design/icons";
import axios from "axios";

const { Title, Text } = Typography;

const CryptoDashboard: React.FC = () => {
  const [cryptoData, setCryptoData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets",
        {
          params: {
            vs_currency: "usd",
            per_page: 10,
            page: 1,
          },
        }
      )
      .then((res) => {
        setCryptoData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Không thể tải dữ liệu tiền điện tử. Vui lòng thử lại!");
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <Title level={2} style={{ textAlign: "center" }}>
        Thông Tin Tiền Điện Tử
      </Title>
      {loading ? (
        <Spin tip="Đang tải dữ liệu..." style={{ display: "block", marginTop: "50px", textAlign: "center" }} />
      ) : error ? (
        <Alert message={error} type="error" showIcon />
      ) : (
        <Row gutter={[16, 16]} justify="center">
          {cryptoData.map((coin) => (
            <Col xs={24} sm={12} md={8} lg={6} key={coin.id}>
              <Card
                hoverable
                style={{ borderRadius: "12px", textAlign: "center", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
              >
                <img
                  src={coin.image}
                  alt={coin.name}
                  style={{ width: "50px", marginBottom: "10px" }}
                />
                <Title level={4}>{coin.name}</Title>
                <Text strong>
                  <DollarCircleOutlined style={{ marginRight: "5px" }} />
                  Giá: ${coin.current_price.toLocaleString()}
                </Text>
                <br />
                <Text style={{ color: coin.price_change_percentage_24h > 0 ? "green" : "red", fontWeight: "bold" }}>
                  {coin.price_change_percentage_24h > 0 ? (
                    <RiseOutlined style={{ marginRight: "5px" }} />
                  ) : (
                    <FallOutlined style={{ marginRight: "5px" }} />
                  )}
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </Text>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default CryptoDashboard;
