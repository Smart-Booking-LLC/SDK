import axios, {AxiosResponse} from 'axios';
import { apiClient, BASE_URL, API_KEY } from '../utils/apiClient';
import { setAIName, agentResponse, queryData} from './types/ai.type';

export class AI {
    static async setAIName(data: setAIName): Promise<void> {
    try {
        const response: AxiosResponse<void> = await axios.post(`/ai`, {name});
        return response.data;
    }
    catch (error) {
        throw new Error(`Failed to set AI name: ${error}`);
    }
    };

    static async queryAI(data: queryData): Promise<agentResponse> {
        try {
          const response: AxiosResponse<agentResponse> = await axios.post('/ai/query', data);
          return response.data;
        } catch (error) {
          throw new Error(`Failed to query AI: ${error}`);
        }
      }
}

