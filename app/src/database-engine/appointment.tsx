import { database } from "../firebase";

export const register = (appointment: IAppointmentModel, onSuccess: any) => {
    var appointmentKey = database.ref("appointment/" + appointment.IdentifyNumber).push().key;
    var dbAppointment = { ...appointment, key: appointmentKey };
    database.ref("appointment/" + dbAppointment.IdentifyNumber).set(dbAppointment).then(() => {
        onSuccess();
    });
}