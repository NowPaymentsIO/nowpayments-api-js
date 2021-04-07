import { Error } from '../../types';
export interface GetCurrenciesReturn {
    currencies: [string];
}
declare const getCurrencies: ({ apiKey }: {
    apiKey: string;
}) => Promise<GetCurrenciesReturn | Error>;
export default getCurrencies;
