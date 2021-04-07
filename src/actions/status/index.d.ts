import { Error } from '../../types';
export interface StatusReturn {
    message: string;
}
declare const status: () => Promise<StatusReturn | Error>;
export default status;
