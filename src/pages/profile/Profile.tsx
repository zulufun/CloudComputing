import React from "react";
import { Row, Col, Avatar, Divider, Typography, Tag, Card, Timeline, Button } from "antd";
import { MailOutlined, PhoneOutlined, GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import logo from "../../assets/mta.png";

const { Title, Text, Paragraph } = Typography;

const UserProfile: React.FC = () => {
  return (
    <div style={{ maxWidth: "900px", margin: "50px auto", padding: "20px", background: "#f5f5f5", borderRadius: "10px", boxShadow: "0px 0px 15px rgba(0,0,0,0.1)" }}>
      
      {/* Header Section */}
      <Card style={{ textAlign: "center", borderRadius: "10px" }}>
        <Avatar src={logo} size={120} />
        <Title level={2} style={{ marginTop: "15px" }}>Đức Phúc</Title>
        <Text strong style={{ fontSize: "16px" }}>Sinh viên ngành Mạng Máy Tính</Text>
        <div style={{ marginTop: "10px" }}>
          <Tag color="blue">Hà Nội, Việt Nam</Tag>
          <Tag color="green">Đại học kĩ thuật Lê Quý Đôn</Tag>
        </div>
        <Divider />
        <div>
          <Button type="link" icon={<MailOutlined />}>ducphucuuu@gmail.com</Button>
          <Button type="link" icon={<PhoneOutlined />}>+84 123 456 789</Button>
          <Button type="link" icon={<GithubOutlined />} href="https://github.com/zulufun" target="_blank">GitHub</Button>
          <Button type="link" icon={<LinkedinOutlined />} href="https://linkedin.com/in/ducphuc" target="_blank">LinkedIn</Button>
        </div>
      </Card>

      <Divider />

      {/* About Me Section */}
      <Card style={{ borderRadius: "10px" }}>
        <Title level={3}>Giới Thiệu Bản Thân</Title>
        <Paragraph>
          Tôi là sinh viên năm cuối ngành Mạng Máy Tính tại Đại học Lê Quý Đôn. Tôi đam mê về công nghệ, an ninh mạng và phát triển hệ thống phân tán. Tôi luôn tìm kiếm cơ hội để phát triển kỹ năng và áp dụng kiến thức vào thực tế.
        </Paragraph>
      </Card>

      <Divider />

      {/* Skills Section */}
      <Card style={{ borderRadius: "10px" }}>
        <Title level={3}>Kỹ Năng</Title>
        <Row gutter={[16, 16]}>
          <Col span={8}><Tag color="blue">Linux</Tag></Col>
          <Col span={8}><Tag color="purple">Networking</Tag></Col>
          <Col span={8}><Tag color="green">Docker</Tag></Col>
          <Col span={8}><Tag color="red">Python</Tag></Col>
          <Col span={8}><Tag color="cyan">React</Tag></Col>
          <Col span={8}><Tag color="orange">Git</Tag></Col>
        </Row>
      </Card>

      <Divider />

      {/* Work Experience Section */}
      <Card style={{ borderRadius: "10px" }}>
        <Title level={3}>Kinh Nghiệm Làm Việc</Title>
        <Timeline>
          <Timeline.Item color="green">
            <Title level={4} style={{ margin: 0 }}>Thực Tập Sinh - Công Ty ABC</Title>
            <Text type="secondary">01/2023 - 04/2023</Text>
            <Paragraph>
              - Tham gia phát triển hệ thống giám sát mạng nội bộ.<br />
              - Tối ưu hiệu năng cho hệ thống load balancer.
            </Paragraph>
          </Timeline.Item>
          <Timeline.Item color="blue">
            <Title level={4} style={{ margin: 0 }}>Cộng Tác Viên - Công Ty XYZ</Title>
            <Text type="secondary">06/2022 - 12/2022</Text>
            <Paragraph>
              - Hỗ trợ triển khai hệ thống Docker và Kubernetes.<br />
              - Thực hiện kiểm thử bảo mật cho ứng dụng web.
            </Paragraph>
          </Timeline.Item>
        </Timeline>
      </Card>

      <Divider />

      {/* Education Section */}
      <Card style={{ borderRadius: "10px" }}>
        <Title level={3}>Học Vấn</Title>
        <Timeline>
          <Timeline.Item color="blue">
            <Title level={4} style={{ margin: 0 }}>Đại học Lê Quý Đôn</Title>
            <Text type="secondary">2020 - 2025</Text>
            <Paragraph>Ngành: Mạng Máy Tính và truyền thông dữ liệu</Paragraph>
          </Timeline.Item>
        </Timeline>
      </Card>

      <Divider />

      {/* Projects Section */}
<Card style={{ borderRadius: "10px" }}>
  <Title level={3}>Dự Án</Title>
  <Row gutter={[16, 16]} justify="center">
    <Col xs={24} sm={12} md={12}>
      <Card hoverable style={{ borderRadius: "10px", textAlign: "center", height: "100%" }}>
        <Title level={4}>Hệ Thống Giám Sát Mạng</Title>
        <Paragraph>
          Phát triển hệ thống sử dụng <strong>Zeek</strong>, <strong>MongoDB</strong>, và <strong>RITA</strong> để phân tích lưu lượng mạng.
        </Paragraph>
        <Button type="primary" href="#" target="_blank">Xem Chi Tiết</Button>
      </Card>
    </Col>

    <Col xs={24} sm={12} md={12}>
      <Card hoverable style={{ borderRadius: "10px", textAlign: "center", height: "100%" }}>
        <Title level={4}>Load Balancer HAProxy</Title>
        <Paragraph>
          Xây dựng hệ thống cân bằng tải sử dụng <strong>HAProxy</strong> để tối ưu hóa hiệu suất ứng dụng web.
        </Paragraph>
        <Button type="primary" href="#" target="_blank">Xem Chi Tiết</Button>
      </Card>
    </Col>

    <Col xs={24} sm={12} md={12}>
      <Card hoverable style={{ borderRadius: "10px", textAlign: "center", height: "100%" }}>
        <Title level={4}>Ứng Dụng Phân Tích Gói Tin</Title>
        <Paragraph>
          Phát triển ứng dụng sử dụng <strong>PyShark</strong> và <strong>Scapy</strong> để bắt và phân tích gói tin thời gian thực.
        </Paragraph>
        <Button type="primary" href="#" target="_blank">Xem Chi Tiết</Button>
      </Card>
    </Col>

    <Col xs={24} sm={12} md={12}>
      <Card hoverable style={{ borderRadius: "10px", textAlign: "center", height: "100%" }}>
        <Title level={4}>Trang Web Cá Nhân</Title>
        <Paragraph>
          Thiết kế và phát triển trang web cá nhân sử dụng <strong>React</strong> và <strong>Ant Design</strong>.
        </Paragraph>
        <Button type="primary" href="#" target="_blank">Xem Chi Tiết</Button>
      </Card>
    </Col>
  </Row>
</Card>

    </div>
  );
};

export default UserProfile;
