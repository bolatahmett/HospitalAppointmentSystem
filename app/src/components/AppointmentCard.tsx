import { Skeleton, Card, Avatar, Alert } from 'antd';
import { EditOutlined, UserOutlined, CloseOutlined } from '@ant-design/icons';
import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import AppointmentDrawer from './AppointmentDrawer';
import UserContext from '../components/UserContext';
import { getAppointment, removeAppointment } from '../database-engine/appointment';
import { useHistory } from 'react-router-dom';

const { Meta } = Card;

const AppointmentCard = () => {

    let history = useHistory();

    const context = useContext(UserContext);

    const [appointment, setAppointment] = useState(undefined);

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        context.user.IdentifyNumber && getAppointment(context.user, setAppointment);
    }, [visible]);

    useEffect(() => {
        !context.user.IdentifyNumber && history.push('/')
    }, []);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const onSuccessRemoveAppointment = () => {
        setAppointment(undefined);
    }

    const descriptionAlertContent = () => {
        let alertContent = appointment === undefined
            ? <Alert message="Henüz bir randevunuz bulunmuyor." type="info" />
            : <Alert message={`${appointment.Date} - ${appointment.Time} tarihinde randevunuz bulunmaktadır.`} type="success" />;

        return <>
            {alertContent}
            {appointment && <Alert message={appointment.Description} type="info" />}
        </>
    }

    return (
        <>
            <AppointmentDrawer onClose={onClose} visible={visible} ></AppointmentDrawer>
            <Card
                style={{ marginTop: 16 }}
                actions={[
                    <p onClick={() => showDrawer()}><EditOutlined key="setting" />  Randevu düzenle</p>,
                    <p onClick={() => removeAppointment(context.user, onSuccessRemoveAppointment)}><CloseOutlined key="setting" />  Randevu iptal</p>,
                ]}
            >
                <Skeleton loading={false} avatar active>
                    <Meta
                        style={{ minHeight: "300px" }}
                        avatar={
                            <Avatar icon={<UserOutlined />} />
                        }
                        title={context.user.Name ? `${context.user.Name} ${context.user.Surname}` : ""}
                        description={descriptionAlertContent()}
                    />
                </Skeleton>
            </Card>
        </>
    )
};

export default AppointmentCard;