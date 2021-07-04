import { Skeleton, Card, Avatar } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import React from 'react';
import { useState } from 'react';
import AppointmentDrawer from './AppointmentDrawer';

const { Meta } = Card;

const AppointmentCard = () => {

    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
      };
    
     const onClose = () => {
        setVisible(false);
      };

    return (
        <>
        <AppointmentDrawer onClose={onClose} visible={visible} ></AppointmentDrawer>
            <Card
                style={{ marginTop: 16 }}
                actions={[
                    <p onClick={() => showDrawer()}><EditOutlined key="setting" />  Randevu düzenle</p>,
                    <p onClick={() => alert("iptal edildi")}><EditOutlined key="setting" />  Randevu iptal</p>,
                ]}
            >
                <Skeleton loading={false} avatar active>
                    <Meta
                        avatar={
                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        }
                        title="Pelin Bolat"
                        description="Henüz bir randevunuz bulunmuyor."
                    />
                </Skeleton>
            </Card>
        </>
    )
};

export default AppointmentCard;