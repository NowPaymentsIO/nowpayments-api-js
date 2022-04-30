import { Error } from '../../types';
export interface GetAvailableCurrenciesReturn {
    currencies: [string];
}
declare const getAvailableCurrencies: ({ apiKey }: {
    apiKey: string;
}) => Promise<GetAvailableCurrenciesReturn | Error>;
export default getAvailableCurrencies;
