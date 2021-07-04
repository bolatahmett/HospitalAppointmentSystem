import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker, TimePicker } from 'antd';
import React from 'react';

const { Option } = Select;

const AppointmentDrawer = (props: any) => {

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
                        <Button onClick={props.onClose} type="primary">
                            Onayla
                        </Button>
                    </div>
                }
            >
                <Form layout="vertical" hideRequiredMark
                    initialValues={{
                        prefix: '90',
                    }}
                >
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="name"
                                label="Isim"
                                rules={[{ required: true, message: 'Lütfen isim giriniz.' }]}
                            >
                                <Input placeholder="Isim giriniz!" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="surname"
                                label="Soyisim"
                                rules={[{ required: true, message: 'Lütfen soyisim giriniz.' }]}
                            >
                                <Input placeholder="Soyisim giriniz!" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="phone"
                                label="Telefon Numarası"
                                rules={[{ required: true, message: 'Lütfen telefon numarası giriniz.' }]}
                            >
                                <Input placeholder={"Telefon numarası giriniz!"} addonBefore={prefixSelector} style={{ width: '100%' }} />
                            </Form.Item>
                        </Col>
                       
                    </Row>
                    <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                                name="date"
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
                                name="time"
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
                                name="description"
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