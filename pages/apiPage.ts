import { APIRequestContext } from '@playwright/test';
import { baseURL } from '../config/api';


export class UsersApi {

    constructor(private request: APIRequestContext) {}

    async getProductList() {
        return await this.request.get(`${baseURL}/productsList`);
    }

    async verifyLogin(email: string, password: string) {
        return await this.request.post(`${baseURL}/verifyLogin`, {
            form: {
                email,
                password
            }
        });
    }

    async deleteVerifyLogin() {
    return await this.request.delete(`${baseURL}/verifyLogin`);
    }

      async getUserDetailByEmail(email: string) {
        return await this.request.get(`${baseURL}/getUserDetailByEmail`, {
            params: {
                email
            }
        });
    }

    async deleteUser(email:string, password:string){
        return await this.request.delete(`${baseURL}/deleteAccount`, {
            params:{
                email,password
            }
        });
    }
}