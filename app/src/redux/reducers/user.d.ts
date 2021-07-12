declare const user: (state: string, action: {
    type: any;
    user: IUserModel;
}) => string | IUserModel;
export default user;
