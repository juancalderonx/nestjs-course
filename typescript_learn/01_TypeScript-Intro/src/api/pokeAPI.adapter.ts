import axios from 'axios'

export interface HttpAdapter {

    get<T>(url: string): Promise<T>;

}

// Implementación del GET HTTP con Fetch
export class PokeApiFetchAdapter implements HttpAdapter {

    async get<T>(url: string): Promise<T> {
        const resp = await fetch(url)
        const data: T = await resp.json()
        return data
    }

}

// Implementación del GET HTTP con Axios
export class PokeApiAdapter implements HttpAdapter {

    private readonly axios = axios;

    async get<T>(url: string){
        const { data } = await this.axios.get<T>(url);
        return data;
    }
    
    async post(url: string, data: any) {
        return;
    }

    async put(url: string, data: any) {
        return;
    }

    async delete(url: string) {
        return;
    }

}
