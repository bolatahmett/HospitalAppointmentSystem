import React from 'react';
import { Form, Input, Select, Button, Col, Row } from 'antd';
import { useHistory } from 'react-router-dom';

const { Option } = Select;

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const RegisterUser = () => {
    const [form] = Form.useForm();
    let history = useHistory();

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
        history.push("/");
    };

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select style={{ width: 70 }}>
                <Option value="90">+90</Option>
            </Select>
        </Form.Item>
    );

    return (
        <Row justify="center" align="middle" style={{ height: "inherit" }}>
            <Col xs={16} sm={16} md={12} lg={8} xl={6}  >
                <Form
                    {...formItemLayout}
                    form={form}
                    name="register"
                    onFinish={onFinish}
                    initialValues={{
                        prefix: '90',
                    }}
                    scrollToFirstError
                >
                    <Form.Item
                        name="name"
                        label="TC kimlik no"
                        rules={[{ required: true, message: 'Lütfen TC kimlik numrası giriniz!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="name"
                        label="Isim"
                        rules={[{ required: true, message: 'Lütfen isim giriniz!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="surname"
                        label="Soyisim"
                        rules={[{ required: true, message: 'Lütfen soyisim giriniz!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="phone"
                        label="Telefon Numarası"
                        rules={[{ required: true, message: 'Lütfen telefon numarası giriniz!' }]}
                    >
                        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label="Şifre"
                        rules={[
                            {
                                required: true,
                                message: 'Lütfen şifre giriniz!',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        label="Şifreyi onayla"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Lütfen şifreyi onaylayınız!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('İki şifre birbiri ile uyuşmuyor!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        <Row>
                            <Col span={6} offset={3}>
                                <Button type="primary" htmlType="reset" onClick={() => history.push("/")}>
                                    Vazgeç
                                </Button>

                            </Col>
                            <Col span={6} offset={6}>
                                <Button type="primary" htmlType="submit">
                                    Onayla
                                </Button>
                            </Col>
                        </Row>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    );
};

export default RegisterUser;