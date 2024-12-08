import React, { useState } from "react";
import { Row, Col, Select, Button, Breadcrumb, Divider, Card } from "antd";
import {
  LoadingOutlined,
  CloudOutlined,
  ThunderboltOutlined,
  SmileOutlined,
} from "@ant-design/icons";

const { Option } = Select;

interface WeatherCardProps {
  name: string;
  temp: number;
  humidity: number;
  description: string;
  windSpeed: number;
}

const WeatherApp: React.FC = () => {
  const [weatherCards, setWeatherCards] = useState<WeatherCardProps[]>([]);
  const [city, setCity] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchWeatherData = (selectedCity: string) => {
    setLoading(true);
    setError(null);

    const API_KEY = "32d8785c887881598f6d38dfb0541a6c"; // Thay bằng API Key của bạn
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${API_KEY}&units=metric`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.cod === 200) {
          const newCard: WeatherCardProps = {
            name: data.name,
            temp: data.main.temp,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            windSpeed: data.wind.speed,
          };
          setWeatherCards((prevCards) => [...prevCards, newCard]); // Thêm card mới
        } else {
          setError(data.message);
        }
        setLoading(false);
      })
      .catch(() => {
        setError("Không thể kết nối tới API");
        setLoading(false);
      });
  };

  const handleCheck = () => {
    if (!city) {
      setError("Vui lòng chọn thành phố.");
      return;
    }
    if (weatherCards.some((card) => card.name === city)) {
      setError("Thành phố đã được thêm.");
      return;
    }
    fetchWeatherData(city);
  };

  return (
    <div className="weather-app">
      <Row>
        <Breadcrumb
          style={{ margin: "auto", marginLeft: 0 }}
          items={[
            { title: "Kiểm tra" },
            { title: <span style={{ fontWeight: "bold" }}>Thời tiết</span> },
          ]}
        />
        <Divider style={{ margin: "10px" }} />
      </Row>
      <Row gutter={[10, 10]} style={{ marginBottom: "20px" }}>
        <Col span={16} style={{ display: "flex", alignItems: "center" }}>
          <div style={{ width: "130px", fontWeight: "700" }}>Chọn thành phố</div>
          <Select
            style={{ width: "300px" }}
            placeholder="Chọn thành phố"
            onChange={(value) => setCity(value)}
          >
            <Option value="Hanoi">Hà Nội</Option>
            <Option value="Ho Chi Minh City">Hồ Chí Minh</Option>
            <Option value="Da Nang">Đà Nẵng</Option>
            <Option value="Tokyo">Tokyo</Option>
            <Option value="New York">New York</Option>
          </Select>
          <Button
            onClick={handleCheck}
            type="primary"
            style={{ marginLeft: "10px" }}
          >
            Kiểm tra
          </Button>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: "20px", textAlign: "center" }}>
        {loading && <LoadingOutlined style={{ fontSize: "24px" }} spin />}
        {error && <div style={{ color: "red" }}>{error}</div>}
      </Row>
      <Row gutter={[16, 16]} style={{ marginTop: "20px" }}>
        {weatherCards.map((card, index) => (
          <Col key={index} span={8}>
            <Card
              title={`Thời tiết tại ${card.name}`}
              bordered={true}
              style={{ width: 300 }}
            >
              <p>
                <CloudOutlined style={{ marginRight: "10px", color: "#1890ff" }} />
                Nhiệt độ: {card.temp}°C
              </p>
              <p>
                <ThunderboltOutlined
                  style={{ marginRight: "10px", color: "#faad14" }}
                />
                Độ ẩm: {card.humidity}%
              </p>
              <p>
                <SmileOutlined
                  style={{ marginRight: "10px", color: "#52c41a" }}
                />
                Mô tả: {card.description}
              </p>
              <p>
                <LoadingOutlined
                  style={{ marginRight: "10px", color: "#ff4d4f" }}
                />
                Tốc độ gió: {card.windSpeed} m/s
              </p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default WeatherApp;
