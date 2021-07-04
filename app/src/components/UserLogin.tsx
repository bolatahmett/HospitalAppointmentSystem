import { Form, Input, Button, Checkbox, Col, Row } from 'antd';
import React from 'react';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

const UserLogin = () => {

  let history = useHistory();

  const onFinish = (values: any) => {
    console.log('Success:', values);
    history.push("userpage");
  };

  return (
    <Row justify="center" align="middle" style={{ height: "inherit" }}>
      <Col xs={16} sm={16} md={12} lg={8} xl={6}  >
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or <a href="" onClick={() => history.push("registeruser")}>register now!</a>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default UserLogin;