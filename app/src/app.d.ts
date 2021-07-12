/// <reference types="react" />
interface AppProps {
    firebase: any;
    database: any;
    user: IUserModel;
}
declare function App(props: AppProps): JSX.Element;
declare const _default: import("react-redux").ConnectedComponent<typeof App, import("react-redux").Omit<AppProps, "user">>;
export default _default;
