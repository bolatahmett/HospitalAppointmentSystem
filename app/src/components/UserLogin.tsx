import { Form, Input, Button, Checkbox, Col, Row } from 'antd';
import React, { useContext } from 'react';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { loginUser } from '../database-engine/user';
import UserContext from '../components/UserContext';

const UserLogin = () => {

  let history = useHistory();

  const context = useContext(UserContext);

  const onSuccess = (user: IUserModel) => {
    context.setUser(user);
    history.push("userpage");
  }

  const onFinish = (values: any) => {
    let userInfo: LoginModel = {
      IdentifyNumber: values.IdentifyNumber,
      Password: values.Password
    };

    loginUser(userInfo, onSuccess);
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
            name="IdentifyNumber"
            rules={[{ required: true, message: 'Lütfen TC kimlik numarasını giriniz!' }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="TC Kimik No" />
          </Form.Item>
          <Form.Item
            name="Password"
            rules={[{ required: true, message: 'Lütfen şifre giriniz!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Şifre"
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