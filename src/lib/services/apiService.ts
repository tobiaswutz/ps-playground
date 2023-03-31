const BASE_URL = import.meta.env.BASE_URL


interface RequestOptions {
  method: string;
  headers: {
    'Content-Type': string;
  };
  body?: string;
}

async function request<T>(method: string, endpoint: string, data: any = null): Promise<T> {
  try {
    const options: RequestOptions = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (data) {
      options.body = JSON.stringify(data);
    }

    const response = await fetch(`${BASE_URL}${endpoint}`, options);

    if (!response.ok) {
      throw new Error(`An error occurred: ${response.statusText}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

async function get<T>(endpoint: string): Promise<T> {
  return await request<T>('GET', endpoint);
}

async function post<T>(endpoint: string, data: any): Promise<T> {
  return await request<T>('POST', endpoint, data);
}

async function put<T>(endpoint: string, data: any): Promise<T> {
  return await request<T>('PUT', endpoint, data);
}

async function remove<T>(endpoint: string): Promise<T> {
  return await request<T>('DELETE', endpoint);
}

export default {
  get,
  post,
  put,
  remove,
};

