import axios, { AxiosInstance, AxiosResponse } from 'axios';

let API: string;

switch (process.env.API_MODE) {
  default:
    API = 'http://localhost:3001';
    break;
}

declare module 'axios' {
  interface AxiosResponse<T = any> extends Promise<T> {}
}

abstract class HttpClient {
  protected readonly instance: AxiosInstance;

  public constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL,
    });

    this._initializeResponseInterceptor();
  }

  private _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      this._handleResponse,
      this._handleError,
    );
  };

  private _handleResponse = ({ data }: AxiosResponse) => data;

  protected _handleError = (error: any) => Promise.reject(error);
}

export class MainApi extends HttpClient {
  private static classInstance?: MainApi;

  private constructor() {
    super(API);
  }

  public static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new MainApi();
    }

    return this.classInstance;
  }
  public getPresignedUrl = (
    fileName: string,
    fileType: string,
    token: string,
    isDownload: boolean,
  ) =>
    this.instance
      .post<string>(`${API}/proposals/get-presigned-url`, {
        fileName,
        fileType,
        token,
        isDownload,
      })
      .then(response => response.data);

  public getProposalDetail = (proposalId: string) =>
    this.instance
      .get(`${API}/proposals/${proposalId}`)
      .then(({ data }) => data);
}
