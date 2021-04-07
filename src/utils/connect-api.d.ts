import { AxiosInstance } from 'axios';
declare class ConnectApi {
    apiKey: string;
    api: AxiosInstance;
    constructor({ apiKey }: {
        apiKey: string;
    });
    get(url: string, params?: object): Promise<import("axios").AxiosResponse<any>>;
    post(url: string, params?: object): Promise<import("axios").AxiosResponse<any>>;
}
export default ConnectApi;
