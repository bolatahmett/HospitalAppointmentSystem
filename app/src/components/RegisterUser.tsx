import React from 'react';
import { Form, Input, Select, Button, Col, Row } from 'antd';
import { useHistory } from 'react-router-dom';
import { registerUser } from './../database-engine/user';

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
        let user: IUserModel = {
            IdentifyNumber: values.IdentifyNumber,
            Name: values.Name,
            Surname: values.Surname,
            Email: values.Email === undefined ? "a" : values.Email,
            PhoneNumber: values.PhoneNumber,
            Password: values.Password
        };
        registerUser(user);
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
                        name="IdentifyNumber"
                        label="TC kimlik no"
                        rules={[{ required: true, message: 'Lütfen TC kimlik numrası giriniz!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="Name"
                        label="Isim"
                        rules={[{ required: true, message: 'Lütfen isim giriniz!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="Surname"
                        label="Soyisim"
                        rules={[{ required: true, message: 'Lütfen soyisim giriniz!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="PhoneNumber"
                        label="Telefon Numarası"
                        rules={[{ required: true, message: 'Lütfen telefon numarası giriniz!' }]}
                    >
                        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                    </Form.Item>

                    <Form.Item
                        name="Password"
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
                        name="Confirm"
                        label="Şifreyi onayla"
                        dependencies={['Password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Lütfen şifreyi onaylayınız!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('Password') === value) {
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