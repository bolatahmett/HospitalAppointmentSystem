import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker, TimePicker } from 'antd';
import React, { useContext } from 'react';
import UserContext from '../components/UserContext';
import { register } from '../database-engine/appointment';

const { Option } = Select;

const AppointmentDrawer = (props: any) => {

    const context = useContext(UserContext);

    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        let appointment: IAppointmentModel = {
            IdentifyNumber: context.user.IdentifyNumber,
            Date: values.Date.format('YYYY-MM-DD'),
            Time: values.Time.format('HH:mm'),
            Description: values.Description
        };

        register(appointment, props.onClose);
    };

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select style={{ width: 70 }}>
                <Option value="90">+90</Option>
            </Select>
        </Form.Item>
    );

    return (
        <>
            <Drawer
                title="Randevu Oluştur/Düzenle"
                width={720}
                onClose={props.onClose}
                visible={props.visible}
                bodyStyle={{ paddingBottom: 80 }}
                footer={
                    <div
                        style={{
                            textAlign: 'right',
                        }}
                    >
                        <Button onClick={props.onClose} style={{ marginRight: 8 }}>
                            İptal
                        </Button>
                        <Button type="primary" onClick={() => form.submit()}>
                            Onayla
                        </Button>
                    </div>
                }
            >
                <Form layout="vertical" hideRequiredMark
                    form={form}
                    onFinish={onFinish}
                    initialValues={{
                        prefix: '90',
                        Name: context.user.Name,
                        Surname: context.user.Surname,
                        PhoneNumber: context.user.PhoneNumber
                    }}
                >
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="Name"
                                label="Isim"
                            >
                                <Input readOnly={true} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="Surname"
                                label="Soyisim"
                            >
                                <Input readOnly={true} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="PhoneNumber"
                                label="Telefon Numarası"
                            >
                                <Input readOnly={true} placeholder={"Telefon numarası giriniz!"} addonBefore={prefixSelector} style={{ width: '100%' }} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="Date"
                                label="Gün"
                                rules={[{ required: true, message: 'Gün seçiniz.' }]}
                            >
                                <DatePicker
                                    style={{ width: '100%' }}
                                    getPopupContainer={trigger => trigger.parentElement}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="Time"
                                label="Saat"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Lütfen saat seçiniz!',
                                    },
                                ]}
                            >
                                <TimePicker style={{ width: '100%' }} minuteStep={15} showSecond={false} showNow={false} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item
                                name="Description"
                                label="Açıklama"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Lütfen açıklama giriniz!',
                                    },
                                ]}
                            >
                                <Input.TextArea rows={4} placeholder="Açıklama giriniz." />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Drawer>
        </>
    );
}

export default AppointmentDrawer;