import axios, {AxiosResponse} from 'axios';
import { getOTAChannel, getOTAChannelResponse } from './types/channelManager.type';
import { apiClient, BASE_URL, API_KEY } from '../utils/apiClient';


export class ChannelManagerAPI {
    static async getAvailableChannels(data: getOTAChannel): Promise<getOTAChannelResponse> {
        try {
            const response: AxiosResponse < {results:getOTAChannelResponse} >= await axios.post(`/reservations`, data, {
                headers: { Authorization: `Bearer ${API_KEY}` }
            });
            return response.data.results;
        } catch (error) {
            throw new Error(`Failed to create reservation: ${error}`);
        }
    }
}




