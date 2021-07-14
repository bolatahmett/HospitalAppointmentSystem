import { Skeleton, Card, Avatar } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import AppointmentDrawer from './AppointmentDrawer';
import UserContext from '../components/UserContext';
import { getAppointment, removeAppointment } from '../database-engine/appointment';

const { Meta } = Card;

const AppointmentCard = () => {

    const context = useContext(UserContext);

    const [appointment, setAppointment] = useState(undefined);

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        debugger;
        getAppointment(context.user, setAppointment);
    }, [visible]);


    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const onSuccessRemoveAppointment = () => {
        setAppointment(undefined);
    }

    return (
        <>
            <AppointmentDrawer onClose={onClose} visible={visible} ></AppointmentDrawer>
            <Card
                style={{ marginTop: 16 }}
                actions={[
                    <p onClick={() => showDrawer()}><EditOutlined key="setting" />  Randevu düzenle</p>,
                    <p onClick={() => removeAppointment(context.user, onSuccessRemoveAppointment)}><EditOutlined key="setting" />  Randevu iptal</p>,
                ]}
            >
                <Skeleton loading={false} avatar active>
                    <Meta
                        avatar={
                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        }
                        title={`${context.user.Name} ${context.user.Surname}`}
                        description={appointment === undefined
                            ? "Henüz bir randevunuz bulunmuyor."
                            : `${appointment.Date} - ${appointment.Time} tarihinde randevunuz bulunmaktadır.`}
                    />
                </Skeleton>
            </Card>
        </>
    )
};

export default AppointmentCard;