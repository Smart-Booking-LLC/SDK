import axios from 'axios';
import { getOTAChannel, getOTAChannelResponse } from './types/channelManager.type';
import { makeRequest } from '../utils/apiClient';

export class ChannelManagerAPI {
    static async getAvailableChannels(data: getOTAChannel): Promise<getOTAChannelResponse> {
        return axios.get('http://localhost:3000/channels');
    }
}

