import { database } from "../firebase";

export const register = (appointment: IAppointmentModel, onSuccess: any) => {
    var appointmentKey = database.ref("appointment/" + appointment.IdentifyNumber).push().key;
    var dbAppointment = { ...appointment, key: appointmentKey };
    database.ref("appointment/" + dbAppointment.IdentifyNumber).set(dbAppointment).then(() => {
        onSuccess();
    });
}

export const getAppointment = (user: LoginModel, onSuccess: any) => {
    var ref = database.ref("appointment")
    ref.orderByChild('IdentifyNumber')
        .equalTo(user.IdentifyNumber)
        .once('value')
        .then(function (snapshot) {
            var value = snapshot.val()[user.IdentifyNumber];
            onSuccess(value);
        });
}

export const removeAppointment = (user: LoginModel, onSuccess: any) => {
    database.ref(`/appointment/${user.IdentifyNumber}`).remove()
        .then(function () {
            onSuccess();
        });
}